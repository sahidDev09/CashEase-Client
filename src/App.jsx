import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <div>
        <Navbar />
        <h1 className="text-6xl font-extrabold uppercase mt-20 text-center">
          Hello Dashboard
        </h1>
      </div>
    </>
  );
}

export default App;
