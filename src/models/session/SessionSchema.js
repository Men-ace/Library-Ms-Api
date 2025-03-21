

import mongoose from "mongoose"

const SessionSchema = new mongoose.Schema({
    token:{
        type: String,
        required:true
    },
    association:{
        type: String,
      
    },
    
    expire:{
        type: Date,
        default: new Date(Date.now() + 3600000), // 1hr 
        required: true, 
        expires: 0
    }
   
}, {timestamps:true})


export default mongoose.model("Session", SessionSchema)