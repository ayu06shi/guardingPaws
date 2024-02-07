const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    author: {
      type: mongoose.ObjectId,
      required: true,
      ref: "User",
    },
    replies: {
      type: [mongoose.ObjectId],
      ref: "Reply",
      default: [],
    },
    tags: {
      type: [String],
      default: [],
    },
    upvote: {
      type: [mongoose.ObjectId],
      ref: "User",
      default: [],
    },
    downvote: {
      type: [mongoose.ObjectId],
      ref: "User",
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Question', questionSchema)