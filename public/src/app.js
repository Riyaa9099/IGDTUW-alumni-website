const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
require("./db/conn");
const Register = require("./models/registers");
const { userInfo } = require("os");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extented:true}));


app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);



app.get("/", (req, res) => {
    res.render("index")
});

app.get("/register", (req, res) => {
    res.render("register");
})

app.get("/login", (req, res) => {
    res.render("login");
})

app.get("/forget", (req, res) => {
    res.render("forget");
})
app.get("/About", (req, res) => {
    res.render("About");
})
app.get("/about_alumni_association", (req, res) => {
    res.render("about_alumni_association");
})
app.get("/join", (req, res) => {
    res.render("join");
})
app.get("/job", (req, res) => {
    res.render("job");
})
app.get("/entrepreneur", (req, res) => {
    res.render("entrepreneur");
})
app.get("/entrepreneur_details", (req, res) => {
    res.render("entrepreneur_details");
})
app.get("/events", (req, res) => {
    res.render("events");
})
app.get("/updates", (req, res) => {
    res.render("updates");
})
app.get("/profile", (req, res) => {
    res.render("profile");
})
app.get("/userProfile", (req, res) => {
    res.render("userProfile");
})
app.get("/addResume", (req, res) => {
    res.render("addResume");
})


// create
app.post("/register", async (req, res) => {
    try {
        console.log("Received data:", req.body); // Debugging log

        const user = new Register(req.body);
        const registered = await user.save();

        console.log("User registered successfully:", registered);

        res.status(201).render("profile");
    } catch (error) {
        console.error("Error during registration:", error.message);
        res.status(400).send("Error during registration: " + error.message);
    }
});



//login Check
app.post("/login", async(req, res) => {
    try{
        const email = req.body.email;
        const password = req.body.password;

        
        const useremail = await Register.findOne({email:email});
        if(useremail.password === password){
            res.status(201).render("profile");
        }else{
            res.send("password are not matching");
        }


    }catch (error){
        res.status(400).send("invalid Email")
    }

})


app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
});
    // try {

    //     const password = req.body.password;
    //     const cpassword = req.body.confirmpassword;

    //     if(password === password){
    //         const registerStudents = new Register({
    //             title: req.body.title,
    //             firstname: req.body.firstname,
    //             middlename: req.body.middlename,
    //             lastname: req.body.lastname,
    //             registeredAs: req.body.registeredAs,
    //             chapter: req.body.chapter,
    //             dob: req.body.dob,
    //             email: req.body.email,
    //             gender: req.body.gender,
    //             mobileNumber: req.body.mobileNumber,
    //             confirmMobileNumber: req.body.confirmMobileNumber,
    //             age: req.body.age,
    //             password: password,
    //             confirmpassword: cpassword,
    //             countryCode: req.body.countryCode,
    //             course: req.body.course,
    //             degree: req.body.degree,
    //             yearOfPassing: req.body.yearOfPassing,
    //             rollNumber: req.body.rollNumber,
    //             registeredAsVolunteer: req.body.registeredAsVolunteer,
    //             communicationAddress: req.body.communicationAddress,
    //             communicationPinCode: req.body.communicationPinCode,
    //             permanentAddress: req.body.permanentAddress,
    //             permanentPinCode: req.body.permanentPinCode,
    //             workingWithSector: req.body.workingWithSector,
    //             linkedInUrl: req.body.linkedInUrl,
    //             referredBy: req.body.referredBy,
    //         })
    //         const registered = await registerStudents.save();
    //         res.status(201).render("index");
    //     } else {
    //         res.send("passwords are not matching")
    //     }

    // } catch (error) {
    //     res.status(400).send(error);
    // }
// })

// app.listen(port, () => {
//     console.log(`server is running at port no ${port}`);
// });
