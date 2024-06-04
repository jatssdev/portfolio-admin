import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import AddTestimonial from './components/AddTestimonial'
import AddExperience from './components/AddExperience'
import AddProject from './components/AddProject'
import AddService from './components/AddService'
import AddTechnology from './components/AddTechnology'

function App() {
  let router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: '/add-testimonial',
          element: <AddTestimonial />,
        },
        {
          path: '/add-experience',
          element: <AddExperience />,
        },
        {
          path: '/add-project',
          element: <AddProject />,
        },
        {
          path: '/add-service',
          element: <AddService />,
        },
        {
          path: '/add-technology',
          element: <AddTechnology />,
        },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
