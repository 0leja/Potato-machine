const sequelize = require('../db.js')
const {DataTypes} = require('sequelize')
// Подключение библтотек


// Описание моделей
const User = sequelize.define('user', { // Пользователь
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    surname: {type: DataTypes.STRING, allowNull: false},
    aftername: {type: DataTypes.STRING, allowNull: false},
    classNum: {type: DataTypes.STRING, allowNull: false},
    git: {type: DataTypes.STRING, allowNull: true},
    phoneNum: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, allowNull: false}
})

const UserApp = sequelize.define('user-app', { // Перечень заявок
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const UserFeeedback = sequelize.define('user-feedback', { // Перечень откликов
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const UserPortfolio = sequelize.define('UserPortfolio', { // Портофолио
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const PortfolioWork = sequelize.define('portfolio-work', { // Работа в портфолио
    img: {type: DataTypes.STRING, allowNull: false},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    link: {type: DataTypes.STRING, allowNull: false}
})

const UserResume = sequelize.define('user-resume', { // Резюме
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Resume_Info = sequelize.define('resume-info', { // Инфо поле в резюме
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}
})

const UserAd = sequelize.define('user-advertisement', { // Объявление
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    type: {type: DataTypes.STRING, defaultValue: "ADVERST"}
})

const UserAd_Info = sequelize.define('user-advertisement-info', { // Инфо поле объявления
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}
})

const Advertisements = sequelize.define('all-advertisement', {}) // Все объяыления

const Rating = sequelize.define('rating', { // Отзыв-оценка
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false}
})

User.hasMany(UserAd)
UserAd.belongsTo(User)


User.hasOne(UserResume) // Один пользователь иммет одно резюме
UserResume.belongsTo(User) // Резюме принадлежит пользователю


UserResume.hasMany(Resume_Info, {as: 'resume_info'}) // Одно резюме имеет много инфо полей
Resume_Info.belongsTo(UserResume) // Инфо поле принадлежит к одному резюме


User.hasOne(UserPortfolio) // Один рользователь имеет одно портфолио
UserPortfolio.belongsTo(User) // Портфолил принадлежит пользователю


UserPortfolio.hasMany(PortfolioWork) // Одно портфолио имеет много работ
PortfolioWork.belongsTo(UserPortfolio, {as: 'work'}) // Работа принадлежит портфолио


User.hasOne(UserApp) // Один пользователь имеет один перечень заявок
UserApp.belongsTo(User) // Перечень заявок принадлежит одному пользователю


UserApp.hasMany(UserAd, {as: 'adverst-app'}) // Один перечень заявок имеет много объявлений
UserAd.belongsTo(UserApp) // Объявление принадлежит перечню заявок


User.hasOne(UserFeeedback) // Один пользователь имеет один перечень откликов
UserFeeedback.belongsTo(User) // Перечень откликов принадлежит одному пользователю


UserFeeedback.hasMany(UserAd, {as: 'adverst-fback'}) // Один перечень откликов имеет много объявлений
UserAd.belongsTo(UserFeeedback) // Объявление принадлежит перечню откликов


UserAd.hasMany(UserAd_Info) // Одно объявление имеет много инфо полей
UserAd_Info.belongsTo(UserAd) // Инфо поле принадлежит к одному объявлению


UserAd.hasMany(Rating) // Одно объявлени имеет много рейтингов
Rating.belongsTo(UserAd) // Рейтинг принадлежит объявлению


Advertisements.hasMany(UserAd, {as: 'adverst'}) // Все объявления имеют много объявлений

module.exports = {
    User, UserFeeedback, UserApp, UserAd, UserPortfolio,
    UserResume, Rating, Resume_Info, PortfolioWork, UserAd_Info, Advertisements
}


