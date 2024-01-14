const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("Post", PostSchema);