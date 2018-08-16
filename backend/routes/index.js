var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Post = mongoose.model('Post');

let jwt = require('express-jwt');

let auth = jwt({secret: process.env.GAMESTUDIO_BACKEND_SECRET});

//require multer for the file uploads
var multer = require('multer');
// set the directory for the uploads to the uploaded to
var DIR = './uploads/';
//define the type of upload multer would be doing and pass in its destination, in our case, its a single file with the name photo
  var upload = multer({dest: DIR}).single("photo");


/*var storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      if (err) return cb(err)

      cb(null, raw.toString('hex') + path.extname(file.originalname))
    })
  }
})

var upload = multer({ storage: storage }).single("photo");*/

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

router.delete('/API/posts/:post', auth, function (req, res) {
  req.post.remove(function (err) {
    if (err) {
        return next(err);
    }
    res.json(req.post);
});
});

router.get('/API/upload/:image', function(req, res, next) {
  });
  
  //our file upload function.
  router.post('/API/upload', function (req, res, next) {
    console.log("in the post upload backend function");
       var path = '';
       console.log("path initialized");
       upload(req, res, function (err) {
         console.log("in actual upload");
          if (err) {
            console.log("an error occurred");
            // An error occurred when uploading
            console.log(err);
            return res.status(422).send("an Error occured")
          }  
         // No error occured.
          path = req.file.path+".jpg";
          console.log(path);
          return res.send("Upload Completed for "+path); 
    });
    console.log("upload never started");    
  })

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

router.param('image', function(req, res, next, id) {
  let image = new File();
  
});

module.exports = router;
