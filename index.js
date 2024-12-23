const express = require('express');
const web_server=express();
require('./dbconfig');
const { mentorRouter}=require('./controller/mentor.controller');
const {studentRouter}=require('./controller/student.controller');
web_server.use(express.json());
web_server.use('/mentor', mentorRouter);
web_server.use('/student', studentRouter);

web_server.get('/',(request,response)=>{
    response.send("vanitha");
})
web_server.listen(3001,"localhost",()=>{
    console.log("server started");
    console.log("http://localhost:3000/");
})