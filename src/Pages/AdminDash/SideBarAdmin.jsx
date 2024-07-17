/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineBars } from "react-icons/ai";
import { IoExitOutline } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SidebarAdmin = ({ isActive, handleSideToggle }) => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setData(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        toast.success("Logged out");
        setTimeout(() => {
          navigate("/login");
          toast.success("Logged out");
        }, 500);
      }
    });
  };

  return (
    <>
      {/* Sidebar for mobile view */}

      <div className="flex justify-between items-center md:hidden">
        <div className="gap-2 flex justify-start items-center">
          <NavLink to="/">
            <img
              className="w-40 ml-5"
              src="https://i.ibb.co/0hjRK0q/Dark-Blue-black.png"
              alt=""
            />
          </NavLink>
        </div>
        <button
          onClick={handleSideToggle}
          className="p-4 focus:outline-none z-50">
          <AiOutlineBars className="text-xl" />
        </button>
      </div>

      <aside
        className={`fixed md:static flex flex-col justify-between top-0 left-0 w-72 h-screen px-5 py-8 overflow-y-auto bg-blue-50 border-r rtl:border-r-0 rtl:border-l transition-transform transform ${
          isActive ? "translate-x-0 z-40" : "-translate-x-full"
        } md:translate-x-0`}>
        <div>
          <NavLink to="/" className="mx-auto flex justify-center">
            <img
              className=" w-40"
              src="https://i.ibb.co/0hjRK0q/Dark-Blue-black.png"
              alt="Company Logo"
            />
          </NavLink>

          <div className="flex flex-col items-center mt-6 -mx-2">
            <img
              className="object-cover w-24 h-24 mx-2 rounded-full"
              src={data.image}
              alt="User Avatar"
            />
            <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">
              {data.name}
            </h4>
            <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
              {data.email}
            </p>
          </div>

          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <NavLink
                to="/userManage"
                className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200"
                href="#dashboard">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Dashboard Icon">
                  <path
                    d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="mx-4 font-medium">User Manegement</span>
              </NavLink>

              <a
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#settings">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Settings Icon">
                  <path
                    d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="mx-4 font-medium">System Monitoring</span>
              </a>
              <a
                onClick={handleLogout}
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#settings">
                <IoExitOutline className=" text-2xl font-semibold" />

                <button className="mx-4 font-medium">Logout</button>
              </a>
            </nav>
          </div>
        </div>
        <div className=" p-3 text-center text-md font-bold rounded-md w-full bg-blue-400 text-white">
          {data.role} dashboard
        </div>
        <Toaster />
      </aside>
    </>
  );
};

export default SidebarAdmin;
