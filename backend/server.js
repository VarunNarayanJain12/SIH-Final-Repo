//Requiring things
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Registration = require("./models/registrations.js");
const Users = require("./models/Users.js");
const Signup = require("./models/signup.js");
const path = require("path");
// const methodOverride = require("method-override"); //For sending POST & DELETE Request
// const ejsMate = require("ejs-mate");

// Setting up Database
main()
.then(()=>{
    console.log("Connected to DB");
})
.catch(err=>{
    console.log(err);
});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/MinistryOfAYUSH');
};

// Setting up view engine
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
// app.use(methodOverride("_method"));
// app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

// Setting up API request- Main Page
app.get("/",(req,res)=>{
    res.send("Hi I am Ministry Of Ayush");
});

// // Setting up API request for user registrations
// app.post('/userlogin', async (req, res) => {
//     try{
//         const {email, password} = req.body;

//         // Create a new user 
//         const newUser = new Users({
//             email: email,
//             password: password
//         });

//         // save the user to the database
//         await newUser.save();
//         res.status(201).send("User registered successfully!");
//     }
//     catch(err){
//         console.error(err);
//         res.status(500).send("Error registering user.");
//     }
// });

// Setting up the Server
app.listen(8080, ()=>{
    console.log("Server is listening to port 8080");
});

// Routes
const registrationRouter = require('./registrationRoutes.js')
app.use(registrationRouter);
const userRouter = require('./userRoutes.js')
app.use(userRouter);
