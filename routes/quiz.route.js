const express = require('express');
const { QuizModel } = require('../models/quiz.model');
const quizRouter = express.Router();

quizRouter.post('/add', async (req, res) => {
    let { creator, title, description, questions } = req.body;

    try {
        const newQuiz = new QuizModel({ creator, title, description, questions })
        await newQuiz.save()
        return res.status(200).json({ 'message': 'new quiz created successfully!' })
    } catch (error) {
        return res.status(200).json({ 'message': 'failed to create new quiz!' })
    }
})

quizRouter.get('/get', async (req, res) => {
    let email = req.query.email;

    const quizzes = await QuizModel.find({ creator: email })
    if (quizzes.length > 0) {
        return res.send(quizzes)
    } else {
        return res.send({ 'msg': 'no quiz has been created!' })
    }
})

quizRouter.get('/take', async (req, res) => {
    let id = req.query.quizid;

    const quiz = await QuizModel.findOne({ _id: id })
    if (quiz) {
        return res.send(quiz.questions)
    } else {
        return res.send({ 'msg': 'Quiz not available' })
    }
})



module.exports = { quizRouter }