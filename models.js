'use strict';

const mongoose = require('mongoose');

// this is our schema to represent our dashboard
const dashSchema = mongoose.Schema({
  header: {type: String, required: true},
  url: {type: String, required: true},
  description: {type: String, required: true},
  // date_created: dateCreated,
  // week: String,
  // archive: Boolean,
});


const userSchema = mongoose.Schema({
  //   firstName: {type: String, required: true},
  //   lastName: {type: String, required: true},
  //   username: {type: String, required: true},
  //   password: {type: String, required: true},
  //   slack: {type: String, required: true},
  //   email: {type: String, required: true},
  //   github:{type: String, required: true},
});

// this is an *instance method* which will be available on all instances
// of the model. This method will be used to return an object that only
// exposes *some* of the fields we want from the underlying data
dashSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    header: this.header,
    url: this.url,
    description: this.description
  };
};

userSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    username: this.username,
    slack: this.slack,
    email: this.email,
    github: this.github
  };
};


// note that all instance methods and virtual properties on our
// schema must be defined *before* we make the call to `.model`.
const Posts = mongoose.model('Posts', dashSchema);
const User = mongoose.model('User', userSchema);
module.exports = {Posts, User};
