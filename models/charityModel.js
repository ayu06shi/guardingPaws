const mongoose = require('mongoose')

const charitySchema = new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    mission : {
        type : String,
        required : true
    },
    impact : {
        type : String,
        required: true
    },
    successStory: {
        type: String,
        required: true,
    },
    user : {
        type: mongoose.ObjectId,
        ref: "User"
    }
}, {timestamps: true})

module.exports = mongoose.model('Charity', charitySchema)