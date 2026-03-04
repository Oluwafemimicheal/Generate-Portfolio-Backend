import express from "express"
import dotenv from "dotenv"
import cors from "cors"


dotenv.config()
const app = express()

//Express middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// Third-party middleware
app.use(cors())

app.get('/', (req, res)=>{
  return res.status(200).json({
    success: true,
    message: "Welcome to generate profile server"
  })
})