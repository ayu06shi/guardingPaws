const express = require('express')
const { paymentController } = require('../controllers/paymentControllers')
const router = express.Router()


router.post("/donate", paymentController)

module.exports = router