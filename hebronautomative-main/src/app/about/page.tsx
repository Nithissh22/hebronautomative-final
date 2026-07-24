'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import NavLink from '@/components/ui/NavLink';
import CustomersShowcase from '@/components/about/CustomersShowcase';
import TimelineShowcase from '@/components/about/TimelineShowcase';
import FoundationShowcase from '@/components/about/FoundationShowcase';
import CompanyMetrics from '@/components/about/CompanyMetrics';
import { useTranslation } from '@/i18n/LanguageContext';
import './about.css';

export default function AboutPage() {
  const t = useTranslation('about');

  return (
    <>
      <Navbar />

      {/* 1. Hero Banner */}
      <section className="about-hero">
        <div className="container about-hero__content">
          <div className="eyebrow" style={{ marginBottom: 'var(--space-2)' }}>
            {t('heroEyebrow')}
          </div>
          <h1 className="section-heading" style={{ color: 'var(--text-on-dark)' }}>
            {t('heroTitle')}
          </h1>
          <div className="about-hero__facts">
            {t('heroFacts')}
          </div>
        </div>
      </section>

      <main id="main-content" style={{ paddingBottom: '0' }}>

        {/* 2 & 3. Foundation and Stats Showcase */}
        <FoundationShowcase />

        {/* 4. Our Customers (Animated Showcase) */}
        <CustomersShowcase />

        {/* 4.5. Year-Wise Journey (Animated Timeline) */}
        <TimelineShowcase />

        {/* 5. Sectors Served */}
        <section className="sectors-section">
          <div className="container">
            <div className="sectors-container">
              <span className="eyebrow section-cyan-label">{t('sectorsLabel')}</span>
              <div className="sectors-grid">
                <div className="sector-column">
                  <div className="sector-title">{t('sector1Title')}</div>
                  <ul className="sector-list">
                    <li>{t('sector1Item1')}</li>
                    <li>{t('sector1Item2')}</li>
                    <li>{t('sector1Item3')}</li>
                  </ul>
                </div>
                <div className="sector-column">
                  <div className="sector-title">{t('sector2Title')}</div>
                  <ul className="sector-list">
                    <li>{t('sector2Item1')}</li>
                    <li>{t('sector2Item2')}</li>
                    <li>{t('sector2Item3')}</li>
                  </ul>
                </div>
                <div className="sector-column">
                  <div className="sector-title">{t('sector3Title')}</div>
                  <ul className="sector-list">
                    <li>{t('sector3Item1')}</li>
                    <li>{t('sector3Item2')}</li>
                    <li>{t('sector3Item3')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5.5. Performance & Capacity */}
        <CompanyMetrics />

        {/* 6. Leadership */}
        <section className="leadership-section">
          <div className="container">
            <span className="eyebrow section-cyan-label">{t('leadershipLabel')}</span>
            <div className="leadership-grid">
              <div className="leader-card">
                <div className="leader-photo-container">
                  <div className="leader-photo placeholder-photo"></div>
                </div>
                <div className="leader-info">
                  <div className="leader-name">Mr. N. Kumar</div>
                  <div className="leader-title">{t('leaderTitle')}</div>
                  <div className="leader-contact tabular-data" style={{ fontSize: '13px', marginTop: '4px', color: 'var(--text-body)' }}>+91 63823 97202</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Bottom CTA */}
        <section className="about-cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="section-heading">{t('ctaTitle')}</h2>
              <p>{t('ctaBody')}</p>
              <div className="cta-buttons">
                <button className="btn-outline" style={{ color: 'white', borderColor: 'white' }}>{t('ctaDownload')}</button>
                <NavLink href="/contact" className="btn-primary">{t('ctaSendRfq')}</NavLink>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
