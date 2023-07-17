const mongoose = require('mongoose')

const schema = mongoose.Schema({
    creator: String,
    title: String,
    description: String,
    questions: [],
    leaderboard: []
})

const QuizModel = mongoose.model('quiz', schema)

module.exports = { QuizModel }