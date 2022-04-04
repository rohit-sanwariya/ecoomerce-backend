import Cart from "../../models/Cart.js";

const getCart = async(req,res)=>{
        try {
            const Cart = await Cart.findOne({
                userId:req.params.userId
            })
            res.status(200).json(Cart)
        } catch (error) {
            res.status(500).json(error)
        }
}

export default getCart;