const borrowBookController = require('../controllers/ิborrowBookController')
const borrowBookRouter = require('express').Router()

borrowBookRouter.post('/borrow-book/create', borrowBookController.createBorrow)
borrowBookRouter.get('/borrow-book/search',borrowBookController.searchBorrow)
module.exports = borrowBookRouter