require('dotenv').config();
const port = process.env.PORT;
const express=require('express');

const route=require('./route');
const app=express()
app.use(express.json())
app.use("/",route)

// console.log(process.env)
app.listen(port,()=>{
    console.log("server started,port",port)
})