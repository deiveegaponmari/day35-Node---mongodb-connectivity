const studentRouter = require('express').Router();
const { studentmodel } = require('../models/student');

studentRouter.post("/api/students", async (req, res) => {
    try {
        const { name, email } = req.body;
        const student = new  studentmodel ({ name, email });
        await student.save();
        if (student) {
            res.status(201).json({
                message: "student created successfully",
                data: student
            })
        } else {
            res.status(404).json({
                message: "student not created"
            })
        }
    }
    catch (error) {
        res.status(500).json({
            message: "something went wrong"
        })
    }
})
//4 API
studentRouter.put("/api/students/:studentId/change-mentor",async(req,res)=>{
    try{
        const{studentId}=req.params;
        const{mentorId}=req.body;
        const student=await student.findById(studentId);
        const mentor=await mentor.findById(mentorId);
        if(!student || !mentor){
            return res.status(404).json({message:"student or mentor not found"})
        }
        if(student.mentor){
            student.previousMentors.push(student.mentor);
        }
        student.mentor=mentorId;
        await student.save();
        mentor.students.push(studentId);
        await mentor.save();
        res.status(200).json({
            message:"mentor assigned/change successfully"
        })
    }catch(error){
        res.status(500).json({error:error.message})
    }
})

//6 API 
studentRouter.get("/api/students/:studentId/previous-mentors",async (req,res)=>{
    try{
        const{studentId}=req.params;
        const student=await student.findById(studentId);
        if(!studentId){
            return res.status(404).json({message:"student not found"})
        }
        res.status(200).json({previousMentors:student.previousMentors})
    }catch(error){
        res.status(500).json({error:error.message})
    }
})
module.exports = {
    studentRouter
}