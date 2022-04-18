import Cart from "../../models/Cart.js";

const removeProductFromCart = async(req,res)=>{
    try {
        if(req.body){
         
            req.body.products =  req.body.products.filter((product)=>{
                  if(Object.keys(product).includes('_id'))
                  return product
              })
               
            }
         
        const updatedCart = await Cart.findByIdAndUpdate(req.body._id,{
            $set:req.body
        });
        
        res.status(200).json(updatedCart);
    } catch (error) {
        res.status(500).json(error)

    }
}

export default removeProductFromCart;