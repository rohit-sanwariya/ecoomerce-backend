import Product from "../../models/Product.js";

const getProduct = async(req,res)=>{
        try {
            const product = await Product.findById(req.params.id)
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json(error)
        }
}

export default getProduct;