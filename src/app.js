require('dotenv').config()
const express = require('express')
const logger = require('morgan')

const app = express()
const PORT = process.env.PORT

app.use(logger('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes

const invRouter = require('./routes/inventory')

app.use('/inventory', invRouter)

app.listen(PORT, () => {
    console.info(`App listening on port ${PORT}`)
})