import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import UserAxiosSecure, { axiosSecure } from "../Hooks/UserAxiosSecure";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";


const LostofItems = () => {
  const axiosSecure = UserAxiosSecure()
  const [items, setItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');


  // Data Fetch
  useEffect(() => {
    axiosSecure
      .get(`/allItems`)
      
      .then((res) => {
        // console.log(items)
        setItems(res.data)
      })
      .catch((error) => console.error("Failed to fetch items:", error));
  }, []);


  if (items.length === 0) {
    return   <div className="flex justify-center pt-6 items-center">
    <div className="w-10 h-10 animate-[spin_2s_linear_infinite] rounded-full border-8 border-dotted border-sky-600"></div>
  </div>
  
  }


  const sortedItems = items.sort((a, b) => new Date(b.date) - new Date(a.date));

  const filteredItems = sortedItems.filter(
    item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase())
);

  return (
    <div className="max-w-6xl mx-auto p-4">
       {/* Search Input */}
       <div className="mb-6">
                <label className="input border-2 border-purple-600 input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="grow"
                        placeholder="Search by title or location..."
                    />
                    <FaSearch />
                </label>
            </div>
      <h2 className="text-center text-2xl font-bold mb-6">Lost & Found Items</h2>
      <div className="pt-10 grid grid-cols-1 md:grid-cols-2 items-center lg:grid-cols-3 gap-24">
        {filteredItems.map((item) => (
          <motion.div key={item._id} className="card card-compact bg-base-100 w-96 shadow-xl"
          initial={{opacity:0, y:5}}
          animate={{opacity:1, y:5}}
          transition={
            {
              duration:0.5,
              delay:filteredItems.indexOf(item)*0.5

            }
          }
          >

            <figure>
              <img
              className="w-96 h-56"
                src={item.thumbnail}
                alt="thumbnail" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p className="text-xl text-gray-600">Location: {item.location}</p>
              <p className="text-xl text-gray-600">
                Date: {new Date(item.dateLost).toLocaleDateString()}
              </p>
              <div className="card-actions justify-end">
                <Link
                  to={`/details/${item._id}`}
                >
                  <button className="btn bg-purple-600 text-white ">Details</button>
                </Link>
              </div>
            </div>
          </motion.div>

        ))}
      </div>
    </div>
  );
};

export default LostofItems;

