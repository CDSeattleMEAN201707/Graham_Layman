var mongoose = require("mongoose");

var posts = require("./../controllers/posts.js");
var comments = require("./../controllers/comments.js");
var Post = mongoose.model("Post");
var Comment = mongoose.model('Comment'); 

// Routes
// Root Request
module.exports = function(app){
    app.get('/', function(req, res) {
        posts.all(req, res);
    })
    app.post("/createPost", function(req, res){
        posts.create(req, res);
    })

    app.post("/createComment/:postId", function(req, res){
        comments.create(req, res);
    })
}

