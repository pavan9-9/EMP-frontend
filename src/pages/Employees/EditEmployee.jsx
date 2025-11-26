import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    gender: "",
    country: "",
    city: ""
  });

  // Load employee data
  useEffect(() => {
    axios.get(`http://localhost:8081/Employee/getEmpoyees/${id}`)
      .then(res => {
        setEmployee(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  // Input handler
  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  // Update API call
  const updateEmployee = () => {
    axios.put(`http://localhost:8081/Employee/updateEmployee/${id}`, employee)
      .then(() => {
        alert("Employee updated successfully");
        navigate("/employees/list");
      })
      .catch(err => console.log(err));
  };

  return (
    <div style={styles.container}>
      <h2>Edit Employee</h2>

      <div style={styles.form}>
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
          name="email"
          placeholder="Email"
          value={employee.email}
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
          type="date"
          name="dateOfBirth"
          value={employee.dateOfBirth}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="gender"
          placeholder="Gender"
          value={employee.gender}
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
      </div>

      <button onClick={updateEmployee} style={styles.button}>
        Update Employee
      </button>
    </div>
  );
}

// Basic inline styling (can convert to CSS later)
const styles = {
  container: {
    width: "500px",
    margin: "auto",
    padding: "20px",
    background: "#f9f9f9",
    borderRadius: "10px",
    marginTop: "30px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  },
  form: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "15px"
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc"
  },
  button: {
    width: "100%",
    padding: "12px",
    fontSize: "18px",
    marginTop: "20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  }
};
