const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const find = require('./modules/find')

router.use('/', home)
router.use('/find', find)

module.exports = router