require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const fileUpload = require('express-fileupload')
const router = require('./routes/Router.js')
const sequelize = require('./db.js')
const modules = require('./models/models.js')
const ErrorHandingMiddleware = require('./midleware/ErrorHandingMiddleware.js')
// Подключаем библиотеки

const PORT = process.env.PORT || 3030; // ПОРТ

// Подключение всего
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)


//

// Middleware  в самом конце
app.use(ErrorHandingMiddleware)
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
