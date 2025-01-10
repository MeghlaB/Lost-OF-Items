import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Typewriter } from "react-simple-typewriter";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function AddLost_FoundItem() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const [lost, setLost] = useState('Lost')

  const [formData, setFormData] = useState({
    thumbnail: "",
    title: "",
    type: "",
    description: "",
    category: "",
    location: "",
    dateLost: "",
    email: user?.email,
    name: user?.displayName,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    const from = e.target;
    const thumbnail = from.thumbnail.value;
    const title = from.title.value;
    const type = lost;
    const description = from.description.value;
    const category = from.category.value;
    const location = from.location.value;
    const dateLost = from.dateLost.value;
    const addInfo = {
      thumbnail,
      title,
      type,
      description,
      category,
      location,
      dateLost,

      user: {
        email: user?.email,
        name: user?.displayName,
      }

    };
    console.log(addInfo)
    axios.post(`${import.meta.env.VITE_API_URL}/addItems`, addInfo, {

    })
      .then((res) => {
        // console.log(res)
        // console.log('Data received:', res);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Post added successfully!",
            icon: "success",
            confirmButtonText: "Done",
          });
          navigate('/myItems');
        }
      })
      .catch((err) => {
        console.error('Error adding item:', err);
        Swal.fire({
          title: "Error!",
          text: "There was an issue adding your post.",
          icon: "error",
          confirmButtonText: "Retry",
        });
      });

  };

  return (
    <div className="container mx-auto py-28 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        <Typewriter
          words={["Add Lost of Found Item"]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={100}
          className="text-red-500"
        />
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-base-200 p-6 rounded shadow-md"
      >
        <div className="mb-4">
          <label className="text-left flex justify-start text-gray-700 font-bold mb-2">Image URL</label>
          <input
            type="url"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={handleChange}
            placeholder="Enter image URL"
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="text-left flex justify-start text-gray-700 font-bold mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter title"
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="text-left flex justify-start text-gray-700 font-bold mb-2">Post Type</label>
          <select
            name="type"
            value={lost}
            onChange={e => setLost(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          >
            <option value="Lost">Lost</option>
            <option value="Found">Found</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="text-left flex justify-start text-gray-700 font-bold mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter description"
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="text-left flex justify-start text-gray-700 font-bold mb-2">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="e.g. pets, documents, gadgets"
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="text-left flex justify-start text-gray-700 font-bold mb-2">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Where the item was lost/found"
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="text-left flex justify-start text-gray-700 font-bold mb-2">Date Lost/Found</label>
          <input
            type="date"
            name="dateLost"
            value={formData.dateLost}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="text-left flex justify-start text-gray-700 font-bold mb-2">User Email</label>
          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className="w-full px-3 py-2 border rounded bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div className="mb-4">
          <label className="text-left flex justify-start text-gray-700 font-bold mb-2">User Name</label>
          <input
            type="text"
            value={user?.displayName || ""}
            readOnly
            className="w-full px-3 py-2 border rounded bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
          />
        </div>


        <div className="text-center">
          <button
            type="submit"
            className="btn bg-purple-700 w-full text-white px-6 py-2 rounded hover:bg-[#796B96]"
          >
            Add Post
          </button>
        </div>
      </form>
    </div>
  );
}
