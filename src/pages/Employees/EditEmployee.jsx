import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();

  // State with same fields as EmployeeDTO
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    gender: "",
    dateOfBirth: "",
    country: "",
    city: ""
  });

  // Load employee data by ID
  useEffect(() => {
    axios
      .get(`http://localhost:8081/Employee/getEmpoyee/${id}`)
      .then((res) => {
        // Convert date to yyyy-mm-dd format for input[type="date"]
        const empData = {
          ...res.data,
          dateOfBirth: res.data.dateOfBirth
            ? res.data.dateOfBirth
            : ""
        };
        setEmployee(empData);
      })
      .catch((err) => console.log(err));
  }, [id]);

  // Handle form input change
  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  // Submit update
  const updateEmployee = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8081/Employee/updateEmployee/${id}`, employee)
      .then(() => {
        alert("Employee updated successfully!");
        navigate("/employees/list");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={styles.container}>
      <h2>Edit Employee</h2>

      <form onSubmit={updateEmployee} style={styles.form}>
        <input
          name="firstName"
          placeholder="First Name"
          value={employee.firstName}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="lastName"
          placeholder="Last Name"
          value={employee.lastName}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="phoneNumber"
          placeholder="Phone Number"
          value={employee.phoneNumber}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="email"
          placeholder="Email"
          value={employee.email}
          onChange={handleChange}
          style={styles.input}
        />

        <select
          name="gender"
          value={employee.gender}
          onChange={handleChange}
          style={styles.input}
        >
          <option value="">Select Gender</option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
          <option value="OTHER">Other</option>
        </select>

        <input
          type="date"
          name="dateOfBirth"
          value={employee.dateOfBirth}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="country"
          placeholder="Country"
          value={employee.country}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="city"
          placeholder="City"
          value={employee.city}
          onChange={handleChange}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Update Employee
        </button>
      </form>
    </div>
  );
}

// Inline styles
const styles = {
  container: {
    width: "450px",
    margin: "auto",
    marginTop: "40px",
    padding: "20px",
    background: "#f7f7f7",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)"
  },
  form: {
    display: "grid",
    gap: "15px"
  },
  input: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px"
  },
  button: {
    padding: "12px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px"
  }
};
