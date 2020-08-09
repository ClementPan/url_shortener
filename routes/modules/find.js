const express = require('express')
const router = express.Router()
const Url = require('../../models/url')

////////// GET('/:id') //////////
router.get('/:id', (req, res) => {
  const id = req.params.id
  console.log('Req Url id: ', id)
  Url.findOne({ id: id })
    .then(url => res.redirect(url.url))
    .catch(err => console.error(err))
})

module.exports = router
