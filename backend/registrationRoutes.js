const express = require('express');
const User = require('./models/registrations');
const router = new express.Router();

// Endpoints here
// Setting up API request for user registrations
router.post('/registration', async (req, res) => {
    try{
        const {email,startupName ,founderName,
            phoneNumber,address,sector,registrationNumber,
            incorporationDate,description,documents } = req.body;

        // Create a new user 
        const newUser = new User({
            email: email,
            startupName: startupName,
            founderName: founderName,
            phoneNumber: phoneNumber,
            address: address,
            sector:sector,
            registrationNumber:registrationNumber,
            incorporationDate:incorporationDate,
            description: description,
            documents: documents
        });

        // save the user to the database
        await newUser.save();
        res.status(201).send("User registered successfully!");
    }
    catch(err){
        console.error(err);
        res.status(500).send("Error registering user.");
    }
});

module.exports = router;