const mongoose = require('mongoose');

// Define the tag schema
const tagSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    }
}, { _id: false });

// Define the project schema
const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    tags: [tagSchema],
    image: {
        type: String,
        required: true,
    },
    sourceCodeLink: {
        type: String,
        required: true,
    }
});

// Create the Project model
const Project = mongoose.model('Projects', projectSchema);

module.exports = Project;
