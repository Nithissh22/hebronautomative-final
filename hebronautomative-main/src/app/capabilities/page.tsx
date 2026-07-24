"use client";
import React, { useState, useEffect, Suspense } from 'react';
import Navbar from '@/components/layout/Navbar';
import CapabilityGrid from '@/components/capabilities/CapabilityGrid';
import CapabilityDetail from '@/components/capabilities/CapabilityDetail';
import Footer from '@/components/layout/Footer';
import { capabilitiesList } from '@/components/capabilities/capabilityData';
import { useSearchParams } from 'next/navigation';
import './capabilities.css';

const DRAWER_DATA = {
  'die-casting': {
    title: 'Request a Quote: Die Casting',
    desc: 'Get an estimate for your high-pressure aluminium die casting requirements.'
  },
  'machining': {
    title: 'Request a Quote: Machining',
    desc: 'Need precision CNC/VMC machining? Tell us about your tolerances and surface finish requirements.'
  },
  'powder-coating': {
    title: 'Request a Quote: Powder Coating',
    desc: 'Request an estimate for powder coating or painting services with guaranteed micron thickness.'
  },
  'assembly': {
    title: 'Request a Quote: Sub-assembly',
    desc: 'Share your sub-assembly requirements. We offer torque-verified and tested ready-to-line components.'
  },
  'quality': {
    title: 'Request Quality Audit',
    desc: 'Request comprehensive quality testing, inspection, and metrology services.'
  }
};

function CapabilitiesContent() {
  const searchParams = useSearchParams();
  const idQuery = searchParams ? searchParams.get('id') : null;

  const [mode, setMode] = useState<'overview' | 'detail'>('overview');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeDrawer, setActiveDrawer] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const activeData = activeDrawer ? DRAWER_DATA[activeDrawer as keyof typeof DRAWER_DATA] : null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "e0da2c62-eb99-4d99-a692-6a7271a314c0");
    formData.append("subject", `New Enquiry: ${activeData?.title}`);
    formData.append("from_name", "Hebron Automotive Website");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", { 
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json 
      });
      if (response.ok) {
        setIsSuccess(true);
        e.currentTarget.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else alert("Something went wrong.");
    } catch {
      alert("Error submitting form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (idQuery) {
      const index = capabilitiesList.findIndex(c => c.id === idQuery);
      if (index !== -1) {
        setActiveIndex(index);
        setMode('detail');
      }
    }
  }, [idQuery]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeDrawer) setActiveDrawer(null);
        else if (mode === 'detail') {
          setMode('overview');
          setActiveIndex(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mode, activeDrawer]);

  useEffect(() => {
    if (activeDrawer) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [activeDrawer]);

  const openCapability = (index: number) => {
    setActiveIndex(index);
    setMode('detail');
  };

  const closeDetail = () => {
    setMode('overview');
    setActiveIndex(null);
  };

  const switchCapability = (index: number) => {
    setActiveIndex(index);
  };

  const activeData = activeDrawer ? DRAWER_DATA[activeDrawer as keyof typeof DRAWER_DATA] : null;

  return (
    <div className="page-fade-in">
      <Navbar theme="light" />

      <div style={{ paddingTop: '90px' }}>
        {mode === 'overview' ? (
          <CapabilityGrid onSelect={openCapability} />
        ) : (
          activeIndex !== null && (
            <CapabilityDetail 
              activeIndex={activeIndex} 
              onClose={closeDetail} 
              onSelect={switchCapability}
              onQuoteRequest={(key) => setActiveDrawer(key)}
            />
          )
        )}
      </div>

      {/* Specs Drawer Overlay */}
      <div 
        className={`specs-drawer-backdrop ${activeDrawer ? 'is-open' : ''}`} 
        onClick={() => setActiveDrawer(null)} 
      />
      
      {/* Specs Drawer Panel */}
      <div className={`specs-drawer ${activeDrawer ? 'is-open' : ''}`}>
        <div className="specs-drawer__header">
          <h3 className="specs-drawer__title">{activeData?.title || 'Enquiry'}</h3>
          <button className="specs-drawer__close" onClick={() => setActiveDrawer(null)} aria-label="Close drawer">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        
        <div className="specs-drawer__content">
          <div className="specs-drawer__section">
            <p style={{ color: '#64748b', marginBottom: '24px', lineHeight: 1.5, fontSize: '14px' }}>
              {activeData?.desc}
            </p>
            <form className="quote-form" onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name or Company" required />
              <input type="email" name="email" placeholder="Email Address" required />
              <textarea name="message" placeholder="Describe your part requirements, volume, or timeline..." required rows={4}></textarea>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : isSuccess ? 'Sent Successfully!' : 'Submit Request'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CapabilitiesPage() {
  return (
    <Suspense fallback={<div className="page-fade-in"><Navbar theme="light" /><div style={{ paddingTop: '100px', textAlign: 'center' }}>Loading...</div></div>}>
      <CapabilitiesContent />
    </Suspense>
  );
}
