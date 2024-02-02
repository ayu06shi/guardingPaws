const Payment = require('../models/paymentModel')
const {razorpay} = require('../index')

const paymentController = async(req, res) => {
    const {name, amount} = req.body

    const order = await razorpay.orders.create({
        amount: Number(amount*100),
        currency: "INR"
    })

    await Payment.create({
        order_id: order.id,
        name: name,
        amount: amount
    })

    console.log({order})
    res.json({order})
}

module.exports = {paymentController}