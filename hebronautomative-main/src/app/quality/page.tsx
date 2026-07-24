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

            {/* Animated Quality Gallery */}
            <section className="quality-animated-gallery">
              <div className="quality-gallery-header">
                <h2 className="eyebrow section-header text-center">Facility Showcase</h2>
                <p className="text-center" style={{ color: '#64748b', marginBottom: '48px' }}>
                  A glimpse into our state-of-the-art manufacturing and inspection capabilities.
                </p>
              </div>
              
              <div className="quality-gallery-container">
                {/* Column 1: Slides Up */}
                <div className="gallery-col col-up">
                  <div className="gallery-track-up">
                    <img src="/assets/Hebron_Automotive_Facility_2.jpg" alt="Finished Components" />
                    <img src="/assets/Hebron_Automotive_Facility_10.jpg" alt="Gravity Die Casting" />
                    <img src="/assets/Hebron_Automotive_Facility_16.jpg" alt="Quality Inspection Lab" />
                    <img src="/images/toyo_bd330vtex.png" alt="Toyo Machine" />
                    {/* Duplicate for infinite loop */}
                    <img src="/assets/Hebron_Automotive_Facility_2.jpg" alt="Finished Components" />
                    <img src="/assets/Hebron_Automotive_Facility_10.jpg" alt="Gravity Die Casting" />
                    <img src="/assets/Hebron_Automotive_Facility_16.jpg" alt="Quality Inspection Lab" />
                    <img src="/images/toyo_bd330vtex.png" alt="Toyo Machine" />
                  </div>
                </div>

                {/* Column 2: Slides Down */}
                <div className="gallery-col col-down">
                  <div className="gallery-track-down">
                    <img src="/assets/Hebron_Automotive_Facility_4.jpg" alt="Testing Machine" />
                    <img src="/assets/Hebron_Automotive_Facility_12.jpg" alt="CNC Machining" />
                    <img src="/assets/Hebron_Automotive_Facility_18.png" alt="Vision System" />
                    <img src="/assets/Hebron_Automotive_Facility_22.png" alt="Vibratory Finishing" />
                    {/* Duplicate for infinite loop */}
                    <img src="/assets/Hebron_Automotive_Facility_4.jpg" alt="Testing Machine" />
                    <img src="/assets/Hebron_Automotive_Facility_12.jpg" alt="CNC Machining" />
                    <img src="/assets/Hebron_Automotive_Facility_18.png" alt="Vision System" />
                    <img src="/assets/Hebron_Automotive_Facility_22.png" alt="Vibratory Finishing" />
                  </div>
                </div>

                {/* Column 3: Slides Up */}
                <div className="gallery-col col-up d-none-mobile">
                  <div className="gallery-track-up" style={{ animationDelay: '-5s' }}>
                    <img src="/assets/Hebron_Automotive_Facility_9.jpg" alt="Die Casting" />
                    <img src="/assets/Hebron_Automotive_Facility_14.jpg" alt="Lathe Machine" />
                    <img src="/assets/Hebron_Automotive_Facility_20.png" alt="Powder Coating" />
                    <img src="/assets/Hebron_Automotive_Facility_23.png" alt="Shot Blasting" />
                    {/* Duplicate for infinite loop */}
                    <img src="/assets/Hebron_Automotive_Facility_9.jpg" alt="Die Casting" />
                    <img src="/assets/Hebron_Automotive_Facility_14.jpg" alt="Lathe Machine" />
                    <img src="/assets/Hebron_Automotive_Facility_20.png" alt="Powder Coating" />
                    <img src="/assets/Hebron_Automotive_Facility_23.png" alt="Shot Blasting" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
