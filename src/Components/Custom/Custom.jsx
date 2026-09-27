import React from "react";
import custom from "./CustomData";
import "./Custom.css";

export default function Custom() {
  return (
    <div className="odoo-section">
      {custom.map((customs) => (
        <div className="odoo-container" key={customs.id}>
          <div className="odoo-content">
            <span className="odoo-number">{customs.number}</span>

            <h2 className="odoo-title">
              <span className="odoo-tagline">{customs.tagline}</span>
            </h2>

            <p className="odoo-description">{customs.description}</p>

            <ul className="odoo-features">
              {customs.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <a href={customs.link} className="odoo-btn">
              {customs.linkText} <span className="arrow">↗</span>
            </a>
          </div>
          <div className="odoo-image-wrapper">
            <img
              src="https://netlinks.af/illustrations/home-feature-engineering-960.webp"
              alt="Odoo Dashboard Interface"
              className="odoo-image"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
