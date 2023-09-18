const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    device: String,
    author: {
      // soft relation
      title: String,
      body: String,
    },

    // author: {
    //     type: mongoose.Types.ObjectId,
    //     ref: 'User'
    // }

    // commentCount: Number
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", PostSchema); // collection - posts

module.exports = {
  Post,
};
