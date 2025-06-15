/**todo.modals.js */
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        lowercase:true,
        unique:true
    },
    createdBy:{
        type: mongoose.Schema.ObjectId,
        ref:'User',
        required:true,
    },
    isCompleted:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

export const Todo = mongoose.model('Todo', todoSchema)