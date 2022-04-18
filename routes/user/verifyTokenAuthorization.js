import verifyToken from './verifyToken.js'


const verifyTOkenAuthorization = (req,res,next) =>{
     
    verifyToken(req,res,()=>{   
        
        if(req.user.id===req.params.id|| req.user.id===req.params.userId || req.user.isAdmin){
            
            next()
        }
        else{
            res.status(403).json("You are not allowed to modify the user details.")
        }
    })
    
}

export default verifyTOkenAuthorization;