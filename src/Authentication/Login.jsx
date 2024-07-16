import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

/* eslint-disable react/no-unescaped-entities */
const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pin = form.pin.value;

    const alllogindata = {
      email,
      pin,
    };

    try {
      const res = await axios.post("http://localhost:8000/login", alllogindata);
      console.log(res);
      if (res.status === 200) {
        toast.success("Login successful!");
        setInterval(() => {
          navigate("/");
        }, 1000);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("Invalid credentials. Please try again.");
      } else {
        toast.error("An error occurred. Please try again later.");
      }
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
              alt="Logo"
            />
          </div>

          <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
            Welcome
          </h3>

          <p className="mt-1 text-center text-gray-500 dark:text-gray-400 mb-10">
            Login or create account
          </p>

          <form onSubmit={handleLogin} className="flex flex-col gap-2">
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-3 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                name="email"
                placeholder="Phone / Email Address"
                aria-label="Email Address"
                required
              />
            </div>

            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-3 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="number"
                name="pin"
                placeholder="Enter PIN"
                aria-label="PIN"
                required
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">
                Forget Password?
              </a>

              <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign In
              </button>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
          <span className="text-sm text-gray-600 dark:text-gray-200">
            Don't have an account?
          </span>

          <Link to="/register">
            <button className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">
              Register
            </button>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
