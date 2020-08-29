const Author = require("../models/Author");
const bcrypt=require('bcrypt');

module.exports = {

  //Save author details
  async addAuthor (req, res) {
    let author= await  Author.findOne({email:req.body.email});
    if(author)
        return res.status(400).send('User already registered');

    const salt= await  bcrypt.genSalt(10);
    const hashedValue= await bcrypt.hash(req.body.password,salt);
    author=new Author({
        email:req.body.email,
        password:hashedValue,
        userName:req.body.userName,
        name:req.body.name,
        bio:req.body.bio,
        website:req.body.website,
        profileImg:req.body.profileImg
    })
    author.save(function(err, author) {
      if (err) {
        console.log(err);
        return res.status(500).end();
      }
      res.status(201).json(author);
    });
  },

  //!get author details
  getAuthor(req, res) {
    Author.find({userName:req.params.username}).populate('posts').exec((err,result)=>{
      if(err)
          res.status(202).send(err);
      res.json(result);
  })
  },

  //! Update Author
  async updateAuthor(req, res) {
    let author= await  Author.find({'userName':req.body.userName}).populate('posts');
    if(!author)
        return res.status(400).send('An Error Occured! Please try again later.');

    if(req.body.password){
        const salt= await  bcrypt.genSalt(10);
        const hashedValue=await bcrypt.hash(req.body.password,salt);
        author[0].password=hashedValue;
    }
    if(req.body.profileImg)
        author[0].profileImg=req.body.profileImg;
    if(req.body.website)
        author[0].website=req.body.website;
    if(req.body.bio)
        author[0].bio=req.body.bio;   

    const newResult= author[0].save();
    res.json(newResult);    
     
},
//!Get all posts of an author
getAuthorPost(req,res){
  Author.findById(req.params.authorID).populate('posts').exec((err,result)=>{
      if(err)
          res.status(202).send(err);
      res.json(result);
  })

},

// !Get All Author Details

allAuthorDetails(req,res){
  Author.find({}).exec((err,result)=>{
      if(err)
          res.status(202).send(err);
      res.json(result);
  })
},



//? Signin

 async signIn(req, res,next){  
  
   try{
    const {email, password} = req.body
  let author= await Author.find({'email':req.body.email}).populate('posts');
  if(!author)
      return res.status(400).send('No User found with the given email'); 


  const validPassword= await  bcrypt.compare(req.body.password, author[0].password);
  if(!validPassword)
      return res.status(400).send("The Email or Password Provided is Incorrect");

  res.json(author[0]);
  

 }
 catch(err){
   next(err)
 }
 }
}
