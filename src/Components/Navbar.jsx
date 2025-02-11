import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { ThemeContext } from '../AuthProvider/ThemeProvider';

export default function Navbar() {
    const { togglebtn, theme } = useContext(ThemeContext);
    const { user, logout } = useContext(AuthContext);
    const [scrolled, setscrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setscrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`navbar ${theme === 'dark' ? 'bg-slate-900 text-white/55' : 'bg-[#F3F4F6]'
                } py-0 lg:py-4  text-slate-900 px-3 lg:px-9 fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-2xl z-50 shadow-lg`}
        >
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        <NavLink to="/" className="hover:text-purple-600">
                            Home
                        </NavLink>
                        <NavLink to="/about" className="hover:text-purple-600">
                            About Us
                        </NavLink>
                        {user && (
                            <>
                                <NavLink to="/addItems" className="hover:text-purple-600">
                                    Add Lost & Found Item
                                </NavLink>
                                <NavLink to="/allrecovere" className="hover:text-purple-600">
                                    All Recovered Items
                                </NavLink>
                                <NavLink to="/myItems" className="hover:text-purple-600">
                                    Manage My Items
                                </NavLink>
                            </>
                        )}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl flex items-center">
                    <img className="w-10 h-10 border-2 border-purple-600 rounded-full hidden lg:block" src={logo} alt="Logo" />
                    <span className="banner-design text-xs lg:text-xl -ml-2 lg:ml-3">
                        Lost&Found
                    </span>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[15px] font-medium gap-4">
                 {
                    user?  <>
                    <NavLink to="/" className="hover:text-purple-600">
                        Home
                    </NavLink>
                    <NavLink to="/allItems" className="hover:text-purple-600">
                        Lost & Found Items Page
                    </NavLink>
                    <NavLink to="/about" className="hover:text-purple-600">
                        About Us
                    </NavLink>
                    <NavLink to="/addItems" className="hover:text-purple-600">
                                Add Lost & Found Item
                            </NavLink>
                            <NavLink to="/allrecovere" className="hover:text-purple-600">
                                All Recovered Items
                            </NavLink>
                            <NavLink to="/myItems" className="hover:text-purple-600">
                                Manage My Items
                            </NavLink>
                             
                    </>:
                    <>     <NavLink to="/" className="hover:text-purple-600">
                        Home
                    </NavLink>
                    <NavLink to="/allItems" className="hover:text-purple-600">
                        Lost & Found Items Page
                    </NavLink>
                    <NavLink to="/about" className="hover:text-purple-600">
                        About Us
                    </NavLink>
                            </>
                 }
                    {/* {user && (
                        <>
                            <NavLink to="/addItems" className="hover:text-purple-600">
                                Add Lost & Found Item
                            </NavLink>
                            <NavLink to="/allrecovere" className="hover:text-purple-600">
                                All Recovered Items
                            </NavLink>
                            <NavLink to="/myItems" className="hover:text-purple-600">
                                Manage My Items
                            </NavLink>
                        </>
                    )} */}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <input
                            type="checkbox"
                            className="toggle toggle-primary"
                            checked={theme === 'dark'}
                            onChange={togglebtn}
                        />
                    </label>
                </div>
                {user ? (
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="border-2 border-purple-600 rounded-full p-1 m-1"
                        >
                            <img
                                src={user?.photoURL}
                                className="w-10 h-10 rounded-full cursor-pointer"
                                alt="User"
                            />
                        </div>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu border-2 border-purple-400 space-y-4 bg-base-300 rounded-box z-[1] w-52 p-2 shadow"
                        >
                            {/* Display Name */}
                            <p className="text-center font-medium text-purple-800">
                                {user?.displayName}
                            </p>
                            <hr className="my-2 border-purple-400" />
                            {/* Logout Button */}
                            <button
                                onClick={logout}
                                className="bg-[#7935AF] text-white mt-4 p-4 rounded hover:bg-purple-700"
                            >
                                Logout
                            </button>
                        </ul>
                    </div>
                ) : (
                    <NavLink
                        to="/login"
                        className="hover:text-gray-200 rounded-md bg-purple-500 px-4 py-2 text-white transition-colors hover:bg-purple-600"
                    >
                        LogIn
                    </NavLink>
                )}

            </div>
        </div>
    );
}
