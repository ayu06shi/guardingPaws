const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
    paidTo: {
        type: mongoose.ObjectId,
        ref: "User"
    },
    paidBy: {
        type: mongoose.ObjectId,
        ref: "User",
        default: null
    },
    amount: {
        type: Number
    },
    order_id: {
        type: String
    },
    razorpay_payment_id: {
        type: String,
        default: null
    },
    razorpay_order_id: {
        type: String,
        default: null
    },
    razorpay_signature: {
        type: String,
        default: null
    }
}, {timestamps: true})

module.exports = mongoose.model('Payment', paymentSchema)