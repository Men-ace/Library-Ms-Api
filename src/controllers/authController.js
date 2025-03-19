
import { createNewUser } from "../models/user/UserModel.js"
import { hashPassword } from "../utils/bcrypt.js"
import next from "express"
export const insertNewUser = async(req, res, next) => {
    try {
        //to so signup process 
        //receive the user data
        // encrypt the password
            
            const {password} = req.body
            req.body.password = hashPassword(password)



        // insert user into DB
        const user = await createNewUser(req.body)

        // create an unique user activation link to the email



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