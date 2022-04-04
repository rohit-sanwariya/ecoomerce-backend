import Cart from '../../models/Cart.js'

const createNewCart = async (req,res)=>{
    const newCart = new Cart(req.body)
    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (error) {
        res.status(500).json(error);
    }
}

export default createNewCart;