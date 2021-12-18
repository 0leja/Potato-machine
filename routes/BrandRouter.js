const Router = require('express');
const router = new Router;
const BrandController = require('../controllers/BrandController.js')

router.post('/', BrandController.postBrand)
router.get('/', BrandController.getBrands)

module.exports = router;
