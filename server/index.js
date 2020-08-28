const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors');
const dotenv = require('dotenv')



const app = express()
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// load env
dotenv.config({path: './config.env'});


const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})