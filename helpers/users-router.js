const express = require('express')

const Users = require('./users-model.js');
const router = express.Router();

router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});


module.exports = router;
