const ApiError = require('../errors/ApiError.js')
const uuid = require('uuid')
const path = require('path')
const {UserPortfolio, PortfolioWork} = require('../models/models.js')

class PortfolioController {
    async addinfo (req, res, next) {
        const {title, description, link} = req.body
        if(!title || !description || !link) {
            return next(ApiError.notFountReq('Не заполнены все поля'))
        }

        const {img} = req.files
        if(!img) {
            const fileName = 'no img'
        }
        const fileName = uuid.v4()+'.jpg'
        await img.mv(path.resolve(__dirname, '..', 'static', fileName))

        const portfolioId = req.user.portfolioId

        const portfolioWork = await PortfolioWork.create({img: fileName, title, description, link, portfolioId})


        return res.json(portfolioWork)
    }

    async delinfo (req, res, next) {
        const {id} = req.body
        if(!id) {
            return next(ApiError.notFountReq('Не найдено'))
        }
        const portfolioId = req.user.portfolioId

        const portfolioWork = await PortfolioWork.destroy({where: {id, portfolioId}})

        return res.json(portfolioWork)
    }

    async getPortfolio (req, res, next) {
        const id = req.user.portfolioId

        const portfolioId = id
        const PortfolioWorks = await PortfolioWork.findAll({where: {portfolioId}})

        const portfolio = await UserPortfolio.findOne({
            where: {id},
        })

        return res.json({portfolio: portfolio, works: PortfolioWorks})
    }
}

module.exports = new PortfolioController