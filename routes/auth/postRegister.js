import { from } from 'rxjs'
import User from '../../models/User.js'
import AES from 'crypto-js/aes.js'
 
import jwt from 'jsonwebtoken'

 const postRegister = (req, res) => {
     
    
 
    const newUser = new User({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        isAdmin:req.body.isAdmin?true:false,
        password: AES.encrypt(req.body.password,process.env.PASSWORD_SECRET_KEY).toString() ,
       
    })
    from(newUser.save()).subscribe((data)=>{
         
        const accessToken = jwt.sign({
            id:data._id,
            isAdmin:data.isAdmin
        },process.env.JWT_SECRET_KEY,{expiresIn:"1d"})
       const {password,...user} = data._doc
       const id = data._id
        res.status(200).json({ ...user,accessToken})
    })
}
export default postRegister