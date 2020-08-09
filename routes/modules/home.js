const express = require('express')
const router = express.Router()
const Url = require('../../models/url')
const generateID = require('../../public/javascripts/generateID')
const url = require('../../models/url')

// heroku app
const heroku = 'mysterious-harbor-25170.herokuapp.com/'
const localhost = 'localhost:3000/'

////////// GET('/') //////////
router.get('/', (req, res) => {
  res.render('index')
})

////////// POST('/') //////////
router.post('/', (req, res) => {
  // 創造新id
  let id = generateID()
  let reqUrl = req.body.url
  if (!reqUrl.includes('http')) reqUrl = 'http://' + reqUrl
  console.log(`[Process] Requrest Url: ${reqUrl}`)
  console.log('[Process] ID created: ' + id)

  // function: idCheck
  const idCheck = function (id) {
    console.log('[Process] ID Checking...')
    Url.findOne({ id: id })
      .then(url => {
        if (!url) {
          console.log(`[Status] ID: ${id} is brand new, we are good to proceed.`)
          Url.create({ id: id, url: reqUrl })
            .then(() => {
              Url.findOne({ id: id })
                .lean()
                .then(url => {
                  // heroku version
                  res.render('output', { url: heroku + 'to/' + url.id })
                  // local version
                  // res.render('output', { url: localhost + 'to/' + url.id })
                })
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