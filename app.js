const express = require('express')
const exphbs = require('express-handlebars')
require('./config/mongoose')
const app = express()
const port = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`The Express server is running on http://localhost:${port}`)
})