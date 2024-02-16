const bookController = require('../controllers/ิbookController')
const bookRouter = require('express').Router()

bookRouter.post('/book/create', bookController.createBook)

module.exports = bookRouter