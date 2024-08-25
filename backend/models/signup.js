const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const signupSchema = new Schema({

    firstName: {
        type: String,
        required: true,
        trim: true,
      },
      lastName: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address'],
      },
      password: {
        type: String,
        required: true,
      },
      aadharNumber: {
        type: String,
        required: true,
        unique: true,
        minlength: 12,
        maxlength: 12,
        match: [/^\d{12}$/, 'Please enter a valid 12-digit Aadhar number'],
      },
    }, {
  timestamps: true, //for createdAt and updatedAt
});

const Signup = mongoose.model("Signup", signupSchema);
module.exports = Signup;