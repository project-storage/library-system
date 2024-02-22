const borrowBookController = require('../controllers/ิborrowBookController')
const borrowBookRouter = require('express').Router()

borrowBookRouter.post('/borrow-book/create', borrowBookController.createBorrow)
borrowBookRouter.get('/borrow-book/search', borrowBookController.searchBorrow)
borrowBookRouter.get('/borrow-book/all', borrowBookController.allBorrow)
module.exports = borrowBookRouter