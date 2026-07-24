"use client";
import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import { useTranslation } from '@/i18n/LanguageContext';
import './quality.css';

export default function QualityPage() {
  const t = useTranslation('quality');

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
            {t('heroEyebrow')}
          </div>
          <h1 className="hero-serif-title">{t('heroTitle')}</h1>
          <p className="quality-hero__subtitle">
            {t('heroSubtitle')}
          </p>
          <div className="quality-hero__standards">
            {t('heroStandards')}
          </div>
        </div>
      </section>

      <main id="main-content" style={{ paddingBottom: '0', backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div className="quality-sections">

            {/* SECTION 2: Certifications */}
            <section className="certifications-section">
              <h2 className="eyebrow section-header text-center">{t('certifications')}</h2>
              <div className="certifications-grid">

                <div className="new-cert-card">
                  <div className="cert-header">
                    <h3 className="cert-title">ISO 9001:2015</h3>
                  </div>
                  <div className="cert-body">
                    <div className="cert-row"><span className="cert-lbl">{t('issuingBody')}</span> CBF</div>
                    <div className="cert-row"><span className="cert-lbl">{t('issueDate')}</span> 16.11.2026</div>
                    <div className="cert-row"><span className="cert-lbl">{t('validUntil')}</span> 11.11.2021</div>
                    <div className="cert-row"><span className="cert-lbl">{t('certNo')}</span> ISO 9001:2015</div>
                  </div>
                  <a href="/cert-iso.pdf" target="_blank" rel="noopener noreferrer" className="cert-btn">{t('viewCert')}</a>
                </div>

                <div className="new-cert-card">
                  <div className="cert-header">
                    <h3 className="cert-title">IATF 16949:2016</h3>
                  </div>
                  <div style={{ width: '100%', marginBottom: '24px' }}>
                    <Image src="/images/IATF.png" alt="IATF 16949:2016 Certificate" width={400} height={560} style={{ width: '100%', height: 'auto', border: '1px solid #e2e8f0', borderRadius: '4px' }} />
                  </div>
                  <div className="cert-body">
                    <div className="cert-row"><span className="cert-lbl">{t('issuingBody')}</span> OST Scenes</div>
                    <div className="cert-row"><span className="cert-lbl">{t('issueDate')}</span> 16.11.2026</div>
                    <div className="cert-row"><span className="cert-lbl">{t('validUntil')}</span> 11.11.2021</div>
                    <div className="cert-row"><span className="cert-lbl">{t('certNo')}</span> IATF 16949:2016</div>
                  </div>
                  <a href="/images/IATF.png" target="_blank" rel="noopener noreferrer" className="cert-btn">{t('viewCert')}</a>
                </div>

                <div className="new-cert-card">
                  <div className="cert-header">
                    <h3 className="cert-title">ISO 14001:2015</h3>
                  </div>
                  <div className="cert-body">
                    <div className="cert-row"><span className="cert-lbl">{t('issuingBody')}</span> CDF Scenes</div>
                    <div className="cert-row"><span className="cert-lbl">{t('issueDate')}</span> 16.11.2026</div>
                    <div className="cert-row"><span className="cert-lbl">{t('validUntil')}</span> 11.11.2021</div>
                    <div className="cert-row"><span className="cert-lbl">{t('certNo')}</span> ISO 14001:2015</div>
                  </div>
                  <a href="/cert-iso14001.pdf" target="_blank" rel="noopener noreferrer" className="cert-btn">{t('viewCert')}</a>
                </div>

              </div>
            </section>

            {/* Animated Quality Gallery */}
            <section className="quality-animated-gallery">
              <div className="quality-gallery-header">
                <h2 className="eyebrow section-header text-center">{t('facilityShowcase')}</h2>
                <p className="text-center" style={{ color: '#64748b', marginBottom: '48px' }}>
                  {t('facilityDesc')}
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
