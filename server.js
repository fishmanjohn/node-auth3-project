const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./helpers/auth-router')
const userRouter = require('./helpers/users-router')

const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())

server.use('/api', authRouter)
 server.use('/api/user', userRouter)

server.get('/', (req, res) => {
    res.send("It's Working!!!");
  });
  
module.exports = server 