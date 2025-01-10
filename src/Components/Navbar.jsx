import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { ThemeContext } from '../AuthProvider/ThemeProvider';
import { MdSunny } from 'react-icons/md';
import { FiMoon } from 'react-icons/fi';

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
        className={`navbar ${
            theme === 'dark' ? 'bg-slate-800 text-white/55 ' : 'bg-[#F3F4F6]'
          }  py-0 lg:py-4 text-slate-900 px-3 lg:px-9 fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-2xl z-50 shadow-lg`}
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2  shadow"
                    >
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-black font-bold border-b-4 border-purple-600'
                                    : ''
                            }
                            to={'/'}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-black font-bold border-b-4 border-purple-600'
                                    : ''
                            }
                            to={'/allItems'}
                        >
                            Lost & Found Items Page
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-black font-bold border-b-4 border-purple-600'
                                    : ''
                            }
                            to={'/addItems'}
                        >
                            Add Lost & Found Item
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-black font-bold border-b-4 border-purple-600'
                                    : ''
                            }
                            to={'/allrecovere'}
                        >
                            All Recovered Items
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-black font-bold border-b-4 border-purple-600'
                                    : ''
                            }
                            to={'/myItems'}
                        >
                            Manage My Items
                        </NavLink>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl flex items-center">
    <img className="w-10 h-10 rounded-full hidden lg:block" src={logo} alt="Logo" />
    <span className="banner-design text-xs lg:text-xl -ml-2 lg:ml-3">
        Lost&Found
    </span>
</a>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[19px] font-medium  gap-4">
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? 'text-purple-600  '
                                : ''
                        }
                        to={'/'}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? 'text-purple-600 '
                                : ''
                        }
                        to={'/allItems'}
                    >
                        Lost & Found Items Page
                    </NavLink>
                    <NavLink
                       className={({ isActive }) =>
                        isActive
                            ? 'text-purple-600 '
                            : ''
                    }
                    to={'/about'}
                    >
                        About Us
                    </NavLink>
                </ul>
            </div>
            <div className="navbar-end gap-3">
                {/* toggle switch */}
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
                        <div tabIndex={0} role="button" className="btn m-1">
                            <img
                                src={user?.photoURL}
                                className="w-10 h-10 rounded-full cursor-pointer"
                                alt=""
                            />
                        </div>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu border-2 border-purple-400 space-y-4 bg-base-300  rounded-box z-[1] w-52 p-2 shadow"
                        >
                            <p className="mb-2 border-2 px-3 design border-1 border-purple-950 py-4"
                            >{user?.displayName}</p>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-purple-600 '
                                        : ''
                                }
                                to="/addItems"
                            >
                                Add Lost & Found Item
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-purple-600 '
                                        : ''
                                }
                                to="/allrecovere"
                            >
                                All Recovered Items
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-purple-600 '
                                        : ''
                                }
                                to="/myItems"
                            >
                                Manage My Items
                            </NavLink>
                            <button
                                onClick={logout}
                                className="bg-[#7935AF] text-white mt-4 p-4 rounded hover:bg-purple-700"
                            >
                                Logout
                            </button>
                        </ul>
                    </div>
                ) : (
                    <NavLink to="/login" className="hover:text-gray-200 rounded-md bg-purple-500 px-4 py-2 text-white transition-colors hover:bg-pueple-600 dark:bg-purple-700">
                       LogIn
                    </NavLink>
                )}
            </div>
        </div>
    );
}
