import { Router } from "express";
import verifyTOkenAuthorization from "./verifyTokenAuthorization.js";
import AES from 'crypto-js/aes.js'
import User from "../../models/User.js";
import verifyTokenAndAdmin from "./verifyTokenAndAdmin.js";
 


const router = Router()

 
router.put("/:id",verifyTOkenAuthorization,async (req,res)=>{
    console.log('line 12',req.body)
    if(!req.body.password){
            req.body.password = AES.encrypt(
                req.body.password,
                process.env.PASSWORD_SECRET_KEY
            ).toString()
            console.log(req.body.password);
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true});
            console.log(updatedUser);
        res.status(200).send(updatedUser);
        
    } catch (error) {
        console.log('error');
        res.status(500).json(error)
    }
    }
})

//delete
router.delete("/:id",verifyTOkenAuthorization,async(req,res)=>{
    try {
        User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted");
    } catch (error) {
        res.status(500).json(error);
    }
})


//get user
router.get("/find/:id",verifyTokenAndAdmin,async(req,res)=>{
    try {
        const user =await User.findById(req.params.id);
        const {password,...others} = user._doc

        res.status(200).json(others);
    } catch (error) {
        res.status(500).json(error);
    }
})
router.get("/",verifyTokenAndAdmin,async(req,res)=>{
    try {
        const users =await User.find();
         
        console.log(users);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
})
 
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  
    try {
      const data = await User.aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json(err);
    }
  });

export default router;