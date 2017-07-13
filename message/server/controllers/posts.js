var mongoose = require("mongoose");
var Post = mongoose.model("Post");
module.exports = {
    all: function(req, res){
        Post.find().populate("_comments").exec(function(err, posts){
            if(err){
                console.log("errors");
                res.render("index", {errors:err});
            }
            else{
                res.render("index", {posts:posts});
            }
        })
    }, //end index   

    create: function(req, res){
        var post = new Post(req.body);
        post._comments = [];
        post.save(function(err){
            if(err){
                console.log("posting error");
                res.render("index", {errors:err});
            }
            else{
                console.log("no errors");
                res.redirect("/");
            }
        })
    }
} //end export