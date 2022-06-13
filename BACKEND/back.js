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

app.post('/first',(req,res)=>{
    const data =req.body
    const u = req.body.Username;
    console.log(data)
    Bank.updateOne({ Username: u },{bankBalance: req.body.bankBalance},(err,user)=>{
        if(user){
            console.log('Account updated')
            res.redirect('/services2')
            return
        }
        else{
            console.log(' Account does not exist')
            res.redirect('/ff')
        }
        
        }); 
    })

app.post('/getbal',(req,res)=>{
    const u =req.body.Username
    const p =req.body.password
    const data =req.body
    console.log('Data')
    console.log(data)
    Bank.findOne({$and: [{ Username: u ,Password : p}]},(err,user)=>{

        console.log(user)
        if(user){
            const bb = user.bankBalance;
            console.log('Account found')
            res.send(`<h2>Hi ${user.Username}</h2><br/><h2>Your bank balance is ${user.bankBalance}</h2>`)
            return
        }
        else{
            console.log('No account')
            res.send('<h1>No account by this username</h1>')
        }
    })
})
app.post('/depm',(req,res)=>{
    const u =req.body.Username
    const p =req.body.password
    const b = Number(req.body.money)
    var bb = 0
    Bank.findOne({$and: [{ Username: u ,Password : p}]},((err,user)=>{
        if(user){
            console.log('Account found')
            bb = user.bankBalance
            let newb = bb + b;
            Bank.updateOne({$and: [{ Username: u ,Password : p}]},{bankBalance: newb },((err,user1)=>{
                if(user1){
                    console.log('Account found')
                    res.send(`<h1>HI ${u}</h1><br /><h2>Your bank balance was : ${bb}</h2><br /><h2>Updated Balance: ${newb}</h2>`)
                    console.log('Account updated')
                    return
                }
                else{
                    console.log('No account')
                    res.send('<h1>No account by this username</h1>')
                }
            }))
            return
        }
        else{
            console.log('No account')
            res.send('<h1>No account by this username</h1>')
        }})
        )
    
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
            const fn = req.body.First_name;
            const ln = req.body.Last_name;
            const p = req.body.Password;

            const newAcc = new Bank({First_name : fn ,Last_name: ln ,Username: u ,Password : p ,bankBalance:0});
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
// login - done 
// signup - done 
// first bankbalance =0  - done
// deposit
// display - done 