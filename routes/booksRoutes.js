const express = require("express");
const router = express.Router();
const _controller = require('../controllers/booksControllers')
router.get('/:Book_id',_controller.getBook)
router.get('/',_controller.getBooks)
router.post('/add',_controller.createBook)
router.patch('/:Book_id',_controller.updateBooks)
router.delete('/:Book_id',_controller.deleteBooks)
module.exports = router;