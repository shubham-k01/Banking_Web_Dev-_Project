const express =require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.sendFile('C:/Users/shubham v kurunkar/Desktop/Html/Banking_Web_Dev-_Project/build/index.html')
})
router.get('/about',(req,res)=>{
    res.sendFile('C:/Users/shubham v kurunkar/Desktop/Html/Banking_Web_Dev-_Project/build/index.html')
})
router.get('/services',(req,res)=>{
    res.sendFile('C:/Users/shubham v kurunkar/Desktop/Html/Banking_Web_Dev-_Project/build/index.html')
})
router.get('/login',(req,res)=>{
    res.sendFile('C:/Users/shubham v kurunkar/Desktop/Html/Banking_Web_Dev-_Project/build/index.html')
})
router.get('/signup',(req,res)=>{
    res.sendFile('C:/Users/shubham v kurunkar/Desktop/Html/Banking_Web_Dev-_Project/build/index.html')
})

module.exports=router