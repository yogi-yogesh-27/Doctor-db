var express       =require("express")
	app           =express()
	bodyParser    =require("body-parser")
	Doctor        =require("./models/doctor")
	Info          =require("./models/info")
	mongoose      =require("mongoose")
	methodOverride=require("method-override")
	passport      =require("passport")
	LocalStrategy =require("passport-local")
	User          =require("./models/user")
	Userdetail    =require("./models/userdetail");
	Comment       =require("./models/comment")
	seedDB        =require("./seeds")
	PythonShell   =require("python-shell")
	// user          =require("./models/user");
seedDB();

	mongoose.connect('mongodb://localhost:27017/EmployeeDB',{userNewUrlParser:true},(err)=>{
		if(!err){console.log('connected');
	}else{
		console.log("error in DB:"+err);
	}
	});
    
var userid="";
app.use(require("express-session")({
	secret:"this is a secret",
	resave:false,
	saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(methodOverride("_method"));
app.set("view engine","ejs");
app.use(function(req,res,next){
	res.locals.currentUser=req.user;
	next();
});

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
		

	res.render("home");	
});

app.get("/Doctors",function(req,res){	
	Doctor.find({},function(err,alldoctors){
		if(err){
			console.log(err)
		}else{
			res.render("Doctors.ejs",{doctors:alldoctors});
		}
	})

});

app.get("/Doctors/:id",function(req,res){
	var special=req.params.id
	Info.find({specialist:special},function(err,foundinfo){
		if(err){
			res.send(err);
		}else{
			res.render("show",{Info:foundinfo});
		}
	});
});

app.get("/Doctors/details/:id",function(req,res){
	var special=req.params.id
	Info.findById(special).populate("comment").exec(function(err,foundDetail){
		if(err){
			res.send(err);
		}else{
			res.render("details",{detail:foundDetail});
		}
	});
});
app.get("/Doctors/details/:id/comment/new",isLoggedIn,function(req,res){
	Info.findById(req.params.id,function(err,detail){
		if(err){
			console.log(err)
		}else{
			res.render("newcomment",{detail:detail})
		}
	})
	
})

app.post("/Doctors/details/:id/comment",isLoggedIn,function(req,res){
	Info.findById(req.params.id,function(err,info){
		if(err){
			console.log(err)
			redirect("/Doctors")
		}else{
			Comment.create(req.body.comment,function(err,comment){
				if(err){
					console.log(err)
				}else{
					info.comment.push(comment);
					info.save();
					res.redirect("/Doctors/details/"+info._id)
				}
			})
		}
	})
})
app.post("Doctors/details",function(req,res){
	var special=req.params.id
	Info.find({specialist:special},function(err,foundinfo){
		if(err){
			res.send(err);
		}else{
			Coordinates.findByIdAndUpdate("5daee544c66c8b0be4d86f9a",function(err,latlong){
				if(err){
					console.log(err)
				}else{
					res.render("show",{Info:foundinfo,coord:latlong});
				}
			})
			
		}
	});
})
app.get("/Consult",function(req,res){
	res.render("consult.ejs");
});

app.get("/register",function(req,res){
	res.render("register");
});

app.post("/register",function(req,res){
	var newUser =new User({username:req.body.username});
	User.register(newUser,req.body.password,function(err,user){
		if(err){
			console.log(err);
			return res.render("register")
		}
		passport.authenticate("local")(req,res,function(){
		Userdetail.create({ username:req.user.username,
			name:"not specified",
			email:"not specified",
			gender:"not specified",
			age:"not specified",
			phone:"not specified"},
		function(err,user){
				if(err){
					console.log(err);	
				} else {
					console.log("user profile created");
				}
			}
		);
				
		res.redirect("/")
		});
	});
})
app.get("/profile",isLoggedIn,function(req,res){
	var d=req.user.username
	Userdetail.find({username:d},function(err,foundDetail){
		if(err){
			res.send(err);
		}else{
			console.log(foundDetail)
			res.render("profile",{detail:foundDetail});
		}
	});
});
app.get("/Contact",function(req,res){
	res.render("contact");
});
app.get("/profile/edit/:id",isLoggedIn,function(req,res){
	userid=req.params.id;
	console.log(userid);
	Userdetail.find({username:req.user.username},function(err,foundDetail){
		if(err){
			res.send(err);
		}else{
			console.log(foundDetail)
			res.render("edit",{detail:foundDetail});
		}
	});
})

app.put("/profile",function(req,res){
	console.log(userid);
	Userdetail.findByIdAndUpdate(userid,req.body.detail,function(err,updatedprofile){
		if(err){
			res.redirect("/");
		}else{
			res.redirect("/")
		}
	})
})
//show login form
app.get("/login",function(req,res){
	res.render("login");
})
//handling login
app.post("/login",passport.authenticate("local",
	{
		successRedirect:"/",
		failureRedirect:"/login"
	}) , function(req,res){
});

app.get("/logout",function(req,res){
	req.logout();
	res.redirect("/");
});

function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
}
app.listen(3602,function(){
	console.log("server started");
});

