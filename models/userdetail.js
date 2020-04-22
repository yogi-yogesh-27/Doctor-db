var mongoose=require("mongoose");
var passportLocalMongoose=require("passport-local-mongoose")

var UserdetailSchema=new mongoose.Schema({
    username:String,
	name:String,
	email:String,
	gender:String,
	age:String,
	phone:String
});

UserdetailSchema.plugin(passportLocalMongoose);
module.exports =mongoose.model("Userdetail",UserdetailSchema);