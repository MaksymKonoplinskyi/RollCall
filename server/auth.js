const passport = require('passport');
const models = require('./models/models')
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function (user, done) {
  /*
  From the user take just the id (to minimize the cookie size) and just pass the id of the user
  to the done callback
  PS: You dont have to do it like this its just usually done like this
  */
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  /*
  Instead of user this function usually recives the id 
  then you use the id to select the user from the db and pass the user obj to the done callback
  PS: You can later access this data in any routes in: req.user
  */
  done(null, user);
});

passport.use(new GoogleStrategy({
  clientID: "108344980966-036p4rd8cs1gggvhk0n3asu9ccsjeo64.apps.googleusercontent.com",
  clientSecret: "v9bmquL6fhJ-D4Z1aZnpHRzP",
  callbackURL: "http://localhost:5000/google/callback",
  passReqToCallback: true /////
},
  function (accessToken, refreshToken, profile, done) {
    console.log(profile); 
    /*
     use the profile info (mainly profile id) to check if the user is registerd in ur db
     If yes select the user and pass him to the done callback
     If not create the user and then select him and pass to callback

     User.findOrCreate({googleId: profile.id}, function (err,user) {
     return done(err, user);
 
     })
    */
    return done(null, profile); 
  }
)); 
