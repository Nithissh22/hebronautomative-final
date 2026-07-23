"use client";
import React, { useEffect, useState } from 'react';
import { capabilitiesList } from './capabilityData';
import { useTranslation } from '@/i18n/LanguageContext';
import './CapabilityGrid.css';

interface CapabilityGridProps {
  onSelect: (index: number) => void;
}

export default function CapabilityGrid({ onSelect }: CapabilityGridProps) {
  const t = useTranslation('capGrid');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 10);
    return () => clearTimeout(timer);
  }, []);

  // Hover handlers removed since we're using static images now

  return (
    <div className={`capability-grid-container ${mounted ? 'is-mounted' : ''}`}>
      
      <div className="capability-grid-header">
        <span className="grid-header-eyebrow">● {t('whatWeDo')}</span>
        <h2 className="grid-header-title">
          {t('fiveCap').split(' ').map((word, i) => (
            <span key={i} style={{ animationDelay: `${i * 80}ms` }} className="word-reveal">{word}&nbsp;</span>
          ))}
        </h2>
        <p className="grid-header-sub">{t('clickAny')}</p>
      </div>

      <div className="capability-grid">
        {capabilitiesList.map((cap, index) => {
          let area = 'die-casting';
          if (index === 1) area = 'machining';
          if (index === 2) area = 'powder-coating';
          if (index === 3) area = 'sub-assembly';
          if (index === 4) area = 'quality';

          return (
            <div 
              key={cap.id}
              className={`grid-card grid-card--${area}`}
              style={{ gridArea: area, animationDelay: `${index * 120}ms` }}
              onClick={() => onSelect(index)}
              role="button"
              tabIndex={0}
              aria-label={`Explore ${cap.title} capabilities`}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onSelect(index); }}
            >
              <div className="grid-card__bg">
                <img src={cap.imageSrc} alt={cap.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="grid-card__content">
                <span className="grid-card__number">{cap.number}</span>
                <h3 className="grid-card__title">{cap.title}</h3>
                <svg className="grid-card__icon" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="capability-grid-footer">
        <div className="footer-cta-band">
          <p>{t('readyPartner')}</p>
          <div className="footer-cta-buttons">
            <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Enquery →
            </button>
            <a href="#" className="btn-outline" onClick={(e) => e.preventDefault()}>
              Download Capabilities Deck
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
}
