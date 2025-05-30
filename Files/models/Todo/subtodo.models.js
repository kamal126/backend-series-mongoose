import mongoose from "mongoose"

const subTodoSchema = new mongoose.Schema({

  content: {
    type: String,
    required: true
  },
  complete: {
    type: String,
    default: false
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
},{timestamps:true})

export const Subtodo = mongoose.model("Subtodo", subTodoSchema)

