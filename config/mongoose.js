// basic settings
const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/url_shortener'

// connection
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection

// if error
db.on('error', () => {
  console.log('MongoDB connection error!')
})

db.once('open', () => {
  console.log('MondoDB connection success!')
})

module.exports = db