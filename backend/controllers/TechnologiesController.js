const Technology = require('../models/technologies');

// Create a new technology
exports.createTechnology = async (req, res) => {
    try {
        const technology = new Technology(req.body);
        await technology.save();
        res.status(201).json({ success: true, data: technology });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get all technologies
exports.getAllTechnologies = async (req, res) => {
    try {
        const technologies = await Technology.find();
        res.status(200).json({ success: true, data: technologies });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get a single technology by ID
exports.getTechnologyById = async (req, res) => {
    try {
        const technology = await Technology.findById(req.params.id);
        if (!technology) {
            return res.status(404).json({ success: false, error: 'Technology not found' });
        }
        res.status(200).json({ success: true, data: technology });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Update a technology by ID
exports.updateTechnology = async (req, res) => {
    try {
        const technology = await Technology.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!technology) {
            return res.status(404).json({ success: false, error: 'Technology not found' });
        }
        res.status(200).json({ success: true, data: technology });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Delete a technology by ID
exports.deleteTechnology = async (req, res) => {
    try {
        const technology = await Technology.findByIdAndDelete(req.params.id);
        if (!technology) {
            return res.status(404).json({ success: false, error: 'Technology not found' });
        }
        res.status(200).json({ success: true, message: 'Technology deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
