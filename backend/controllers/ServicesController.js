const Service = require('../models/services');

// Create a new service
exports.createService = async (req, res) => {
    try {
        const service = new Service(req.body);
        await service.save();
        res.status(201).json({ success: true, data: service });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get all services
exports.getAllServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).json({ success: true, data: services });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get a single service by ID
exports.getServiceById = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        if (!service) {
            return res.status(404).json({ success: false, error: 'Service not found' });
        }
        res.status(200).json({ success: true, data: service });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Update a service by ID
exports.updateService = async (req, res) => {
    try {
        const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!service) {
            return res.status(404).json({ success: false, error: 'Service not found' });
        }
        res.status(200).json({ success: true, data: service });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Delete a service by ID
exports.deleteService = async (req, res) => {
    try {
        const service = await Service.findByIdAndDelete(req.params.id);
        if (!service) {
            return res.status(404).json({ success: false, error: 'Service not found' });
        }
        res.status(200).json({ success: true, message: 'Service deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
