 import Product from "../../models/Product.js"

const getProductsFromIds = async(req,res)=>{
    try {
        const idArray = req.params['ids'].split(',').map((id)=>{
            return {_id:id}
        })
        
        
        
        const products = await Product.find(
            {
            $or:idArray
        }
        )
        
        res.status(200).json(products);
    } catch (error) {
        
        res.status(500).json(error);
        
    }
    // Morris Park Bake Shop
    //  Wendy'S
}

export default getProductsFromIds;
