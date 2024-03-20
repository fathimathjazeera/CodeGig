
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const sequelize = require('./config/database.js')
const gigRoutes= require('./routes/gigs.js')
const app=express()

app.use(express.json())
app.use('/gigs',gigRoutes)

// test connection
sequelize.authenticate().then(()=> console.log('Database connected')).catch((err)=> console.log('Error: ',err))

const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`Server is running on port ${PORT}`))