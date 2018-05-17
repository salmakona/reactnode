const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');
   // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: 'http://127.0.0.1:8080/auth/google/callback',
      proxy: true,
      passReqToCallback : true
    },
    //(accessToken, refreshToken, profile, done)=>{
    //     User.findOne({ googleId: profile.id })
    //   if (existingUser) {
    //     return done(null, existingUser);
    //   }
    //   const user =  new User({ googleId: profile.id }).save();
    //   done(null, user);
    //console.log(profile)
    // User.findOne({googleId: profile.id}).then(existingUser =>{
    //         if (existingUser) {
    //             done(null,existingUser);
    //         }else{
                // new User({googleId: profile.id})
                // .save()
                // .then(user =>done(null, user))
    //         }
    // });
   // }
    function(req,accessToken, refreshToken, profile, done) {
        process.nextTick(function() {
            var user    = profile.id; // pull the user out of the session
            if(user){
                new User({googleId: user}).save();
            }
            // var newUser = new User();
            // console.log(user);
            // var user1 = req.user;
            // var user1 = req.user;
            // console.log(user1);
            // new User({googleId: user}).save();
        })
    })
);