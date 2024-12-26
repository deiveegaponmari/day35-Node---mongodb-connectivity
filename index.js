const express = require('express');
const web_server=express();
require('./dbconfig');
const { mentorRouter}=require('./controller/mentor.controller');
const {studentRouter}=require('./controller/student.controller');
web_server.use(express.json());
//import dotenv
require('dotenv').config();
//console.log(process.env.PORT)
//Routers injection
web_server.use('/mentor', mentorRouter);
web_server.use('/student', studentRouter);

web_server.get('/',(request,response)=>{
    response.send("vanitha");
})
web_server.listen(process.env.PORT,process.env.HOST,()=>{
    console.log("server started");
    console.log(`http://${process.env.HOST}:${process.env.PORT}`);
})