const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const find = require('./modules/find')

router.use('/to', find)

router.use('/', home)


module.exports = router