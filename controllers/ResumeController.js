const ApiError = require('../errors/ApiError.js')
const {UserResume, Resume_Info} = require('../models/models.js')

class ResumeController {
    async addinfo (req, res, next) {
        const {title, description} = req.body
        if(!title || !description) {
            return next(ApiError.notFountReq('Не заполнены все поля'))
        }

        const userResumeId = req.user.resumeId

        const info = await Resume_Info.create({title, description, userResumeId})

        return res.json(info)
    }

    async delinfo (req, res, next) {
        const {id} = req.body
        if(!id) {
            return next(ApiError.notFountReq('Не найдено'))
        }
        const userResumeId = req.user.resumeId

        const info = await Resume_Info.destroy({where: {id, userResumeId}})

        return res.json(info)
    }

    async getResume (req, res, next) {
        const id = req.user.resumeId

        const userResumeId = id
        const info = await Resume_Info.findAll({where: {userResumeId}})

        const resume = await UserResume.findOne({
            where: {id},
        })

        return res.json({resume: resume, info: info})
    }
}

module.exports = new ResumeController