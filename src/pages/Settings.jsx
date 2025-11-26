export default function Settings() {
  return (
    <div style={{ padding: "25px" }}>
      <h1 style={{ marginBottom: "20px" }}>Settings</h1>

      {/* Settings Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >

        {/* Profile Card */}
        <div
          style={{
            background: "#ffffff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>Profile</h3>
          <p style={{ marginBottom: "15px", color: "#555" }}>
            Update your personal information and change password.
          </p>
          <button
            style={{
              padding: "10px 15px",
              backgroundColor: "#2563eb",
              borderRadius: "6px",
              border: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            Manage Profile
          </button>
        </div>

        {/* Theme Card */}
        <div
          style={{
            background: "#ffffff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>Appearance</h3>
          <p style={{ marginBottom: "15px", color: "#555" }}>
            Customize the look and feel of your dashboard.
          </p>
          <button
            style={{
              padding: "10px 15px",
              backgroundColor: "#10b981",
              borderRadius: "6px",
              border: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            Change Theme
          </button>
        </div>

        {/* Notifications Card */}
        <div
          style={{
            background: "#ffffff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>Notifications</h3>
          <p style={{ marginBottom: "15px", color: "#555" }}>
            Manage your email alerts & system notifications.
          </p>
          <button
            style={{
              padding: "10px 15px",
              backgroundColor: "#f59e0b",
              borderRadius: "6px",
              border: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            Notification Settings
          </button>
        </div>

        {/* Security Card */}
        <div
          style={{
            background: "#ffffff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>Security</h3>
          <p style={{ marginBottom: "15px", color: "#555" }}>
            Manage authentication, login sessions & passwords.
          </p>
          <button
            style={{
              padding: "10px 15px",
              backgroundColor: "#ef4444",
              borderRadius: "6px",
              border: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            Security Options
          </button>
        </div>

      </div>
    </div>
  );
}
