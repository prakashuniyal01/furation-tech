
const booksSchema = require("../models/booksSchema");
const {http_formatter} =  require('../middleware/Formater')
const {StatusCodes} =  require('http-status-codes')

const getBooks = async (req, res) => {
  try {
    const bookSchema = await booksSchema.find();
    res.status(StatusCodes.OK).json(http_formatter(bookSchema,"Fetch all book data"));
      
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json(http_formatter(error,"Error in get all Request",false));
    
  }
};

const createBook =async (req, res) => {
  try {
    const Body =  req.body;
    const Book = await booksSchema.create(Body)
    res.status(StatusCodes.OK).json(http_formatter(Book,"Book created"))
    
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json(http_formatter(error,"Error in get all Request",false));
  
  }
};


const getBook = async (req, res) => {
 
 try {
  const {Book_id} = req.params
  if(!Book_id){
    throw (new Error('Book ID is mandatory'));  
  }

  const Book = await booksSchema.findById(Book_id)
  res.status(StatusCodes.OK).json(http_formatter(Book,"Book Fecthed"))


 } catch (error) {
  res.status(StatusCodes.BAD_REQUEST).json(http_formatter(error,"Error in get all Request",false));
 
 }
};



const updateBooks = async (req, res) => {

  try {
    const {Book_id} = req.params
    if(!Book_id){
      throw (new Error('Book ID is mandatory'));  
    }
  
    const Book = await booksSchema.findByIdAndUpdate(Book_id,req.body)
    res.status(StatusCodes.OK).json(http_formatter(Book,"Book upadted"))
  
  
   } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json(http_formatter(error,"Error in get all Request",false));
   
   }};



const deleteBooks = async (req, res) => {

  try {
    const {Book_id} = req.params
    if(!Book_id){
      throw (new Error('Book ID is mandatory'));  
    }
  
    const Book = await booksSchema.findByIdAndDelete(Book_id)
    res.status(StatusCodes.OK).json(http_formatter(Book,"Book Deleted"))
  
  
   } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json(http_formatter(error,"Error in Delete the  Request",false));
   
   }};
module.exports = { getBook,getBooks, createBook, updateBooks,deleteBooks };