const express = require('express');
const { askQuestionController, getQuestion, postUpvote, postDownvote, getMyQuestions } = require('../controllers/questionControllers');
const { requireSignIn } = require('../middleware/authMiddleware');
const router = express.Router()

router.post('/ask-question', requireSignIn, askQuestionController);  //checked
router.get('/questions', getQuestion); //checked
router.post('/upvote/:id', requireSignIn, postUpvote); //c
router.post('/downvote/:id', requireSignIn, postDownvote); //c
router.get('/my-questions', requireSignIn, getMyQuestions); //c

module.exports = router;