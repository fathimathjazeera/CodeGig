const router = require('express').Router()
const Gig = require('../models/Gig.js')






// ADD GIGS 
router.post('/add',(req,res)=>{
const {title, technologies, description, budget, contact_email} = req.body

Gig.create({
    title,
    technologies,
    description,
    budget,
    contact_email
})
.then((gig)=> res.send(gig)).catch((err)=> console.log(err))
})

//GET ALL GIGS
router.get('/',(req,res)=>{
    Gig.findAll().then((gigs)=> {
        console.log(gigs)
        res.send(gigs)
    }).catch((err)=> console.log(err))
    
    
    })


//GET A GIG
router.get('/:id',(req,res)=>{
    const {id} = req.params
    Gig.findByPk(id)
    .then((gig)=> res.send(gig)).catch(err => console.log(err))
})


//UPDATE A GIG
router.put('/update/:id',(req,res)=>{
    const {id} = req.params
 Gig.update(req.body,{
    where:{id:id}
 }).then((gig)=> res.send(gig)).catch(err => console.log(err))
})

router.delete('/delete/:id',(req,res)=>{
const {id}= req.params
Gig.destroy({where:{id:id}}).then(num =>{
    num==1 
    res.send("deleted successfully")
})
})

module.exports = router