/** user.modals.js */
const mongoose = require('mongoose');

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        lowercase:true,
        unique:true
    },
    password:{
        type:String,
        required:[true, "password must be required"],
        minlength:[8,"minimum length is 8 character"]
    }
},{timestamps:true})

export const User = mongoose.model('User', userSchema)