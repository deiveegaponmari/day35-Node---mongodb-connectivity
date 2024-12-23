const mongoose = require('mongoose');
//create mentor schema
const mentorschema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    expertise:{
        type:String
    },
    students:{type:mongoose.Schema.Types.ObjectId,ref:'student'}
},{timestamps:true});

//create mentor model
const mentorModel=mongoose.model("Mentor",mentorschema);
module.exports={
    mentorModel
}