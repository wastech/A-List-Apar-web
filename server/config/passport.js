//load bcrypt
const bCrypt = require('bcrypt-nodejs');
const { Author}  = require("../models");
const LocalStrategy = require('passport-local').Strategy;

module.exports = (passport) => {

  passport.serializeUser((author, done) => {
    done(null, author.id);
  });

  // used to deserialize the user
  passport.deserializeUser((id, done) => {
    Author.findByPk(id).then(author => {
      if (author) {
        done(null, author.get());
      } else {
        done(author.errors, null);
      }
    });
  });

  passport.use(
    'local-signup',
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
      },

      function(req, email, password, done) {
        var generateHash = password => {
          return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };

        Author.findOne({ where: { email: email } }).then(author => {
          if (author) {
            return done(null, false, {
              message: 'That email is already taken'
            });
          } else {
            var userPassword = generateHash(password);
            var data = {
              email: email,
              password: userPassword,
              category: req.body.category,
              userName: req.body.userName,
              bio:req.body.bio,
              url:req.body.url,
              profileImg:req.body.profileImg,


            };

            Author.create(data).then((newUser, created) => {
              if (!newUser) {
                return done(null, false);
              }

              if (newUser) {
                return done(null, newUser);
               
              }
            });
          }
         
        });
      }
    )
  );

  //LOCAL SIGNIN
  passport.use(
    'local-signin',
    new LocalStrategy(
      {
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
      },

      function(req, email, password, done) {
        var Author = author;

        var isValidPassword = (userpass, password) => {
          return bCrypt.compareSync(password, userpass);
        };

        Author.findOne({ where: { email: email } })
          .then(author => {
            if (!author) {
              return done(null, false, { message: 'Email does not exist' });
            }

            if (!isValidPassword(author.password, password)) {
              return done(null, false, { message: 'Incorrect password.' });
            }

            var authorinfo = author.get();

            return done(null, authorinfo);
          })
          .catch(err => {
            console.log('Error:', err);

            return done(null, false, {
              message: 'Something went wrong with your Signin'
            });
          });
      }
    )
  );
};