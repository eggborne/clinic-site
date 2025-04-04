import React from 'react';
import { Link } from 'react-router';

export default function Welcome() {
  return (
    <div className="welcome-container">
      <header className="welcome-header">
        <h1>WD Recovery & Wellness Center</h1>
        <h2>Transforming Lives</h2>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2>Empowerment and Healing of Addiction and Disorder Recovery in Arizona</h2>
          <p>We help save the lives of those suffering from different disorders through our high-quality clinical programs.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="button primary">Book A Free Appointment</Link>
            <Link to="/services" className="button secondary">Our Services</Link>
          </div>
        </div>
      </section>

      <section className="services-preview">
        <h2>What We Treat</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Eating Disorders</h3>
            <p>Comprehensive treatment for various eating disorders.</p>
            <Link to="/eating-disorders" className="learn-more">Learn More →</Link>
          </div>
          <div className="service-card">
            <h3>Substance Abuse</h3>
            <p>Recovery programs for drug and alcohol addiction.</p>
            <Link to="/substance-abuse" className="learn-more">Learn More →</Link>
          </div>
          <div className="service-card">
            <h3>PTSD</h3>
            <p>Treatment for trauma and post-traumatic stress.</p>
            <Link to="/ptsd" className="learn-more">Learn More →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}