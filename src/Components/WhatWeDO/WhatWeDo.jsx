import React from 'react'
import servicesData from './WhatWeDoData';
import'./WhatWeDo.css'
export default function WhatWeDo() {

const ArrowIcon = () => (
  <svg 
    width="14" 
    height="14" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);


  return (
    <section className="services-section">
      <div className="services-header">
        <div className="services-header-left">
          <p className="eyebrow">WHAT WE DO</p>
          <h2 className="main-title">
            Six services. One<br />
            <span className="highlight-text">accountable partner.</span>
          </h2>
        </div>
        <div className="services-header-right">
          <p className="subtitle">
            One Afghanistan-based vendor for ERP, custom software, AI, staff augmentation, and cloud, so nothing falls between the seams.
          </p>
        </div>
      </div>
      <div className="services-grid-container">
        {servicesData.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="card-header">
              <span className="card-meta">{service.id} / {service.category}</span>
              <div className="icon-circle">
                <ArrowIcon />
              </div>
            </div>
            <h3 className="card-title">{service.title}</h3>
            <p className="card-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
