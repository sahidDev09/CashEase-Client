import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminDash from "./Pages/AdminDash/SideBarAdmin";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  console.log(user);

  return (
    <>
      <div>
        {user && (
          <div>
            {user.role === "Admin" && <AdminDash />}
            {user.role === "User" && "User Dashboard"}
            {user.role === "Agent" && "Agent Dashboard"}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
