import Cart from "../../models/Cart.js";

const deleteCart = async(req,res)=>{
    try {
         await Cart.findByIdAndDelete(req.params.id,{
            $set:req.body
        });
        res.status(200).json("Cart Has Been Deleted");
    } catch (error) {
        res.status(500).json(error)

    }
}

export default deleteCart;