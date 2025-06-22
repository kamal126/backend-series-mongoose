import mongoose, { Schema } from "mongoose";

const itemSchema = new Schema({
    itemName:{
        type:String,
        required:true,
        lowercase:true,
    },
    category:{
        type:mongoose.Schema.ObjectId,
        ref:"Category"
    },
    owner:{
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    client:{
        type: mongoose.Schema.ObjectId,
        ref: "user"
    },
    inStock:{
        type: mongoose.Schema.ObjectId,
        ref: "Stock"
    }
},{timestamps:true})


export const Item = mongoose.model('Item', itemSchema)