//express 
import express from "express"
const app = express()
const PORT = process.env.PORT || 8000

//DataBase Connection
import { dbConnect } from "./src/config/dbConfig.js"


//middlewares
import cors from "cors"
import morgan from 'morgan'

app.use(express.static('public'));

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

// api End Points 
import authRoute from "./src/routes/authRoute.js"
import { errorHandler } from "./src/middlewares/errorHandler.js"
import { responseClient } from "./src/middlewares/responseClient.js"

app.use("/api/v1/auth", authRoute)



//server status
app.get("/", (req, res) => {
        const message = "Server is live"
        responseClient({req, res, message})
})

// handling error before starting server
app.use(errorHandler)

dbConnect().then(()=>{
    app.listen(PORT, (error) => {
        error 
        ? console.log(error)
        : console.log("your server is running at http://localhost:" + PORT )
    })
})
.catch((error)=> console.log(error)) 


