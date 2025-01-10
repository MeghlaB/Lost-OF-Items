import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import UserAxiosSecure, { axiosSecure } from "../Hooks/UserAxiosSecure";

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
      type:item.type,
      title: item.title,
      category: item.category,
      recoverBy: {
        email: user?.email,
        name: user?.displayName,
        image: user?.photoURL,
      },
    };

    try {
     
      await axiosSecure.post(`/recovere`, recoveryData);

      await axiosSecure.patch(`/items/${id}`, {
        status: "recovered",
      });

     
      Swal.fire("SuccessFully Update!");
      closeModal();
      setIsRecovered(true);
    } catch (error) {
      console.error("Error adding recovery:", error);
      Swal.fire( "Failed to mark the item as recovered", "error");
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="bg-white mx-3 md:mx-4 lg:mx-auto rounded-xl shadow-lg overflow-hidden max-w-4xl  my-28">
      <div className="relative">
        <img
          className="w-full h-[250px] lg:h-[550px] object-cover"
          src={item.thumbnail}
          alt={item.title}
        />
        <div className="absolute top-4 left-4 bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
          {item.type === "Lost" ? "Lost Item" : "Found Item"}
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h2>
        <p className="text-gray-600 text-xl font-semibold mb-4">
          {item.description}
        </p>
        <div className="gap-4 text-black">
          <p>
            <span className="font-semibold">
              <span className="text-xl font-bold">Location</span>:
            </span>{" "}
            {item.location || "Not recovered yet"}
          </p>
          <p>
            <span className="font-semibold">Category:</span> {item.category}
          </p>
          <p>
            <span className="font-semibold">Posted By:</span>{" "}
            {item?.user?.displayName} ({item?.user?.email})
          </p>
        </div>
      </div>

      <div className="p-6 bg-gray-50 flex justify-end">
        <button
          disabled={isRecovered}
          onClick={() => setModalOpen(true)}
          className={`btn text-white px-6 py-3 rounded-lg transition-all duration-200 ${
            isRecovered
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-purple-600 hover:bg-purple-700"
          }`}
        >
          {isRecovered
            ? "Recovered"
            : item.type==="Lost"
            ? "Found This!"
            : "This is Mine!"}
        </button>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-md w-1/3">
            <h2 className="text-xl font-semibold mb-4">Recovery Details</h2>

            <label className="block mb-2">Recovered Location:</label>
            <input
              type="text"
              value={recoverLocation}
              onChange={(e) => setRecoveryLocation(e.target.value)}
              className="w-full px-4 py-2 border rounded mb-4"
              placeholder="Enter location"
            />

            <label className="block mb-2">Recovered Date:</label>
            <DatePicker
              selected={recoveryDate}
              onChange={(date) => setRecoveryDate(date)}
              className="w-full px-4 py-2 border rounded mb-4"
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
                  <span className="font-semibold">Email: </span>
                  {user?.email}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Name: </span>
                  {user?.displayName}
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-purple-600 text-white rounded"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
