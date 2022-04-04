import Order from "../../models/Order.js";

const updateOrder = async(req,res)=>{
    try {
        const updatedOrder = new Order.findByIdAndUpdate(req.params.id,{
            $set:req.body
        });
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json(error)

    }
}

export default updateOrder;