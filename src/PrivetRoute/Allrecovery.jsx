import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import UserAxiosSecure from "../Hooks/UserAxiosSecure";
import { Typewriter } from "react-simple-typewriter";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { CiViewTable } from "react-icons/ci";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ThemeContext } from "../AuthProvider/ThemeProvider"; 
import { Link } from "react-router-dom";

export default function AllRecoveries() {
    const axiosSecure = UserAxiosSecure();
    const { user } = useContext(AuthContext);
    const { theme } = useContext(ThemeContext); 
    const [recoveriesPost, setRecoveriesPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cardLayOut, setLayOut] = useState(false);

    const getBgClass = () => (theme === 'dark' ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900');
    const getTableClass = () => (theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-800');
    const getBorderClass = () => (theme === 'dark' ? 'border-gray-600' : 'border-gray-200');
    const getHoverClass = () => (theme === 'dark' ? 'hover:bg-gray-600' : 'hover:bg-gray-50');

    useEffect(() => {
        axiosSecure
            .get(`/allrecoveries?email=${user?.email}`)
            .then((response) => {
                setRecoveriesPost(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError("No Recovery data");
                setLoading(false);
            });
    }, [user?.email]);

    return (
        <div className={`container py-28 mx-auto p-6 `}>
            <h2 className="text-3xl font-bold text-center mb-6">
                <Typewriter
                    words={['All Recovered Items']}
                    loop={Infinity}
                    cursor
                    cursorStyle={<span style={{ color: 'purple', fontSize: '30px' }}>|</span>}
                    typeSpeed={50}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </h2>
            <div className='text-right mb-4'>
                <button
                    className="bg-purple-600 px-4 py-2 text-3xl text-white rounded"
                    onClick={() => setLayOut(!cardLayOut)}
                >
                    {cardLayOut ? <TfiLayoutGrid3Alt /> : <CiViewTable />}
                </button>
            </div>

            {loading ? (
                <div className="flex justify-center pt-6 items-center">
                    <div className="w-10 h-10 animate-spin rounded-full border-8 border-dotted border-sky-600"></div>
                </div>
            ) : error ? (
                <div className="text-center text-xl text-red-600">
                    {error}
                </div>
            ) : recoveriesPost.length === 0 ? (
                <div className="text-center text-xl text-gray-600">
                    No recovered items found. You haven't recovered any items yet.
                </div>
            ) : cardLayOut ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {recoveriesPost.map((item) => (
                        <motion.div key={item._id} className={`border-4 p-4 border-purple-800 rounded-t-3xl shadow hover:shadow-lg ${getBorderClass()}`}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: recoveriesPost.indexOf(item) * 0.5,
                            }}
                        >
                            <div>
                                <img
                                    className="w-20 h-20 rounded-full"
                                    src={item.recoverBy?.image} alt="" />
                            </div>
                            <h3 className="text-lg font-bold">{item.title}</h3>
                            <p><strong>Category:</strong> {item.category}</p>
                            <p><strong>Recovered Location:</strong> {item.recoverLocation}</p>
                            <p><strong>Recovered Date:</strong> {new Date(item.recoveryDate).toLocaleDateString()}</p>
                        </motion.div>
                    ))}
                </div>
            ) : (
                <div className="overflow-x-auto shadow-lg rounded-lg">
                    <table className={`table-auto w-full border-collapse ${getTableClass()}`}>
                        <thead className={ `bg-gray-300 text-gray-700`}>
                            <tr>
                                <th className="px-6 py-3 text-left text-[16px] font-medium border-b">Title</th>
                                <th className="px-6 py-3 text-left text-sm font-medium border-b">Category</th>
                                <th className="px-6 py-3 text-left text-sm font-medium border-b">Recovered Location</th>
                                <th className="px-6 py-3 text-left text-sm font-medium border-b">Recovered Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recoveriesPost.map(item => (
                                <tr key={item._id} className={`${getHoverClass()}`}>
                                    <td className="px-6 py-4 text-sm font-medium border-b">{item.title}</td>
                                    <td className="px-6 py-4 text-sm border-b">{item.category}</td>
                                    <td className="px-6 py-4 text-sm border-b">{item.recoverLocation}</td>
                                    <td className="px-6 py-4 text-sm border-b">{new Date(item.recoveryDate).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            )}
        </div>
    );
}
