"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import { useTranslation } from '@/i18n/LanguageContext';
import './quality.css';

export default function QualityPage() {
  const t = useTranslation('quality');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
              <div className="certifications-grid" style={{ display: 'flex', width: '100%' }}>
                <div className="new-cert-card" style={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', gap: '48px', padding: '48px', background: '#fff', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                  <div style={{ flex: '1' }}>
                    <div className="cert-header">
                      <h3 className="cert-title" style={{ fontSize: '32px', marginBottom: '32px', color: '#09122c' }}>IATF 16949:2016</h3>
                    </div>
                    <div className="cert-body">
                      <div className="cert-row" style={{ fontSize: '16px', marginBottom: '16px' }}><span className="cert-lbl">{t('issuingBody')}</span> OST Scenes</div>
                      <div className="cert-row" style={{ fontSize: '16px', marginBottom: '16px' }}><span className="cert-lbl">{t('issueDate')}</span> 16.11.2026</div>
                      <div className="cert-row" style={{ fontSize: '16px', marginBottom: '16px' }}><span className="cert-lbl">{t('validUntil')}</span> 11.11.2021</div>
                      <div className="cert-row" style={{ fontSize: '16px', marginBottom: '16px' }}><span className="cert-lbl">{t('certNo')}</span> IATF 16949:2016</div>
                    </div>
                  </div>
                  <div style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
                    <div 
                      style={{ cursor: 'pointer', transition: 'transform 0.2s', width: '100%', maxWidth: '500px' }}
                      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      onClick={() => setSelectedImage('/images/IATF.png')}
                    >
                      <Image src="/images/IATF.png" alt="IATF 16949:2016 Certificate" width={500} height={700} style={{ width: '100%', height: 'auto', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} />
                    </div>
                  </div>
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
                    <img src="/assets/Hebron_Automotive_Facility_10.jpg" alt="Gravity Die Casting" />
                    <img src="/assets/Hebron_Automotive_Facility_16.jpg" alt="Quality Inspection Lab" />
                    <img src="/images/toyo_bd330vtex.png" alt="Toyo Machine" />
                    {/* Duplicate for infinite loop */}
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

      {selectedImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 99999,
            cursor: 'zoom-out'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            style={{ 
              maxWidth: '90%', 
              maxHeight: '90%', 
              objectFit: 'contain',
              borderRadius: '8px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.5)'
            }} 
            alt="Full view" 
          />
        </div>
      )}
    </>
  );
}
