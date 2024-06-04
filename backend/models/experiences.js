const mongoose = require('mongoose');

// Define the experience schema
const experienceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
    iconBg: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    points: {
        type: [String],
        required: true,
    },
});

// Create the Experience model
const Experience = mongoose.model('Experiences', experienceSchema);

module.exports = Experience;
