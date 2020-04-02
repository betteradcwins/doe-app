require('dotenv/config')
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const middlewares = require('./middlewares')

const app = express()

app.use(morgan('common'))
app.use(helmet())

app.use(express.static('public')) // It servers static files from folder called public on project root.

app.post('/donor', (req, res) => {
    console.log(req, res)
})

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

const port = process.env.PORT || 1216
app.listen(port, () => {
    console.log(`Server running in port ${port}`)
})
