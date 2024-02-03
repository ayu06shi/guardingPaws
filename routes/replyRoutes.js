const express = require('express');
const { requireSignIn } = require('../middleware/authMiddleware');
const { replyController } = require('../controllers/replyController');
const router = express.Router()

router.post('/answer/:id', requireSignIn, replyController);

module.exports = router;