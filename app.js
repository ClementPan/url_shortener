const express = require('express')
const app = express()
const port = 3000

// set view engine
const exphbs = require('express-handlebars')
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: "hbs" }))
app.set('view engine', 'hbs')

// use body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

// mongodb connection
require('./config/mongoose')

// use static
app.use(express.static('public'))

// require router
const router = require('./routes')
app.use(router)


app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`)
})