const express = require('express')

const Users = require('./users-model.js');
const router = express.Router();
const jwt = require('jsonwebtoken')

router.get('/',protected, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

function protected(req, res, next) {
    const token = req.headers.authorization;
    if(token){
       jwt.verify(token,process.env.JWT_SECRET || 'modelmajorgenneral', (err, decodedToken)=>{
           if(err){
            res.status(401).json({maessage:'bad token no users'})
           }else{
               req.user = decodedToken;
               next()
           }
       })
    }else{
        res.status(400).json({maessage:'no token no users'})
    }
    // if (req.session && req.session.user) {
    //   next();
    // } else {
    //   res.status(401).json({ message: 'you shall not pass!!' });
    // }
  }

module.exports = router;
