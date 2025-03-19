import mongoose  from "mongoose";

export const dbConnect = async()=>{
    if(!process.env.MONGO_URL){
        throw new Error ("Provide MONGO_URL connection string")
    }
        return mongoose.connect(process.env.MONGO_URL)

  
}