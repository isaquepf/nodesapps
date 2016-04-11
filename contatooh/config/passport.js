var passport = require('passport'),
    gitHubStrategy = require('passport-github').Strategy,
    mongoose = require('mongoose');

module.exports = function() {
    var Usuario = mongoose.model('Usuario');

    passport.use(new gitHubStrategy({
        clientID: '396042ffe8cb8f30051a',
        clientSecret: 'f92587b7e971040f72fdb2393b6598a110df7451',
        callbackURL: 'http://localhost:3000/auth/github/callback'
    }, function(accessToken, refreshToken, profile, done) {

        Usuario.findOrCreate({
            "login": profile.username
        }, {
                "nome": profile.username
            }, function(erro, usuario) {
                if (erro) {
                    console.log(erro);
                    return done(erro);
                }
                return done(null, usuario);
            });
    }));

    passport.serializeUser(function(usuario, done) {
        done(null, usuario._id);
    });

    passport.deserializeUser(function(id, done) {
        Usuario.findById(id).exec()
            .then(function(usuario) {
                done(null, usuario);
            });
    });
};