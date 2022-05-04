import User from "../../models/User.js";

 

const checkIfUserExists = async(req,res)=>{
    console.log(req.params.email);
    try {
        const user = await User.findOne(
            {email:req.params.email}
            )
       user&&user.email===req.params.email? res.status(200).json(user):res.status(404).json("We're sorry. We weren't able to identify you given the information provided.")
    } catch (error) {
        res.status(500).json(error);
    }
    
  }

export default checkIfUserExists