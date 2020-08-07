const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const url = req.body.url
  res.render('output', { url })
})

module.exports = router