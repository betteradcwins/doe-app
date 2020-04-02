const mongoose = require('mongoose')

const requiredString = {
    type: String,
    required: true
}

const DonorSchema = new mongoose.Schema({
    name: requiredString,
    email: requiredString,
    blood: requiredString
}, {
    timestamps: true
})

module.exports = mongoose.model('Donor', DonorSchema)