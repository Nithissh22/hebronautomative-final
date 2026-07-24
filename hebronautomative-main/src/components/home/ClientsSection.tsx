'use client';

import React from 'react';
import { useTranslation } from '@/i18n/LanguageContext';
import './ClientsSection.css';

export default function ClientsSection() {
  const t = useTranslation('clients');
  const tCommon = useTranslation('common');
  return (
    <section className="clients-sec">
      <div className="container">
        <div className="clients-sec__header">
          <span className="eyebrow">{tCommon('trustedByOem') || t('eyebrow')}</span>
          <h2 className="section-heading">
            {tCommon('approvedEndCust') || t('title')}
          </h2>
          <div className="heading-rule" />
        </div>

        <div className="clients-sec__marquee-container">
          <div className="clients-sec__marquee">
            {[...Array(2)].map((_, i) => (
              <div className="clients-sec__logos" key={i}>
                <img src="/assets/TVS_Motor_Company_v3.png" alt="TVS Motor Company" className="client-logo" />
                <img src="/assets/Honda_v3.png" alt="Honda" className="client-logo" />
                <img src="/assets/Royal_Enfield_v2.png" alt="Royal Enfield" className="client-logo" />
                <img src="/assets/Mahindra_v2.png" alt="Mahindra" className="client-logo" />
                <img src="/assets/Ola_Electric.svg" alt="Ola Electric" className="client-logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
