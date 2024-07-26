import express from 'express';
import { login, logout, register } from '../controller/auth.controller.js';

// creates a router
const router = express.Router();

// create different end points

// this is how we write withour controller

// router.post("/register",(req,res)=>{
//     console.log("register");
//     res.send("register");
// });


// we are using post request because we are taking input from the user
// res.send won't work because we are using post request


router.post("/register",register);

router.post("/login",login);

router.post("/logout",logout);


export default router