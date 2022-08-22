const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
const cors = require("cors");


const userRoute=require("./routes/user");
const authRoute=require("./routes/auth");
const productRoute = require("./routes/Product");
const cartRoute = require("./routes/Cart");
const orderRoute = require("./routes/Order");
const stripeRoute = require("./routes/stripe");

mongoose.connect(process.env.MONGOODB_URL)
.then(()=>console.log("Data Base Connected Successfully"))
.catch((error)=>{
    console.log(error);
});

app.use(express.json());
app.use(cors());
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);



const PORT=process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log("backend server is running");
})