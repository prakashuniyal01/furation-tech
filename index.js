require("dotenv").config();
const express = require("express");
const {StatusCodes}  = require('http-status-codes')
const mongoose = require('mongoose')
const logger =require('./middleware/logger');
// database 

const app = express();
const router = require('./routes/indes');
const port = process.env.PORT || 50001;
const DB_URL = process.env.MONGO_URL || ''
const _middleware = require('./middleware/_middleware')

app.use("/api",_middleware,router);

app.use((req, res, next) => {
    const error = new Error("Invalid request"); // not found
    res.status(StatusCodes.NOT_FOUND);
    next(error);
  });


app.use((error, req, res, next) => {
        res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR);
        return res.json({ message: error.message });
      });
      
app.listen(port, () =>{
    logger.info(`server start on:${port}`);
}); 


mongoose.connect(DB_URL).then(()=> logger.info("DB Connected 🚀🚀")).catch(()=> logger.error("error"))