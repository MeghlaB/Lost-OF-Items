import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import DynamicTitle from '../Components/DynamicTitle'

export default function Layout() {
    return (
        <div>
            <DynamicTitle></DynamicTitle>
            <header>
                <Navbar></Navbar>
            </header>
            <div className='min-h-[calc(100vh-288px)]'>
                <Outlet></Outlet>
            </div>
           <div>
           <Footer></Footer>
           </div>
        </div>
    )
}
