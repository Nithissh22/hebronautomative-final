"use client";
import React from 'react';
import NavLink from '@/components/ui/NavLink';
import { useTranslation } from '@/i18n/LanguageContext';
import './HomeCTA.css';

export default function HomeCTA() {
  const t = useTranslation('cta');
  return (
    <section className="home-cta">
      <div className="container home-cta__inner">
        <h2 className="section-heading section-heading--light" style={{ whiteSpace: 'pre-line' }}>
          {t('readyScale')}
        </h2>
        <p className="home-cta__sub">
          {t('sendDrawings')}
        </p>
        <div className="home-cta__actions">
          <NavLink href="/contact" className="btn-primary home-cta__enquiry">
            {t('reqQuote')}
          </NavLink>
        </div>
      </div>
    </section>
  );
}
