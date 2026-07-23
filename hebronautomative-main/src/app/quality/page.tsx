"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import './quality.css';

const EQUIPMENT_DATA = {
  DIMENSIONAL: [
    { name: 'VMM', cap: '136×56.10mm', cov: '5 Coverage' },
    { name: '2D Height Master', cap: '500×22.5um', cov: '1.50~160mm' },
    { name: 'CPCustom Coating Facilitator', cap: '1.50~15.50um', cov: 'Coverage' },
  ],
  MECHANICAL: [
    { name: 'Auto Universal Testing Machine', cap: 'Mechanical property testing', cov: 'Per heat lot' },
  ],
  'MATERIAL ANALYSIS': [
    { name: 'Spectrometer (Spectro Analysis)', cap: 'Alloy composition verification', cov: 'Per melt' },
  ],
  'SURFACE FINISH': [
    { name: 'Roughness Tester (Ra)', cap: 'Surface finish measurement', cov: 'Per batch' },
  ],
  COATING: [
    { name: 'Powder Coating DFT Meter', cap: 'Coating thickness verification', cov: 'Every run' },
    { name: 'Salt Spray Test (SST) Chamber', cap: 'Corrosion resistance testing', cov: 'Validation' },
  ]
};

export default function QualityPage() {
  const [activeTab, setActiveTab] = useState('DIMENSIONAL');
  
  return (
    <>
      <Navbar />
      
      {/* SECTION 1: Hero */}
      <section className="quality-hero">
        <img 
          src="/images/quality-system-bg.png" 
          alt="Quality System Background" 
          className="quality-hero__bg" 
        />
        <div className="quality-hero__overlay"></div>
        
        <div className="container quality-hero__content">
          <div className="eyebrow hero-tech-label">
            QUALITY ASSURANCE SYSTEM
          </div>
          <h1 className="hero-serif-title">Quality<br />System</h1>
          <p className="quality-hero__subtitle">
            Zero-defect manufacturing through process control, in-line inspection, 
            and documented traceability at every stage of production.
          </p>
          <div className="quality-hero__standards">
            ISO 9001:2015 · IATF 16949:2016 · PPAP LEVEL 3 CAPABLE
          </div>
        </div>
      </section>

      <main id="main-content" style={{ paddingBottom: '0', backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div className="quality-sections">
            
            {/* SECTION 2: Certifications */}
            <section className="certifications-section">
              <h2 className="eyebrow section-header text-center">Certifications</h2>
              <div className="certifications-grid">
                
                <div className="new-cert-card">
                  <div className="cert-header">
                    <h3 className="cert-title">ISO 9001:2015</h3>
                  </div>
                  <div className="cert-body">
                    <div className="cert-row"><span className="cert-lbl">Issuing Body:</span> CBF</div>
                    <div className="cert-row"><span className="cert-lbl">Issue Date:</span> 16.11.2026</div>
                    <div className="cert-row"><span className="cert-lbl">Valid Until:</span> 11.11.2021</div>
                    <div className="cert-row"><span className="cert-lbl">Certificate No.</span> ISO 9001:2015</div>
                  </div>
                  <a href="/cert-iso.pdf" className="cert-btn">Download Certificate &rarr;</a>
                </div>

                <div className="new-cert-card">
                  <div className="cert-header">
                    <h3 className="cert-title">IATF 16949:2016</h3>
                  </div>
                  <div style={{ width: '100%', marginBottom: '24px' }}>
                    <Image src="/images/IATF.png" alt="IATF 16949:2016 Certificate" width={400} height={560} style={{ width: '100%', height: 'auto', border: '1px solid #e2e8f0', borderRadius: '4px' }} />
                  </div>
                  <div className="cert-body">
                    <div className="cert-row"><span className="cert-lbl">Issuing Body:</span> OST Scenes</div>
                    <div className="cert-row"><span className="cert-lbl">Issue Date:</span> 16.11.2026</div>
                    <div className="cert-row"><span className="cert-lbl">Valid Until:</span> 11.11.2021</div>
                    <div className="cert-row"><span className="cert-lbl">Certificate No.</span> IATF 16949:2016</div>
                  </div>
                  <a href="/images/IATF.png" target="_blank" rel="noopener noreferrer" className="cert-btn">View Certificate &rarr;</a>
                </div>

                <div className="new-cert-card">
                  <div className="cert-header">
                    <h3 className="cert-title">ISO 14001:2015</h3>
                  </div>
                  <div className="cert-body">
                    <div className="cert-row"><span className="cert-lbl">Issuing Body:</span> CDF Scenes</div>
                    <div className="cert-row"><span className="cert-lbl">Issue Date:</span> 16.11.2026</div>
                    <div className="cert-row"><span className="cert-lbl">Valid Until:</span> 11.11.2021</div>
                    <div className="cert-row"><span className="cert-lbl">Certificate No.</span> ISO 14001:2015</div>
                  </div>
                  <a href="/cert-iso14001.pdf" className="cert-btn">Download Certificate &rarr;</a>
                </div>

              </div>
            </section>

            {/* KPI Dashboard */}
            <section className="kpi-dashboard">
              <h2 className="eyebrow section-header text-left">Key Performance Indicators</h2>
              <div className="kpi-grid">
                
                {/* KPI 1: Gauge */}
                <div className="kpi-card">
                  <div className="kpi-visual">
                    <div className="gauge-container">
                      <svg viewBox="0 0 100 50" className="gauge-svg">
                        <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#e2e8f0" strokeWidth="12" strokeLinecap="round" />
                        <path d="M 10 50 A 40 40 0 0 1 70 15" fill="none" stroke="#00529b" strokeWidth="12" strokeLinecap="round" strokeDasharray="125.6" strokeDashoffset="0" />
                      </svg>
                      <div className="gauge-needle"></div>
                    </div>
                  </div>
                  <div className="kpi-value">Cpk ≥ 1.67</div>
                  <div className="kpi-label">Critical dims</div>
                </div>

                {/* KPI 2: Bars */}
                <div className="kpi-card">
                  <div className="kpi-visual">
                    <div className="bars-container">
                      {[1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
                        <div key={i} className="kpi-bar"></div>
                      ))}
                    </div>
                  </div>
                  <div className="kpi-value">100%</div>
                  <div className="kpi-label">Vision-insp on all parts</div>
                </div>

                {/* KPI 3: Column Chart */}
                <div className="kpi-card">
                  <div className="kpi-visual">
                    <div className="columns-container">
                      <div className="kpi-col h-40"></div>
                      <div className="kpi-col h-60"></div>
                      <div className="kpi-col h-30"></div>
                      <div className="kpi-col h-80"></div>
                      <div className="kpi-col h-20"></div>
                    </div>
                  </div>
                  <div className="kpi-value">0 PPM</div>
                  <div className="kpi-label">Target defect rate</div>
                </div>

                {/* KPI 4: Checkmark */}
                <div className="kpi-card">
                  <div className="kpi-visual">
                    <div className="kpi-check">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00529b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div className="kpi-value">PPAP L3</div>
                  <div className="kpi-label">Capable</div>
                </div>

              </div>
            </section>

          </div>
        </div>

        {/* Tabbed Inspection Equipment */}
        <section className="inspection-equipment-section">
          <div className="container">
            <h2 className="eyebrow section-header text-left">INSPECTION EQUIPMENT</h2>
            
            <div className="tabs-container">
              <div className="tabs-header">
                {Object.keys(EQUIPMENT_DATA).map(tab => (
                  <button 
                    key={tab} 
                    className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              
              <div className="tab-content">
                <table className="clean-table">
                  <thead>
                    <tr>
                      <th>EQUIPMENT</th>
                      <th>CAPABILITY</th>
                      <th>COVERAGE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {EQUIPMENT_DATA[activeTab as keyof typeof EQUIPMENT_DATA].map((row, idx) => (
                      <tr key={idx}>
                        <td className="fw-500">{row.name}</td>
                        <td>{row.cap}</td>
                        <td>{row.cov}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Process Controls Framework Upgrade */}
        <div className="container">
          <section className="process-control-section">
            <div className="pcf-header-area">
              <span className="pcf-badge">ASSURANCE</span>
              <h2 className="pcf-heading">Process Control Framework</h2>
            </div>
            
            <div className="pcf-grid">
              
              <div className="pcf-card">
                <div className="pcf-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9v2m0 4v.01M5 19h14a2 2 0 001.84-2.75L13.74 4a2 2 0 00-3.5 0l-7.1 12.25A2 2 0 005 19z"/></svg>
                </div>
                <h3 className="pcf-title">FMEA</h3>
                <p className="pcf-desc">Failure mode & effects analysis per part.</p>
                <div className="pcf-tagline">Proactive Risk Mitigation</div>
              </div>

              <div className="pcf-card">
                <div className="pcf-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9h6m-6 4h6m-6-8h.01"/></svg>
                </div>
                <h3 className="pcf-title">Control Plan</h3>
                <p className="pcf-desc">Per part number, full traceability.</p>
                <div className="pcf-tagline">Total Manufacturing Visibility</div>
              </div>

              <div className="pcf-card">
                <div className="pcf-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19.875 6.27A2.225 2.225 0 0121 8.25c0 .59-.236 1.156-.656 1.575l-9.15 9.15a2.25 2.25 0 01-3.182 0l-4.593-4.592a2.25 2.25 0 010-3.182l9.15-9.15a2.225 2.225 0 011.575-.655c.59 0 1.156.235 1.575.655l4.156 4.17z"/><path d="M16.5 10.5l-2-2m-2.5 2.5l-1.5-1.5m-2.5 2.5l-2-2"/></svg>
                </div>
                <h3 className="pcf-title">MSA</h3>
                <p className="pcf-desc">Gauge R&R studies for all gauges.</p>
                <div className="pcf-tagline">Precision Measurement Validated</div>
              </div>

              <div className="pcf-card">
                <div className="pcf-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19h16M4 15l4-6 4 2 4-5 4 4"/></svg>
                </div>
                <h3 className="pcf-title">SPC / CPK ≥ 1.67</h3>
                <p className="pcf-desc">Maintained on critical dimensions.</p>
                <div className="pcf-tagline">Statistical Excellence Guaranteed</div>
              </div>

              <div className="pcf-card">
                <div className="pcf-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5"/><path d="M9 12.38l-1.9 4.34a1 1 0 001.27 1.27L12 17l3.63.99a1 1 0 001.27-1.27l-1.9-4.34"/></svg>
                </div>
                <h3 className="pcf-title">PPAP Level 3</h3>
                <p className="pcf-desc">Full capability for automotive submissions.</p>
                <div className="pcf-tagline">Tier-1 Ready Documentation</div>
              </div>

              <div className="pcf-card">
                <div className="pcf-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.77 3.77z"/></svg>
                </div>
                <h3 className="pcf-title">8D Problem Solving</h3>
                <p className="pcf-desc">Documented corrective actions.</p>
                <div className="pcf-tagline">Continuous Improvement Cycle</div>
              </div>

            </div>
          </section>
        </div>



      </main>
    </>
  );
}
