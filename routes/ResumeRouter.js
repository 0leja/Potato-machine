const Router = require('express');
const router = new Router;
const ResumeController = require('../controllers/ResumeController')
const authMidaleware = require('../midleware/authMidaleware')

router.post('/add', authMidaleware, ResumeController.addinfo)
router.delete('/del', authMidaleware, ResumeController.delinfo)
router.get('/', authMidaleware, ResumeController.getResume)



module.exports = router;