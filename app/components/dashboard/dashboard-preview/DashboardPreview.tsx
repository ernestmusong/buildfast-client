import "./DashboardPreview.css";

const transactions = [
  {
    type: "Deposit",
    amount: "25,000 XAF",
    status: "Success",
  },
  {
    type: "Payout",
    amount: "10,000 XAF",
    status: "Success",
  },
  {
    type: "Deposit",
    amount: "50,000 XAF",
    status: "Pending",
  },
];

export default function DashboardPreview() {
  return (
    <section className="dashboard-preview-section">

      <div className="preview-container">

        <div className="preview-header">

          <div>
            <span className="preview-badge">
              MERCHANT DASHBOARD
            </span>

            <h2>
              Manage payments from a single dashboard
            </h2>

            <p>
              Track balances, monitor transactions,
              manage API keys, and control security settings
              from one place.
            </p>
          </div>

        </div>


        <div className="dashboard-card">

          {/* Top */}

          <div className="dashboard-top">

            <div>

              <h3>BuildFast Dashboard</h3>

              <span>
                Merchant Portal
              </span>

            </div>


            <div className="environment-switch">

              <button className="active">
                Sandbox
              </button>

              <button>
                Production
              </button>

            </div>

          </div>


          {/* Balance */}

          <div className="balance-card">

            <span>Current Balance</span>

            <h1>
              1,250,000 XAF
            </h1>

          </div>


          {/* Stats */}

          <div className="stats-grid">

            <div className="stat-card">
              <span>Deposits</span>
              <strong>450,000 XAF</strong>
            </div>

            <div className="stat-card">
              <span>Withdrawals</span>
              <strong>120,000 XAF</strong>
            </div>

            <div className="stat-card">
              <span>Success Rate</span>
              <strong>99.8%</strong>
            </div>

          </div>


          {/* Transactions */}

          <div className="transactions">

            <div className="transactions-header">
              Recent Transactions
            </div>

            {transactions.map((item, index) => (
              <div
                className="transaction-row"
                key={index}
              >
                <div>
                  {item.type}
                </div>

                <div>
                  {item.amount}
                </div>

                <div
                  className={`status ${item.status.toLowerCase()}`}
                >
                  {item.status}
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}