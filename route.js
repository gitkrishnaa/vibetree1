const route=require('express').Router();

const controller=require("./controller")
route.get("/",(req,res)=>{
    res.send("ok")
})
route.post("/call",controller.send_Call)
route.post("/message",controller.send_Message)
route.post("/whatsapp",controller.send_Whatsapp)

module.exports=route;