const uuid = require('uuid')
const path = require('path')
const {Device, DeviceInfo} = require('../models/models.js')
const ApiError = require('../errors/ApiError.js')

class DeviceController {
    async postDevice (req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let filename = uuid.v4() + '.jpg'
            await img.mv(path.resolve(__dirname, '..', 'static', filename))

            const device = await Device.create({name, price, brandId, typeId, img: filename})

            if(info) {
                info = JSON.parse(info)

                info.forEach(i => {
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                })
            }



            return res.json(device)
        } catch (e) {
            next(ApiError.notFoundReq(e.message))
        }
        
    }

    async getAllDevices (req, res) {
        const {typeId, brandId} = req.query

        if(!typeId && !brandId) {
            const devices = await Device.findAndCountAll()
            return res.json(devices)
        }
        if(typeId && !brandId) {
            const devices = await Device.findAndCountAll({where: {typeId}})
            return res.json(devices)
        }
        if(!typeId && brandId) {
            const devices = await Device.findAndCountAll({where: {brandId}})
            return res.json(devices)
        }
        if(typeId && brandId) {
            const devices = await Device.findAndCountAll({where: {typeId, brandId}})
            return res.json(devices)
        }
    }

    async getOneDevice (req, res) {
        const {id} = req.params
        const device = await Device.findOne({
            where: {id},
            include: [{model: DeviceInfo, as: 'info'}]
        })

        return res.json(device)
    }
}

module.exports = new DeviceController()