import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <Header />
            <section>
                <div className="grid grid-cols-12">

                    <div className="col-span-2">
                        <Sidebar />
                    </div>
                    <div className="col-span-10 bg-red-400">
                        <Outlet />
                    </div>
                </div>
            </section>

        </>
    )
}

export default Layout
