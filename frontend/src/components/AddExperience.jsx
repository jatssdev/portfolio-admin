import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddExperience = () => {
    const [formData, setFormData] = useState({
        title: '',
        companyName: '',
        icon: '',
        iconBg: '',
        date: '',
        points: ['']
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith('points')) {
            const index = parseInt(name.split('-')[1]);
            const newPoints = [...formData.points];
            newPoints[index] = value;
            setFormData({ ...formData, points: newPoints });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/experiences', formData);
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: response.data.message,
            });
            setFormData({
                title: '',
                companyName: '',
                icon: '',
                iconBg: '',
                date: '',
                points: ['']
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

    const addPoint = () => {
        setFormData({ ...formData, points: [...formData.points, ''] });
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Add Experience</h2>
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
                    <label className="block text-gray-700">Company Name</label>
                    <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
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
                    <label className="block text-gray-700">Date</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Points</label>
                    {formData.points.map((point, index) => (
                        <input
                            key={index}
                            type="text"
                            name={`points-${index}`}
                            value={point}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded mb-2"
                        />
                    ))}
                    <button
                        type="button"
                        onClick={addPoint}
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    >
                        Add Point
                    </button>
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
                >
                    Add Experience
                </button>
            </form>
        </div>
    );
};

export default AddExperience;
