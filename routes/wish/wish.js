import { Router } from "express";

import   verifyTokenAuthorization   from '../user/verifyTokenAuthorization.js'
import createWishList from "./createWishList.js";
import getUserWishlist from "./getUserWishlist.js"
import updateWishlist from "./updateWishlist.js";

const router = new Router();

//create new wishlist 

router.post('/:id',verifyTokenAuthorization,createWishList);


//get user wishlist

router.get('/:id',verifyTokenAuthorization,getUserWishlist)

//update 
router.put("/:id",verifyTokenAuthorization,updateWishlist)



export default router;







