const express=require('express')
const mongoose =require('mongoose')
const path =require('path')
const app =express()
const bodyparser =require('body-parser')
app.use(express.json())
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

const Bank = new mongoose.model("Bank",bankSchema);

app.post('/login',async (req,res)=>{
    const data =req.body
    const u = req.body.Username;
    const p = req.body.Password;
    console.log("Data")
    console.log(data)
    Bank.findOne({$and: [{ Username: u ,Password : p}]},(err,user)=>{
        console.log(user)
        if(user){
            console.log('Account accessed')
            console.log(user)
            res.redirect('/red3');
            return
        }else if(err){
            console.log('Account cannot be accessed')
            res.redirect('/red4')
        }
        else{
            res.redirect('/red4')

        }
    })
})
app.get('/finalser',(req,res)=>{

})
app.post('/first',(req,res)=>{
    const data =req.body
    const u = req.body.Username;
    console.log(data)
    Bank.findOne({ Username: u },(err,user)=>{
        if(user){
            Bank.updateOne({Username: u},{bankBalance: data.bankBalance})
            console.log('Account updated')
            res.redirect('/finalser')
        }
        else{
            console.log(' Account does not exist')
            res.redirect('/red2')
        }
        }); 

    })

app.post('/signup',  (req,res)=>{
    const data =req.body;
    const u = req.body.Username;
    console.log(data)
    Bank.findOne({ Username: u },(err,user)=>{
        if(user){
            res.redirect('/red2');
            console.log('Account cannot be created')
            return
        }
        else{
            const newAcc = new Bank(data);
            newAcc.save()
            console.log('New Account created')
            res.redirect('/red1')
        }
    });  
})

app.listen(3000,()=>{
    console.log('Server listening on port 3000...')
})

// backend tasks-
// check balance of account before transfer 
// login - done 
// signup - done 
// first bankbalance =0 