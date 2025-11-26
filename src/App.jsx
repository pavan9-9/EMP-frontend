import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import EmployeesLayout from "./pages/Employees/EmployeesLayout.jsx";
import EmployeeList from "./pages/Employees/EmployeeList.jsx";
import CreateEmployee from "./pages/Employees/CreateEmployee.jsx";
import EditEmployee from "./pages/Employees/EditEmployee.jsx";
import Settings from "./pages/Settings.jsx";
import Layout from "./components/Layout.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<Layout />}>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/employees" element={<EmployeesLayout />}>
        <Route path="list" element={<EmployeeList />} />
        <Route path="create" element={<CreateEmployee />} />
        <Route path="edit/:id" element={<EditEmployee />} />
      </Route>
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
