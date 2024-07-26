import express from 'express';
import  {loggedin}  from '../controller/test.controller.js';
import {verifyToken} from '../middleware/verifyToken.js';
const router = express.Router();

router.get("/logged-in" ,verifyToken,  loggedin);

export default router;