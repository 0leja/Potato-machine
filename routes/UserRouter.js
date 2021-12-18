const Router = require('express');
const router = new Router;
const UserController = require('../controllers/UserController')
const authMidaleware = require('../middleware/authMidaleware.js')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/auth', authMidaleware, UserController.checkAuth)



module.exports = router;
