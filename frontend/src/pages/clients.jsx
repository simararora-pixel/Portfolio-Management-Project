import { useState } from "react";

function Clients() {
  const [clients, setClients] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      age: 28,
      riskProfile: "High",
      investment: "₹12,50,000",
      portfolio: "Growth Portfolio",
    },
    {
      id: 2,
      name: "Priya Verma",
      age: 34,
      riskProfile: "Moderate",
      investment: "₹8,75,000",
      portfolio: "Balanced Wealth",
    },
    {
      id: 3,
      name: "Aarav Mehta",
      age: 41,
      riskProfile: "Low",
      investment: "₹15,20,000",
      portfolio: "Stable Income",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    riskProfile: "Moderate",
    investment: "",
    portfolio: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddClient = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.age ||
      !formData.investment ||
      !formData.portfolio
    ) {
      alert("Please fill all fields.");
      return;
    }

    const newClient = {
      id: Date.now(),
      name: formData.name,
      age: Number(formData.age),
      riskProfile: formData.riskProfile,
      investment: `₹${Number(formData.investment).toLocaleString("en-IN")}`,
      portfolio: formData.portfolio,
    };

    setClients([...clients, newClient]);

    setFormData({
      name: "",
      age: "",
      riskProfile: "Moderate",
      investment: "",
      portfolio: "",
    });

    setShowForm(false);
  };

  return (
    <div className="feature-page">

      <div className="feature-header">
        <div>
          <p className="feature-eyebrow">CLIENT MANAGEMENT</p>

          <h1>Clients</h1>

          <p>
            Manage clients, risk profiles and portfolio assignments.
          </p>
        </div>

        <button
          className="primary-button"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close Form" : "+ Add Client"}
        </button>
      </div>

      {showForm && (
        <section className="feature-card client-form-card">

          <div className="card-title">
            <h2>Add New Client</h2>
            <p>Enter the client's basic investment information.</p>
          </div>

          <form
            className="client-form"
            onSubmit={handleAddClient}
          >

            <div className="input-group">
              <label>Client Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter client name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Age</label>

              <input
                type="number"
                name="age"
                placeholder="Enter age"
                value={formData.age}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Risk Profile</label>

              <select
                name="riskProfile"
                value={formData.riskProfile}
                onChange={handleChange}
              >
                <option value="Low">Low</option>
                <option value="Moderate">Moderate</option>
                <option value="High">High</option>
              </select>
            </div>

            <div className="input-group">
              <label>Initial Investment</label>

              <input
                type="number"
                name="investment"
                placeholder="Enter amount"
                value={formData.investment}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Portfolio</label>

              <input
                type="text"
                name="portfolio"
                placeholder="e.g. Growth Portfolio"
                value={formData.portfolio}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="primary-button form-submit"
            >
              Create Client
            </button>

          </form>
        </section>
      )}

      <section className="feature-card">

        <div className="card-title">
          <div>
            <h2>Client List</h2>

            <p>
              {clients.length} clients currently managed
            </p>
          </div>
        </div>

        <div className="client-table-wrapper">

          <table className="client-table">

            <thead>
              <tr>
                <th>Client</th>
                <th>Age</th>
                <th>Risk Profile</th>
                <th>Initial Investment</th>
                <th>Portfolio</th>
              </tr>
            </thead>

            <tbody>

              {clients.map((client) => (
                <tr key={client.id}>

                  <td>
                    <strong>{client.name}</strong>
                  </td>

                  <td>{client.age}</td>

                  <td>
                    <span
                      className={`risk-badge ${client.riskProfile.toLowerCase()}`}
                    >
                      {client.riskProfile}
                    </span>
                  </td>

                  <td>{client.investment}</td>

                  <td>{client.portfolio}</td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </section>

    </div>
  );
}

export default Clients;