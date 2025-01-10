import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import UserAxiosSecure from "../Hooks/UserAxiosSecure";
import { ThemeContext } from "../AuthProvider/ThemeProvider";

export default function MyItems() {
  const axiosSecure = UserAxiosSecure();
  const { user } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const [postItems, setPostItems] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchItems = async () => {
    try {
      if (!user?.email) {
        Swal.fire({
          title: "Error!",
          text: "No user email found!",
          icon: "error",
        });
        return;
      }
      const res = await axiosSecure.get(`/myItems/${user?.email}`);
      setPostItems(res.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.email) {
      fetchItems();
    }
  }, [user?.email]);

  // Handle deletion of an item
  const handleDelete = async (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This item will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.delete(`/items/${_id}`);
          if (res.status === 200) {
            Swal.fire("Deleted!", "Your item has been deleted.", "success");
            setPostItems(postItems.filter((post) => post._id !== _id));
          }
        } catch (error) {
          Swal.fire("Error!", "Failed to delete the post.", "error");
          console.error("Error deleting item:", error);
        }
      }
    });
  };

  return (
    <div className={`container mx-auto py-28 px-4 ${theme === "dark" ? " text-gray-100" : " text-gray-900"}`}>
      {loading ? (
        <div className="flex justify-center pt-6 items-center">
          <div className="w-10 h-10 animate-spin rounded-full border-8 border-dotted border-sky-600"></div>
        </div>
      ) : (
        <div>
          {postItems.length === 0 ? (
            <p className="text-xl text-center text-gray-500">No items found.</p>
          ) : (
            <div>
              <h2 className="text-3xl font-semibold text-center mb-6 text-purple-800">My Items</h2>
              <div className={`overflow-x-auto shadow-lg rounded-lg ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
                <table className="table-auto w-full border-collapse">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">Title</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">Type</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">Category</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">Location</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {postItems.map((item) => (
                      <tr key={item._id} className={ theme === 'dark'?'text-white':'text-blcak'}>
                        <td className={`px-6 py-4 text-sm font-medium  border-b `}>{item.title}</td>
                        <td className="px-6 py-4 text-sm border-b">{item.type}</td>
                        <td className="px-6 py-4 text-sm  border-b">{item.category}</td>
                        <td className="px-6 py-4 text-sm  border-b">{item.location}</td>
                        <td className="px-6 py-4 text-sm border-b">
                          <div className="flex space-x-2">
                            <Link to={`/updatePost/${item._id}`}>
                              <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-blue-400">
                                Update
                              </button>
                            </Link>
                            <button
                              onClick={() => handleDelete(item._id)}
                              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
