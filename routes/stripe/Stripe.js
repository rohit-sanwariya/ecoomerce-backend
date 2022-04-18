import { Router } from "express";
import "dotenv/config";
import Stripe from "stripe";
 
 
const router = Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);



router.get('/session/:id',async(req,res)=>{
  try {
    console.log(req.params.id);
    const session = await stripe.checkout.sessions.retrieve(req.params.id);
    res.status(200).json(session);
  } catch (error) {
    res.status(500).json(error);
  }

})



router.post("/payments", (req, res) => {
const id = req.body.id
console.log(req.body);
const mapper = req.body.mapper.map((item)=>{
  return {
    price_data: {
      currency: "inr",
      product_data: {
        name:item.productName,
      },
      unit_amount: item.price*100,
    },
    quantity: item.quantity,
  }
})
  
  stripe.checkout.sessions.create({  
    
      line_items: mapper,
      mode: "payment",
      success_url: `http://localhost:4200/success?session_id={CHECKOUT_SESSION_ID}&id=${id}`,
      cancel_url: "http://localhost:4200/failure",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {  
        
        res.status(500).json(stripeErr);
      } else {
        
        res.status(200).json(stripeRes);
      }
    }
  );
});





export default router;
