
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const sequelize = require('./config/database')

const app=express()

app.get('/',(req,res)=>{

})

// test connection
sequelize.authenticate().then(()=> console.log('Database connected')).catch((err)=> console.log('Error: ',err))

const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`Server is running on port ${PORT}`))