var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Post = mongoose.model('Post');

/* GET home page. */
router.get('/API/posts/', function(req, res, next) {
  Post.find(function(err, posts){
    if(err){
      return next(err);
    }
    res.json(posts);
  })
});

router.post('/API/posts/', function (req, res, next) {
  let post = new Post(req.body);
  post.save(function(err, rec) {
    if (err){ return next(err); }
    res.json(rec);
  });
}); 

module.exports = router;
