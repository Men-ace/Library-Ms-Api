import SessionSchema from "./SessionSchema.js";

//insert a new Session
export const createNewSession = (SessionObj) =>{
    return SessionSchema(SessionObj).save()
}

export const deleteSession = (filter) =>{
    return SessionSchema.findOneAndDelete(filter)
}

