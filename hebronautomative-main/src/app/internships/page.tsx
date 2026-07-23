import React from 'react';
import Navbar from '@/components/layout/Navbar';

import './internships.css';

export const metadata = {
  title: 'Careers & Internships | Hebron Automotive',
  description: 'Hands-on industrial training at an IATF 16949:2016 certified automotive components manufacturer in Hosur, Tamil Nadu.',
};

// Handcrafted SVG Icons
const Icons = {
  Location: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
  Time: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
  Money: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>,
  
  // Why Hebron Icons
  Certificate: () => <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>,
  Factory: () => <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 20h20"></path><path d="M4 20V8l8-4 8 4v12"></path><path d="M9 20v-5h6v5"></path><path d="M14 10v4"></path><path d="M10 10v4"></path></svg>,
  Handshake: () => <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h20"></path><path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"></path><path d="M14 2v4"></path><path d="M10 2v4"></path></svg>, // Simplified representation
  Users: () => <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,

  // Roles Icons
  Engineering: () => <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>,
  Quality: () => <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>,
  Tooling: () => <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>, // Placeholder for wrench
  Machining: () => <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
  Operations: () => <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
};

const ROLES = [
  {
    num: '01',
    icon: <Icons.Engineering />,
    title: 'Production Engineering',
    dept: 'Manufacturing / PDC Area',
    duration: '3 – 6 months',
    eligibility: 'B.E / B.Tech — Mechanical, Manufacturing',
    exposure: 'HPDC machines, process parameters, die maintenance',
  },
  {
    num: '02',
    icon: <Icons.Quality />,
    title: 'Quality & Inspection',
    dept: 'Quality Assurance / Standard Room',
    duration: '3 – 6 months',
    eligibility: 'B.E / B.Tech — Mechanical, Diploma',
    exposure: 'CMM, VMM, SPC, Cpk analysis, PPAP documentation',
  },
  {
    num: '03',
    icon: <Icons.Engineering />,
    title: 'Tooling & Maintenance',
    dept: 'Tool Room',
    duration: '3 – 6 months',
    eligibility: 'B.E / Diploma — Tool & Die, Mechanical',
    exposure: 'CNC, wire cutting, die repair, tool life management',
  },
  {
    num: '04',
    icon: <Icons.Machining />,
    title: 'CNC / VMC Machining',
    dept: 'Machining — HAAS VMC',
    duration: '3 – 6 months',
    eligibility: 'B.E / Diploma — Mechanical, Manufacturing',
    exposure: 'VMC setup, G-code basics, engineering drawings, GD&T',
  },
  {
    num: '05',
    icon: <Icons.Operations />,
    title: 'Operations & Supply Chain',
    dept: 'Planning / Dispatch / Stores',
    duration: '3 – 6 months',
    eligibility: 'MBA — Operations / SCM, B.E',
    exposure: 'Production planning, vendor coordination, inventory',
  },
];

const WHY_CARDS = [
  {
    icon: <Icons.Certificate />,
    stat: 'IATF 16949:2016',
    label: 'CERTIFIED FACILITY',
    body: 'Your completion certificate carries the weight of an internationally recognised automotive quality standard. Recognised by global OEMs.',
  },
  {
    icon: <Icons.Factory />,
    stat: 'Live Production',
    label: 'REAL ENVIRONMENT',
    body: 'Work on actual components being shipped to Tier-1 OEMs — not training simulations or lab exercises.',
  },
  {
    icon: <Icons.Handshake />,
    stat: 'Gabriel & Hitachi',
    label: 'TIER-1 OEM EXPOSURE',
    body: "Understand quality and delivery standards demanded by India's leading automotive shock absorber manufacturers.",
  },
  {
    icon: <Icons.Users />,
    stat: '120+ Engineers',
    label: 'EXPERIENCED MENTORS',
    body: 'Learn directly from production engineers, quality heads, VMC operators, and tooling specialists with 10+ years experience.',
  },
];

const LEARN_COLS = [
  {
    title: 'PROCESS KNOWLEDGE',
    items: [
      'HPDC & GDC process fundamentals',
      'Powder coating process & DFT testing',
      'VMC / CNC machine operation',
      'Tooling basics & die maintenance',
    ],
  },
  {
    title: 'QUALITY SYSTEMS',
    items: [
      'IATF 16949:2016 requirements',
      'In-process & final inspection',
      'CMM & VMM operation',
      'SPC & Cpk analysis',
    ],
  },
  {
    title: 'INDUSTRY STANDARDS',
    items: [
      'Engineering drawing reading',
      'GD&T fundamentals',
      'FMEA & Control Plans',
      'Material traceability systems',
    ],
  },
];

const BENEFITS_INCLUDED = [
  'Internship completion certificate on company letterhead',
  'Experience letter signed by department head',
  'Exposure to IATF 16949:2016 certified environment',
  'Mentorship from experienced production engineers',
  'Safety induction training and PPE provided',
  'Industrial visit documentation support',
];

export default function InternshipsPage() {
  return (
    <>
      <Navbar theme="dark" />

      {/* ── SECTION 1: HERO ── */}
      <section className="careers-hero">
        <div className="careers-hero__content">
          <span className="careers-label">CAREERS &amp; INTERNSHIPS</span>
          <h1 className="careers-hero__heading">
            Build Your Career<br />
            in Precision<br />
            Manufacturing
          </h1>
          <p className="careers-hero__sub">
            Hands-on industrial training at an IATF 16949:2016 certified automotive components manufacturer. Real machines. Real processes. Real experience.
          </p>
          <a href="#apply" className="careers-cta-btn">View Open Roles &rarr;</a>
        </div>

        <div className="careers-hero__strip">
          <span className="strip-pill"><Icons.Location /> Hosur, Tamil Nadu</span>
          <span className="strip-pill"><Icons.Time /> 3 – 6 Month Programs</span>
          <span className="strip-pill"><Icons.Money /> Stipend Provided</span>
        </div>
      </section>

      {/* ── SECTION 2: WHY HEBRON ── */}
      <section className="why-section">
        <div className="why-section__header">
          <span className="careers-label">WHY HEBRON</span>
          <h2>More than a certificate.<br />Real industry exposure.</h2>
        </div>
        <div className="why-grid">
          {WHY_CARDS.map((card) => (
            <div className="why-card" key={card.label}>
              <div className="why-card__icon">{card.icon}</div>
              <span className="why-card__stat">{card.stat}</span>
              <span className="why-card__label">{card.label}</span>
              <p className="why-card__body">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 3: OPEN ROLES (JOB CARDS) ── */}
      <section className="roles-section">
        <div className="roles-header">
          <span className="careers-label">OPEN INTERNSHIP ROLES</span>
          <h2>Currently accepting applications<br />for 2025 – 26</h2>
        </div>

        <div className="role-grid">
          {ROLES.map((role) => (
            <div className="role-card" key={role.num}>
              <div className="role-card__header">
                <div className="role-card__icon">{role.icon}</div>
                <span className="role-card__num">{role.num}</span>
              </div>
              
              <h3 className="role-card__title">{role.title}</h3>
              <div className="role-card__dept">{role.dept}</div>
              
              <div className="role-card__specs">
                <div className="role-spec">
                  <span className="role-spec__label">Duration</span>
                  <span className="role-spec__value">{role.duration}</span>
                </div>
                <div className="role-spec">
                  <span className="role-spec__label">Eligibility</span>
                  <span className="role-spec__value">{role.eligibility}</span>
                </div>
                <div className="role-spec">
                  <span className="role-spec__label">You will work on</span>
                  <span className="role-spec__value">{role.exposure}</span>
                </div>
              </div>
              
              <a href="#apply" className="role-card__btn">
                Apply Now <span>&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 4: WHAT YOU WILL LEARN ── */}
      <section className="learn-section">
        <span className="careers-label">WHAT YOU WILL LEARN</span>
        <h2>Practical exposure across<br />the full manufacturing cycle</h2>
        <div className="learn-grid">
          {LEARN_COLS.map((col) => (
            <div className="learn-col" key={col.title}>
              <span className="learn-col__title">{col.title}</span>
              <ul className="learn-list">
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 5: STIPEND & BENEFITS ── */}
      <section className="benefits-section">
        <span className="careers-label">STIPEND &amp; BENEFITS</span>
        <h2>What you receive</h2>
        <div className="benefits-wrapper">
          <div className="benefits-info">
            <div className="benefit-stat-row">
              <div className="benefit-stat">
                <span className="benefit-stat__value">3 – 6</span>
                <span className="benefit-stat__label">Months Duration</span>
              </div>
              <div className="benefit-stat">
                <span className="benefit-stat__value">₹ Paid</span>
                <span className="benefit-stat__label">As per Institute Norms</span>
              </div>
            </div>
            <p className="benefits-note">
              Stipend is determined based on department, duration, and university requirements. All interns receive equal access to facilities, mentorship, and documentation.
            </p>
          </div>
          <div className="benefits-included">
            <span className="benefits-included__title">INCLUDED WITH ALL INTERNSHIPS</span>
            <ul className="benefits-list">
              {BENEFITS_INCLUDED.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: APPLICATION FORM ── */}
      <section className="apply-section" id="apply">
        <div className="apply-card">
          <div className="apply-header">
            <h2>Start your application</h2>
            <p className="apply-subtitle">Fill out your details and educational background to apply for our internship program.</p>
          </div>
          <form className="apply-form">
          <div className="form-row">
            <div className="field-group">
              <label className="field-label">Full Name</label>
              <input type="text" className="field-input" placeholder="Your full name" required />
            </div>
            <div className="field-group">
              <label className="field-label">Email Address</label>
              <input type="email" className="field-input" placeholder="you@college.edu" required />
            </div>
          </div>
          <div className="form-row">
            <div className="field-group">
              <label className="field-label">Mobile Number</label>
              <input type="tel" className="field-input" placeholder="+91 XXXXX XXXXX" required />
            </div>
            <div className="field-group">
              <label className="field-label">College / University</label>
              <input type="text" className="field-input" placeholder="Your institution name" required />
            </div>
          </div>
          <div className="form-row">
            <div className="field-group">
              <label className="field-label">Preferred Role</label>
              <select className="field-select" required>
                <option value="">Select role...</option>
                {ROLES.map(r => <option key={r.num}>{r.title}</option>)}
              </select>
            </div>
            <div className="field-group">
              <label className="field-label">Duration Required</label>
              <select className="field-select" required>
                <option value="">Select duration...</option>
                <option>3 Months</option>
                <option>6 Months</option>
                <option>Flexible</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="field-group">
              <label className="field-label">Total Experience (Years, if any)</label>
              <input type="number" className="field-input" placeholder="e.g. 0" required />
            </div>
            <div className="field-group">
              <label className="field-label">Notice Period (Days, if any)</label>
              <input type="number" className="field-input" placeholder="e.g. 0" required />
            </div>
          </div>
          <div className="form-row">
            <div className="field-group">
              <label className="field-label">Current CTC (LPA, if any)</label>
              <input type="text" className="field-input" placeholder="e.g. 0" />
            </div>
            <div className="field-group">
              <label className="field-label">Expected CTC / Stipend</label>
              <input type="text" className="field-input" placeholder="e.g. As per institute norms" required />
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
