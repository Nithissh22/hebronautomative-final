"use client";
import React, { useState } from 'react';
import { useTranslation } from '@/i18n/LanguageContext';
import './QualityStrip.css';

export default function QualityStrip() {
  const t = useTranslation('qualityStrip');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <section className="qual-strip">
      <div className="container qual-strip__inner">
        <div className="qual-strip__content">
          <span className="eyebrow" style={{ textTransform: 'uppercase' }}>{t('assurance')}</span>
          <h2 className="section-heading">{t('zeroDefect')}</h2>
        </div>
        <div className="qual-strip__right" style={{ display: 'flex', flexDirection: 'column', gap: '48px', width: '100%' }}>
          <div className="qual-strip__stats">
            <div className="qual-stat">
              <span className="qual-stat__val">1.67+</span>
              <span className="qual-stat__lbl" style={{ textTransform: 'uppercase' }}>{t('cpkTarget')}</span>
            </div>
            <div className="qual-stat">
              <span className="qual-stat__val">100%</span>
              <span className="qual-stat__lbl" style={{ textTransform: 'uppercase' }}>{t('traceability')}</span>
            </div>
          </div>
          
          <div className="qual-cert-responsive">
            <div className="qual-cert-text">
              <h4>IATF 16949:2016</h4>
              <p><strong>Issuing Body:</strong> TÜV Rheinland</p>
              <p><strong>Issue Date:</strong> 2024-11-12</p>
              <p><strong>Valid Until:</strong> 2027-11-11</p>
              <p><strong>Certificate No:</strong> 01 111 2436343</p>
            </div>
            <div className="qual-cert-image">
              <img 
                src="/images/iatf_cert_uploaded.jpg" 
                alt="IATF 16949:2016 Certificate" 
                className="cert-img-hover"
                onClick={() => setSelectedImage('/images/iatf_cert_uploaded.jpg')}
              />
            </div>
          </div>
        </div>
      </div>

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
    </section>
  );
}
