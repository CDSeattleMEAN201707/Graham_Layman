var mongoose = require("mongoose");
//var Schema = mongoose.Schema;

var postSchema = new mongoose.Schema({
    name: {type: String, required: true},
    post: {type: String, required: true},
    _comments: [{type: mongoose.Schema.Types.ObjectId, ref:'Comment'}]
}, {timestamps: true}) 

var Post = mongoose.model("Post", postSchema);