import { Router } from "express";
import Address from "../../models/Address.js";
import verifyToken from "../user/verifyToken.js";
import verifyTOkenAuthorization from "../user/verifyTokenAuthorization.js";


const router = Router()


router.post('/:id',verifyToken,async (req,res)=>{    
  console.log(req.body);  
  const address = new Address(req.body);

    try {
      const savedCart =   await address.save()
      res.status(200).json(savedCart)


    } catch (error) {
      console.log(error);
        res.status(500).json(error)
    }
}
)


router.get('/:id',verifyToken,async (req,res)=>{      
    try {
      const existingAddress =   await Address.findOne({id:req.params.id})
      res.status(200).json(existingAddress)


    } catch (error) {
        res.status(500).json({error,userHasNoAddress:true})
    }
}
)


router.put('/:id',verifyTOkenAuthorization,async(req,res)=>{
      try {
        const existingAddress =   await Address.findOneAndUpdate(
          {id:req.params.id},
          {$set:req.body}
          );
        
      } 
      catch (error) {

        res.status(500).json({error,userHasNoAddress:true})

      }
})


export default router;