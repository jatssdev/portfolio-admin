const Experience = require('../models/experiences');

// Create a new experience
exports.createExperience = async (req, res) => {
    console.log(req.body)
    try {
        const experience = new Experience(req.body);
        await experience.save();
        res.status(201).json({ success: true, data: experience });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get all experiences
exports.getAllExperiences = async (req, res) => {
    try {
        const experiences = await Experience.find();
        res.status(200).json({ success: true, data: experiences });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get a single experience by ID
exports.getExperienceById = async (req, res) => {
    try {
        const experience = await Experience.findById(req.params.id);
        if (!experience) {
            return res.status(404).json({ success: false, error: 'Experience not found' });
        }
        res.status(200).json({ success: true, data: experience });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Update an experience by ID
exports.updateExperience = async (req, res) => {
    try {
        const experience = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!experience) {
            return res.status(404).json({ success: false, error: 'Experience not found' });
        }
        res.status(200).json({ success: true, data: experience });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Delete an experience by ID
exports.deleteExperience = async (req, res) => {
    try {
        const experience = await Experience.findByIdAndDelete(req.params.id);
        if (!experience) {
            return res.status(404).json({ success: false, error: 'Experience not found' });
        }
        res.status(200).json({ success: true, message: 'Experience deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
