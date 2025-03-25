import UserSchema from "./UserSchema.js";

//insert a new user 
export const createNewUser = (userObj) =>{
    return UserSchema(userObj).save()
}

//Update a new user 
export const updateUser = (filter, update) =>{
    return UserSchema.findOneAndUpdate(filter, update, {new:true})
}


