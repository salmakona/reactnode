const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/key');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.clientID,
      clientSecret: keys.clientSecret,
      callbackURL: keys.callbackURL,
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }
      new User({ googleId: profile.id }).save();
    }
  )
);
