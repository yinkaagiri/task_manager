var mongoose  = require("./connection");
var seedData  = require("./seeds");

var Jargon = mongoose.model("Jargon");

Concept.remove({}).then(function(){
  Concept.collection.insert(seedData).then(function(){
    process.exit();
  });
});
