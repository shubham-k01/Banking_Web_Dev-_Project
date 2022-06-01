const fs=require('fs')
const express=require('express')
const mongoose =require('mongoose')
const path =require('path')
const app =express()
const bodyparser =require('body-parser')
const router = require('./Routes/Basic_get_routes')

// mongoose.connect("mongodb://localhost:27017/BayBank")

// const bankSchema = new mongoose.Schema({
//     First_name:String,
//     Last_name:String,
//     Username:String,
//     Password:String,
//     bankBalance:Number
// })

app.use(bodyparser.urlencoded({extended:false}))
// const Bank = new mongoose.model('Bank',bankSchema);
app.use(express.static(path.join(__dirname,'build')))
app.use('/',router)

app.post('/services',(req,res)=>{

})

app.listen(3000,()=>{
    console.log('Server listening on port 3000...')
})