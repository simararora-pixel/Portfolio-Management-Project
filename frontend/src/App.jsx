import { useState } from "react";

import Login from "./pages/Login";
import ManagerDashboard from "./pages/ManagerDashboard";
import Clients from "./pages/Clients";

import ManagerLayout from "./components/ManagerLayout";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [activePage, setActivePage] = useState("dashboard");

  const handleLogin = (userData) => {
    setUser(userData);
    setActivePage("dashboard");
  };

  const handleLogout = () => {
    setUser(null);
    setActivePage("dashboard");
  };

  // Show login screen when no user is logged in
  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  // Portfolio Manager application
  if (user.role === "manager") {
    return (
      <ManagerLayout
        username={user.username}
        activePage={activePage}
        onNavigate={setActivePage}
        onLogout={handleLogout}
      >
        {/* Dashboard */}
        {activePage === "dashboard" && <ManagerDashboard />}

        {/* Clients */}
        {activePage === "clients" && <Clients />}

        {/* Other pages - temporary placeholders */}
        {activePage !== "dashboard" &&
          activePage !== "clients" && (
            <div className="dashboard-page">
              <div className="dashboard-header">
                <div>
                  <p className="dashboard-eyebrow">
                    FINVEST
                  </p>

                  <h1>
                    {activePage.charAt(0).toUpperCase() +
                      activePage.slice(1)}
                  </h1>

                  <p className="dashboard-description">
                    This section will be built next.
                  </p>
                </div>
              </div>
            </div>
          )}
      </ManagerLayout>
    );
  }

  // Temporary client portal
  return (
    <div>
      <h1>Client Portal</h1>
      <p>Welcome, {user.username}</p>
    </div>
  );
}

export default App;