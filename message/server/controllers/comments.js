var mongoose = require("mongoose");
var Comment = mongoose.model("Comment");
var Post = mongoose.model("Post");

module.exports = {
    create: function(req, res){
        Post.findOne({_id:req.params.postId}, function(err, post){
            var comment = new Comment(req.body);
            comment._post = post._id;
            comment.save(function(err){
                post._comments.push(comment);
                post.save(function(err){
                    if(err){
                        console.log("errors");
                    }
                    else{
                        res.redirect("/");
                    }
                })
            })
        })
    }
}