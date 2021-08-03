const express = require('express')
const exphbs = require('express-handlebars')
const { check } = require('express-validator')
const errMsg = require('./public/javascripts/errMsg')
const Url = require('./models/url')
const randomStr = require('./public/javascripts/randomFive')
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
    check('url').isURL().withMessage('網址格式有誤，請輸入正確網址!!')],
    errMsg, (req, res) => {
    const { url } = req.body
    const protocol = req.protocol
    const host = req.headers.host
    const url = req.originalUrl
    Url.find({ url })
        .then(result => {
            const shortener = `${protocol}://${host}${url}${result[0].shortUrl}`
            res.render('result', { shortener })
        }).catch(err => console.log(err))
})

app.get('/:shortUrl', (req, res) => {
    const shortUrl = req.params.shortUrl
    Url.find({ shortUrl })
        .then(result => {
            res.redirect(`${result[0].url}`)
        }).catch(err => console.log(err))
})

app.listen(port, () => {
    console.log(`The Express server is running on http://localhost:${port}`)
})