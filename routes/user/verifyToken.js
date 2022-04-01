import jwt from "jsonwebtoken";
const verifyToken = (req,res,next) =>{
    const authHeader = req.headers.token
    console.log('hello here');
    authHeader ?? res.status(401).json("You are not Authenticated");
    const token = authHeader.split(" ")[1]
    console.log('line 7',token);
    jwt.verify(token,process.env.JWT_SECRET_KEY,(error,user)=>{
        error&& res.status(401).json("Invalid Token")
        req.user = user
        
        next()
    })

}

export default verifyToken;