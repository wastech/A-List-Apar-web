const {Author, Article} = require("../models");
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}


module.exports = {

  //*Save author details
   async addAuthor (req, res) {
    try {
      const user = await Author.create(req.body)
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(400).send({
        error:  err + 'This email account is already in use.'
      })
    }
},


//!get author's posts by author ID
async getAuthor(req, res) {
try {
  const  userName  = req.params.userName;
  const author = await Author.findOne({
    where:{
      userName:userName
    },
    include: [{
			model: Article,
			as: 'articles'
		}]
  });
  if (author === null || author === undefined) {
    return res.send({
      message: "no author found ",
    });
  }

  res.send(author);
} catch (err) {
  res.json({
    message: "Error Processing Function",
    error: err.message,
  });
}

},

/*
//*Get all posts of an author
async getAuthorPost(req,res){
  try {
    const authorID = req.params.authorID;
    const author = await Author.findByPk({
      where: {
        authorID: authorID,
      },
    });
    if (author === null || author === undefined) {
      return res.status(404).send({
        message: "no author found",
      });
    }

    res.status(200).send(post);
  } catch (err) {
    res.status(500).json({
      message: "Error Processing Function",
      error: err.message,
    });
  }

},*/


//*get all author details
async allAuthorDetails(req,res){
  try{
    const posts = await  Author.findAll()
    res.status(200).json(posts) .send({
      msg:'successfully get data to the database'
  })
} catch(err) {
    res.status(500).send({
      error: err + 'an error has occured while trying to fetch  posts'
  })
  
}
},



//*Signin

 async signIn(req, res){  
    try {
      const {email, password} = req.body
      const user = await Author.findOne({
        where: {
          email: email
        }
      })

      if (!user) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }

      const isPasswordValid = await user.comparePassword(password)
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }

      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(500).send({
        error: err+  'An error has occured trying to log in'
      })
    }
  }
}
