import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CreateEmployee.css"; // <-- Add CSS file

export default function CreateEmployee() {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    dateOfBirth: "",
    country: "",
    city: "",
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const saveEmployee = () => {
    axios
      .post("http://localhost:8081/Employee/addEmployee", employee)
      .then(() => {
        alert("Employee added successfully");
        navigate("/employees/list");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="create-container">
      <div className="create-box">

        <h2 className="title">Create Employee</h2>

        <div className="form-group">
          <input name="firstName" placeholder="First Name" onChange={handleChange} />
          <input name="lastName" placeholder="Last Name" onChange={handleChange} />
        </div>

        <div className="form-group">
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input name="phoneNumber" placeholder="Phone Number" onChange={handleChange} />
        </div>

        <div className="form-group">
          <select name="gender" onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <input type="date" name="dateOfBirth" onChange={handleChange} />
        </div>

        <div className="form-group">
          <input name="country" placeholder="Country" onChange={handleChange} />
          <input name="city" placeholder="City" onChange={handleChange} />
        </div>

        <button className="save-btn" onClick={saveEmployee}>
          Save Employee
        </button>
      </div>
    </div>
  );
}
