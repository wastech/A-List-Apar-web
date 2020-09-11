
const express = require('express')
const morgan = require('morgan')
const cors = require('cors');
const bodyParser = require('body-parser')
const article = require('./routes/Article')
const author = require('./routes/author')
const {sequelize}  = require('./models');
const dotenv = require('dotenv')
const config = require('./config/config')


const app = express()
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'))
app.use('/article', article)
app.use('/author', author)
dotenv.config({path: './config.env'});

/*mongoose.connect(process.env.DB_HOST, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true})
.then(() => console.log('MongoDB Connected...'))
.catch((err) => console.log(err))



const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})*/
sequelize.sync({force:false})
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