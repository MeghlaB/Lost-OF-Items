import React, { useContext, useState } from 'react'
import loginAnimation from '../../public/login.json'
import Lottie from 'lottie-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';
import { ThemeContext } from '../AuthProvider/ThemeProvider';

export default function LoginPage() {
    const { loginuser, setUser, user, UpdateProfile, GoogleLogin, setLoading } = useContext(AuthContext)
    const {theme} = useContext(ThemeContext)
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [showpassword, setShowPassword] = useState(false)
    const handeleLogin = e => {
        e.preventDefault()
        setError('')
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginuser(email, password)
            .then((result) => {
                setUser(result.user)
                if (result.user) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Log in successful!',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                    setTimeout(() => {
                        navigate(location?.state ? location.state : '/')
                    }, 1000)
                }

            })
            .catch((err) => {
                setUser(err.message)
                Swal.fire({
                    title: 'Error!',
                    text: `Log out :${err}`,
                    icon: 'error',
                    confirmButtonText: 'Done'
                })
            })
    }

    // google login
    const handleGoogle = () => {
        GoogleLogin()
            .then((result) => {
                setUser(result.user)
                Swal.fire({
                    title: 'Success!',
                    text: 'Registration successful!',
                    icon: 'success',
                    confirmButtonText: 'Done'
                })
                if (result.user) {
                    setTimeout(() => {
                        navigate(location?.state ? location.state : '/')
                    }, 1000)
                }
            })
            .catch((err) => {
                setUser(err.message)
            })

    }
    const getButtonClass = () => {
        if (theme === 'dark') {
          return 'bg-gray-700 hover:bg-purple-400/10 dark:border-zinc-700 dark:hover:bg-zinc-700 dark:hover:text-white';
        }
        return 'bg-gray-200 hover:bg-purple-400/10 border-gray-300 hover:text-purple-700';
      };


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-72 lg:w-2/5">
                    <Lottie animationData={loginAnimation}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold mx-auto mt-2">Login now!</h1>
                    <form onSubmit={handeleLogin} className="card-body">
                        {/* email Address */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        {/* password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-purple-700 text-white hover:bg-purple-600 ">Login</button>
                        </div>
                        <p>Don't Have An Account ?<span>
                            <NavLink
                                to={'/register'} className='text-blue-700 underline'> SignUp</NavLink></span></p>

                        <div className="mt-3 space-y-3 sm:space-y-5">
                            <hr className="border-zinc-700" />
                            <Link
                                onClick={handleGoogle}
                                className={`mx-auto mb-4 mt-8 items-center rounded-md border px-5 py-2 shadow-lg duration-200 flex ${getButtonClass()}`}
                            >
                                <FcGoogle className='mr-4 text-xl' />
                                Continue with Google
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
