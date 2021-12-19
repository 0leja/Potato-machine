const ApiError = require('../errors/ApiError.js')
const {UserAd, UserFeedback} = require('../models/models.js')

class FeedBackController {
    async addFeedBack (req, res, next) {
        const {AdverstId} = req.body
        if(!AdverstId) {
            return next(ApiError.notFoundReq('Не указано'))
        }

        const userId = req.user.id

        const feedback = await UserFeedback.create({AdverstId, userId})

        return res.json(feedback)
    }

    async delFeedBack (req, res, next) {
        const {id} = req.body
        if(!id) {
            return next(ApiError.notFoundReq('Не указано'))
        }

        const feedback = await UserFeedback.destroy({where: {id}})

        return res.json({feedback})
    }

    async getAllFeedBack (req, res, next) {
        const userId = req.user.id
        const feedback = await UserFeedback.findAll({where: {userId}})

        return res.json(feedback)
    }
}

module.exports = new FeedBackController