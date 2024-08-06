import express from "express";
import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

// create express app
const app =express();
//allow app to send json object
app.use(express.json());
//to set/read cookie
app.use(cookieParser());
app.use(cors({
    orgin:process.env.VITE_URL,
    credentials:true
}));



//create an endpoint (http://localhost:8800/api/auth/*)
app.use("/api/auth" , authRoute);
app.use("/api/users" , userRoute);
app.use("/api/test" , testRoute);








//app is listining to this port number
app.listen(8800,()=>{
    console.log("server is running");
})