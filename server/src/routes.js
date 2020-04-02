const routes = require('express').Router()
const DonorController = require('./controllers/DonorController')

routes.get('/donors', DonorController.list)
routes.post('/donor', DonorController.store)

module.exports = routes