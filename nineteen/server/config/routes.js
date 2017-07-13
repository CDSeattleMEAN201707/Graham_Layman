var mongoose = require("mongoose");

var people = require("./../controllers/people.js");
var Person = mongoose.model("Person");

// Routes
// Root Request
module.exports = function(app){
    app.get('/', function(req, res) {
        people.all(req, res);
    })

    app.get("/person/:name", function(req, res){
        people.one(req,res);
    })

    app.get("/person/new/:name", function(req, res){
        people.create(req, res);
    })

    app.get("/person/destroy/:name", function(req, res){
        people.destroy(req, res);
    })
}

