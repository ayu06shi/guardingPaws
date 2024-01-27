const express = require('express');
const { createUser, loginController } = require('../controllers/authControllers');
const router = express.Router()

//register
router.post('/register', createUser);

//login
router.post('/login', loginController);

module.exports = router;