import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import DynamicTitle from '../Components/DynamicTitle'
import { ThemeContext } from '../AuthProvider/ThemeProvider'

export default function Layout() {
      const { theme } = useContext(ThemeContext);
      const isDarkMode = theme === "dark";

    return (
        <div className={` ${
            isDarkMode
              ? "bg-gray-900 text-white"
              : "bg-base-200 "
          }`}>
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
