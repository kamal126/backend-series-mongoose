import mongoose, { Schema } from "mongoose";


const paymentSchema = new Schema({
    Client:{    // buyer name
        type: mongoose.Schema.ObjectId,
        ref: "user"
    },
    status:{    // sucesses || pending || failed
        type: String,
        require:true,
        lowercase:true
    }
},{timestamps:true})

export const PaymentStatus = mongoose.model('PaymentStatus', paymentSchema)