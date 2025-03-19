import UserSchema from "./UserSchema.js";

//insert a new user 
export const createNewUser = (userObj) =>{
    return UserSchema(user.userObj).save()
}