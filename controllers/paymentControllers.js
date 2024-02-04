const Payment = require('../models/paymentModel')
const Razorpay = require('razorpay')
const crypto = require('crypto')
const { log } = require('console')

const razorpay = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_SECRET
})

const paymentController = async(req, res) => {
    const {paidTo, amount, paidBy} = req.body

    const order = await razorpay.orders.create({
        amount: Number(amount*100),
        currency: "INR"
    })

    await Payment.create({
        paidTo: paidTo,
        order_id: order.id,
        amount: amount,
        paidBy: paidBy
    })

    res.json({order})
}

const paymentVerificationController = async(req, res) => {
    try {
        // Your existing code here
        const {razorpay_payment_id, razorpay_order_id, razorpay_signature} = req.body

        const body_data = razorpay_order_id + "|" + razorpay_payment_id
        
        const expect = crypto.createHmac('sha256', process.env.KEY_SECRET).update(body_data).digest("hex")

        const isValid = (expect == razorpay_signature)
        if(isValid) {
            await Payment.findOneAndUpdate({order_id: razorpay_order_id}, {
                $set:{
                    razorpay_payment_id, razorpay_order_id, razorpay_signature
                }
            })
            console.log("Success..");
            res.redirect('https://guarding-paws.vercel.app/')
            return;
        }
        else {
            await Payment.deleteOne({ order_id: razorpay_order_id });
            console.log("Failed..");
            res.redirect('https://guarding-paws.vercel.app/failure')
            return
        }
    } catch (error) {
        console.error("Error in paymentVerificationController:", error);
        res.redirect('https://guarding-paws.vercel.app/failure');
    }
}

const userDonationHistory = async(req, res) => {
    try {
        const userId = req.user._id;

        const donations = await Payment.find({ paidBy: userId }).populate('paidTo', 'name').sort({ createdAt: -1 });

        const formattedDonations = donations.map(donation => ({
            paidTo: donation.paidTo ? donation.paidTo.name : 'Unknown User',
            amount: donation.amount,
            timestamp: new Intl.DateTimeFormat('en-GB', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
            }).format(donation.createdAt),
        }));

        res.status(200).json({ donations: formattedDonations });

    } catch (error) {
        console.error("Error in userDonationHistory:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const charityDonationHistory = async(req, res) => {
    try {
        const charityId = req.user._id;

        const donations = await Payment.find({paidTo: charityId}).populate('paidBy', 'name').sort({ createdAt: -1 });

        const formattedDonations = donations.map(donation => ({
            paidBy: donation.paidBy ? donation.paidBy.name : 'Unknown User',
            amount: donation.amount,
            timestamp: new Intl.DateTimeFormat('en-GB', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            }).format(donation.createdAt),
        }));

        res.status(200).json({donations : formattedDonations})

    } catch (error) {
        console.error("Error in charityDonationHistory:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {paymentController, paymentVerificationController, userDonationHistory, charityDonationHistory}
