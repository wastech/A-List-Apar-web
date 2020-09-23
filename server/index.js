
const express = require('express')
const session = require('express-session');
const morgan = require('morgan')
const passport = require('passport');
const cors = require('cors');
const bodyParser = require('body-parser')
const article = require('./routes/Article')
const author = require('./routes/Author')
const event = require('./routes/Event')
const {sequelize}  = require('./models');
const dotenv = require('dotenv')
const config = require('./config/config')


const app = express()
// Passport Config
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'))

// Express session middleware
// =============================================
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


// Routing
// =============================================
app.use('/article', article)
app.use('/author', author)
app.use('/event', event)
dotenv.config({path: './config.env'});


sequelize.sync()
    .then(()=>{
        app.listen(config.port,(err)=>{
            if(!err){
                console.log('Listening on Port ' + config.port);
            }else{
                console.log('Error Listening to Port' +config.port);
            }
        });
}).catch(error=>{
    console.log('error',error.message);
});

module.exports = app