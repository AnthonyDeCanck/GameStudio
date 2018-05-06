var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  title: String,
  author: String,
  //postDate: Date,
  titleImg: String,
  imgList: [String],
  body: String,
  gameURL:String
});	
mongoose.model('Post', PostSchema);