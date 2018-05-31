const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');

const User = require('../models/user');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  User.create([
    {
      username: 'jake75',
      email: 'jake@75',
      password: 'pass',
      passwordConfirmation: 'pass'
    }, {
      username: 'henry12',
      email: 'henry@12',
      password: 'pass',
      passwordConfirmation: 'pass'
    }, {
      username: 'sarah63',
      email: 'sarah@63',
      password: 'pass',
      passwordConfirmation: 'pass'
    }
  ])
    .then(users => {
      console.log(`${users.length} users were created`);
    })
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
