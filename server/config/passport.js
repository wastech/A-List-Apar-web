const passport = require('passport');
const {Author} = require('../model');

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('./config');

passport.use(
    new JwtStrategy({
        jwtFromRequest :ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey:config.authentication.jwtSecret
    },async function(jwtPayload,done){
        try{
            const author = await Author.findOne({
                where:{
                    id:jwtPayload.id
                }
            });
            if(!author){
                return done(new Error(),false);
            }
            return done(null,author);
        }catch (e) {
            console.log(e.message);
        }
    })
);




module.exports = null;