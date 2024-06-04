import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddProject = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        image: '',
        tags: [''],
        repoUrl: '',
        demoUrl: ''
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith('tags')) {
            const index = parseInt(name.split('-')[1]);
            const newtags = [...formData.tags];
            newtags[index] = value;
            setFormData({ ...formData, tags: newtags });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/projects', formData);
            Swal.fire({
                icon: 'success',
                name: 'Success',
                text: response.data.message,
            });
            setFormData({
                name: '',
                description: '',
                image: '',
                tags: [''],
                repoUrl: '',
                demoUrl: ''
            });
            setError('');
        } catch (err) {
            setError(err.response?.data?.error || 'An error occurred');
            Swal.fire({
                icon: 'error',
                name: 'Error',
                text: error,
            });
        }
    };

    const addTechnology = () => {
        setFormData({ ...formData, tags: [...formData.tags, ''] });
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Add Project</h2>
            <form onSubmit={handleSubmit}>
                {error && <div className="mb-4 text-red-600">{error}</div>}
                <div className="mb-4">
                    <label className="block text-gray-700">name</label>
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
                    <label className="block text-gray-700">Image URL</label>
                    <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">tags</label>
                    {formData.tags.map((tech, index) => (
                        <input
                            key={index}
                            type="text"
                            name={`tags-${index}`}
                            value={tech}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded mb-2"
                        />
                    ))}
                    <button
                        type="button"
                        onClick={addTechnology}
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    >
                        Add Technology
                    </button>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Repo URL</label>
                    <input
                        type="text"
                        name="repoUrl"
                        value={formData.repoUrl}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Demo URL</label>
                    <input
                        type="text"
                        name="demoUrl"
                        value={formData.demoUrl}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
                >
                    Add Project
                </button>
            </form>
        </div>
    );
};

export default AddProject;
