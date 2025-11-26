import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8081/Employee/AllEmployees")
      .then(res => setEmployees(res.data))
      .catch(err => console.log(err));
  }, []);

  const deleteEmployee = (id) => {
    axios.delete(`http://localhost:8081/Employee/DeleteEmployee/${id}`)
      .then(() => {
        alert("Employee deleted");
        setEmployees(employees.filter(e => e.id !== id));
      })
      .catch(err => console.log(err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>Employee List</h2>

      <table 
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "#ffffff",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <thead style={{ backgroundColor: "#2563eb", color: "white" }}>
          <tr>
            <th style={thStyle}>First Name</th>
            <th style={thStyle}>Last Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Phone</th>
            <th style={thStyle}>Gender</th>
            <th style={thStyle}>DOB</th>
            <th style={thStyle}>Country</th>
            <th style={thStyle}>City</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map(emp => (
            <tr key={emp.id} style={{ borderBottom: "1px solid #e5e7eb" }}>
              <td style={tdStyle}>{emp.firstName}</td>
              <td style={tdStyle}>{emp.lastName}</td>
              <td style={tdStyle}>{emp.email}</td>
              <td style={tdStyle}>{emp.phoneNumber}</td>
              <td style={tdStyle}>{emp.gender}</td>
              <td style={tdStyle}>{emp.dateOfBirth}</td>
              <td style={tdStyle}>{emp.country}</td>
              <td style={tdStyle}>{emp.city}</td>

              {/* Action Buttons */}
              <td style={{ ...tdStyle, textAlign: "center" }}>
                <button 
                  onClick={() => navigate(`/employees/edit/${emp.id}`)}
                  style={editBtn}
                >
                  ✏️ Edit
                </button>

                <button 
                  onClick={() => deleteEmployee(emp.id)}
                  style={deleteBtn}
                >
                  🗑️ Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* 🎨 TABLE CELL STYLES */
const thStyle = {
  padding: "12px",
  textAlign: "left",
  fontWeight: "600",
};

const tdStyle = {
  padding: "12px",
  fontSize: "14px",
  color: "#333",
};

/* 🎨 BUTTON STYLES */
const editBtn = {
  padding: "7px 12px",
  backgroundColor: "#10b981",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginRight: "8px",
  fontSize: "13px",
};

const deleteBtn = {
  padding: "7px 12px",
  backgroundColor: "#ef4444",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "13px",
};
