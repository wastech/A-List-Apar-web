const {Author} = require("../models");
const jwt = require('jsonwebtoken');
const config = require('../config/config');

function jwtSignUser(author){
  const ONE_WEEK= 60*60*24*7;
  return jwt.sign(author,config.authentication.jwtSecret,{
      expiresIn: ONE_WEEK
  })
}

module.exports = {

  //*Save author details
  async addAuthor (req, res) {
    try{
      const author = await Author.create(req.body);
      res.status(201).json({
          message:'User Created Successfully',
          author,
          token:jwtSignUser(author.toJSON())
      })
      console.log(author)
  }catch (e) {
      console.log(e.message);
      res.status(409).json({
          error:'Email Address is Already in use, Please Try another email'
      })
  }
},


//* get an author
async getAuthor(req, res) {
try {
  const userName = req.params.username;
  const author = await Author.findByPk({
    where: {
      username: username,
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

},


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

},


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

 async signIn(req, res,next){  
  
  try{
    const {email,password} = req.body;
    const author = await Author.findOne({
       where:{
           email:email
       }
    });
    if(!author){
        return  res.status(403).json({
            error:'Provided Information was Incorrect'
        })
    }
        const isPasswordValid = await author.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(403).json({
                error: 'Provided Information is not Correct'
            });
        }

    res.status(201).json({
        message:'Authentication was Successful',
        author,
        token:jwtSignUser(author.toJSON())
    });

}catch (e) {
    res.status(500).json({
        error:e.message
    })
}
 }
}
