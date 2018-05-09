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

router.get('/API/posts/:post', function(req, res, next) {
  res.json(req.post);
});

router.get('/API/posts/byAuthor/:author', function(req, res, next) {
  res.json(req.author);
});
router.post('/API/posts/', function (req, res, next) {
  let post = new Post(req.body);
  post.save(function(err, rec) {
    if (err){ return next(err); }
    res.json(rec);
  });
}); 

router.delete('/API/posts/:post', function (req, res) {
  req.post.remove(function (err) {
    if (err) {
        return next(err);
    }
    res.json(req.post);
});
});

router.param('post', function(req, res, next, id) {
  let query = Post.findById(id);
  query.exec(function (err, post){
    if (err) { return next(err); }
    if (!post) { return next(new Error('not found ' + id)); }
    req.post = post;
    return next();
  });
});

router.param('author', function(req, res, next, id) {
  let query = Post.find({'author' : id});
  query.exec(function (err, author){
    if (err) { return next(err); }
    if (!author) { return next(new Error('not found ' + id)); }
    req.author = author;
    return next();
  });
});

module.exports = router;
