const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registrationSchema = new Schema({
    startupName: {
        type: String,
        required: true,
    },
    founderName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    sector: {
        type: String,
        enum: ['Ayurveda', 'Yoga & Naturopathy', 'Unani', 'Siddha', 'Homoeopathy'], //Only these fields are allowed
        required: true,
    },
    registrationNumber: {
        type: String,
        unique: true, //every registration must have this value as unique
    },
    incorporationDate: {
        type: Date,
        required: true,
    },
    description: {
        type: Date,
        required: true,
    },
    documents: [
    {
      docType: {
        type: String,
        required: true,
      },
      docName: {
        type: String,
        required: true,
      },
      docURL: {
        type: String,
        required: true,
      },
    }
    ],
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
    },
});

const Registration = mongoose.model("Registration", registrationSchema);
module.exports = Registration;