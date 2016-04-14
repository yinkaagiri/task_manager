var mongoose = require("mongoose");

var ConceptSchema = new mongoose.Schema(
  {
    title: String,
    description: Text,
    resources; String,
    entered-date: String,
    read-date: String
  }
);

mongoose.model("Jargon", ConcepSchema);
if(process.env.NODE_ENV == "production"){
 mongoose.connect(process.env.MONGODB_URL);
}else{
 mongoose.connect("mongodb://localhost/jargon");
}

module.exports = mongoose;
