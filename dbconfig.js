const mongoose = require('mongoose');
async function initiatedbconnect(){
  try{
    const connect=await mongoose.connect('mongodb://localhost:27017/Zenclass');
    if(connect){
      console.log("DB is connected");
    }else {
      throw new Error("DB is not connected")
    }
  }
  catch(error){
    console.log(error)
  }
  
}
initiatedbconnect();