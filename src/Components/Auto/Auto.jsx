import React from "react";
import autoData from "./AutoData";
import "./Auto.css";
export default function Auto() {
  return (
    <div className="odoo-section">
      {autoData.map((autoDatas) => (
        <div className="odoo-container" key={autoDatas.id}>
          <div className="odoo-image-wrapper">
            <img
              src="https://netlinks.af/illustrations/home-feature-ai-960.webp"
              alt="Odoo Dashboard Interface"
              className="odoo-image"
            />
          </div>

          <div className="odoo-content">
            <span className="odoo-number">{autoDatas.number}</span>

            <h2 className="odoo-title">
              <span className="odoo-tagline">{autoDatas.tagline}</span>
            </h2>

            <p className="odoo-description">{autoDatas.description}</p>

            <ul className="odoo-features">
              {autoDatas.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <a href={autoDatas.link} className="odoo-btn">
              {autoDatas.linkText} <span className="arrow">↗</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
