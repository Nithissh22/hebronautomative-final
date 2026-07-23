"use client";
import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from '@/i18n/LanguageContext';
import './FoundationShowcase.css';

interface AnimatedCounterProps {
  target: number;
  start?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  useComma?: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  target, 
  start = 0, 
  duration = 1500, 
  suffix = '', 
  prefix = '', 
  useComma = false 
}) => {
  const [count, setCount] = useState(start);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let startTime: number | null = null;
        const animate = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          // Ease out exponential curve
          const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          setCount(Math.floor(start + (target - start) * easeOut));
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
        observer.unobserve(el);
      }
    }, { threshold: 0.1 });
    
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, start, duration]);

  const displayCount = useComma ? count.toLocaleString('en-US') : count;

  return <span ref={ref}>{prefix}{displayCount}{suffix}</span>;
};

export default function FoundationShowcase() {
  const t = useTranslation('foundation');
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.fd-observe').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="foundation-section">
      <div className="foundation-container">
        
        {/* Header Block */}
        <div className="fd-header fd-observe">
          <div className="fd-heading-wrap">
            <h2 className="fd-heading" style={{ whiteSpace: 'pre-line' }}>{t('headerTitle')}</h2>
          </div>
          <p className="fd-subtext">{t('headerSub')}</p>
        </div>

        {/* Stats Strip */}
        <div className="fd-stats-row fd-observe">
          <div className="fd-stat-card">
            <div className="fd-stat-num">
              <AnimatedCounter start={2015} target={2019} duration={1500} />
            </div>
            <div className="fd-stat-label">{t('statEst')}</div>
          </div>
          <div className="fd-stat-card">
            <div className="fd-stat-num">
              <AnimatedCounter target={42000} useComma={true} />
            </div>
            <div className="fd-stat-label">{t('statSqft')}</div>
          </div>
          <div className="fd-stat-card">
            <div className="fd-stat-num">
              <AnimatedCounter target={120} suffix="+" />
            </div>
            <div className="fd-stat-label">{t('statEmp')}</div>
          </div>
          <div className="fd-stat-card">
            <div className="fd-stat-num">
              <AnimatedCounter target={3} />
            </div>
            <div className="fd-stat-label">{t('statShifts')}</div>
          </div>
        </div>

        {/* Two-Column Body */}
        <div className="fd-body">
          <div className="fd-left fd-observe">
            <div className="fd-eyebrow">
              <span className="fd-dot">●</span> {t('eyebrow')}
            </div>
            <div className="fd-text-content">
              <p>
                <span className="fw-500">{t('p1Start')}</span>{t('p1End')}
              </p>
              <p>
                <span className="fw-500">{t('p2Start')}</span>{t('p2End')}
              </p>
            </div>
          </div>

          <div className="fd-right fd-observe">
            <div className="fd-facts-card">
              <div className="fd-card-eyebrow">{t('glance')}</div>
              <table className="fd-facts-table">
                <tbody>
                  <tr>
                    <th>{t('glanceEst')}</th>
                    <td>2019</td>
                  </tr>
                  <tr>
                    <th>{t('glanceHq')}</th>
                    <td>{t('valHosur')}</td>
                  </tr>
                  <tr>
                    <th>{t('glanceArea')}</th>
                    <td>{t('valSqft')}</td>
                  </tr>
                  <tr>
                    <th>{t('glanceEmp')}</th>
                    <td>120+</td>
                  </tr>
                  <tr>
                    <th>{t('glanceShifts')}</th>
                    <td>{t('valShifts')}</td>
                  </tr>
                  <tr>
                    <th>{t('glanceCust')}</th>
                    <td>{t('valCustomers')}</td>
                  </tr>
                  <tr>
                    <th>{t('glanceCap')}</th>
                    <td>{t('valCapacity')}</td>
                  </tr>
                  <tr>
                    <th>{t('glanceTurnover')}</th>
                    <td className="highlight-turnover">{t('valTurnover')}</td>
                  </tr>
                  <tr>
                    <th>{t('glanceCert')}</th>
                    <td>ISO 9001:2015 &middot; IATF 16949:2016 &middot; ISO 14001:2015</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
