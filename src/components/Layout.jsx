import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      
      {/* Sidebar */}
      <nav
        style={{
          width: "230px",
          backgroundColor: "#1f2937",
          color: "white",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          height: "100vh",
          position: "sticky",
          top: 0,
          overflowY: "auto",
        }}
      >
        {/* Remove sidebar title */}
        <NavLink
          to="/dashboard"
          style={({ isActive }) => ({
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: isActive ? "#374151" : "transparent",
            color: isActive ? "#10b981" : "white",
            textDecoration: "none",
          })}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/employees/list"
          style={({ isActive }) => ({
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: isActive ? "#374151" : "transparent",
            color: isActive ? "#10b981" : "white",
            textDecoration: "none",
          })}
        >
          Employees
        </NavLink>

        <NavLink
          to="/settings"
          style={({ isActive }) => ({
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: isActive ? "#374151" : "transparent",
            color: isActive ? "#10b981" : "white",
            textDecoration: "none",
          })}
        >
          Settings
        </NavLink>
      </nav>

      {/* Main content */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}
