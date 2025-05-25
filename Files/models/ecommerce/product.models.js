import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
  discription:{
    type:String,
    required:true,
  },
  name:{
    type:String,
    required:true
  },
  productImage:{
    type:String   // local server per se public url create karke ya fir AWS jaise mai upload karke use url.
  },
  price:{
    default:0,
    type:Number
  },
  stock:{
    default:0,
    type:Number
  },
  category:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'category',
    required:true
  },
  owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  }

}, {timestamps:true})

export const Product = mongoose.model("Product", productSchema)