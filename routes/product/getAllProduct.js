import Product from "../../models/Product.js";

const getAllProducts = async (req, res) => {
    const queryNew = req.query.new;
    const queryCategory = req.query.category;

    try {
        let products;
        if (queryNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(5);
        }
        else if (queryCategory) {
            products = await Product.find({
                categories: {
                    $in: [queryCategory]
                }
            }).sort({ createdAt: -1 }).limit(5);
        }
        else {
            products = await Product.find();
        }
        res.status(200).json(products);
    } 
    catch (error) {
        res.status(500).json(products);
    }
}

export default getAllProducts;