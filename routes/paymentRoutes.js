const express = require('express')
const { paymentController, paymentVerificationController, userDonationHistory, charityDonationHistory } = require('../controllers/paymentControllers')
const { requireSignIn, isAdmin } = require('../middleware/authMiddleware')
const router = express.Router()


router.post("/donate", paymentController)

router.post("/payment-verification", paymentVerificationController)

router.get('/user-donation-history', requireSignIn, userDonationHistory)

router.get("/charity-donation-history", requireSignIn, isAdmin, charityDonationHistory)

module.exports = router