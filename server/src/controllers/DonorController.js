const Donor = require('../models/Donor')

module.exports = {
    async store(req, res) {
        const bloodTypes = ['O-', 'O+', 'AB-', 'AB+', 'A-', 'A+', 'B-', 'B+']
        const { name, email, blood } = req.body

        if (!bloodTypes.includes(blood)) return res.status(406)

        const donor = await Donor.create({ name, email, blood })

        return res.status(201).json(donor)
    },

    async list(req, res) {
        const donors = await Donor.find()

        return res.status(200).json(donors)
    }
}