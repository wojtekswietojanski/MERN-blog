const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  imgUrl: { type: String, required: false },
});

const PostModel = model("Post", PostSchema);

module.exports = PostModel;
