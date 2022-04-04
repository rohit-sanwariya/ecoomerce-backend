import Order from '../../models/Order.js'

const createNewOrder = async (req,res)=>{
    const newOrder = new Order(req.body)
    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (error) {
        res.status(500).json(error);
    }
}

export default createNewOrder;