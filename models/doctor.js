var mongoose=require("mongoose");
var doctorSchema=new mongoose.Schema({
	name: String,
	image: String,
	description: String,
	city: String,
});
module.exports =mongoose.model("Doctor",doctorSchema);

