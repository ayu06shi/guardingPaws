const express = require('express')
const { createCharityController, getCharityController, updateCharityController, getAllCharityController } = require('../controllers/charityControllers')
const { requireSignIn, isAdmin } = require('../middleware/authMiddleware')
const router = express.Router()

//charity details filled
router.post('/create-charity', requireSignIn, isAdmin, createCharityController)

//getting all charity name
router.get('/charity-lists', getAllCharityController)

//get single charity name
router.get('/my-charity', requireSignIn, isAdmin, getCharityController)

//update charity details
router.put('/update-charity', requireSignIn, isAdmin, updateCharityController)

module.exports = router