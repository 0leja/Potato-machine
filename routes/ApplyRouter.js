const Router = require('express');
const router = new Router;
const ApplyController = require('../controllers/ApplyController')
const authMidaleware = require('../midleware/authMidaleware')

router.post('/add', authMidaleware, ApplyController.addApp)
router.delete('/del', authMidaleware, ApplyController.delApp)
router.get('/', authMidaleware, ApplyController.getAllApp)



module.exports = router;