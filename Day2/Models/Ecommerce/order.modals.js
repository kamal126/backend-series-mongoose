import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
    orderedBy:{
        type: mongoose.Schema.ObjectId,
        ref : "User"
    },
    orderedfrom:{
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    paymentStatus:{
        type:Boolean,
        required:true
    },
    status:{
        type:String,
        required:true,
        lowercase:true
    }
},{timestamps:true})

export const Order = mongoose.model('Order', orderSchema)