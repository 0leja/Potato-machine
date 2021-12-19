const Router = require('express');
const router = new Router;
const PortfolioController = require('../controllers/PortfolioController')
const authMidaleware = require('../midleware/authMidaleware')

router.post('/add', authMidaleware, PortfolioController.addinfo)
router.delete('/del', authMidaleware, PortfolioController.delinfo)
router.get('/', authMidaleware, PortfolioController.getPortfolio)



module.exports = router;