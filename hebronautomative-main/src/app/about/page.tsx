import React from 'react';
import Navbar from '@/components/layout/Navbar';
import './about.css';
import NavLink from '@/components/ui/NavLink';
import CustomersShowcase from '@/components/about/CustomersShowcase';
import TimelineShowcase from '@/components/about/TimelineShowcase';
import FoundationShowcase from '@/components/about/FoundationShowcase';
import CompanyMetrics from '@/components/about/CompanyMetrics';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      
      {/* 1. Hero Banner */}
      <section className="about-hero">
        <div className="container about-hero__content">
          <div className="eyebrow" style={{ marginBottom: 'var(--space-2)' }}>
            HEBRON AUTOMOTIVE PRODUCTS PVT. LTD.
          </div>
          <h1 className="section-heading" style={{ color: 'var(--text-on-dark)' }}>
            Precision manufacturing<br />
            built on 6 years of<br />
            automotive supply excellence
          </h1>
          <div className="about-hero__facts">
            Established 2019 &middot; Hosur, Tamil Nadu &middot; IATF 16949 Certified
          </div>
        </div>
      </section>

      <main id="main-content" style={{ paddingBottom: '0' }}>
        
        {/* 2 & 3. Foundation and Stats Showcase */}
        <FoundationShowcase />

        {/* 4. Our Customers (Animated Showcase) */}
        <CustomersShowcase />

        {/* 4.5. Year-Wise Journey (Animated Timeline) */}
        <TimelineShowcase />
        {/* 5. Sectors Served */}
        <section className="sectors-section">
          <div className="container">
            <div className="sectors-container">
              <span className="eyebrow section-cyan-label">SECTORS SERVED</span>
              <div className="sectors-grid">
                <div className="sector-column">
                  <div className="sector-title">Passenger Vehicles</div>
                  <ul className="sector-list">
                    <li>Shock absorbers</li>
                    <li>Suspension arms</li>
                    <li>Brake calipers</li>
                  </ul>
                </div>
                <div className="sector-column">
                  <div className="sector-title">Commercial Vehicles</div>
                  <ul className="sector-list">
                    <li>Chassis brackets</li>
                    <li>Engine mounts</li>
                    <li>Transmission parts</li>
                  </ul>
                </div>
                <div className="sector-column">
                  <div className="sector-title">Two-Wheelers</div>
                  <ul className="sector-list">
                    <li>Brake parts</li>
                    <li>Frame parts</li>
                    <li>Handlebar assy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5.5. Performance & Capacity */}
        <CompanyMetrics />

        {/* 6. Leadership */}
        <section className="leadership-section">
          <div className="container">
            <span className="eyebrow section-cyan-label">LEADERSHIP</span>
            <div className="leadership-grid">
              
              <div className="leader-card">
                <div className="leader-photo-container">
                  {/* TODO: Add real photo src once provided */}
                  <div className="leader-photo placeholder-photo"></div>
                </div>
                <div className="leader-info">
                  <div className="leader-name">Mr. N. Kumar</div>
                  <div className="leader-title">Managing Director</div>
                  <div className="leader-contact tabular-data" style={{ fontSize: '13px', marginTop: '4px', color: 'var(--text-body)' }}>+91 63823 97202</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 7. Bottom CTA */}
        <section className="about-cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="section-heading">Interested in partnering with Hebron?</h2>
              <p>We work with procurement teams at every stage — from initial DFM review to production supply.</p>
              <div className="cta-buttons">
                <button className="btn-outline" style={{ color: 'white', borderColor: 'white' }}>Download Company Profile</button>
                <NavLink href="/contact" className="btn-primary">Send RFQ &rarr;</NavLink>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
