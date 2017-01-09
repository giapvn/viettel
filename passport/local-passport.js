'use strict'

var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user.js');

var configPassport = function(passport) {
    passport.serializeUser(function(user, done) {
        console.log('serializing user to session');
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        console.log('deserializing from id to user with id = ' + id);
        User.findById(id, function(err, user) {
            done(err, user);
        })
    });

    passport.use(new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password',
            session: true,
            passReqToCallback: true
        },
        function(req, username, password, done) {
        	User.checkAccountValid(username, password, function(err){
        		if(err){
        			return done(err);
        		}else{
                    return done(null, {username: username, password: password})
                }
        	})
        }
    ));
}

module.exports = configPassport;	