const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    minlength: 3,
    maxlength: 70,
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    minlength: 3,
    maxlength:70,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide a valid email',
    ],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please provide email'],
    minlength: 3,
    maxlength: 70,
  }
});

module.exports = mongoose.model('User', UserSchema);
