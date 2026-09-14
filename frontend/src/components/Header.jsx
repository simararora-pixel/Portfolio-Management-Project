function Header({ username }) {
  return (
    <header className="app-header">
      <div className="header-left">
        <h2>Dashboard</h2>
        <span>Portfolio Management Overview</span>
      </div>

      <div className="header-right">
        <button className="notification-button" title="Notifications">
          🔔
          <span className="notification-dot"></span>
        </button>

        <div className="header-profile">
          <div className="profile-avatar">
            {username ? username.charAt(0).toUpperCase() : "M"}
          </div>

          <div className="profile-info">
            <strong>{username || "Manager"}</strong>
            <span>Portfolio Manager</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;