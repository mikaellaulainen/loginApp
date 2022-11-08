const bcrypt= require('bcrypt')
const usersRouter= require('express').Router()
const User= require('../models/user')

usersRouter.post('/', async (req,res) => {
  const { username, name, password } = req.body
  const alreadyUsed= await User.findOne({ username })

  if (alreadyUsed) {
    return res.status(400).json({ error: 'Username already taken' })
  }

  if(password.length < 5){
    return res.status(400).json({ error: 'Password needs to be atleast 5 characters' })
  }
  const saltRounds=10
  const passwordHash= await bcrypt.hash(password,saltRounds)

  const user = new User({
    username,
    name,
    passwordHash
  })

  const savedUser = await user.save()

  res.status(201).json(savedUser)
})

usersRouter.get('/', async (request, response) => {
  const users = await User
    .find({})

  response.json(users)
})

module.exports = usersRouter