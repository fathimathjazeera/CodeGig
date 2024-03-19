const Sequelize = require('sequilize');
const db = require('../config/databse')


const Gig = db.define('gig',{
    title:{
        type:Sequelize.String
    },
    technologies:{
        type:Sequelize.String
    },
    description:{
        type:Sequelize.String
    },
    budget:{
        type:Sequelize.String
    },
    contact_email:{
        type:Sequelize.String
    },
})
module.exports = Gig