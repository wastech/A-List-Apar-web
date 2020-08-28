const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors');
const post = require('./routes/Post')
const category = require('./routes/Category')
const mongoose = require('mongoose');
const dotenv = require('dotenv')



const app = express()
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'))
app.use('/post', post)
app.use('/category', category)

dotenv.config({path: './config.env'});

mongoose.connect(process.env.DB_HOST, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('MongoDB Connected...'))
.catch((err) => console.log(err))



const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})