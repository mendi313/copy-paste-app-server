const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  text: String,
  creatorId: String,
  password: String,
  url: String,
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', postSchema);
