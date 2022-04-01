import jwt from "jsonwebtoken";
const verifyToken = (req,res,next) =>{
    const token = req.headers.token
    authHeader ?? res.status(401).json("You are not Authenticated");
    jwt.verify(token,process.env.JWT_SECRET_KEY,(error,user)=>{
        error&& res.status(401).json("Invalid Token")
        req.user = user
        next()
    })

}

export default verifyToken;