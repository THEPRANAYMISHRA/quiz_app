const express = require('express');
const { UserModel } = require('../models/user.model');
const userRouter = express.Router();

userRouter.post('/verify', async (req, res) => {
    let { username, email } = req.body;

    let isUserExist = await UserModel.findOne({ email })

    if (!isUserExist) {
        const newUser = new UserModel({ username, email })
        await newUser.save()
        return res.status(200).send({ 'message': 'account created successfully!', 'email': email })
    } else {
        return res.status(200).send({ 'message': 'Login successful!', 'email': email })
    }
})

module.exports = { userRouter }