

export const insertNewUser = (req, res, error) => {
    try {
        //to so signup process 
        //receive the user data
        // encrypt the password
        // insert user into DB

        // create an unique user activation link to the email
        


        res.json({
            status: "success",
            message: "TODO"
        })

    } catch (error) {
        next(error)
    }
}