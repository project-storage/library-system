const memberController = require('../controllers/memberController')
const memberRouter = require('express').Router()

memberRouter.post('/member/create', memberController.createMember)
memberRouter.post('/login', memberController.login)
memberRouter.get('/member/search', memberController.searchMember)
memberRouter.get('/member/all', memberController.allMember)
module.exports = memberRouter