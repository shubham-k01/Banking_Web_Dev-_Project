const fs=require('fs')
const express=require('express')
const mongoose =require('mongoose')
const path =require('path')
const app =express()
const bodyparser =require('body-parser')
const router = require('./Routes/Basic_get_routes')

mongoose.connect("mongodb://localhost:27017/BayBank")

const bankSchema = new mongoose.Schema({
    First_name:String,
    Last_name:String,
    Username:String,
    Password:String,
    bankBalance:Number
})

// Middlewares
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'build')))
app.use('/',router)

const Bank = new mongoose.model('Bank',bankSchema);

//Function to find if a username is already taken or not
// const checkUser =(u)=>{
//     Bank.findOne({Username:u},(err,data)=>{
//         if(err){
//             console.log(err);
//             return false
//         }
//         else{
//             console.log(data);
//             return data
//         }
//     })
// } 
app.post('/login',async (req,res)=>{
    const data =req.body
    const u = req.body.Username;
    const p = req.body.Password;
    console.log(data)
    const userExists = await Bank.find({ Username: u ,Password : p});
    console.log(userExists)
    if(userExists){
        console.log('Account accessed')
        res.redirect('/red3');
    }else{
        console.log('Account cannot be accessed')
        res.redirect('/red4')
    }
})


app.post('/signup', async (req,res)=>{
    const data =req.body;
    const u = req.body.Username;
    const userExists =  await Bank.find({ Username: u });  
    console.log(data)
    // const pu =checkUser(Username);
    const newAcc = new Bank(data);
    if(!userExists){
        console.log('New Account created')
        res.redirect('/red1');
    }else{
        Bank.save(newAcc)
        console.log('Account cannot be created')
        res.redirect('/red2')
    }
})

app.listen(3000,()=>{
    console.log('Server listening on port 3000...')
})

// backend tasks-
// check balance of account before transfer 
// login 
// signup 
// first bankbalance =0 