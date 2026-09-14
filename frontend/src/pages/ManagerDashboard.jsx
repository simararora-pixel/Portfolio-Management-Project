function ManagerDashboard() {
  const stats = [
    {
      title: "Total Clients",
      value: "128",
      change: "+8.4%",
      positive: true,
    },
    {
      title: "Total Portfolios",
      value: "184",
      change: "+5.2%",
      positive: true,
    },
    {
      title: "Assets Under Management",
      value: "₹12.84 Cr",
      change: "+6.7%",
      positive: true,
    },
    {
      title: "Today's Gain / Loss",
      value: "+₹2.46 L",
      change: "+1.82%",
      positive: true,
    },
  ];

  const topPortfolios = [
    {
      name: "Growth Portfolio",
      client: "Rahul Sharma",
      return: "+18.42%",
      value: "₹24.8 L",
    },
    {
      name: "Balanced Wealth",
      client: "Aarav Mehta",
      return: "+15.76%",
      value: "₹18.4 L",
    },
    {
      name: "Equity Plus",
      client: "Priya Verma",
      return: "+14.31%",
      value: "₹16.7 L",
    },
    {
      name: "Long Term Growth",
      client: "Ananya Singh",
      return: "+12.84%",
      value: "₹12.2 L",
    },
  ];

  const requests = [
    {
      client: "Rahul Sharma",
      type: "Buy Request",
      asset: "Reliance Industries",
      amount: "₹75,000",
      status: "Pending",
    },
    {
      client: "Priya Verma",
      type: "Sell Request",
      asset: "Infosys",
      amount: "₹42,500",
      status: "Pending",
    },
    {
      client: "Aarav Mehta",
      type: "Buy Request",
      asset: "HDFC Bank",
      amount: "₹95,000",
      status: "Pending",
    },
  ];

  return (
    <div className="dashboard-page">

      {/* Dashboard Header */}
      <div className="dashboard-header">
        <div>
          <p className="dashboard-eyebrow">PORTFOLIO MANAGEMENT</p>

          <h1>Manager Dashboard</h1>

          <p className="dashboard-description">
            Monitor clients, portfolios, performance and investment activity.
          </p>
        </div>

        <div className="dashboard-date">
          <span>Today</span>
          <strong>15 September 2026</strong>
        </div>
      </div>

      {/* Statistics */}
      <div className="stats-grid">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.title}>

            <div className="stat-card-top">
              <span>{stat.title}</span>

              <div className="stat-icon">₹</div>
            </div>

            <div className="stat-value">
              {stat.value}
            </div>

            <div
              className={`stat-change ${
                stat.positive ? "positive" : "negative"
              }`}
            >
              {stat.change}

              <span>vs last month</span>
            </div>

          </div>
        ))}
      </div>

      {/* Main Dashboard */}
      <div className="dashboard-main-grid">

        {/* Portfolio Performance */}
        <section className="dashboard-card performance-card">

          <div className="card-header">

            <div>
              <h2>Portfolio Performance</h2>

              <p>
                Overall portfolio value over the last 6 months
              </p>
            </div>

            <select defaultValue="6M">
              <option value="1M">1 Month</option>
              <option value="3M">3 Months</option>
              <option value="6M">6 Months</option>
              <option value="1Y">1 Year</option>
            </select>

          </div>

          <div className="chart-container">

            <div className="chart-grid">
              <span>14 Cr</span>
              <span>12 Cr</span>
              <span>10 Cr</span>
              <span>8 Cr</span>
              <span>6 Cr</span>
              <span>4 Cr</span>
            </div>

            <div className="chart-line">

              <div className="chart-point point-1"></div>
              <div className="chart-point point-2"></div>
              <div className="chart-point point-3"></div>
              <div className="chart-point point-4"></div>
              <div className="chart-point point-5"></div>
              <div className="chart-point point-6"></div>

            </div>

            <div className="chart-months">
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
            </div>

          </div>

        </section>

        {/* Asset Allocation */}
        <section className="dashboard-card allocation-card">

          <div className="card-header">

            <div>
              <h2>Asset Allocation</h2>

              <p>
                Current portfolio distribution
              </p>
            </div>

          </div>

          <div className="allocation-content">

            <div className="allocation-ring">

              <div className="allocation-center">
                <strong>₹12.84 Cr</strong>
                <span>Total</span>
              </div>

            </div>

            <div className="allocation-list">

              <div>
                <span className="allocation-label">
                  <i className="dot equity"></i>
                  Equity
                </span>

                <strong>58%</strong>
              </div>

              <div>
                <span className="allocation-label">
                  <i className="dot debt"></i>
                  Debt
                </span>

                <strong>24%</strong>
              </div>

              <div>
                <span className="allocation-label">
                  <i className="dot mutual"></i>
                  Mutual Funds
                </span>

                <strong>12%</strong>
              </div>

              <div>
                <span className="allocation-label">
                  <i className="dot other"></i>
                  Others
                </span>

                <strong>6%</strong>
              </div>

            </div>

          </div>

        </section>

      </div>

      {/* Bottom Dashboard */}
      <div className="dashboard-bottom-grid">

        {/* Top Performing Portfolios */}
        <section className="dashboard-card">

          <div className="card-header">

            <div>
              <h2>Top Performing Portfolios</h2>

              <p>
                Highest returns among managed portfolios
              </p>
            </div>

            <button className="text-button">
              View All
            </button>

          </div>

          <div className="portfolio-table">

            {topPortfolios.map((portfolio) => (
              <div
                className="portfolio-row"
                key={portfolio.name}
              >

                <div>
                  <strong>
                    {portfolio.name}
                  </strong>

                  <span>
                    {portfolio.client}
                  </span>
                </div>

                <span>
                  {portfolio.value}
                </span>

                <strong className="return-positive">
                  {portfolio.return}
                </strong>

              </div>
            ))}

          </div>

        </section>

        {/* Pending Investment Requests */}
        <section className="dashboard-card">

          <div className="card-header">

            <div>
              <h2>Pending Investment Requests</h2>

              <p>
                Requests awaiting your review
              </p>
            </div>

            <button className="text-button">
              View All
            </button>

          </div>

          <div className="request-list">

            {requests.map((request) => (
              <div
                className="request-row"
                key={`${request.client}-${request.asset}`}
              >

                <div className="request-info">

                  <strong>
                    {request.client}
                  </strong>

                  <span>
                    {request.type} · {request.asset}
                  </span>

                </div>

                <div className="request-right">

                  <strong>
                    {request.amount}
                  </strong>

                  <span className="pending-badge">
                    {request.status}
                  </span>

                </div>

              </div>
            ))}

          </div>

        </section>

      </div>

      {/* Quick Summary */}
      <div className="quick-summary">

        <div>
          <span>Pending Reports</span>
          <strong>7</strong>
        </div>

        <div>
          <span>New Client Joins</span>
          <strong>12</strong>
        </div>

        <div>
          <span>Active Portfolios</span>
          <strong>176</strong>
        </div>

        <div>
          <span>Portfolios Requiring Review</span>
          <strong>6</strong>
        </div>

      </div>

    </div>
  );
}

export default ManagerDashboard;