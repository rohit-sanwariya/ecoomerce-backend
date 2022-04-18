import { Router } from "express"; 
import verifyTokenAndAdmin from "../user/verifyTokenAndAdmin.js";
import createNewProduct from "./CreateNewProduct.js";
import deleteProduct from "./deleteProduct.js";
import getAllProducts from "./getAllProduct.js";
import getProduct from "./getProduct.js";
import getProductsFromIds from "./getProductsFromIds.js";
import updateProduct from "./updateProduct.js";
 


const router = Router()


//create product 
router.post("/",verifyTokenAndAdmin,createNewProduct)

//update product
router.put("/:id",verifyTokenAndAdmin,updateProduct)

//delete product
router.delete("/:id",verifyTokenAndAdmin,deleteProduct)

//get product
router.get('/find/:id',getProduct)


//get product by id
router.get('/findbyIds/:ids',getProductsFromIds)

//get product
router.get('/',getAllProducts)
 


export default router;