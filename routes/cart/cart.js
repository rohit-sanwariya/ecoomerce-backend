import { Router } from "express";

import verifyToken from "../user/verifyToken.js";
import verifyTokenAndAdmin from "../user/verifyTokenAndAdmin.js";
import verifyTOkenAuthorization from "../user/verifyTokenAuthorization.js";
import createNewCart from "./CreateCart.js";
import deleteCart from "./deleteCart.js";
import getCart from './getCart.js'
import getAllCarts from "./getAllCarts.js";
import updateCart from "./updateCart.js";
const router = Router();


//create cart
router.post('/',verifyToken,createNewCart)

//update cart
router.put("/:id",verifyTOkenAuthorization,updateCart);

//delete cart
router.delete("/:id",verifyTOkenAuthorization,deleteCart)

//get Cart
router.get("/find/:userId",verifyTOkenAuthorization,getCart)

//for admin to get all cart
router.get("/",verifyTokenAndAdmin,getAllCarts)

 


export default router;