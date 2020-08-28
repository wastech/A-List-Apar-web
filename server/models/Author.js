const mongoose=require('mongoose');

const authorSchema= mongoose.Schema({
    name:{type:String,required:true},
    bio:String,
    website:String,
    posts: [
        {
           type: mongoose.Schema.Types.ObjectId,
           ref: 'Post'
        }
     ],
     profileImg:{type:String,default:"www.google.com"}
})

module.exports=mongoose.model('Author',authorSchema);