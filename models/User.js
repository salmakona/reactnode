// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const userSchema = new Schema({
//   googleId: String,
// //   credits: { type: Number, default: 0 }
// });

// mongoose.model('users', userSchema);



//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
  googleId: String,
});

mongoose.model('User', userSchema);
