const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true,
    },
     author:{
        type: String,
        require: true,
    },
    genre:{
        type: String,
        require:[true, "please add a title of the book"]
    },
    price:{
        type: Number,
        require: true
    },
    quantity:{
        type: Number,
        require: true
    },
},{timestamps:true,versionKey:false});

module.exports = mongoose.model('Book',booksSchema);