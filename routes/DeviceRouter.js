const Router = require('express');
const router = new Router;
const DeviceController = require('../controllers/DeviceController.js')

router.post('/', DeviceController.postDevice)
router.get('/', DeviceController.getAllDevices)
router.get('/:id', DeviceController.getOneDevice)


module.exports = router;
