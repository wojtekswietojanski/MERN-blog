const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  imgUrl: { type: String, required: false },
  username: { type: String, required: true },
  todayFormatted: { type: String, required: true },
});

const PostModel = model("Post", PostSchema);

module.exports = PostModel;
