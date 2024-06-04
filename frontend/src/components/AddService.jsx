import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddService = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        icon: ''
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/services', formData);
            if (response.data.success) {

            }
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: response.data.message,
            });
            setFormData({
                title: '',
                description: '',
                icon: ''
            });
            setError('');
        } catch (err) {
            setError(err.response?.data?.error || 'An error occurred');
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error,
            });
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Add Service</h2>
            <form onSubmit={handleSubmit}>
                {error && <div className="mb-4 text-red-600">{error}</div>}
                <div className="mb-4">
                    <label className="block text-gray-700">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Icon URL</label>
                    <input
                        type="text"
                        name="icon"
                        value={formData.icon}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
                >
                    Add Service
                </button>
            </form>
        </div>
    );
};

export default AddService;
