import verifyToken from './verifyToken.js'


const verifyTOkenAuthorization = (req,res,next) =>{
     
    verifyToken(req,res,()=>{

        console.log('veriyf only',req.body);
        
        if(req.user.id===req.params.id || req.user.isAdmin){
            console.log('line 11 ',req.body,req.user);
            next()
        }
        else{
            res.status(403).json("You are not allowed to modify the user details.")
        }
    })
    
}

export default verifyTOkenAuthorization;