// create schema in backend

const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  // title: String
  title: { type: String, required: true },
  content: { type: String, required: true }
});

module.exports = mongoose.model('Post', postSchema);
