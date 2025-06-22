import mongoose, { Schema } from "mongoose";

const stockSchema = new Schema({
    // stock belong which category
    categoty:{
        type: mongoose.Schema.ObjectId,
        ref: "Category"
    },
    // seller || owner name
    owner:{
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    // stock present or not
    status:{
        type: Boolean,
        required: true,
    }
},{timestamps:true})

export const Stock = mongoose.model("Stock" , stockSchema )