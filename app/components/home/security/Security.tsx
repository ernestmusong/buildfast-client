import "./Security.css";

const securityFeatures = [
  {
    icon: "🔑",
    title: "Secure API Authentication",
    description:
      "Protect every request using API keys, secret keys, signature validation, and controlled access permissions.",
  },
  {
    icon: "🌐",
    title: "IP Whitelisting",
    description:
      "Restrict API access to approved server IP addresses and prevent unauthorized requests.",
  },
  {
    icon: "📱",
    title: "Phone Whitelisting",
    description:
      "Control which phone numbers can initiate deposits and withdrawals from your application.",
  },
  {
    icon: "🛡️",
    title: "Fraud Protection",
    description:
      "Monitor suspicious activities, apply transaction rules, and maintain detailed audit records.",
  },
  {
    icon: "🪪",
    title: "Business Verification",
    description:
      "Merchants undergo verification before receiving production API credentials and live access.",
  },
  {
    icon: "📜",
    title: "Complete Audit Trails",
    description:
      "Track API requests, logins, configuration changes, and payment events in real time.",
  },
];

export default function Security() {
  return (
    <section className="security">

      <div className="security-container">

        <div className="security-header">

          <span className="section-badge">
            SECURITY & TRUST
          </span>

          <h2>
            Enterprise-grade security built into every transaction
          </h2>

          <p>
            BuildFast provides the controls businesses need to manage
            payments safely, protect customer funds, and monitor every
            activity on the platform.
          </p>

        </div>


        <div className="security-grid">

          {securityFeatures.map((item, index) => (
            <div className="security-card" key={index}>

              <div className="security-icon">
                {item.icon}
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

            </div>
          ))}

        </div>


        <div className="security-banner">

          <div className="banner-text">

            <h3>
              Your payment infrastructure, protected by design
            </h3>

            <p>
              From sandbox testing to production API access,
              every merchant benefits from strong security controls,
              activity monitoring, and account protection.
            </p>

          </div>


          <div className="security-stats">

            <div>
              <strong>24/7</strong>
              <span>Monitoring</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Activity Logs</span>
            </div>

            <div>
              <strong>2FA</strong>
              <span>Account Protection</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}