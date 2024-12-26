const mongoose = require('mongoose');
require('dotenv').config();
async function initiatedbconnect(){
  try{
    const connect=await mongoose.connect(process.env.MONG0_ATLAS_URL);
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