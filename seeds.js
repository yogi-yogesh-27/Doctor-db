var mongoose =require("mongoose")
var Info=require("./models/info")
var Comment=require("./models/comment");
var data=[{ DocName: "Dr.P.Anandhi",
docimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Bdfui-aGfhBbLlGfc-972JmuQiT4qLC-zWndj1x3RGI-mj9Ypw" ,
specialist: "Gynecologist",
address:"VIT Main Rd, opp. E.B.Office, V G Rao Nagar, V.G, P. Nagar, Katpadi, Vellore, Tamil Nadu 632007",phone:"085085 66558"},
{ DocName: "Dr.Sandhya babu",
docimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Bdfui-aGfhBbLlGfc-972JmuQiT4qLC-zWndj1x3RGI-mj9Ypw" ,
specialist: "Gynecologist",
address:" No.565,, Phase.I, Sathuvachary, Vellore, Tamil Nadu 632009",phone:"0416 225 3357"},
{ DocName: "Dr.Priya",
docimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Bdfui-aGfhBbLlGfc-972JmuQiT4qLC-zWndj1x3RGI-mj9Ypw" ,
specialist: "Gynecologist",
address:"  No 27, Veepamaram Street, Vellore 632001, Vellore - 632001, Opposite Swamy Sweet Stall Velapadi ",phone:"91526554678"},

{ DocName: "Herbalife Vellore nutrition center",
docimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Bdfui-aGfhBbLlGfc-972JmuQiT4qLC-zWndj1x3RGI-mj9Ypw" ,
specialist: "Nutritionist",
address:"40, VIT Main Rd, NEAR CHITTOR BUS STAND, V G Rao Nagar, Bharathi Nagar, Katpadi, Vellore, Tamil Nadu 632006 ",phone:"082209 27461"},
{ DocName: "Sanjeevan",
docimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Bdfui-aGfhBbLlGfc-972JmuQiT4qLC-zWndj1x3RGI-mj9Ypw" ,
specialist: "Nutritionist",
address:" Aruppumedu Rd, behind bambay Anandhabhavan, dr.gopala, Krishna Nagar, Katpadi, Vellore, Tamil Nadu 632006",phone:" 099947 47528"},


{ DocName: "Dr.V. Giridharan",
docimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Bdfui-aGfhBbLlGfc-972JmuQiT4qLC-zWndj1x3RGI-mj9Ypw" ,
specialist: "General physician",
address:"Sri Lakshmi Complex, Periya, Allahpuram Main Road, Vellore, Tamil Nadu 632002",phone:"097863 19915"},
{ DocName: "D R Ashok",
docimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Bdfui-aGfhBbLlGfc-972JmuQiT4qLC-zWndj1x3RGI-mj9Ypw" ,
specialist: "General physician",
address:"No. 4, East Main Road, East Main Road, Near Swastik, Gandhi Nagar, Vellore, Tamil Nadu 632006",phone:"99424 14696"},
{ DocName: "Dr Ranga Swamy",
docimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Bdfui-aGfhBbLlGfc-972JmuQiT4qLC-zWndj1x3RGI-mj9Ypw" ,
specialist: "General physician",
address:"Vivek Complex, Thennamara St, near Selvam Medical, Big Ali Puran, Kosapet, Vellore, Tamil Nadu 632001",phone:"094893 37828"},
{ DocName: "Dr.Thiyagarajan",
docimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Bdfui-aGfhBbLlGfc-972JmuQiT4qLC-zWndj1x3RGI-mj9Ypw" ,
specialist: "General physician",
address:"18,Thiyagarajapuram, officers line, Yadhavar St, Sasthri Nagar, Veerasamy Nagar, Vellore, Tamil Nadu 632001",phone:"0416 222 7228"},

{ DocName: "Rajan physiotheraphy",
docimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Bdfui-aGfhBbLlGfc-972JmuQiT4qLC-zWndj1x3RGI-mj9Ypw" ,
specialist: "Physiotherapist",
address:"No. 17, 3rd Street, Jayam Nagar, Phase 3, Sathuvachari, Vellore, Tamil Nadu 632009",phone:"93453 03996"},
{ DocName: "Shree Nidhi Physiotherapy",
docimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Bdfui-aGfhBbLlGfc-972JmuQiT4qLC-zWndj1x3RGI-mj9Ypw" ,
specialist: "Physiotherapist",
address:"No: 14, 646 A, 42nd St, near Bhuvaneswari Lodge, Phase 2, Sathuvachari, Vellore, Tamil Nadu 632009",phone:"99944 17011"},
{ DocName: "Aravind Physiotherapy",
docimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Bdfui-aGfhBbLlGfc-972JmuQiT4qLC-zWndj1x3RGI-mj9Ypw" ,
specialist: "Physiotherapist",
address:"8th Cross, Rajiv Gandhi Nagar Opp to Mangalaraman Kalyana Mandapam, Ezhil Nagar Main Rd, Periya Allapuram, Vellore, Tamil Nadu 632002",phone:"99942 68810"},


{ DocName: "Dr E Sivakumar",
docimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Bdfui-aGfhBbLlGfc-972JmuQiT4qLC-zWndj1x3RGI-mj9Ypw" ,
specialist: "Ent",
address:" No.68 Officers line Krishna nagar , opposite to ICICI Bank, Vellore, Tamil Nadu 632001",phone:"0416 222 0151"},
{ DocName: "Dr.Dhanalakshmi",
docimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Bdfui-aGfhBbLlGfc-972JmuQiT4qLC-zWndj1x3RGI-mj9Ypw" ,
specialist: "Ent",
address:" Nagalingeswara Swamy St, Rahim Nagar, Palavansathu, Thorapadi, Virupatchipuram, Tamil Nadu 632002",phone:"089034 15597"},
{ DocName: "Dr Ranga Swamy",
docimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Bdfui-aGfhBbLlGfc-972JmuQiT4qLC-zWndj1x3RGI-mj9Ypw" ,
specialist: "Ent",
address:"Vivek Complex, Thennamara St, near Selvam Medical, Big Ali Puran, Kosapet, Vellore, Tamil Nadu 632001",phone:"9094893 37828"},

{ DocName: "Maithreya",
docimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Bdfui-aGfhBbLlGfc-972JmuQiT4qLC-zWndj1x3RGI-mj9Ypw" ,
specialist: "Pediatrician",
address:"No: 81, Thennamaram Street, Behind Raja Theatre, Kosapet, Vellore, Tamil Nadu 632001",phone:"94875 75472"},
{ DocName: "Dr Arulalan",
docimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Bdfui-aGfhBbLlGfc-972JmuQiT4qLC-zWndj1x3RGI-mj9Ypw" ,
specialist: "Pediatrician",
address:"No.17, 10th East Cross, Street, Gandhi Nagar, Vellore, Tamil Nadu 632006",phone:"083009 35560"},
{ DocName: "Dr M Gomathi ",
docimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Bdfui-aGfhBbLlGfc-972JmuQiT4qLC-zWndj1x3RGI-mj9Ypw" ,
specialist: "Pediatrician",
address:"No: 265-B, RTO Office Road, Phase II Opp to Bombay Anandha, Sathuvachari, Vellore, Tamil Nadu 632009 ",phone:"94865 25386"},


{ DocName: "Dr.V. Giridharan",
docimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Bdfui-aGfhBbLlGfc-972JmuQiT4qLC-zWndj1x3RGI-mj9Ypw" ,
specialist: "Orthopedist",
address:"Sri Lakshmi Complex, Periya, Allahpuram Main Road, Vellore, Tamil Nadu 632002",phone:"97863 19915"},
{ DocName: "Dr.Loganathan.S ",
docimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Bdfui-aGfhBbLlGfc-972JmuQiT4qLC-zWndj1x3RGI-mj9Ypw" ,
specialist: "Orthopedist",
address:"24, Vella Mundy St, Balaji Nagar, Vellore, Tamil Nadu 632004",phone:"098946 81179"},
{ DocName: " Dr.Ashok Kumar",
docimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Bdfui-aGfhBbLlGfc-972JmuQiT4qLC-zWndj1x3RGI-mj9Ypw" ,
specialist: "Orthopedist",
address:"Sri Narayani Hospital & Research Centre Thirumalaikodi, Thirumalaikodi, Vellore, Tamil Nadu 632055",phone:" 0416 220 6300"},

{ DocName: "Dr.V. Giridharan",
docimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Bdfui-aGfhBbLlGfc-972JmuQiT4qLC-zWndj1x3RGI-mj9Ypw" ,
specialist: "General surgeon",
address:"Sri Lakshmi Complex, Periya, Allahpuram Main Road, Vellore, Tamil Nadu 632002",phone:"97863 19915"},
{ DocName: "Dr.Loganathan.S ",
docimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Bdfui-aGfhBbLlGfc-972JmuQiT4qLC-zWndj1x3RGI-mj9Ypw" ,
specialist: "General surgeon",
address:"24, Vella Mundy St, Balaji Nagar, Vellore, Tamil Nadu 632004",phone:"098946 81179"},
{ DocName: " Dr.Ashok Kumar",
docimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Bdfui-aGfhBbLlGfc-972JmuQiT4qLC-zWndj1x3RGI-mj9Ypw" ,
specialist: "General surgeon",
address:"Sri Narayani Hospital & Research Centre Thirumalaikodi, Thirumalaikodi, Vellore, Tamil Nadu 632055",phone:" 0416 220 6300"},

]
function seedDB(){
    // Info.remove({},function(err,details){
    //     if(err){
    //         console.log(err)
    //     }
    // })
    // data.forEach(function(seed){
    //     Info.create(seed,function(err,info){
    //         if(err){
    //             console.log(err)
    //         }else{
    //             console.log("added")
    //             Comment.create(
    //                 {
    //                     text: "",
    //                     author: "",
    //                     star:""
    //                 }, function(err, comment){
    //                     if(err){
    //                         console.log(err);
    //                     } else {
    //                         info.comment.push(comment);
    //                         info.save();
    //                         console.log("Created new comment");
    //                     }
    //                 });
    //         }
    //     })
    // })
}
module.exports=seedDB;