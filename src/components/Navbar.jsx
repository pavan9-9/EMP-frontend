import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Employee Manager</h2>

      <ul className="nav-links">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/employees">Employees</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><button className="logout-btn">Logout</button></li>
      </ul>
    </nav>
  );
}
