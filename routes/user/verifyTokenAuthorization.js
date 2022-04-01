import verifyToken from './verifyToken.js'
const verifyTOkenAuthorization = (req,res) =>{
    verifyToken(req,res)
    console.log('hello world');
}

export default verifyTOkenAuthorization;