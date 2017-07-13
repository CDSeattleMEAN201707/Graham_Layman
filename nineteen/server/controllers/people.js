var mongoose = require("mongoose");
var Person = mongoose.model("Person");
module.exports = {
    all: function(req, res){
        Person.find(function(err, people){
            if(err){
                console.log("errors");
                res.render("index", {errors:err});
            }
            else{
                res.json(people);
                //res.render("index", {people:people});
            }
        })
    }, //end index   

    create: function(req, res){
        var person = new Person({name:req.params.name});
        person.save(function(err){
            if(err){
                console.log("posting error");
                res.render("index", {errors:err});
            }
            else{
                console.log("no errors");
                res.redirect("/");
            }
        })
    },

    one: function(req, res){
        Person.findOne({name:req.params.name}, function(err, person){
            if(err){
                res.render("index", {error:err});
            }
            else{
                console.log(req.params.name)
                res.json(person);
                //res.render("index", {people:[person]});
            }
        })
    },

    destroy: function(req, res){
        Person.findOneAndRemove({name:req.params.name}, function(err, person){
            if(err){
                res.render("index", {error:err});
            }
            else{
                res.redirect("/");
            }
        })
    }
} //end export