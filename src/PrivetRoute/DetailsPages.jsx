import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import UserAxiosSecure, { axiosSecure } from "../Hooks/UserAxiosSecure";
import { FaArrowLeft } from "react-icons/fa";

export default function DetailsPages() {
  const axiosSecure = UserAxiosSecure()
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [item, setItem] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [recoveryDate, setRecoveryDate] = useState(new Date());
  const [recoverLocation, setRecoveryLocation] = useState("");
  const [isRecovered, setIsRecovered] = useState(false);

  useEffect(() => {
    axiosSecure
      .get(`/items/${id}`)
      .then((res) => {
        setItem(res.data);
        // console.log(res.data)
        setIsRecovered(res.data.status === "recovered");
      })
      .catch((error) => console.error(" fetching item:", error));
  }, [id]);

  // const handleSubmit = async () => {
  //   if (!recoverLocation.trim()) {
  //     Swal.fire("Error!", "Please provide a recovery location.", "warning");
  //     return;
  //   }

  //   if (!recoveryDate || isNaN(new Date(recoveryDate).getTime())) {
  //     Swal.fire("Error!", "Please select a recovery date.", "warning");
  //     return;
  //   }

  //   const formattedDate = recoveryDate.toISOString();
  //   const recoveryData = {
  //     recoverLocation,
  //     recoveryDate: formattedDate,
  //     type: item.type,
  //     title: item.title,
  //     category: item.category,
  //     status: item.status,
  //     recoverBy: {
  //       email: user?.email,
  //       name: user?.displayName,
  //       image: user?.photoURL,
  //     },
  //   };

  //   try {

  //     await axiosSecure.post(`/recovere`, recoveryData);

  //     await axiosSecure.patch(`/items/${id}`, {
  //       status: "recovered",
  //     });


  //     Swal.fire("SuccessFully Update!");
  //     closeModal();
  //     setIsRecovered(true);
  //   } catch (error) {
  //     console.error("Error adding recovery:", error);
  //     Swal.fire("Failed to mark the item as recovered", "error");
  //   }
  // };
  const handleSubmit = async () => {
    if (!recoverLocation.trim()) {
      Swal.fire("Error!", "Please provide a recovery location.", "warning");
      return;
    }
  
    if (!recoveryDate || isNaN(new Date(recoveryDate).getTime())) {
      Swal.fire("Error!", "Please select a recovery date.", "warning");
      return;
    }
  
    const formattedDate = recoveryDate.toISOString();
    const recoveryData = {
      recoverLocation,
      recoveryDate: formattedDate,
      type: item.type,
      title: item.title,
      category: item.category,
      status: "recovered",
      recoverBy: {
        email: user?.email,
        name: user?.displayName,
        image: user?.photoURL,
      },
    };
  
    try {
      // Recover information POST request
      await axiosSecure.post(`/recovere`, recoveryData);
  
      // Update item status on server
      await axiosSecure.patch(`/items/${id}`, {
        status: "recovered",
      });
  
      // Locally update the item status
      setItem((prevItem) => ({
        ...prevItem,
        status: "recovered",
      }));
  
      Swal.fire("Success!", "Item successfully marked as recovered!", "success");
      closeModal();
      setIsRecovered(true);
    } catch (error) {
      console.error("Error adding recovery:", error);
      Swal.fire("Failed!", "Failed to mark the item as recovered.", "error");
    }
  };
  



  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="mt-20 px-4 py-16">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Image Section */}
        <div className="relative ">
          <img
            className="w-full h-[250px] lg:h-[550px] object-cover transition-transform duration-300 hover:scale-105"
            src={item.thumbnail}
            alt={item.title}
          />
          <Link to={'/allItems'} className=" flex  items-center gap-2  absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md ">
          <FaArrowLeft className="" /> Back
          </Link>
        </div>
  
        {/* Details Section */}
        <div className="p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            {item.title}
          </h2>
          <p className="text-gray-600 text-lg mb-4">
          <span className="font-semibold">Description:</span>{item.description}
          </p>
          <div
            className={`inline-block text-sm px-3 py-1 rounded-full mb-4 ${item.status === "recovered"
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-600"
              }`}
          >
            {item.status === "recovered" ? "recovered" : "pending"}
          </div>
          <div className="text-gray-700 space-y-2">
        
            <p>
              <span className="font-semibold">📍 Location:</span>{" "}
              {item.location || "Not recovered yet"}
            </p>
            <p>
              <span className="font-semibold">📁 Category:</span>{" "}
              {item.category}
            </p>
          <p><span className="font-semibold">📆  Date:</span>{" "}
          {item.dateLost}</p>
           <div>
             <p>
              <>
                <p className=""><span className="font-semibold"> Name: </span>
                {item?.user?.displayName} 
                </p>
                <p className=""><span className="font-semibold"> Email: </span>
                {item?.user?.email} 
                </p>
              </>
            </p>
           </div>
          </div>
        </div>
  
        {/* Button Section */}
        <div className="p-6 bg-gray-50 flex justify-end">
          <button
            disabled={isRecovered}
            onClick={() => setModalOpen(true)}
            className={`px-6 py-3 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ${isRecovered
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r bg-purple-600 hover:shadow-lg"
              }`}
          >
            {isRecovered
              ? "Recovered"
              : item.type === "Lost"
                ? "Found This!"
                : "This is Mine!"}
          </button>
        </div>
  
        {/* Modal Section */}
        {modalOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-xl font-bold mb-4 text-gray-800">
                Recovery Details
              </h2>
              <label className="block text-gray-700 mb-2">
                Recovered Location:
              </label>
              <input
                type="text"
                value={recoverLocation}
                onChange={(e) => setRecoveryLocation(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter location"
              />
              <label className="block text-gray-700 mb-2">Recovered Date:</label>
              <DatePicker
                selected={recoveryDate}
                onChange={(date) => setRecoveryDate(date)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
              />
              <div className="flex items-center space-x-4 mb-4">
                {user?.photoURL && (
                  <img
                    src={user?.photoURL}
                    alt="User"
                    className="w-16 h-16 rounded-full border-2 border-purple-600"
                  />
                )}
                <div>
                  <p className="text-gray-600">
                    <span className="font-semibold">Email:</span>{" "}
                    {user?.email}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Name:</span>{" "}
                    {user?.displayName}
                  </p>
                </div>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
  
}
