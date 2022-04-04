import Product from "../../models/Product.js";

const deleteProduct = async(req,res)=>{
    try {
         await Product.findByIdAndDelete(req.params.id,{
            $set:req.body
        });
        res.status(200).json("Product Has Been Deleted");
    } catch (error) {
        res.status(500).json(error)

    }
}

export default deleteProduct;