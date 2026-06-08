const mongoose = require("mongoose");

const studentsSchema = new mongoose.Schema({
    firstName: { type: String},
    middleName: { type: String },
    lastName: { type: String },
    registeredAs: { type: String},
    chapter: { type: String },
    email: { type: String},
    mobileNo: { type: Number},
    password: {type: String},
    course: { type: String },
    degree: { type: String },
    yearOfPassing: { type: Number},
    rollNo: { type: Number },
    registeredAsVolunteer: { type: String },
    workingWithSector: { type: String },
    linkedInUrl: { type: String },
    referredBy: { type: String }
});

// Ensure only one export is used
const Register = new mongoose.model("Register", studentsSchema);
module.exports = mongoose.model("Register", studentsSchema);



// const mongoose = require("mongoose");
// const studentsSchema = new mongoose.Schema({
//   title : {
//       type:String
      
//   },
  
//   firstName : {
//       type:String
      
//   },
//   middleName : {
//       type:String
//   },
//   lastName : {
//       type:String
      
//   },
//   registeredAs : {
//       type:String
      
//   },
//   chapter : {
//       type:String
      
//   },
//   dod : {
//       type:Number
      
//   },
//   email : {
//       type:String
      
      
//   },
//   gender : {
//       type:String
      
//   },
//   mobileNo : {
//       type:Number
      
      
//   },
//   confirmMobileNo : {
//       type:Number
      
      
//   },
//   age : {
//       type:Number
      
//   },
//   password : {
//       type:String
      
//   },
//   confirmpassword : {
//       type:String
      
//   },
//   countryCode : {
//       type:Number
      
//   },
//   course : {
//       type:String
      
//   },
//   degree : {
//       type:String
      
//   },
//   yearOfPassing : {
//       type:Number
      
//   },
//   rollNumber : {
//       type:Number
      
//   },
//   registeredAsVolunteer : {
//       type:String
      
//   },
//   communicationAddress : {
//       type:String
      
//   },
//   communicationPinCode : {
//       type:Number
      
//   },
//   permanentAddress : {
//       type:String
      
//   },
//   permanentPinCode : {
//       type:Number
      
      
//   },
//   workingWithSector : {
//       type:String
      
//   },
//   linkedInUrl : {
//       type:String

//   },
//   referredBy : {
//       type:String
//   }


// })
// const Register = new mongoose.model("Register", studentsSchema);

// module.exports = mongoose.model('Register', studentsSchema);
