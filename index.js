 import express from "express";
 import 'dotenv/config'
 import mongoose from "mongoose";
import {catchError, from} from 'rxjs'
 //imports end 
 const PORT = process.env.PORT 
 const USER_NAME = process.env.USER_NAME;
const USER_PASSWORD = process.env.USER_PASSWORD;
const CONNECTION_URL = `mongodb+srv://${USER_NAME}:${USER_PASSWORD}@memoryappcluster.oggo7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;


from(mongoose.connect(CONNECTION_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
})).pipe(catchError(err=>console.log(err))).subscribe((val)=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server running on ${process.env.PORT}`);
    });
});




 const app = express() 
//  app.listen(PORT,()=>{console.log('http://localhost:5000')})