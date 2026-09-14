import Sidebar from "./Sidebar";
import Header from "./Header";

function ManagerLayout({
  username,
  activePage,
  onNavigate,
  onLogout,
  children,
}) {
  return (
    <div className="manager-layout">
      <Sidebar
        activePage={activePage}
        onNavigate={onNavigate}
        onLogout={onLogout}
      />

      <div className="manager-content">
        <Header username={username} />

        <main className="manager-main">
          {children}
        </main>
      </div>
    </div>
  );
}

export default ManagerLayout;