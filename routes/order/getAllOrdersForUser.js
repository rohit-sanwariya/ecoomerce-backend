import Order from "../../models/Order.js";


const getAllOrdersForUser = async(req,res)=>{
    try {
        const userId = req.user.id
        console.log(userId);

        const userOrders = await Order.find({userId})
        res.status(200).json(userOrders)
        console.log(userOrders);
    } catch (error) {
        res.status(500).json(error)
    }

}


export default getAllOrdersForUser;