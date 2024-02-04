const express = require('express');
const { requireSignIn } = require('../middleware/authMiddleware');
const { replyController } = require('../controllers/replyControllers');
const router = express.Router()

router.post('/answer/:id', requireSignIn, replyController);  // done

module.exports = router;