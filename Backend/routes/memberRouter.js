const memberController = require('../controllers/memberController')
const memberRouter = require('express').Router()

memberRouter.post('/member/create', memberController.createMember)
memberRouter.post('/login', memberController.login)

module.exports = memberRouter