const Router = require('express');
const router = new Router;
const FeedBackController = require('../controllers/FeedBackController')
const authMidaleware = require('../midleware/authMidaleware')

router.post('/add', authMidaleware, FeedBackController.addFeedBack)
router.delete('/del', authMidaleware, FeedBackController.delFeedBack)
router.get('/', authMidaleware, FeedBackController.getAllFeedBack)



module.exports = router;