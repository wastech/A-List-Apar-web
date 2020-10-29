//load bcrypt
const bCrypt = require("bcrypt-nodejs");
const { Author } = require("../models");
const LocalStrategy = require("passport-local").Strategy;

module.exports = (passport) => {
    passport.serializeUser((author, done) => {
        console.log("====>serializeUser", author.id);
        done(null, author.id);
    });

    // used to deserialize the user
    passport.deserializeUser((id, done) => {
        console.log("****====>  deserializeUser", id);

        Author.findByPk(id).then((author) => {
            if (author) {
                done(null, author.get());
            } else {
                done(author.errors, null);
            }
        });
    });

    passport.use(
        "local-signup",
        new LocalStrategy(
            {
                usernameField: "email",
                passwordField: "password",
                passReqToCallback: true, // allows us to pass back the entire request to the callback
            },
            function(req, _, _, done) {
                const { email, password } = req.body;
                var generateHash = (password) => {
                    return bCrypt.hashSync(
                        password,
                        bCrypt.genSaltSync(8),
                        null
                    );
                };

                return Author.findOne({ where: { email: email } }).then(
                    (author) => {
                        if (author) {
                            return done("That email is already taken");
                        } else {
                            var userPassword = generateHash(password);

                            Author.create({
                                email: email,
                                password: userPassword,
                                category: req.body.category,
                                userName: req.body.userName,
                                bio: req.body.bio,
                                url: req.body.url,
                                profileImg: req.body.profileImg,
                            })
                                .then((newUser) => {
                                    return done(null, newUser.dataValues);
                                })
                                .catch((err) => {
                                    console.log(err);
                                });
                        }
                    }
                );
            }
        )
    );

    //LOCAL SIGNIN
    passport.use(
        "local-signin",
        new LocalStrategy(
            {
                usernameField: "email",
                passwordField: "password",
                passReqToCallback: true, // allows us to pass back the entire request to the callback
            },

            function(req, email, password, done) {
                var isValidPassword = (userpass, password) => {
                    return bCrypt.compareSync(password, userpass);
                };

                Author.findOne({ where: { email: email } })
                    .then((author) => {
                        if (!author) {
                            return done({ message: "Email does not exist" });
                        }

                        if (!isValidPassword(author.password, password)) {
                            return done({ message: "Incorrect password." });
                        }

                        var authorinfo = author.get();

                        return done(null, authorinfo);
                    })
                    .catch((err) => {
                        // console.log("Error:", err);
                        console.log(err);
                        return done({
                            message: "Something went wrong with your Signin",
                        });
                    });
            }
        )
    );
};