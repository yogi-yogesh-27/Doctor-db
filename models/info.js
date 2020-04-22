var mongoose=require("mongoose");
var infoSchema=new mongoose.Schema({
	DocName: String,
	docimage: String,
	specialist: String,
	address: String,
	phone:String,
	comment:[
		{
			type:mongoose.Schema.Types.ObjectId,
			ref:"Comment"
		}
	]
});
module.exports =mongoose.model("Info",infoSchema);