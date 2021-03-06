import Product from '../../models/Product.js'
 
const createNewProduct = async(req,res)=>{
    
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (error) {
        res.status(500).json(error)
    }
    
}

export default createNewProduct;