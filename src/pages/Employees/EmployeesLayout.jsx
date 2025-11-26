import { Outlet, NavLink } from "react-router-dom";

export default function EmployeesLayout() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Employees</h2>

      <nav style={{ marginBottom: "20px" }}>
        <NavLink
          to="list"
          style={{ marginRight: "20px" }}
        >
          Employee List
        </NavLink>

        <NavLink to="create">Create Employee</NavLink>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}
