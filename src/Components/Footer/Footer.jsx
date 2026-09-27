import React from "react";
import { footerInfo, footerLinks, socialIcons } from "./FooterData";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand-section">
          <img
            src={footerInfo.logo}
            alt="Netlinks Logo"
            className="footer-logo"
          />
          <p className="footer-description">{footerInfo.description}</p>

          <div className="footer-contact">
            <p>
              <a href={`mailto:${footerInfo.email}`}>{footerInfo.email}</a>
            </p>
            <p>
              <a href={`tel:${footerInfo.phone}`}>{footerInfo.phone}</a>
            </p>
            <p>{footerInfo.address}</p>
            <p>{footerInfo.location}</p>
          </div>

          <div className="footer-socials">
            {socialIcons.map((Icon, index) => (
              <a href="#" key={index} className="social-icon">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Right Section: Links Grid */}
        <div className="footer-links-grid">
          {footerLinks.map((column, index) => (
            <div className="footer-link-column" key={index}>
              <h4 className="footer-link-title">{column.title}</h4>
              <ul className="footer-link-list">
                {column.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">&copy; 2026 NETLINKS. All rights reserved.</p>
        <div className="footer-legal-links">
          <a href="#">Sitemap</a>
          <span className="dot">·</span>
          <a href="#">Business ethics</a>
          <span className="dot">·</span>
          <a href="#">Privacy policy</a>
          <span className="dot">·</span>
          <a href="#">Terms of use</a>
          <span className="dot">·</span>
          <a href="#">Dark mode</a>
        </div>
      </div>
    </footer>
  );
}
