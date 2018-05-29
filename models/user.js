const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
mongoose.Promise = require('bluebird');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

// package which handles errors
userSchema.plugin(require('mongoose-unique-validator'));

// deletes the hash password from the url when requested from the user
userSchema.set('toJSON', {
  transform(doc, json) {
    delete json.password;
    return json;
  }
});

// checks if both passwords match,
// by taking the plain text password submitted from the user in the form and hashing the password
// it then compares that hash password with the one in the database
userSchema.methods.validatePassword = function validatePassword(password){
  return bcrypt.compareSync(password, this.password);
};

// setting passwordConfirmation as a virtual so it is only a temporary variable and doesn't save it in the database.
userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation){
    this._passwordConfirmation = passwordConfirmation;
  });

//Before (pre) any function 'saves' something, run this function to encrypt the password before it is stored:
userSchema.pre('validate', function checkPassword(next){
  if(this.isModified('password') && this._passwordConfirmation !== this.password){
    this.invalidate('passwordConfirmation', 'does not match');
  }
  next();
});

userSchema.pre('save', function hashPassword(next){
  if(this.isModified('password')){
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

module.exports = mongoose.model('User', userSchema);
