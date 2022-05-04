import Cart from "../../models/Cart.js";

const getCart = async (req, res) => {
  
  if (!!req.params.userId) {
    try {
      console.log('cart get ');
      const id = req.params.userId;      
      const getCart = await Cart.findOne({id})      
      res.status(200).json(getCart); 

    } catch (error) {

      res.status(500).json({ error, userHasNoCart: true }); 

    }
  }
  else{
    if(res.headersSent){
      console.log('sendt');
    }
    res.status(401).json("illformed request")

  }
};

export default getCart;
