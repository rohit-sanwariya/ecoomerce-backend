 import express from "express";
 import 'dotenv/config'
 import mongoose from "mongoose";
import {catchError, from} from 'rxjs'
import UserRoutes from './routes/user/user.js'
import AuthRoutes from './routes/auth/auth.js'
import cors from 'cors'
 //imports end 
 const PORT = process.env.PORT 
 const USER_NAME = process.env.USER_NAME;
const USER_PASSWORD = process.env.USER_PASSWORD;
const CONNECTION_URL = `mongodb+srv://${USER_NAME}:${USER_PASSWORD}@memoryappcluster.oggo7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const app = express() 
//middleware declarations 

app.use(express.json())
app.use(cors())
app.use("/api/user",UserRoutes)
app.use("/api/auth",AuthRoutes)



from(mongoose.connect(CONNECTION_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
})).pipe(catchError(err=>console.log(err))).subscribe((val)=>{
    
});





app.listen(PORT,()=>{console.log('http://localhost:5000')})