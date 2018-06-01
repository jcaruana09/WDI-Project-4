const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');
const Promise = require('bluebird');
const User = require('../models/user');

function secureRoute(req, res, next) {
  //if there is no authorization respond with 401 status error
  if(!req.headers.authorization) return res.status(401).json({ message: 'Unauthorized' });

  // get the  token out of authorization header
  const token = req.headers.authorization.replace('Bearer ', '');

  // Create new promise to verify the token
  new Promise((resolve, reject) => {

    jwt.verify(token, secret, (err, payload) => {
      if(err) return reject(err);
      resolve(payload);
    });

  })
    .then(payload => User.findById(payload.sub))
    .then(user => {

      // if user can't be found respond with 401 'Unauthorized'
      if(!user) return res.status(401).json({ message: 'Unauthorized' });

      // add the user to the 'req' object for use in the controller
      // Dont forget to include
      req.currentUser = user;

      next();
    })
    .catch(next);
}

module.exports = secureRoute;
