const {Type} = require('../models/models.js')

class TypeController {
    async getTypes (req, res) {
        const types = await Type.findAll()
        return res.json(types)
    }

    async postType (req, res) {
        const {name} = req.body
        const type = await Type.create({name})

        return res.json({type})
    }
}

module.exports = new TypeController()