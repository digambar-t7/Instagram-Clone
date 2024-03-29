import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const WithNav = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default WithNav