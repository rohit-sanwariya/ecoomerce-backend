import Order from "../../models/Order.js";

const getOrder = async(req,res)=>{
        try {
            const Order = await Order.findOne({
                userId:req.params.userId
            })
            res.status(200).json(Order)
        } catch (error) {
            res.status(500).json(error)
        }
}

export default getOrder;