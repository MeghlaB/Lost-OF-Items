import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserAxiosSecure from "../Hooks/UserAxiosSecure";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

const LostofItems = () => {
  const axiosSecure = UserAxiosSecure();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("newest");

  // Data Fetch
  useEffect(() => {
    axiosSecure
      .get(`/allItems`)
      .then((res) => {
        setItems(res.data);
        setLoading(false); // Stop loading when data is fetched
      })
      .catch((error) => {
        console.error("Failed to fetch items:", error);
        setError("Failed to fetch items. Please try again later.");
        setLoading(false); // Stop loading even if there's an error
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-12 h-12 animate-[spin_2s_linear_infinite] rounded-full border-8 border-dotted border-purple-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500 text-lg font-semibold">{error}</p>
      </div>
    );
  }

  // Filtering and Sorting Logic
  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedItems = filteredItems.sort((a, b) => {
    if (sortOption === "newest") {
      return new Date(b.dateLost) - new Date(a.dateLost);
    } else if (sortOption === "oldest") {
      return new Date(a.dateLost) - new Date(b.dateLost);
    } else if (sortOption === "location") {
      return a.location.localeCompare(b.location);
    }
    return 0;
  });

  return (
    <div className="max-w-6xl mx-auto p-4 py-28">
      {/* Search Input and Sort Options */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
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
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="select select-bordered border-2 border-purple-600"
        >
          <option value="newest">Date: Newest First</option>
          <option value="oldest">Date: Oldest First</option>
          <option value="location">Location: A to Z</option>
        </select>
      </div>

      <h2 className="text-center text-2xl font-bold mb-6">Lost & Found Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedItems.map((item) => (
          <motion.div
            key={item._id}
            className="card bg-base-100 shadow-xl p-4 border border-primary"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 5 }}
            transition={{
              duration: 0.5,
              delay: sortedItems.indexOf(item) * 0.2, // Adjust stagger effect
            }}
          >
            <figure>
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-40 w-full object-cover"
              />
            </figure>
            <div className="card-body p-2">
              <h2 className="card-title">{item.title}</h2>
              <p className="font-bold text-xs lg:text-[18px] mt-2">
                Location: <span className="text-[16px]"> {item.location} </span>
              </p>
              <p className="text-sm text-gray-500">
                Date: {new Date(item.dateLost).toLocaleDateString()}
              </p>
              <div className="card-actions justify-end">
                <Link to={`/details/${item._id}`}>
                  <button className="btn bg-purple-600 hover:bg-[#7935af] text-white">
                    Details
                  </button>
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
