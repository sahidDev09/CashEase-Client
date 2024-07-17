import { Outlet } from "react-router-dom";
import SidebarAdmin from "../Pages/AdminDash/SideBarAdmin";
import { useState } from "react";

const Dashboard = () => {
  const [isActive, setIsActive] = useState(false);

  const handleSideToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="relative min-h-screen md:flex">
      {/* Sidebar */}
      <div
        className={`fixed md:w-72 w-full z-40 ${
          isActive ? "block" : "md:block"
        }`}>
        <SidebarAdmin isActive={isActive} handleSideToggle={handleSideToggle} />
      </div>
      {/* Outlet */}
      <div className={`flex-1 md:ml-72 mt-3 ${isActive ? "md:block" : ""}`}>
        <div className="p-5">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
