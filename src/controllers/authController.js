
import { responseClient } from "../middlewares/responseClient.js";
import { createNewSession } from "../models/session/SessionModel.js"
import { createNewUser } from "../models/user/UserModel.js"
import { hashPassword } from "../utils/bcrypt.js"
import next from "express"
import { v4 as uuidv4 } from 'uuid';
export const insertNewUser = async(req, res, next) => {
    try {
        //to so signup process 
        //receive the user data
        // encrypt the password
            
            const {password} = req.body
            req.body.password = hashPassword(password)



        // insert user into DB
        const user = await createNewUser(req.body)

       
        if(user?._id) {
             // create an unique user activation link to the email
             const newSessionObj = {
                token:uuidv4(),
                association: user.email,
             }
             const session =  await createNewSession(newSessionObj)

             if(session?._id){
                const url = "http//:localhost:5371?sessionId="+session._id+"&t="+session.token

                console.log(url)
                const message  = " we have sent you an email with activation link, Please chexk your email and follow the instruction to activate your account"

                return responseClient({req, res, message})

                // send this url to their email
             }



        }


        res.json({
            status: "success",
            message: "TODO"
        })

    } catch (error) {
        if(error.message.includes("E11000 duplicate key error collection")){
            error.message = "The email already exists, try different email or reset password "
            error.statusCode = 200
        }
        next(error)
    }
}