const ApiError = require('../errors/ApiError.js')
const {UserAd, UserApp} = require('../models/models.js')

class ApplyController {
    async addApp (req, res, next) {
        const {AdverstId} = req.body
        if(!AdverstId) {
            return next(ApiError.notFoundReq('Не указано'))
        }

        const userId = req.user.id

        const apply = await UserApp.create({AdverstId, userId})

        return res.json(apply)
    }

    async delApp (req, res, next) {
        const {id} = req.body
        if(!id) {
            return next(ApiError.notFoundReq('Не указано'))
        }

        const apply = await UserApp.destroy({where: {id}})

        return res.json({apply})
    }

    async getAllApp(req, res, next) {
        const userId = req.user.id
        const apply = await UserApp.findAll({where: {userId}})

        return res.json(apply)
    }
}

module.exports = new ApplyController