module.exports.send_Message=async (req,res)=>{
    const user_number=req.body.number;
    const user_msg=req.body.msg;

   const company_number_from=process.env.FROM_PHONE_NUMBER
    const accountSid = process.env.TWILIO_SID;
    const authToken = process.env.TWILIO_TOKEN;
    const client = require('twilio')(accountSid, authToken);
try {
        const data=await client.messages
          .create({
             from: company_number_from,
             body: 'Ahoy! This message was sent from my Twilio phone number!',
             to: '+'+user_number
           })
        //   .then(message => console.log(message.body));


console.log(company_number_from,accountSid,authToken,user_number,user_msg)
console.log(data);
res.send({user_msg,user_number,data})
    } catch (error) {
   console.log(error,"x") 
   res.send( error)    
    }
    
}
module.exports.send_Call= async(req,res)=>{
    const user_number=req.body.number;
    const user_msg=req.body.msg;

   const company_number_from=process.env.FROM_PHONE_NUMBER
    const accountSid = process.env.TWILIO_SID;
    const authToken = process.env.TWILIO_TOKEN;
    const client = require('twilio')(accountSid, authToken);
try {
        const data=await client.calls
          .create({
             from: '+17698881657',
             url: 'http://demo.twilio.com/docs/voice.xml',
             to: '+'+user_number
           })
        //   .then(message => console.log(message.body));

       
console.log(company_number_from,accountSid,authToken,user_number,user_msg)
console.log(data);
res.send({user_number,data})
    } catch (error) {
   console.log(error,"x") 
   res.send( error)    
    }
    
}
module.exports.send_Whatsapp=async(req,res)=>{
    const user_number=req.body.number;
    const user_msg=req.body.msg;

   const company_number_from=process.env.FROM_WHATSAPP
    const accountSid = process.env.TWILIO_SID;
    const authToken = process.env.TWILIO_TOKEN;
    const client = require('twilio')(accountSid, authToken);
try {
        const data=await client.messages
          .create({
             from: "whatsapp:"+company_number_from,
             body: 'Ahoy! This message was sent from my Twilio phone number!',
             to: 'whatsapp:+'+user_number
           })
        //   .then(message => console.log(message.body));


console.log(company_number_from,accountSid,authToken,user_number,user_msg)
console.log(data);
res.send({user_number,data})
    } catch (error) {
   console.log("error",error) 
   res.send( error)    
    }
    
}