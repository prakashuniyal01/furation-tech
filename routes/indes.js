const express = require('express')
const allRouter = express.Router() 
const book = require('./booksRoutes')
allRouter.use('/item',book)

module.exports = allRouter