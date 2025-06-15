/** subtodos.modals.js */
const mongoose = require('mongoose');

const subtodoSchema = new Schema({
    title:{
        type:String,
        required:true,
        lowercase:true
    },
    desc:{
        type:String,
        required:true,
        lowercase:true
    },
    createdBy:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
    },
    completed:{
        type:Boolean,
        required:true,
        default:false,
    },
},{timestamps:true})

export const SubTodo = mongoose.model('SubTodo', subtodoSchema)

