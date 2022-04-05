import { Router } from "express";
import "dotenv/config";
import Stripe from "stripe";
import verifyToken from "../user/verifyToken.js";
const router = Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post("/payments", (req, res) => {
  console.log("activated", req.body);
  stripe.checkout.sessions.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,

      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "T-shirt",
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:4200/payment/success",
      cancel_url: "http://localhost:4200/payment/failure",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        console.log("i came here ");
        console.log(stripeErr);
        res.status(500).json(stripeErr);
      } else {
        console.log(stripeRes);
        res.status(200).json(stripeRes);
      }
    }
  );
});

// router.get('/', verifyToken, (req, res) => {
//     res.json({ api_key: process.env.STRIPE_SECRET_KEY_FRONT })
// })
export default router;
