const express = require('express')
const router = express.Router()
const Url = require('../../models/url')
const generateID = require('../../public/javascripts/generateID')

////////// GET('/:id') //////////
router.get('/:id', (req, res) => {
  const id = req.params.id
  console.log('Req Url id: ', id)
  Url.findOne({ id: id })
    .then(url => res.redirect(url.url))
    .catch(err => console.error(err))
})

////////// GET('/') //////////
router.get('/', (req, res) => {
  res.render('index')
})

////////// POST('/') //////////
router.post('/', (req, res) => {
  // 創造新id
  let id = generateID()
  const reqUrl = req.body.url
  console.log('[Process] ID created: ' + id)

  // function: idCheck
  const idCheck = function (id) {
    console.log('[Process] We get into function idCheck')
    Url.findOne({ id: id })
      .then(url => {
        if (!url) {
          console.log(`[Status] ID: ${id} is brand new, we are good to proceed.`)
          Url.create({ id: id, url: reqUrl })
            .then(() => {
              Url.findOne({ id: id })
                .lean()
                .then(url => res.render('output', { url: url.id }))
            })
        } else {
          console.log(`[Status] ID: ${id} is duplicate, let's make another one.`)
          id = generateID()
          return idCheck(id)
        }
      })
      .catch(err => console.error(err))
  }

  // call function
  idCheck(id)
})

module.exports = router