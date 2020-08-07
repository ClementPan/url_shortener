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
        // .then(url => res.render('output', { url: String(url._id).slice(19, 24) }))  // working on this one
        .catch(err => console.error(err))
    })
    .catch(err => console.error(err))
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  console.log('Req Url id: ', id)
  Url.findById(id)
    .then(url => {
      res.redirect(url.url)
    })
})

module.exports = router

// .slice(18, 23)