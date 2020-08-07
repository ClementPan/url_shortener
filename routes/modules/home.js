const express = require('express')
const router = express.Router()
const Url = require('../../models/url')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const reqUrl = req.body.url
  return Url.create({ url: reqUrl })
    .then(() => {
      Url.findOne({ url: reqUrl })
        .lean()
        .then(url => res.render('output', { url: url._id }))
        .catch(err => console.error(err))
    })
    .catch(err => console.error(err))
})

module.exports = router
