
import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    fName:{
        type: String,
        required:true
    },
    lName:{
        type: String,
        required:true
    },
    role:{
        type: String,
        default: "user",
        required:true
    },
    email:{
        type: String,
        unique: true,
        index: 1,
       required: true,
    },
    phone:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    refreshJWT:{
        type: String,
    },
}, {timestamps:true})


export default mongoose.model("User", userSchema)