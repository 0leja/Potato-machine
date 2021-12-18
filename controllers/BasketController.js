const jwt = require('jsonwebtoken')
const {Basket} = require('../models/models.js')


class BasketController {

    async getBasket(req, res, next) {
        const userId = req.user.id
        const basket = await Basket.findOne({where: {userId}})

        return res.json({basket})


    }
}

module.exports = new BasketController()