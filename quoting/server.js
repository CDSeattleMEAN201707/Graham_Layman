// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/quotingDb');
// Use native promises
mongoose.Promise = global.Promise;

//adding Schemas here
var QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true},
    quote: {type: String,required: true}
}, {timestamps: true}) 

mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'Quote'
var Quote = mongoose.model('Quote') // We are retrieving this Schema from our Models, named 'Quote'

// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');



// Routes
// Root Request
app.get('/', function(req, res) {
    res.render('index', {title:false});
})
// Add User Request 
app.post('/quotes', function(req, res) {
  console.log("POST DATA", req.body);
  // create a new Quote with the name and quote corresponding to those from req.body
  var quote = new Quote({name: req.body.name, quote: req.body.quote});
  // Try to save that new quote to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
  quote.save(function(err) {
    // if there is an error console.log that something went wrong!
    if(err) {
      res.render("index", {title: "You done messed up!", errors: quote.errors})
    } else { // else console.log that we did well and then redirect to the root route
      console.log('successfully added a quote!');
      res.redirect('/quotes');
    }
  })
})
app.get("/quotes", function(req,res){
    Quote.find({},function(err, quotes){
        if(err){

        }
        else{
            res.render("quotes", {quotes:quotes} );
        }
    });
    
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})