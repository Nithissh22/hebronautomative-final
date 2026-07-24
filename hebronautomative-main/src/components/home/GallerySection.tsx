'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from '@/i18n/LanguageContext';
import './GallerySection.css';

export default function GallerySection() {
  const t = useTranslation('gallery');
  const tCommon = useTranslation('common');

  const images = [
    { src: '/images/toyo_bd330vtex.png', name: tCommon('galToyo') || 'TOYO BD-330VTEX Die Casting Machine' },
    { src: '/assets/Hebron_Automotive_Facility_4.jpg', name: tCommon('galUtm') || 'Universal Testing Machine' },
    { src: '/assets/Hebron_Automotive_Facility_9.jpg', name: tCommon('galDc') || 'Die Casting Machine' },
    { src: '/assets/Hebron_Automotive_Facility_10.jpg', name: tCommon('galGdc') || 'Gravity Die Casting' },
    { src: '/assets/Hebron_Automotive_Facility_11.jpg', name: tCommon('galDc') || 'Die Casting Machine' },
    { src: '/assets/Hebron_Automotive_Facility_12.jpg', name: tCommon('galCnc') || 'CNC Machining Centers' },
    { src: '/assets/Hebron_Automotive_Facility_13.jpg', name: tCommon('galWire') || 'Medium Speed Wire Cut' },
    { src: '/assets/Hebron_Automotive_Facility_14.jpg', name: tCommon('galLathe') || 'Lathe Machine' },
    { src: '/assets/Hebron_Automotive_Facility_15.jpg', name: tCommon('galSurface') || 'Surface Grinding Machine' },
    { src: '/assets/Hebron_Automotive_Facility_16.jpg', name: tCommon('galLab') || 'Quality Inspection Lab' },
    { src: '/assets/Hebron_Automotive_Facility_17.jpg', name: tCommon('galSpectro') || 'Metal Spectrometer' },
    { src: '/assets/Hebron_Automotive_Facility_18.png', name: tCommon('galVision') || 'Vision Measuring System' },
    { src: '/assets/Hebron_Automotive_Facility_19.jpg', name: tCommon('galDc') || 'Die Casting Machine' },
    { src: '/assets/Hebron_Automotive_Facility_20.png', name: tCommon('galPowder') || 'Powder Coating Plant' },
    { src: '/assets/Hebron_Automotive_Facility_21.png', name: tCommon('galTraub') || 'Traub Lathe Machines' },
    { src: '/assets/Hebron_Automotive_Facility_22.png', name: tCommon('galVibro') || 'Vibratory Finishing Machine' },
    { src: '/assets/Hebron_Automotive_Facility_23.png', name: tCommon('galShot') || 'Shot Blasting Machine' },
  ];

  return (
    <section className="gallery-section">
      <div className="gallery-section__header">
        <span className="eyebrow">{t('eyebrow')}</span>
        <h2 className="section-heading">{t('title')}</h2>
        <div className="heading-rule" style={{ margin: '0 auto 32px' }} />
      </div>
      
      <div className="gallery-container">
        <div className="gallery-track">
          {images.map((item, index) => (
            <div key={`orig-${index}`} className="gallery-item">
              <img src={item.src} alt={item.name} />
              <div className="gallery-item__overlay"></div>
              <div className="gallery-item__caption">{item.name}</div>
            </div>
          ))}
          {/* Duplicate set for seamless infinite scroll */}
          {images.map((item, index) => (
            <div key={`copy-${index}`} className="gallery-item">
              <img src={item.src} alt={item.name} />
              <div className="gallery-item__overlay"></div>
              <div className="gallery-item__caption">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
