import express from "express"
import cors from "cors"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import crypto from "crypto"
import authRoutes from "./routes/authroutes.js"

const app = express()

// middlewares

app.use(cors()) // allows to interact with client which is loaded in different domain.
app.use(express.json()) // instructing the pp to accept data in json format
app.use(express.urlencoded({extended:true})) // instructint the app to accept the data in the url encoded format as well
app.use(morgan("dev")) // logs requests, errors and more to the console
app.use(cookieParser()) // it allow the server to access cookie


app.get("/", (req , res)=>{
    res.send("<h1>hello world!</h1>")
})

//routes

app.use("/api/v1/auth",authRoutes)



/*
// crypto key

let key = crypto.randomBytes(64).toString("hex")
console.log(key);

*/

export default app



