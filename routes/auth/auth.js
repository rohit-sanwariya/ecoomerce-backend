import { Router } from "express";
import postLogin from "./postLogin.js";
import postRegister from "./postRegister.js";
 


const router = Router()
//register 

router.post('/register',postRegister)

//login
router.post('/login',postLogin)
 


export default router;