import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import corsOptions from "./src/config/corsOptions.js"
import connectDB from "./src/config/db.js";
import userInfoRouter from "./src/routes/userInfo.route.js";


dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

//Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Third-party middleware
app.use(cors(corsOptions))

//Router configuration
app.use("/api/v1/user", userInfoRouter);

//Default route
app.get('/', (req, res)=>{
  return res.status(200).json({
    success: true,
    message: "Welcome to generate profile server"
  })
})


app.listen(PORT, () => {
  console.log(`Server currently running on http://localhost:${PORT}`)
})
