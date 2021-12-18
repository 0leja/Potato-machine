const Router = require('express');
const router = new Router;

const DeviceRouter = require('./DeviceRouter')
const UserRouter = require('./UserRouter')
const BrandRouter = require('./BrandRouter')
const TypeRouter = require('./TypeRouter')
const BasketRouter = require('./BasketRouter')

router.use('/user', UserRouter)
router.use('/brand', BrandRouter)
router.use('/device', DeviceRouter)
router.use('/type', TypeRouter)
router.use('/basket', BasketRouter)




module.exports = router;

