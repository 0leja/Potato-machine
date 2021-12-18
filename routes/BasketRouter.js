const Router = require('express')
const router = new Router
const BasketController = require('../controllers/BasketController.js')
const authMidaleware = require('../middleware/authMidaleware.js')


router.get('/', authMidaleware, BasketController.getBasket)

module.exports = router