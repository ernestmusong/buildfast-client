import "./Features.css";

const features = [
  {
    icon: "💳",
    title: "Mobile Money Collections",
    description:
      "Accept MTN Mobile Money and Orange Money payments through a simple and reliable API.",
  },
  {
    icon: "💸",
    title: "Instant Payouts",
    description:
      "Send money to customers, suppliers, and partners instantly with secure disbursement APIs.",
  },
  {
    icon: "🔐",
    title: "Enterprise Security",
    description:
      "Protect your business with API keys, IP whitelisting, phone whitelisting, and advanced security controls.",
  },
  {
    icon: "🔔",
    title: "Webhooks & Events",
    description:
      "Receive real-time notifications whenever deposits, withdrawals, refunds, or account events occur.",
  },
  {
    icon: "📈",
    title: "Analytics & Reporting",
    description:
      "Monitor transactions, balances, API activity, and generate detailed financial reports from your dashboard.",
  },
  {
    icon: "🧑‍💻",
    title: "Developer First",
    description:
      "Get started quickly with sandbox testing, SDKs, comprehensive documentation, and API examples.",
  },
];

export default function Features() {
  return (
    <section className="features">

      <div className="features-container">

        <div className="section-title">

          <span>WHY BUILDFAST</span>

          <h2>
            Everything you need to build powerful payment experiences
          </h2>

          <p>
            Build secure payment flows, automate transactions, and
            scale your business using APIs designed for modern developers.
          </p>

        </div>


        <div className="features-grid">

          {features.map((feature, index) => (
            <div 
              className="feature-card" 
              key={index}
            >

              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>
                {feature.title}
              </h3>

              <p>
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}