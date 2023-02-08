import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/connect.js"
import router from "./routes/userRoute.js"
import questionRouter from "./routes/questionRoutes.js"
const app =express()
dotenv.config()
connectDB()
app.use(cors())
app.use(express.json())

app.use('/user',router)
app.use('/questions',questionRouter)
const port = process.env.PORT
app.listen(port,()=>{
    console.log("Server is runnig on port 4000",port)
})



