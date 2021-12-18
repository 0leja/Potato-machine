const ApiError = require('../errors/ApiError.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const uuid = require('uuid')
const path = require('path')
const {User, UserApp, UserFeeedback, UserPortfolio, UserResume, UserAvatar} = require('../models/models.js')

const generateJwt = (id, email, name, surname, aftername, classNum, git, phoneNum, role, img) => {
    return jwt.sign({id, email, name, surname, aftername, classNum, git, phoneNum, role, img}, process.env.SECRET_KEY, {expiresIn: '24h'})
}
//
class UserController {

    async register (req, res, next)  {
        const {email, password, name, surname, aftername, classNum, git, phoneNum, role} = req.body

        if(!email || !password || !name || !surname || !role) {
            return next(ApiError.notFoundReq('Не все данные указаны'))
        }

        const check = await User.findOne({where: {email}})
        if(check) {
            return next(ApiError.notFoundReq('Уже есть такой пользователь'))
        }

        const {img} = req.files
        if (!img) {
            const fileName =  'no img'
        }
        let fileName = uuid.v4()+'.jpg';
        await img.mv(path.resolve(__dirname, '..', 'static', fileName))

        const hashPassword = await bcrypt.hash(password, 5)

        const user = await User.create({email, password: hashPassword, name, surname, aftername, classNum, git, phoneNum, role})
        const avatar = await UserAvatar.create({img: fileName, userId: user.id})
        const apps = await UserApp.create({userId: user.id})
        const feedback = await UserFeeedback.create({userId: user.id})
        const portfolio = await UserPortfolio.create({userId: user.id})
        const resume = await UserResume.create({userId: user.id})

        const token = generateJwt(user.id, user.email, user.name, user.surname, user.aftername, user.classNum, user.git, user.phoneNum, user.role, fileName)

        return res.json({token})
    }

    async login (req, res, next)  {
        const {email, password} = req.body
        if(!email || !password) {
            return next(ApiError.notFoundReq('Не все данные указаны'))
        } else {
            const user = await User.findOne({where: {email}})
            if(!user) {
                return next(ApiError.notFoundReq('Нет такого пользователя'))
            }
            let comparePassword = bcrypt.compareSync(password, user.password)
            if(!comparePassword) {
                return next(ApiError.notFoundReq('Неправильный пароль'))
            }
            const img = await UserAvatar.findOne({where: user.id})
            const token = generateJwt(user.id, user.email, user.name, user.surname, user.aftername, user.classNum, user.git, user.phoneNum, user.role)

            return res.json({token})
        }
    }

    async checkAuth (req, res, next)  {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)

        return res.json({token})
    }
}
module.exports = new UserController()