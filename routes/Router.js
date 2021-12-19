const Router = require('express')
const router = new Router

const UserRouter = require('./UserRouter')
const AdvertRouter = require('./AdvertRouter')
const FeedBackRouter = require('./FeedBackRouter')
const ApplyRouter = require('./ApplyRouter')
const PortfolioRouter = require('./PortfolioRouter')
const ResumeRouter = require('./ResumeRouter')

router.use('/user', UserRouter)
router.use('/adverst', AdvertRouter)
router.use('/feedback', FeedBackRouter)
router.use('/apply', ApplyRouter)
router.use('/portfolio', PortfolioRouter)
router.use('/resume', ResumeRouter)

module.exports = router