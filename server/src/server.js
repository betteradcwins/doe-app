require('dotenv/config')
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const middlewares = require('./middlewares')
const mongoose = require('mongoose')
const nunjucks = require('nunjucks')
const routes = require('./routes')

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Successful connection!'))

const app = express()

app.use(morgan('common'))
app.use(helmet())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public')) // It servers static files from folder called public on project root.

app.use(routes)
app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

const port = process.env.PORT || 1216
const host = process.env.HOST || 'http://localhost'
app.listen(port, () => {
    console.log(`Server running at ${host}:${port}`)
})
