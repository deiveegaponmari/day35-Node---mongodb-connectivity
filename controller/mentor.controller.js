const mentorRouter = require('express').Router();
const { mentorModel } = require('../models/mentor');

mentorRouter.post("/api/mentors", async (req, res) => {
    try {
        const { name, email, expertise } = req.body;
        const mentor = new mentorModel({ name, email, expertise });
        await mentor.save();
        if (mentor) {
            res.status(201).json({
                message: "mentor created successfully",
                data: mentor
            })
        } else {
            res.status(404).json({
                message: "mentor not created"
            })
        }
    }
    catch (error) {
        res.status(500).json({
            message: "something went wrong"
        })
    }
})


mentorRouter.post('/api/mentors/:mentorId/assign-students',async(req,res)=>{
try{
    const {mentorId}=req.params;
    const {studentIds}=req.body;
    const mentor=await mentor.findById(mentorId);
    if(!mentor){
        return res.status(404).json({message:"mentor not found"})
    }
    const updatedStudents=await student.updateMany(
        {_id:{$in:studentIds}},
        {$set:{mentor:mentorId}}
    )
    mentor.students.push(...studentIds);
    await mentor.save();
    res.status(200).json({
        message:"students assigned to mentor successfully",
        mentor,
        updatedStudents
    });
}  catch(error){
    res.status(500).json({error:error.message});
}  
})
//SHOW all students for a particular mentor
mentorRouter.get("/api/mentors/:mentorId/students",async(req,res)=>{
    try{
        const {mentorId}=req.params;
        const mentor=await mentor.findById(mentorId);
        if(!mentor){
            return res.status(404).json({message:"mentor not found"})
        }
        res.status(200).json({students:mentor.students});

    }catch(error){
        res.status(500).json({error:error.message})
    }
})

module.exports = {
    mentorRouter
}