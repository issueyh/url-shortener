const express = require('express')
const exphbs = require('express-handlebars')
const { check } = require('express-validator')
const errMsg = require('./public/javascripts/errMsg')
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

app.post('/', [
    check('inputUrl').isURL().withMessage('網址格式有誤，請輸入正確網址!!')], 
    errMsg, (req, res) => {
    const { url } = req.body
})

app.listen(port, () => {
    console.log(`The Express server is running on http://localhost:${port}`)
})