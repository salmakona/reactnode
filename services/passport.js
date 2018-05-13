const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/key');

const User = mongoose.model('users');

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   User.findById(id).then(user => {
//     done(null, user);
//   });
// });

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.clientID,
      clientSecret: keys.clientSecret,
      callbackURL: keys.callbackURL,
      proxy: true
    }, 
    function(accessToken, refreshToken, profile, done) {
      // var newUser          = new User();
      // // set all of the relevant information
      // newUser.google.id    = profile.id;
      // newUser.google.token = token;
      // newUser.google.name  = profile.displayName;
      // newUser.google.email = profile.emails[0].value; 
      // newUser.save(function(err) {
      // if (err)
      //     throw err;
      // return done(null, newUser);
      // });

      
      console.log(profile)
      }
    )
);


// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   User.findById(id).then(user => {
//     done(null, user);
//   });
// });

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: keys.clientID,
//       clientSecret: keys.clientSecret,
//       callbackURL: keys.callbackURL,
//       proxy: true
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       const existingUser = await User.findOne({ googleId: profile.id });

//       if (existingUser) {
//         return done(null, existingUser);
//       }

//       const user = await new User({ googleId: profile.id }).save();
//       done(null, user);
//     }
//   )
// );





// passport.use(
//   new GoogleStrategy(
//     clientId: keys.clientID,
//     clientSecret:  keys.clientSecret,
//     callbackURL: keys.callbackURL,
//      proxy: true
//   },
//   function(accessToken, refreshToken, profile, done) {
//     // User.findOrCreate((, function (err, user) {
//     //   done(err, user);
//     // });
//     new User({ googleId: profile.id }).save();
//     done(err, user);
//   }
// ))