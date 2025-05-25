import mongoose, { mongo } from "mongoose"

const orderItemScema = new mongoose.Schema({
  product:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Product',
    required:true
  },
  quantity:{
    type:Number,
    required:true 
  }
})

const orderSchema = new mongoose.Schema({
  orderPrice:{
    type:Number,
    required:true
  },
  custome:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  orderItems:{
    type:[orderItemScema]
  },
  address:{
    type:String,
    required:true
  },
  status:{
    type:String,
    enum:["Pendding", "Canceled", "Delivered"],
    default: "Pending"
  }
},{timetamps:true})

export const Order = mongoose.model("Order", orderSchema)