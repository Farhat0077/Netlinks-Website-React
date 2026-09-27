import React from "react";
import services from "./OddData";
import "./Odd.css";

export default function Odd() {
  return (
    <div className="odoo-section">
      {services.map((service) => (
        <div className="odoo-container" key={service.id}>
          <div className="odoo-content">
            <span className="odoo-number">{service.number}</span>

            <h2 className="odoo-title">
              <span className="odoo-tagline">{service.tagline}</span>
            </h2>

            <p className="odoo-description">{service.description}</p>

            <ul className="odoo-features">
              {service.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <a href={service.link} className="odoo-btn">
              {service.linkText} <span className="arrow">↗</span>
            </a>
          </div>
          <div className="odoo-image-wrapper">
            <img
              src="https://netlinks.af/illustrations/home-feature-odoo-960.webp"
              alt="Odoo Dashboard Interface"
              className="odoo-image"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
