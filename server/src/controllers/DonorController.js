const Donor = require('../models/Donor')

module.exports = {
    async store(req, res) {
        const bloodTypes = ['O-', 'O+', 'AB-', 'AB+', 'A-', 'A+', 'B-', 'B+']
        const { name, email, blood } = req.body

        if (!bloodTypes.includes(blood)) return res.status(406).redirect('/')

        const donor = await Donor.create({ name, email, blood })

        return res.redirect('/')
    },

    async list(req, res) {
        const donors = await Donor.find().sort('-createdAt').limit(8)
        
        return res.status(200).json(donors)
    }
}