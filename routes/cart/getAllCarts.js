import Cart from '../../models/Cart.js'
const getAllCarts = async(req,res)=>{
    try {
        const carts = await Cart.find();
        res.status(200).json(carts)
    } catch (error) {
        res.status(500).send(error);
    }
}

export default getAllCarts;