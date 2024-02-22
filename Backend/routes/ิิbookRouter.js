const bookController = require('../controllers/ิbookController')
const bookRouter = require('express').Router()

bookRouter.post('/book/create', bookController.createBook)
bookRouter.get('/book/search',bookController.searchBook)
bookRouter.get('/book/all',bookController.allBook)

module.exports = bookRouter