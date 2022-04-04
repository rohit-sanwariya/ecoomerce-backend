import Order from '../../models/Order.js'
const getAllOrders = async(req,res)=>{
    try {
        const Orders = await Order.find();
        res.status(200).json(Orders)
    } catch (error) {
        res.status(500).send(error);
    }
}

export default getAllOrders;