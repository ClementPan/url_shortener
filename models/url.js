const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UrlSchema = new Schema({
  id: {
    required: true,
    type: String
  },
  url: {
    required: true,
    type: String
  }
})

module.exports = mongoose.model('Url', UrlSchema)