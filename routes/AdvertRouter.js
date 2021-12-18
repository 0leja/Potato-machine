const Router = require('express');
const router = new Router;
const AdvertController = require('../controllers/AdvertController.js')
const authMidaleware = require('../midleware/authMidaleware.js')

router.post('/create', authMidaleware, AdvertController.createAd)
router.delete('/del', authMidaleware, AdvertController.deleteAd)
router.get('/', AdvertController.getAll)
router.get('/:id', AdvertController.getOne)

module.exports = router;