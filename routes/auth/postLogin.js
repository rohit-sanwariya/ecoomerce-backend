import AES from 'crypto-js/aes.js'
import cryptoJs from 'crypto-js'
import jwt from 'jsonwebtoken'
import User from '../../models/User.js';

const postLogin = async(req,res)=>{
try {
    const user = await User.findOne({username:req.body.username});
    const isAdmin = user.isAdmin
    !user && res.status(401).send("User Not Found")
    const decyptedPassword = AES.decrypt(user.password,process.env.PASSWORD_SECRET_KEY).toString(cryptoJs.enc.Utf8)
    console.log(decyptedPassword);
    decyptedPassword!==req.body.password && res.status(401).send("Wrong Password")
    const accessToken = jwt.sign({
        id:user._id,
        isAdmin:user.isAdmin
    },process.env.JWT_SECRET_KEY,{expiresIn:"1d"})
    const {password,...others} = user._doc
   
    res.status(200).json({...others,accessToken,isAdmin})
} catch (error) {
    res.status(500).json(error)
}
}

export default postLogin;