import { Router } from "express";
import Order from '../../models/Order.js'
import verifyToken from "../user/verifyToken.js";
import verifyTokenAndAdmin from "../user/verifyTokenAndAdmin.js";
import verifyTOkenAuthorization from "../user/verifyTokenAuthorization.js";
import createNewOrder from "./CreateOrder.js";
import deleteOrder from "./deleteOrder.js";
import getAllOrders from "./getAllOrder.js";
import getAllOrdersForUser from "./getAllOrdersForUser.js";
import getOrder from "./getOrder.js";
import updateOrder from "./updateOrder.js";
const router = Router();


//create Order
router.post('/', verifyToken, createNewOrder)

//update Order
router.put("/:id", verifyTokenAndAdmin, updateOrder);

//delete Order
router.delete("/:id", verifyTokenAndAdmin, deleteOrder)

//get Order
router.get("/find/:userId", verifyTOkenAuthorization, getOrder)

//get All Orders For User
router.get("/findAll/:userId", verifyTOkenAuthorization, getAllOrdersForUser)

//for admin to get all Order
router.get("/", verifyTokenAndAdmin, getAllOrders)

// total income monthly
router.get("/income", verifyTokenAndAdmin, async (req, res) => {
    const lastMonth = new Date(new Date().setMonth(new Date().getMonth() - 1));
    const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
    try {
        const income = Order.aggregate([
            { $match: { createdAt: { $gte: prevMonth } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount"
                }
            },
            {
                $group: {
                    _id: "$month",
                    tatal: { $sum: "sales" }
                }
            }
        ]);
        res.status(200).json(income);
    } catch (error) {
        res.status(500).json(error)
    }
})


export default router;