import Link from "next/link";
import "./Developer.css";

export default function Developer() {
  return (
    <section className="developer">

      <div className="developer-container">

        {/* Left Content */}
        <div className="developer-content">

          <span className="section-badge">
            DEVELOPERS FIRST
          </span>


          <h2>
            Integrate BuildFast in minutes
          </h2>


          <p>
            Use our simple REST APIs to collect payments,
            make payouts, receive webhooks, and manage your
            transactions with confidence.
          </p>


          <div className="developer-list">

            <div>
              ✓ Comprehensive API documentation
            </div>

            <div>
              ✓ Sandbox environment for testing
            </div>

            <div>
              ✓ API keys and webhook management
            </div>

            <div>
              ✓ SDKs for popular languages
            </div>

            <div>
              ✓ 24/7 developer support
            </div>

          </div>


          <div className="developer-actions">

            <Link 
              href="/docs"
              className="primary-button"
            >
              Explore Docs
            </Link>


            <Link
              href="/sandbox"
              className="secondary-button"
            >
              Try Sandbox
            </Link>

          </div>

        </div>


        {/* Right Code Example */}
        <div className="code-window">


          <div className="code-header">

            <div className="tabs">

              <button className="active">
                cURL
              </button>

              <button>
                JavaScript
              </button>

              <button>
                PHP
              </button>

              <button>
                Python
              </button>

            </div>


            <button className="copy-btn">
              Copy
            </button>


          </div>


          <pre>
{`curl -X POST https://api.buildfast.com/v1/collections \\
-H "Authorization: Bearer YOUR_API_KEY" \\
-H "Content-Type: application/json" \\
-d '{
  "amount": 10000,
  "currency": "XAF",
  "phone": "677000000",
  "description": "Order payment"
}'`}
          </pre>


          <div className="response">

            <span className="success-dot"></span>

            <span>
              200 OK — Payment request created
            </span>

          </div>


        </div>

      </div>

    </section>
  );
}