const Question = require('../models/question')

const askQuestionController = async (req, res) => {
    const { question, description, tags } = req.body;
      // Validate required fields
      if (!question || !description || !tags) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    // Check if req.user._id exists
    if (!req.user || !req.user._id) {
        return res.status(401).json({ message: "Unauthorized access" });
    }

    try {
      const newQuestion = await Question.create({
        question,
        description,
        author: req.user._id,
        tags,
      });
      return res.status(201).json(newQuestion);
    } catch (error) {
      // console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  }

const getQuestion =  async (req, res) => {
    try {
      const questions = await Question.find({})
        .populate("replies")
        .populate({
          path: "replies",
          populate: {
            path: "author",
            model: "User",
          },
        })
        .populate("author")
        .sort({ createdAt: -1 });
      return res.status(200).json(questions);
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  };

  const postUpvote = async (req, res) => {
    const { id } = req.params;
    const userId = req.user._id;
    console.log('ID:', id);
  console.log('UserID:', userId);
    try {
      const findQuestion = await Question.findById(id);
      if (!findQuestion) {
        return res.status(404).json({ message: "Question not found" });
      }
      if (findQuestion.upvote.includes(userId)) {
        return res.status(400).json({ message: "You have already upvoted" });
      }
  
      if (findQuestion.downvote.includes(userId)) {
        const downvote = await findQuestion.updateOne({
          $pull: { downvote: userId },
        });
        return res.status(200).json({ message: "Response updated successfully" });
      }
  
      const upvote = await findQuestion.updateOne({
        $push: { upvote: userId },
      });
      return res.status(200).json(upvote);
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  }

  const postDownvote = async (req, res) => {
    const { id } = req.params;
    const userId = req.user._id;
    try {
      const findQuestion = await Question.findById(id);
      if (!findQuestion) {
        return res.status(404).json({ message: "Question not found" });
      }
      if (findQuestion.downvote.includes(userId)) {
        return res.status(400).json({ message: "You have already downvoted" });
      }
  
      if (findQuestion.upvote.includes(userId)) {
        const upvote = await findQuestion.updateOne({
          $pull: { upvote: userId },
        });
        return res.status(200).json({ message: "Response updated successfully" });
      }
  
      const downvote = await findQuestion.updateOne({
        $push: { downvote: userId },
      });
      return res.status(200).json(downvote);
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  }

  const getMyQuestions = async (req, res) => {
    const userId = req.user._id;
    try {
      const replies = await Question.find({ author: userId })
        .populate("replies")
        .populate({
          path: "replies",
          populate: {
            path: "author",
            model: "User",
          },
        })
        .populate("author")
        .sort({
          createdAt: -1,
        });
      return res.status(200).json(replies);
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  }

  module.exports = {askQuestionController, getQuestion, postUpvote, postDownvote, getMyQuestions}