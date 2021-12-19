const ApiError = require('../errors/ApiError.js')
const uuid = require('uuid')
const path = require('path')
const {UserAd, UserAd_Info} = require('../models/models.js')

class AdvertController {

    async createAd (req, res, next)  {
        switch (req.user.role) {
            case 'STUDENT':
                return next(ApiError.forbiddenReq('Вы не можете создавать объявления'))
            case 'EMPLOYER':
                const {name, description, adverst_info} = req.body

                if (!name || !description) {
                    return next(ApiError.notFoundReq('Не всё указано'))
                }

                const userId = req.user.id

                const advert = await UserAd.create({name, description, userId})

                if(adverst_info) {
                    adverst_info.forEach(i => {
                        UserAd_Info.create({
                            title: i.title,
                            description: i.description,
                            userAdvertisementId: advert.id
                        })
                    })
                }

                return res.json(advert)
            default:
                return next(ApiError.notFoundReq('Пользователь неопределён - ОШИБКА!!!'))
        }

    }

    async deleteAd (req, res, next)  {
        switch (req.user.role) {
            case 'STUDENT':

                return next(ApiError.forbiddenReq('Вы не можете создавать объявления'))

            case 'EMPLOYER':

                const {id} = req.query
                if (!id) {
                    return next(ApiError.notFoundReq('Не указаны нужные данные'))
                }

                const advert = await UserAd.destroy({where: {id}})
                return res.json(advert)

            default:
                return next(ApiError.notFoundReq('Пользователь неопределён - ОШИБКА!!!'))
        }
    }

    async getAll (req, res, next)  {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 4
        let offset = page * limit - limit


        const adverts = await UserAd.findAndCountAll({limit, offset})

        return res.json(adverts)
    }

    async getOne (req, res, next)  {
        const {id} = req.params
        const advert = await UserAd.findOne({
            where: {id},
            include: [{model: UserAd_Info, as: 'adverst_info'}]
        })

        return res.json(advert)
    }

}
module.exports = new AdvertController()