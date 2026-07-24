"use client";
import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from '@/i18n/LanguageContext';
import './TimelineShowcase.css';

const IconFactory = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21c1.147 -4.02 1.983 -8.027 2 -12h6c.017 3.973 .853 7.98 2 12"/><path d="M12.5 13h4.5c.025 2.612 .894 5.296 2 8"/><path d="M9 5a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1"/></svg>;
const IconSpray = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h16"/><path d="M12 4v6"/><path d="M12 10v10"/><path d="M8 20h8"/><path d="M8 4h8"/><path d="M4 14l4 -4"/><path d="M20 14l-4 -4"/></svg>;
const IconSettings = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" /><circle cx="12" cy="12" r="3" /></svg>;
const IconTool = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5" /></svg>;
const IconMicroscope = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 21h14" /><path d="M6 18h2" /><path d="M7 18v3" /><path d="M9 11l3 3l6 -6l-3 -3z" /><path d="M10.5 12.5l-1.5 1.5" /><path d="M17 3l3 3" /><path d="M12 21a6 6 0 0 0 3.715 -10.712" /></svg>;
const IconEngine = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10v6" /><path d="M12 5v3" /><path d="M10 5h4" /><path d="M5 13h-2" /><path d="M6 10h2l2 -2h3.382a1 1 0 0 1 .894 .553l1.448 2.894a1 1 0 0 0 .894 .553h1.382v-2h2v6h-2v-2h-3v2h-13z" /></svg>;
const IconRocket = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" /><path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" /><circle cx="15" cy="9" r="1" /></svg>;
const IconArrowLeft = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>;
const IconArrowRight = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>;

export default function TimelineShowcase() {
  const t = useTranslation('timeline');

  const milestones = [
    { year: '2019', text: "Started Hebron Automotive with 2 pressure die casting machines", icon: <IconFactory /> },
    { year: '2020', text: "Started semi-automotive powder coating facility", icon: <IconSpray /> },
    { year: '2021', text: "Added 2 more die casting machines", icon: <IconSettings /> },
    { year: '2022', text: "New Facility for machining and bush assembly for Gabriel Parts", icon: <IconTool /> },
    { year: '2023', text: "Added 2 more die casting machines 180 ton & 250 Ton", icon: <IconMicroscope /> },
    { year: '2024', text: "Installed Standard room for availability of all testing facilities, UTM, Spectro Analysis, VMM, 2D etc & Added 1PDC machine", icon: <IconEngine /> },
    { year: '2025&26', text: "Added 7 GDC machines & 5 VMC Machines for Outer tube parts and Tool Room Setup with wire cutting machine, Surface Machine & 6 CNC machines and added one more PDC machine", icon: <IconRocket /> },
  ];
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const getColWidth = () => {
    if (!scrollRef.current) return 300;
    const col = scrollRef.current.querySelector('.journey-col');
    return col ? col.getBoundingClientRect().width : 300;
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -getColWidth(), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: getColWidth(), behavior: 'smooth' });
    }
  };

  const handleDotClick = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: index * getColWidth(), behavior: 'smooth' });
    }
  };

  // Update active index based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const w = getColWidth();
        const index = Math.round(scrollRef.current.scrollLeft / w);
        setActiveIndex(Math.min(Math.max(index, 0), milestones.length - 1));
      }
    };
    const el = scrollRef.current;
    if (el) el.addEventListener('scroll', handleScroll);
    return () => {
      if (el) el.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="growth-section">
      <div className="container">
        
        <div className="growth-header">
          <h2 className="growth-heading">Journey of Hebron</h2>
        </div>

        {/* 4-Column Journey Layout */}
        <div className="journey-carousel-wrapper">
          <div className="journey-carousel" ref={scrollRef}>
            {milestones.map((m, i) => (
              <div className="journey-col" key={m.year}>
                <div className="journey-icon">{m.icon}</div>
                <div className="journey-content">
                  <p className="journey-text">
                    <strong style={{ color: 'var(--brand-cyan)' }}>{m.year}</strong><br/>
                    {m.text}
                  </p>
                </div>
              </div>
            ))}
            {/* Spacer to allow scrolling all the way to the last item */}
            <div className="journey-spacer"></div>
          </div>
        </div>

        <div className="milestone-header">
          <h2 className="growth-heading">{t('milestone')}</h2>
        </div>

        {/* Timeline Stepper */}
        <div className="milestone-timeline-container">
          <button className="timeline-arrow" onClick={scrollLeft} disabled={activeIndex === 0}>
            <IconArrowLeft />
          </button>
          
          <div className="timeline-track-ui">
            <div className="timeline-base-line"></div>
            <div className="timeline-progress-line" style={{ width: `${(activeIndex / (milestones.length - 1)) * 100}%` }}></div>
            
            {milestones.map((m, i) => {
              const isPast = i <= activeIndex;
              const isActive = i === activeIndex;
              
              return (
                <div 
                  className="timeline-point" 
                  key={m.year} 
                  style={{ left: `${(i / (milestones.length - 1)) * 100}%` }}
                  onClick={() => handleDotClick(i)}
                >
                  <div className={`point-year ${isActive ? 'active' : ''}`}>{m.year}</div>
                  <div className={`point-dot-outer ${isPast ? 'past' : ''} ${isActive ? 'active' : ''}`}>
                    <div className="point-dot-inner"></div>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="timeline-arrow" onClick={scrollRight} disabled={activeIndex === milestones.length - 1}>
            <IconArrowRight />
          </button>
        </div>

      </div>
    </section>
  );
}
