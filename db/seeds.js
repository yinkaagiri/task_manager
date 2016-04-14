var mongoose  = require("./connection");
var seedData  = require("./seeds");

var Jargon = mongoose.model("Jargon");

Jargon.remove({}).then(function(){
  Jargon.collection.insert(seedData).then(function(){
    process.exit();
  });
});
