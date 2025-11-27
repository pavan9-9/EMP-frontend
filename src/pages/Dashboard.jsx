import { useEffect, useState } from "react";
import axios from "../api/axiosConfig";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [totalEmployees, setTotalEmployees] = useState(0);
  const [userName, setUserName] = useState("User");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch total employees
    axios.get("/Employee/AllEmployees")
      .then((res) => setTotalEmployees(res.data.length))
      .catch(err => console.log(err));

    // Extract user name from JWT stored in localStorage
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        // Assuming your payload has 'name' field
        setUserName(payload.name || payload.email || "User");
      } catch (err) {
        setUserName("User");
      }
    }
  }, []);

  const logout = () => {
  localStorage.removeItem("token");
  navigate("/login", { replace: true }); 
  window.location.reload();
  };

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      
      {/* 🔵 Top Navbar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "15px 25px",
          backgroundColor: "#2563eb",
          color: "white",
          width: "100%",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        {/* Left - App title */}
        <h2 style={{ margin: 0 }}>Employee Manager</h2>

        {/* Center - Welcome message */}
        <h3 style={{ margin: 0, textAlign: "center", flex: 1 }}>
          Welcome, {userName}
        </h3>

        {/* Right - Logout button moved slightly left */}
        <button
          onClick={logout}
          style={{
            backgroundColor: "#ef4444",
            border: "none",
            padding: "10px 15px",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "14px",
            marginRight: "30px", // <- moves it a bit left from the edge
          }}
        >
          Logout
        </button>
      </div>

      {/* Dashboard Content */}
      <div style={{ padding: "20px" }}>
        <h1 style={{ marginBottom: "20px" }}>Dashboard</h1>

        <div
          style={{
            padding: "20px",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            width: "240px",
            boxShadow: "0 2px 7px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h3 style={{ marginBottom: "8px" }}>Total Employees</h3>
          <p style={{ fontSize: "30px", fontWeight: "bold", margin: 0 }}>
            {totalEmployees}
          </p>
        </div>
      </div>
    </div>
  );
}
