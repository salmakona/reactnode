const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

var userModel = mongoose.model('User');

   // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        userModel.findById(id, function(err, user) {
            done(err, user);
        });
    });
    passport.use(new GoogleStrategy({
        clientID:keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: keys.callbackURL
    },
    function(accessToken, refreshToken, profile, done) {
            // var Bee = new userModel({ 
            //         googleId: profile.id
            // })
            // Bee.create(function(error) {
            //     console.log("Your bee has been saved.");
            //     if(error){
            //         console.error(error);
            //     }
            // });
            userModel.findOne({googleId: profile.id}).then(existingUser=>{
                if(existingUser){
                    console.log(existingUser);
                    done(null, existingUser);
                }else{
                    const Test = new userModel({googleId: profile.id})
                    Test.save(function (err) {
                        if (err) return handleError(err);
                        // saved!
                    }).then(user => done(null, user));
                }
            });
        }
    ));