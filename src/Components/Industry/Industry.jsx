import React from "react";
import IndustryData from "./IndustryData"; // Assuming your data is here
import "./Industry.css";

export default function Industries() {
  return (
    <div className="industries-section">
      <div className="industry-heading">
        <p className="industry-label">INDUSTRIES</p>
        <div className="industry-header-content">
          <h1 className="industry-main-title">
            Pattern recognition <br />
            <span className="italic-accent">across verticals.</span>
          </h1>
          <p className="industry-intro">
            Two decades of implementations means we've seen your problem before.
            Industry templates, compliance defaults, and playbooks included.
          </p>
        </div>

        <section className="industry-data">
          {IndustryData.map((data) => {
            return (
              <div className="industry-row" key={data.number}>
                <div className="col-number">{data.number}</div>

                <div className="col-title">{data.title}</div>

                <div className="col-details">{data.details}</div>

                <div className="col-icon">{data.icon}</div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
