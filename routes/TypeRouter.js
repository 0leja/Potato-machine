const Router = require('express');
const router = new Router;
const TypeController = require('../controllers/TypeController.js')

router.post('/', TypeController.postType)
router.get('/', TypeController.getTypes)

module.exports = router;
