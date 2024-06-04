import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddTestimonial = () => {
    const [formData, setFormData] = useState({
        name: '',
        designation: '',
        company: '',
        testimonial: '',
        image: ''
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/testimonials', formData);
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: response.data.testimonial,
            });
            setFormData({
                name: '',
                designation: '',
                company: '',
                testimonial: '',
                image: ''
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
            <h2 className="text-2xl font-bold mb-6">Add Testimonial</h2>
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
                    <label className="block text-gray-700">Designation</label>
                    <input
                        type="text"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Company</label>
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">testimonial</label>
                    <textarea
                        name="testimonial"
                        value={formData.testimonial}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">image URL</label>
                    <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    Add Testimonial
                </button>
            </form>
        </div>
    );
};

export default AddTestimonial;
