import Order from "../../models/Order.js";

const deleteOrder = async(req,res)=>{
    try {
         await Order.findByIdAndDelete(req.params.id,{
            $set:req.body
        });
        res.status(200).json("Order Has Been Deleted");
    } catch (error) {
        res.status(500).json(error)

    }
}

export default deleteOrder;