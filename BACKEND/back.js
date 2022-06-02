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
const checkUser =(u)=>{
    const presentUser = Bank.findOne({Username:u},(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(data)
        }
    })
} 
app.post('/signup',(req,res)=>{
    const data =req.body;
    const {Username} = req.body;
    const pu =checkUser(Username);
    if(pu){
        const newAcc = new Bank(data);
        console.log('New Account created')
        document.getElementById('display').innerHTML = "<b>Your account has been created successfully!</b>"
        setTimeout(() => {
            document.getElementById('display').innerHTML = ""
        }, 5000);
        res.send();
    }else{
        console.log('Account cannot be created')
        document.getElementById('display').innerHTML = "<b>Account cannot be created ! The provided username already exists. Give another username</b>"
        setTimeout(() => {
            document.getElementById('display').innerHTML =""
        }, 5000);
        res.send();
    }
})

app.post('/login',(req,res)=>{
    const data =req.body
})

app.listen(3000,()=>{
    console.log('Server listening on port 3000...')
})

// backend tasks-
// check balance of account before transfer 
// login 
// signup 
// first bankbalance =0 
// new accounts to be added to database