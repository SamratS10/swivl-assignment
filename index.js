import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectMongoDb from "./utils/connnectDb.js"
import bodyParser from "body-parser"
import userRouter from "./routes/user.route.js"
import diaryEntryRouter from "./routes/diaryEntry.routes.js"
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
const port = 8001 

app.listen(port,()=>console.log("App is listening to port 8001"))
connectMongoDb()

app.use("/api/v1/user",userRouter)
app.use("/api/v1/diaryEntry",diaryEntryRouter)