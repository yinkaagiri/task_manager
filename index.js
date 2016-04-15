var express = require("express");
var hbs = require("express-handlebars");
var mongoose = require("./db/connection");

var app = express();

var Jargon = mongoose.model("Jargon");

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname: ".hbs",
  partialsDir : "views/",
  layoutsDir: "views/",
  defaultLayout: "layout-main"
}));

app.get("/jargon", function(req, res){
  Jargon.find({}).then(function(jargons){
    res.render("jargon-index", {
      jargons: jargons
    });
  });
});

app.get("/jargons/:title", function(req, res){
  Jargon.findOne({title: req.params.title}).then(function(jargon){
    res.render("jargon-show", {
      jargon: jargon
    });
  });
});
app.listen(3001, function(){
  console.log("It's aliiive!");
});
