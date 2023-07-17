const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
const { connection } = require('./db')
const { userRouter } = require('./routes/user.route')
const { quizRouter } = require('./routes/quiz.route')
app.use(cors())


app.get('/', (req, res) => {
    res.send({ "msg": "hello" })
})

app.use('/user', userRouter)
app.use('/quiz', quizRouter)


app.listen(4500, async () => {
    try {
        connection
        console.log("connected to db!")
    } catch (error) {
        console.log(error)
    }

    console.log('Server running!')
})