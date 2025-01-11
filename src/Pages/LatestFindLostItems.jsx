import { motion } from "framer-motion";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const LatestFindLostItems = () => {
    const [items, setItems] = useState([]);

    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/allItems`)
            .then(res => {
                setItems(res.data);
            });
    }, []);

    const sortedItems = items.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6);


    const handleMouseMove = (e) => {
        setCursorPos({
            x: e.clientX,
            y: e.clientY,
        });
    };

    useEffect(() => {

        window.addEventListener('mousemove', handleMouseMove);


        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="max-w-7xl mx-auto p-4">
            <h2 className="text-center text-2xl text-purple-600 font-bold mb-6">
                <Typewriter
                    words={['Lost & Found Items']}
                    loop={Infinity}
                    cursor
                    cursorStyle='_'
                    typeSpeed={50}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </h2>

            {/* Custom Cursor */}
            <motion.div
                className="cursor"
                style={{
                    position: 'fixed',
                    top: cursorPos.y - 10,
                    left: cursorPos.x - 10,
                    pointerEvents: 'none',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(128, 0, 128, 0.8)',
                    transform: 'translate(-50%, -50%)',
                    transition: 'transform 0.2s ease-in-out',
                }}
            />
            <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 lg:gap-10">
                {sortedItems.length > 0 ? (
                    sortedItems.map((item) => (
                        <motion.div
                            key={item._id}
                            className="card card-compact bg-base-100  shadow-xl m-2"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                        >
                            <figure>
                                <img
                                    src={item.thumbnail}
                                    alt="thumbnail"
                                    className="w-full h-48 object-cover"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.title}</h2>
                                <p className="text-xl text-gray-600">Location: {item.location}</p>
                                <p className="text-xl text-gray-600">
                                    Date: {new Date(item.dateLost).toLocaleDateString()}
                                </p>
                                <div className="card-actions justify-end">
                                    <Link to={`/details/${item._id}`}>
                                        <button className="btn bg-purple-600 text-white">Details</button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <div className="flex items-center justify-center pt-6">
                        <div className="w-10 h-10 animate-[spin_2s_linear_infinite] rounded-full border-8 border-dotted border-sky-600"></div>
                    </div>

                )}
            </div>
            <div className="flex justify-center items-center mt-6">
                <Link to="/allItems" className="btn px-6 bg-purple-600 hover:bg-purple-600 text-white">
                    See All
                </Link>
            </div>
        </div>
    );
};

export default LatestFindLostItems;
