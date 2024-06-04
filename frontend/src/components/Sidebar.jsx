import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='w-full  overflow-auto' style={{ height: 'calc(100vh - 70px)' }}>
            <ul>
                <li><Link className='bg-gray-400 hover:bg-gray-600 hover:text-white block p-3 border-b' to={'/'}>Dashboard</Link></li>
                <li><Link className='bg-gray-400 hover:bg-gray-600 hover:text-white block p-3 border-b' to={'/add-testimonial'}>Add Testimonial</Link></li>
                <li><Link className='bg-gray-400 hover:bg-gray-600 hover:text-white block p-3 border-b' to={'/add-experience'}>Add Experience</Link></li>
                <li><Link className='bg-gray-400 hover:bg-gray-600 hover:text-white block p-3 border-b' to={'/add-project'}>Add Project</Link></li>
                <li><Link className='bg-gray-400 hover:bg-gray-600 hover:text-white block p-3 border-b' to={'/add-service'}>Add Service</Link></li>
                <li><Link className='bg-gray-400 hover:bg-gray-600 hover:text-white block p-3 border-b' to={'/add-technology'}>Add Technology</Link></li>
                <li><Link className='bg-gray-400 hover:bg-gray-600 hover:text-white block p-3 border-b' to={'/'}>Dashboard</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar