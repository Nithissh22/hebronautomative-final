'use client';

import React from 'react';
import { useTranslation } from '@/i18n/LanguageContext';
import './MissionVision.css';

export default function MissionVision() {
  const t = useTranslation('mission');
  const tCommon = useTranslation('common');
  return (
    <section className="mission-vision">
      <div className="container">
        <div className="mission-vision__header">
          <span className="eyebrow">{tCommon('coreValues') || t('eyebrow')}</span>
          <h2 className="section-heading section-heading--light">{tCommon('missionVision') || t('title')}</h2>
          <div className="heading-rule" />
        </div>
        
        <div className="mission-vision__content">
          {/* Mission: Image on Left, Text on Right */}
          <div className="mission-row">
            <div className="mission-image-wrapper">
              <img src="/images/mission_uploaded.jpg" alt="Our Mission" className="mission-image" />
            </div>
            <div className="mission-card">
              <h3>{tCommon('ourMission') || t('missionTitle')}</h3>
              <p>{tCommon('ourMissionDesc') || t('missionDesc')}</p>
            </div>
          </div>

          {/* Vision: Text on Left, Image on Right */}
          <div className="mission-row mission-row--reverse">
            <div className="mission-image-wrapper">
              <img src="/images/vision-garden.png" alt="Our Vision" className="mission-image" />
            </div>
            <div className="mission-card">
              <h3>{tCommon('ourVision') || t('visionTitle')}</h3>
              <p>{tCommon('ourVisionDesc') || t('visionDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
