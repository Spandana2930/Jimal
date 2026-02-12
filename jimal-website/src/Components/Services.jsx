import React from 'react';
import './Services.css';

import {
  FaTools,
  FaCog,
  FaIndustry,
  FaShieldAlt
} from 'react-icons/fa';

export default function Services({ t }) {

  const services = t.services?.items || [];

  const serviceIcons = [
    <FaTools className="service-icon" />,
    <FaCog className="service-icon" />,
    <FaIndustry className="service-icon" />,
    <FaShieldAlt className="service-icon" />
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">

        <div className="services-header">
          <h2>{t.services.title}</h2>
          {t.services.subtitle && <p>{t.services.subtitle}</p>}
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-container">
                {serviceIcons[index % serviceIcons.length]}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
