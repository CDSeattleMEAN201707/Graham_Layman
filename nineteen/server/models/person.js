var mongoose = require("mongoose");
//var Schema = mongoose.Schema;

var personSchema = new mongoose.Schema({
    name: {type: String, required: true},
}, {timestamps: true}) 

var Person = mongoose.model("Person", personSchema);