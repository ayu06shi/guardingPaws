const Question = require('../models/question')
const Reply = require('../models/reply')

const replyController =  async (req, res) => {
    const { answer } = req.body;
    const { id } = req.params;
    try {
      const reply = await Reply.create({ reply: answer, author: req.user._id });
      const findQuestion = await Question.findById(id);
      console.log("find", findQuestion);
      const addReply = await findQuestion.updateOne({
        $push: { replies: reply._id },
      });
      return res.status(201).json(reply);
    } catch (error) {
        console.log(error);
      res.status(500).json({ message: "Server Error" });
    }
  }

  module.exports = {replyController}