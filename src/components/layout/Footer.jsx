import companyLogo from '../../assets/images/company-logo.png'
import brochureDownload from '../../assets/images/download.png'
import { Link } from 'react-router'
import { footerNavigation, siteUrl } from '../../data/siteContent.js'

export default function Footer() {
  return (
    <footer className="rts-footer-area">
      {/* Top 6-item Navigation Bar in Footer */}
      <div className="footer-top-nav-bar">
        <div className="site-container">
          <ul className="footer-top-nav-list">
            {footerNavigation.top.map((item) => (
              <li key={item.label}>
                {item.href.startsWith('http') ? (
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                ) : (
                  <Link to={item.href}>{item.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main 4-column Footer Content */}
      <div className="site-container footer-main-content">
        {/* Column 1: Brand & Bio */}
        <div className="footer-col footer-col-brand">
          <Link to="/home" className="footer-logo-link" aria-label="Siddhi Constructions Home">
            <img src={companyLogo} alt="Siddhi Constructions" className="footer-logo" />
          </Link>
          <p className="footer-bio">
            Established in 1986, Siddhi Constructions is a government-approved civil contractor in Surat with over 39 years of experience delivering excellence in industrial, commercial, and residential infrastructure.
          </p>
          <div className="footer-social-icons">
            <a
              href="https://www.facebook.com/SIDDHICONSTRUCTIONSOFFICIAL"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/siddhiconstructionsofficial/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/siddhi-constructions/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Useful Links */}
        <div className="footer-col">
          <h4 className="footer-col-title">Useful Links</h4>
          <ul className="footer-link-list">
            {footerNavigation.usefulLinks.map((link) => (
              <li key={link.label}>
                {link.href.startsWith('http') ? (
                  <a href={link.href} target="_blank" rel="noreferrer">
                    <span className="arrow">→</span> {link.label}
                  </a>
                ) : (
                  <Link to={link.href}>
                    <span className="arrow">→</span> {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Quick Projects */}
        <div className="footer-col">
          <h4 className="footer-col-title">Quick Projects</h4>
          <ul className="footer-link-list">
            {footerNavigation.projects.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  <span className="arrow">→</span> {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div className="footer-col footer-col-contact">
          <h4 className="footer-col-title">Contact Us</h4>
          <div className="footer-contact-block">
            <p className="footer-address">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>102, Ashirwad Flats, Anchal Plots, Besides Lavanya Shopping Center, Near Ashok Pan House, City Light Main Road, City Light, SURAT-395007</span>
            </p>
            <p className="footer-contact-line">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a href="mailto:hr@siddhiconstructions.com">hr@siddhiconstructions.com</a>
            </p>
            <p className="footer-contact-line">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <a href="tel:+912612475383">+91261 - 2475383 / 2462042</a>
            </p>
            <p className="footer-contact-line">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
              <a href="tel:+918238433406">+918238433406</a>
            </p>

            {/* Download Brochure PDF Pill */}
            <a
              href="https://www.siddhiconstructions.com/assets/images/pdf/Siddhi%20Constructions%20Brochure%20Design.pdf"
              target="_blank"
              rel="noreferrer"
              className="brochure-download-btn"
            >
              <img src={brochureDownload} alt="Download Siddhi Constructions Brochure PDF" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="site-container footer-bottom-inner">
          <p className="copyright-text">
            Copyright © 2026 Siddhi Constructions. All Rights Reserved.
          </p>
          <div className="legal-links">
            <a href={`${siteUrl}/terms-of-condition`} target="_blank" rel="noreferrer">Terms of condition</a>
            <a href={`${siteUrl}/privacy-policy`} target="_blank" rel="noreferrer">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
