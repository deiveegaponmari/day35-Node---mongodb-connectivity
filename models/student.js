const mongoose = require('mongoose');
//create mentor schema
const studentschema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
   mentor:{
    type:mongoose.Schema.Types.ObjectId,ref:'Mentor'
   },
   previousMentor:{type:mongoose.Schema.Types.ObjectId,ref:'Mentor'}
},{timestamps:true});

//create mentor model
const studentmodel=mongoose.model("student",studentschema);
module.exports={
    studentmodel
}