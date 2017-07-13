var mongoose = require("mongoose");


var commentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    comment: {type: String, required: true},
    _post: {type: mongoose.Schema.Types.ObjectId, ref:"Post"}
}, {timestamps:true})


var Comment = mongoose.model('Comment', commentSchema);
