import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();

  const handleRegi = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const mobile = form.mobile.value;
    const image = form.image.files[0];
    const email = form.email.value;
    const pin = form.pin.value;
    const role = form.role.value;

    const formData = new FormData();
    formData.append("image", image);

    if (pin.length !== 5) {
      toast.warning("PIN should be exactly 5 digits");
      return;
    }

    if (role === "Select Role") {
      toast.warning("Please select your account's role");
      return;
    }

    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_API_KEY
      }`,
      formData
    );

    const allRegiData = {
      name,
      mobile,
      image: data.data.display_url,
      email,
      pin,
      role,
      status: "Pending",
    };

    try {
      const res = await axios.post(
        "http://localhost:8000/register",
        allRegiData
      );
      if (res.data.insertedId) {
        toast.success("Registered user successfully");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Registration failed");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen m-5 md:m-0">
      <div className="md:w-[30%] w-full mx-auto overflow-hidden bg-slate-200 rounded-lg shadow-md dark:bg-gray-800">
        <div className="px-6 py-4">
          <div className="flex justify-center mx-auto">
            <img
              className="w-64 mt-5"
              src="https://i.ibb.co/0hjRK0q/Dark-Blue-black.png"
              alt=""
            />
          </div>

          <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
            Welcome
          </h3>

          <p className="mt-1 text-center text-gray-500 dark:text-gray-400 mb-10">
            Create account
          </p>

          <form onSubmit={handleRegi}>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-3 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                placeholder="Name"
                name="name"
                aria-label="name"
                required
              />
            </div>

            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-3 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="number"
                placeholder="Mobile Number"
                aria-label="mobile"
                name="mobile"
                required
              />
            </div>

            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-3 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                placeholder="Email address"
                aria-label="email"
                name="email"
                required
              />
            </div>

            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </div>

            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-3 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="number"
                placeholder="PIN"
                aria-label="pin"
                name="pin"
                required
              />
            </div>

            <div className="w-full mt-4 flex gap-2 items-center">
              <label htmlFor="role">Role</label>
              <select name="role" className="p-2 rounded-md">
                <option disabled defaultValue="Select Role" value="Select Role">
                  Select Role
                </option>
                <option value="Agent">Agent</option>
                <option value="User">User</option>
              </select>
            </div>

            <div className="flex items-center justify-end mt-4">
              <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Register Now
              </button>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
          <span className="text-sm text-gray-600 dark:text-gray-200">
            Already have an account?
          </span>
          <Link to="/login">
            <button className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">
              Login
            </button>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
