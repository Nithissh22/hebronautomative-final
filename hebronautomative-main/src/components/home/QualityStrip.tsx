"use client";
import React from 'react';
import { useTranslation } from '@/i18n/LanguageContext';
import './QualityStrip.css';

export default function QualityStrip() {
  const t = useTranslation('qualityStrip');
  return (
    <section className="qual-strip">
      <div className="container qual-strip__inner">
        <div className="qual-strip__content">
          <span className="eyebrow" style={{ textTransform: 'uppercase' }}>{t('assurance')}</span>
          <h2 className="section-heading">{t('zeroDefect')}</h2>
          <p className="qual-strip__text">
            {t('everyComp')}
          </p>
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
          
          <div className="qual-certs" style={{ display: 'flex', width: '100%' }}>
            <div className="qual-cert" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '32px', width: '100%', background: '#fff', padding: '32px', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <div style={{ flex: '1' }}>
                <h4 style={{ fontSize: '24px', marginBottom: '16px', color: '#09122c' }}>IATF 16949:2016</h4>
                <p style={{ marginBottom: '8px', fontSize: '15px' }}><strong>Issuing Body:</strong> TÜV Rheinland</p>
                <p style={{ marginBottom: '8px', fontSize: '15px' }}><strong>Issue Date:</strong> 2024-11-12</p>
                <p style={{ marginBottom: '8px', fontSize: '15px' }}><strong>Valid Until:</strong> 2027-11-11</p>
                <p style={{ marginBottom: '8px', fontSize: '15px' }}><strong>Certificate No:</strong> 01 111 2436343</p>
              </div>
              <div style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
                <img src="/images/iatf_cert_uploaded.jpg" alt="IATF 16949:2016 Certificate" style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
