function Sidebar({ activePage, onNavigate, onLogout }) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "▦" },
    { id: "clients", label: "Clients", icon: "♙" },
    { id: "portfolios", label: "Portfolios", icon: "▤" },
    { id: "assets", label: "Assets", icon: "◆" },
    { id: "buy-sell", label: "Buy / Sell", icon: "↕" },
    { id: "holdings", label: "Holdings", icon: "▥" },
    { id: "analytics", label: "Analytics", icon: "◒" },
    { id: "risk", label: "Risk Analysis", icon: "⚠" },
    { id: "rebalancing", label: "Rebalancing", icon: "⟳" },
    { id: "requests", label: "Requests", icon: "✉" },
    { id: "reports", label: "Reports", icon: "▧" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-mark">F</div>

        <div>
          <h2>FinVest</h2>
          <span>Portfolio Management</span>
        </div>
      </div>

      <div className="sidebar-section-title">
        MAIN MENU
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`sidebar-item ${
              activePage === item.id ? "active" : ""
            }`}
            onClick={() => onNavigate(item.id)}
          >
            <span className="sidebar-icon">
              {item.icon}
            </span>

            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <button
          className={`sidebar-item ${
            activePage === "profile" ? "active" : ""
          }`}
          onClick={() => onNavigate("profile")}
        >
          <span className="sidebar-icon">◯</span>
          <span>Profile</span>
        </button>

        <button
          className="sidebar-item logout-item"
          onClick={onLogout}
        >
          <span className="sidebar-icon">↪</span>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;