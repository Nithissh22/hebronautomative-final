'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';

import './contact.css';

const Icons = {
  Location: () => <svg className="contact-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  Phone: () => <svg className="contact-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
  Mail: () => <svg className="contact-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  Globe: () => <svg className="contact-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
  Check: () => <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
};

export default function ContactPage() {
  return (
    <>
      <Navbar theme="dark" />
      
      {/* ── HERO STRIP ── */}
      <section className="contact-hero">
        <div className="contact-hero__content">
          <span className="contact-label">CONTACT & RFQ</span>
          <h1 className="contact-hero__heading">Transform Your Ideas into Precision Components</h1>
          <p className="contact-hero__subtitle" style={{ fontWeight: 600, color: 'var(--brand-cyan)', marginBottom: '8px' }}>
            Quality. Precision. Reliability.
          </p>
          <p className="contact-hero__subtitle">
            Partner with our experienced team to develop precision die-cast components that meet your design, performance, and production requirements.
          </p>
        </div>
      </section>

      <main className="contact-main">
        <div className="contact-grid">
          
          {/* ── LEFT: CONTACT INFO ── */}
          <div className="contact-info-panel">
            <span className="info-eyebrow">GET IN TOUCH</span>
            <h2 className="info-title">Hebron Automotive<br/>Products Pvt Ltd</h2>
            
            <div className="contact-icon-row">
              <Icons.Location />
              <div className="contact-details">
                <p className="highlight">Factory Location</p>
                <p>Hebron Automotive Products Pvt Ltd</p>
                <p>No. 3/250, Bharathiyar Nagar</p>
                <p>Avalapalli Road, Hosur - 635 109</p>
                <p>Krishnagiri Dist., Tamil Nadu, India</p>
                <p className="sub" style={{ marginTop: '8px' }}>GSTIN: 33AAECH6875K1Z6</p>
              </div>
            </div>
            
            <hr className="contact-divider" />
            
            <div className="contact-icon-row">
              <Icons.Phone />
              <div className="contact-details">
                <p className="highlight">+91 63823 97202</p>
              </div>
            </div>

            <hr className="contact-divider" />

            <div className="contact-icon-row">
              <Icons.Mail />
              <div className="contact-details">
                <p>Hebronautomotive@gmail.com</p>
                <p>sales@hebron.in</p>
              </div>
            </div>

            <hr className="contact-divider" />
            
            <span className="info-eyebrow" style={{ marginBottom: '8px', display: 'block' }}>BUSINESS HOURS</span>
            <div className="contact-details">
              <p>Mon – Sat 9:00 AM – 6:00 PM IST</p>
            </div>
            
            <div className="map-container" style={{ marginTop: '48px' }}>
              <iframe
                src="https://maps.google.com/maps?q=Hebron+Automotive+Products+Pvt+Ltd,+Hosur,+Tamil+Nadu&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* ── RIGHT: RFQ FORM ── */}
          <div className="contact-rfq-panel">
            <span className="info-eyebrow">REQUEST QUOTATION</span>
            <h2 className="info-title" style={{ marginTop: '8px', marginBottom: '32px' }}>Send us your requirements</h2>
            
            <form className="rfq-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Company Name</label>
                  <input type="text" className="form-input" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Contact Name</label>
                  <input type="text" className="form-input" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-input" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input type="tel" className="form-input" required />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Component Description</label>
                <textarea className="form-input" style={{ height: '120px', resize: 'vertical' }} required></textarea>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Annual Volume (Units)</label>
                  <input type="number" className="form-input" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Tolerance Req</label>
                  <input type="text" className="form-input" placeholder="e.g. ±0.01mm" />
                </div>
              </div>

              <div className="trust-signals">
                <div className="trust-signal">
                  <Icons.Check /> All enquiries treated as confidential
                </div>
                <div className="trust-signal">
                  <Icons.Check /> No commitment required at RFQ stage
                </div>
                <div className="trust-signal">
                  <Icons.Check /> IATF 16949:2016 certified supplier
                </div>
              </div>

              <button type="submit" className="rfq-submit">Submit Request</button>
            </form>
          </div>

        </div>

        {/* ── AFTER YOU SUBMIT ── */}
        <div className="post-submit-strip">
          <span className="info-eyebrow">AFTER YOU SUBMIT</span>
          <div className="timeline-grid">
            <div className="timeline-step-card">
              <div className="step-num-large">01</div>
              <div className="step-title">Drawing Review</div>
              <div className="step-time">Within 24 hours</div>
            </div>
            <div className="timeline-step-card">
              <div className="step-num-large">02</div>
              <div className="step-title">DFM Feedback</div>
              <div className="step-time">Engineering assessment</div>
            </div>
            <div className="timeline-step-card">
              <div className="step-num-large">03</div>
              <div className="step-title">Quotation Issued</div>
              <div className="step-time">48–72 hours</div>
            </div>
          </div>
        </div>

      </main>
      

    </>
  );
}
