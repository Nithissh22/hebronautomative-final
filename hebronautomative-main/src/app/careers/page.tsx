import React from 'react';
import Navbar from '@/components/layout/Navbar';

import '../internships/internships.css'; // We can share the same CSS structure

export const metadata = {
  title: 'Job Vacancies | Hebron Automotive',
  description: 'Join our team at an IATF 16949:2016 certified automotive components manufacturer in Hosur, Tamil Nadu.',
};

const JOB_OPENINGS = [
  {
    num: '01',
    title: 'Senior Production Engineer',
    dept: 'Manufacturing / PDC Area',
    experience: '5+ Years',
    eligibility: 'B.E / B.Tech — Mechanical, Manufacturing',
    description: 'Lead production shifts, manage HPDC machines, and ensure production targets and quality standards are met.',
  },
  {
    num: '02',
    title: 'Quality Inspector',
    dept: 'Quality Assurance',
    experience: '2-4 Years',
    eligibility: 'B.E / Diploma — Mechanical',
    description: 'Perform in-process and final inspection, CMM operation, and maintain PPAP documentation.',
  },
  {
    num: '03',
    title: 'CNC Programmer',
    dept: 'Machining',
    experience: '3+ Years',
    eligibility: 'Diploma / ITI — Mechanical',
    description: 'VMC setup, G-code programming, tool offset adjustments, and maintaining cycle times.',
  }
];

export default function CareersPage() {
  return (
    <>
      <Navbar theme="dark" />

      {/* ── SECTION 1: HERO ── */}
      <section className="careers-hero">
        <div className="careers-hero__content">
          <span className="careers-label">JOB VACANCIES</span>
          <h1 className="careers-hero__heading">
            Are you interested in<br />
            HEBRON AUTOMOTIVE PRODUCTS PVT.LTD
          </h1>
          <p className="careers-hero__sub">
            We are always looking for talented individuals to join our precision manufacturing facility in Hosur.
          </p>
          <a href="#apply" className="careers-cta-btn">View Open Roles &rarr;</a>
        </div>
      </section>

      {/* ── SECTION 3: OPEN ROLES (JOB CARDS) ── */}
      <section className="roles-section">
        <div className="roles-header">
          <span className="careers-label">CURRENT OPENINGS</span>
          <h2>Open Positions</h2>
        </div>

        <div className="role-grid">
          {JOB_OPENINGS.map((role) => (
            <div className="role-card" key={role.num}>
              <div className="role-card__header">
                <span className="role-card__num">{role.num}</span>
              </div>
              
              <h3 className="role-card__title">{role.title}</h3>
              <div className="role-card__dept">{role.dept}</div>
              
              <div className="role-card__specs">
                <div className="role-spec">
                  <span className="role-spec__label">Experience Required</span>
                  <span className="role-spec__value">{role.experience}</span>
                </div>
                <div className="role-spec">
                  <span className="role-spec__label">Eligibility</span>
                  <span className="role-spec__value">{role.eligibility}</span>
                </div>
                <div className="role-spec">
                  <span className="role-spec__label">Role</span>
                  <span className="role-spec__value">{role.description}</span>
                </div>
              </div>
              
              <a href="#apply" className="role-card__btn">
                Apply Now <span>&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 6: APPLICATION FORM ── */}
      <section className="apply-section" id="apply">
        <div className="apply-card">
          <div className="apply-header">
            <h2>Job Application Form</h2>
            <p className="apply-subtitle">Ready to join our team? Fill out the details below and we'll be in touch.</p>
          </div>
          <form className="apply-form">
          <div className="form-row">
            <div className="field-group">
              <label className="field-label">Full Name</label>
              <input type="text" className="field-input" placeholder="Your full name" required />
            </div>
            <div className="field-group">
              <label className="field-label">Email Address</label>
              <input type="email" className="field-input" placeholder="you@email.com" required />
            </div>
          </div>
          <div className="form-row">
            <div className="field-group">
              <label className="field-label">Mobile Number</label>
              <input type="tel" className="field-input" placeholder="+91 XXXXX XXXXX" required />
            </div>
            <div className="field-group">
              <label className="field-label">Apply Position</label>
              <select className="field-select" required>
                <option value="">Select position...</option>
                {JOB_OPENINGS.map(r => <option key={r.num}>{r.title}</option>)}
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="field-group">
              <label className="field-label">Total Experience (Years)</label>
              <input type="number" className="field-input" placeholder="e.g. 5" required />
            </div>
            <div className="field-group">
              <label className="field-label">Notice Period (Days)</label>
              <input type="number" className="field-input" placeholder="e.g. 30" required />
            </div>
          </div>
          <div className="form-row">
            <div className="field-group">
              <label className="field-label">Current CTC (LPA)</label>
              <input type="text" className="field-input" placeholder="e.g. 6.5" required />
            </div>
            <div className="field-group">
              <label className="field-label">Expected CTC (LPA)</label>
              <input type="text" className="field-input" placeholder="e.g. 8.0" required />
            </div>
          </div>
          <div className="form-row">
            <div className="field-group" style={{ width: '100%' }}>
              <label className="field-label">Resume Link (Google Drive / Dropbox)</label>
              <input type="url" className="field-input" placeholder="https://..." required />
            </div>
          </div>
          <button type="submit" className="form-submit">Submit Application</button>
        </form>
        </div>
      </section>
    </>
  );
}
