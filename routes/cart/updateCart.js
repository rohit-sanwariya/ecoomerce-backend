import Cart from "../../models/Cart.js";

const updateCart = async(req,res)=>{
    try {
        const updatedCart = new Cart.findByIdAndUpdate(req.params.id,{
            $set:req.body
        });
        res.status(200).json(updatedCart);
    } catch (error) {
        res.status(500).json(error)

    }
}

export default updateCart;