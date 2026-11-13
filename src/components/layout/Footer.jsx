import Mascot from "../ui/Mascot.jsx";
import "./Footer.css";

// Fixed behind the page; the spacer opens room so the footer is revealed
// as the last sheet scrolls up. Pure CSS, no scroll listeners.
export default function Footer() {
  return (
    <>
      <div className="foot-spacer" aria-hidden="true" />
      <footer className="foot">
        <Mascot className="foot-mascot" />
        <div className="foot-right">
          <div className="foot-logo">bazaar</div>
          <p className="foot-legal">
            bazaar Retail, Inc. is a demo storefront built for testing and is not a bank. Payments, delivery and
            returns shown on this page are placeholders and no real orders are processed.
          </p>
          <div className="foot-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <span>© 2026 bazaar Retail, Inc. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
