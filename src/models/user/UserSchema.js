import { required, types } from "joi"
import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    fName:{
        types: String,
        required:true
    },
    lName:{
        types: String,
        required:true
    },
    role:{
        types: String,
        default: "user",
        required:true
    },
    email:{
        types: String,
        unique: true,
        index: 1,
       required: true,
    },
    phone:{
        types: String,
        required:true
    },
    password:{
        types: String,
        required:true
    },
    refreshJWT:{
        types: String,
    },
}, {timestamps:true})


export default mongoose.model("User", userSchema)