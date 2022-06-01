const fs=require('fs')
const express=require('express')
const mongoose =require('mongoose')
const app =express()

mongoose.connect("mongodb:")

app.post('/services',(req,res)=>{

})