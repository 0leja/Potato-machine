require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const router = require('./routes/Router.js')
const sequelize = require('./db.js')
const modules = require('./models/models.js')
// Подключаем библиотеки

const PORT = process.env.PORT || 3030; // ПОРТ

// Подключение всего
const app = express()
app.use(cors())
app.use('/api', router)


//


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`${PORT} Люблино работаем`))
    } catch (e) {
        console.log(e)
    }
}

start()
