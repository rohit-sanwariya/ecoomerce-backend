import User from "../../models/User.js";
import AES from "crypto-js/aes.js";
import ENCUTF8 from 'crypto-js/enc-utf8.js'
const updatePassword = async(req,res)=>{
   console.log('update started');
   
    if(req.body.password){
        const newPassword = req.body.newPassword
        console.log(newPassword);
            req.body.password = AES.encrypt(
                req.body.newPassword,
                process.env.PASSWORD_SECRET_KEY
            ).toString()
             
    try {
        const findUser = await User.findById(req.params.id)
        const decrptOldPassword = AES.decrypt(
            findUser.password,process.env.PASSWORD_SECRET_KEY
            ).toString(ENCUTF8)       
        decrptOldPassword === newPassword ?
        res.status(405).json(new Error("Your Old and new Password can not be same")):res.status(200).send(
            await User.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true})
        );
        
    } catch (error) {        
        res.status(500).json(error)
    }
    }
}

export default updatePassword