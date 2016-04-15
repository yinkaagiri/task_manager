var mongoose = require("mongoose");
var seedData = require("./seeds.json");

var JargonSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    resources: String,
    entered_date: String,
    read_date: String
  }
);

mongoose.model("Jargon", JargonSchema);
if(process.env.NODE_ENV == "production"){
 mongoose.connect(process.env.MONGODB_URL);
}else{
 mongoose.connect("mongodb://localhost/jargon");
}

module.exports = mongoose;
