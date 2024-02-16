const memberController = require('../controllers/memberController')
const memberRouter = require('express').Router()

memberRouter.post('/member/create', memberController.createMember)

module.exports = memberRouter