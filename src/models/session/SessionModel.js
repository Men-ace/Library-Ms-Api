import SessionSchema from "./SessionSchema.js";

//insert a new Session
export const createNewSession = (SessionObj) =>{
    return SessionSchema(SessionObj).save()
}


//Delete a new Session
export const deleteSession = (filter) =>{
    return SessionSchema.findOneAndDelete(filter)
}

