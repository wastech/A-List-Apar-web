const mongoose=require('mongoose');

const authorSchema= mongoose.Schema({
    name:{type:String,required:true},
    userName:{type:String, unique:true,required:true},
    password:{type:String, required:true},
    bio:String,
    website:String,
    posts: [
        {
           type: mongoose.Schema.Types.ObjectId,
           ref: 'Post'
        }
     ],
     profileImg:{type:String,default:"www.google.com"},
      email:{type:String, required:true}
})

module.exports=mongoose.model('Author',authorSchema);