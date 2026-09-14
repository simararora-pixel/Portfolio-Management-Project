import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("manager");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }

    onLogin({
      username,
      role,
    });
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-brand">
          <h1>FinVest</h1>
          <p>Portfolio Management System</p>
        </div>

        <h2>Welcome Back</h2>
        <p className="login-subtitle">
          Sign in to manage your investments and portfolios.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Login As</label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="manager">Portfolio Manager</option>
              <option value="client">Client</option>
            </select>
          </div>

          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>

        <div className="login-footer">
          <span>FinVest</span>
          <span>Secure Portfolio Management</span>
        </div>
      </div>
    </div>
  );
}

export default Login;