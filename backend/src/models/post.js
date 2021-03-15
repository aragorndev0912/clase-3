const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  title: String,
  description: String,
  originalname: String,
  mimetype:String,
  destination:String,
  filename:String,
  path:String,
  created: {
    type: Date,
    default: Date.now()
  }
});


module.exports = model('post', postSchema);