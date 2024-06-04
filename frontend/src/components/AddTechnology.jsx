import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddTechnology = () => {
    const [formData, setFormData] = useState({
        name: '',
        icon: '',
        iconBg: '',
        iconColor: ''
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('api/technologies', formData);

            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: response.data.message,
            });
            setFormData({
                name: '',
                icon: '',
                iconBg: '',
                iconColor: ''
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
            <h2 className="text-2xl font-bold mb-6">Add Technology</h2>
            <form onSubmit={handleSubmit}>
                {error && <div className="mb-4 text-red-600">{error}</div>}
                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
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
                <div className="mb-4">
                    <label className="block text-gray-700">Icon Background Color</label>
                    <input
                        type="text"
                        name="iconBg"
                        value={formData.iconBg}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Icon Color</label>
                    <input
                        type="text"
                        name="iconColor"
                        value={formData.iconColor}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
                >
                    Add Technology
                </button>
            </form>
        </div>
    );
};

export default AddTechnology;
