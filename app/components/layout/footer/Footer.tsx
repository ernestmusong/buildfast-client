import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Top CTA */}
        <div className="footer-cta">

          <div>
            <h2>BuildFast</h2>

            <p>
              Payment infrastructure for modern African businesses.
            </p>
          </div>

          <div className="footer-actions">
            <Link href="/register" className="footer-primary">
              Get API Key
            </Link>

            <Link href="/contact" className="footer-secondary">
              Contact Sales
            </Link>
          </div>

        </div>

        <div className="footer-divider" />

        {/* Footer Links */}
        <div className="footer-grid">

          <div>
            <h4>Products</h4>

            <Link href="/products/collections">
              Collections API
            </Link>

            <Link href="/products/payouts">
              Payout API
            </Link>

            <Link href="/products/payment-links">
              Payment Links
            </Link>

            <Link href="/products/checkout">
              Checkout
            </Link>
          </div>


          <div>
            <h4>Developers</h4>

            <Link href="/docs">
              Documentation
            </Link>

            <Link href="/api-reference">
              API Reference
            </Link>

            <Link href="/sandbox">
              Sandbox
            </Link>

            <Link href="/status">
              API Status
            </Link>
          </div>


          <div>
            <h4>Company</h4>

            <Link href="/about">
              About
            </Link>

            <Link href="/careers">
              Careers
            </Link>

            <Link href="/blog">
              Blog
            </Link>

            <Link href="/contact">
              Contact
            </Link>
          </div>


          <div>
            <h4>Legal</h4>

            <Link href="/privacy">
              Privacy Policy
            </Link>

            <Link href="/terms">
              Terms of Service
            </Link>

            <Link href="/aml">
              AML Policy
            </Link>

            <Link href="/cookies">
              Cookie Policy
            </Link>
          </div>
          <div>
  <h4>Trust Center</h4>

  <Link href="/trust/security">
    Security
  </Link>

  <Link href="/trust/compliance">
    Compliance
  </Link>

  <Link href="/status">
    System Status
  </Link>

  <Link href="/trust/incidents">
    Incident History
  </Link>

  <Link href="/trust/disclosure">
    Responsible Disclosure
  </Link>
</div>
        </div>

        <div className="footer-divider" />

        {/* Bottom */}
        <div className="footer-bottom">

          <div className="footer-status">
            <span className="status-dot"></span>
            All systems operational
          </div>

          <p>
            © 2026 BuildFast Technologies. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}