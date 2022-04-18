import verifyToken from "./verifyToken.js";

const verifyTokenAndAdmin = (req,res,next)=>{
    
verifyToken(req,res,()=>{
    if(req.user.isAdmin){
        next()
    }
    else{
        res.status(403).json("You are not admin.")
    }
})
}

export default verifyTokenAndAdmin;