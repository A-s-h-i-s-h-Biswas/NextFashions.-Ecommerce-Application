
const mongoose=require("mongoose");


const ProductSchema=new mongoose.Schema({
    title:{type: String, required:true, unique:true},
    desc:{type:String, required:true},
    categories:{type:Array},
    img:{type: String,required:true},
    size:{type:Array},
    color:{type:Array},
    price:{type:String, required:true},
    type:{type:String},
    Instock:{type:Boolean,default:true},
},
{timestamps:true}
);

module.exports=mongoose.model("Product",ProductSchema);