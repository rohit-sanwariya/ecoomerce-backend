import express from "express";
import 'dotenv/config'
import mongoose from "mongoose";
import cluster from 'cluster'
import { catchError, from } from 'rxjs'
import UserRoutes from './routes/user/user.js'
import AuthRoutes from './routes/auth/auth.js'
import productRoutes from './routes/product/product.js'
import cartRoutes from './routes/cart/cart.js'
import orderRoutes from './routes/order/order.js'
import stripeRoutes from './routes/stripe/Stripe.js'
import cors from 'cors'
 
 
//imports end 
const PORT = process.env.PORT
const USER_NAME = process.env.USER_NAME;
const USER_PASSWORD = process.env.USER_PASSWORD;
const CONNECTION_URL = `mongodb+srv://${USER_NAME}:${USER_PASSWORD}@memoryappcluster.oggo7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
 
const app = express()

//middleware declarations 

app.use(express.json())
app.use(cors());
app.use("/api/auth", AuthRoutes); 
app.use("/api/users", UserRoutes);
app.use("/api/products",productRoutes)
app.use("/api/cart",cartRoutes)
app.use("/api/stripe",stripeRoutes)



 

 
from(mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})).pipe(catchError(err => console.log(err))).subscribe((val) => {
});








 


app.listen(PORT, () => { console.log('http://localhost:5000') })