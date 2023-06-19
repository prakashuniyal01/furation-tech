const cors = require("cors");
const bodyParser = require("body-parser");
const { StatusCodes } = require("http-status-codes");
const rateLimit = require("express-rate-limit");

const middleware = [
  cors(),
  bodyParser.json(),
  // bodyParser.urlencoded({ extended: true }),  
  rateLimit({
    max: 50,
    windowMs: 10000, // 10 seconds
    message: "You can't make any more requests at the moment. Try again later"
  }),
  (req, res, next) => {
    res.set('Cache-Control', 'no-store, max-age=0');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  },
  (error, req, res, next) => {
    if (error.type === 'time-out') {
      return res.status(StatusCodes.REQUEST_TIMEOUT).json(error);
    } else {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: error.message,
      });
    }
  }

];

module.exports = middleware;