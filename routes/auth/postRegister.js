import { from } from 'rxjs'
import User from '../../models/User.js'
import AES from 'crypto-js/aes.js'


 const postRegister = (req, res) => {
     console.log(req.body);
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: AES.encrypt(req.body.password,process.env.PASSWORD_SECRET_KEY).toString() ,
    })
    from(newUser.save()).subscribe((data)=>{
        res.status(200).json(data)
    })
}
export default postRegister