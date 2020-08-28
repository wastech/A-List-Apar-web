const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");

const postSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  body: String,
  category: String,
  imageUrl: {
    type: String,
    default: "https://images5.alphacoders.com/713/thumb-1920-713442.jpg",
  },
  date: { type: String, default: moment().format("MMMM Do YYYY, h:mm:ss a") },
  topics: [{ code: "", content: "", design: "", process: "" }],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
  },
});

var Post = mongoose.model("Post", postSchema);

module.exports = Post;
