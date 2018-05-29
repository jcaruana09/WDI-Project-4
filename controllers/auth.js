const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');

function register(req, res, next){
  User.create(req.body)
    .then(user => {

      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h'});
      res.json({
        message: `Thanks for registering ${user.username}`,
        token,
        user
      });

    })
    .catch(next);
}

function login(req, res, next){
  // searches the database for the email given in the input field
  User.findOne({ email: req.body.email })
    .then(user => {
      // if no user is found or the password isn't valid respond with an unauthorized status code
      if(!user || !user.validatePassword(req.body.password)){
        return res.sendStatus(401).json({ message: 'Unauthorized' });
      }

      // creates the token and sets the user_id as the payload
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' });
      res.json({
        message: `Welcome back ${user.username}`,
        token,
        user
      });
    })
    .catch(next);
}

module.exports = {
  register,
  login
};
