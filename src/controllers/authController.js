
import { responseClient } from "../middlewares/responseClient.js";
import { createNewSession, deleteSession } from "../models/session/SessionModel.js"
import { createNewUser, updateUser } from "../models/user/UserModel.js"
import { hashPassword } from "../utils/bcrypt.js"
import next from "express"
import { v4 as uuidv4 } from 'uuid';
import { userActivationUrlEmail } from "../services/email/emailServices.js";
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
                const url = `${process.env.ROOT_URL}/activate-user?sessionId=${session._id}&t=${session}`

                  // send this url to their email
               
               const emailId = userActivationUrlEmail({
                    email: user.email ,
                    url,
                    name: user.fname,
                })

                if(emailId){
                    const message  = " we have sent you an email with activation link, Please check your email and follow the instruction to activate your account"

                    return responseClient({req, res, message})
                }
              
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



export const activateUser = async (req, res, next) =>{
    try {
        const {sessionId, t} = req.body
        console.log(sessionId)


        const session = await deleteSession({
            _id: sessionId,
            token: t, 
        })

        if(session?._id){
            // update user to active

            const user = await updateUser({email:session.association}, {status:"active"})

            if(user?._id){
                // send email notification 

                    userActivatedNotificationEmail({email:user.email, name:user.fName})

                    const message =  "Your account has been activated, you may log in Now!"
                    return responseClient({req, res, message})

            }
        }
    } catch (error) {
       next(error) 
    }
}