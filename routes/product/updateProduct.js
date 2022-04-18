import Product from "../../models/Product.js";
const updateProduct = async(req,res)=>{
    
    try {
         
         
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,{
            $set:req.body
        });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json(error)

    }
}

export default updateProduct;