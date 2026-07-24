'use client';

import React from 'react';
import Image from 'next/image';
import NavLink from '@/components/ui/NavLink';
import { useTranslation } from '@/i18n/LanguageContext';
import './Hero.css';

export default function Hero() {
  const t = useTranslation('hero');
  return (
    <>
      <section className="hero">

        {/* Background image */}
        <Image
          src="/images/hero-bg-2.png"
          alt="Hebron Automotive Factory Background"
          className="hero__bg-image"
          fill
          priority
          sizes="100vw"
        />

        {/* Dark overlay */}
        <div className="hero__overlay" />

        {/* Content — perfectly centred on the full page */}
        <div className="hero__body">
          <div className="hero__center">
            <div className="hero__logo-wrap">
              <Image
                src="/images/hebron-logo_v2.png"
                alt="Hebron Automotive"
                className="hero__logo"
                width={132}
                height={132}
                priority
              />
            </div>
            <h1 className="hero__h1">
              <span className="hero__company-name">HEBRON AUTOMOTIVE PRODUCTS PVT.LTD</span>
              <span className="hero__main-heading">Manufacturing Of Precision Die Casting components</span>
            </h1>

            <div className="hero__actions">
              <NavLink href="/capabilities" className="btn-outline" style={{ color: '#ffffff', borderColor: '#ffffff' }}>
                {t('viewCap')}
              </NavLink>
            </div>
          </div>
        </div>

        {/* Machine image — absolute bottom-right corner */}
        <div className="hero__right-corner-image" style={{
          position: 'absolute',
          bottom: '0',
          right: '0',
          zIndex: 2,
          width: '420px',
          height: '280px',
          borderRadius: '12px 0 0 0',
          overflow: 'hidden',
          boxShadow: '0 -10px 40px rgba(0,0,0,0.3)'
        }}>
          <Image src="/images/home_right_corner.jpg" alt="Hebron Quality" fill style={{ objectFit: 'cover' }} />
        </div>

      </section>

      {/* Cert bar — OUTSIDE and AFTER hero */}
      <div className="cert-bar">
        <div className="cert-bar-marquee">
          {[...Array(3)].map((_, i) => (
            <React.Fragment key={i}>
              {[
                'IATF 16949:2016',
                'ISO 9001:2015',
                'ISO 14001:2015',
                'ADC12 · A380 · LM6',
                '3-Shift · 365 Days',
                'Free Capacity: 34%',
              ].map(c => (
                <div className="cert-bar__item" key={c}>
                  <span className="cert-bar__dot" />
                  <span>{c}</span>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
