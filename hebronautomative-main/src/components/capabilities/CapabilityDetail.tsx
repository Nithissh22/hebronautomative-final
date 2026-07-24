import React, { useState } from 'react';
import { capabilitiesList } from './capabilityData';
import MiniNav from './MiniNav';
import './CapabilityDetail.css';

interface CapabilityDetailProps {
  activeIndex: number;
  onClose: () => void;
  onSelect: (index: number) => void;
  onQuoteRequest: (drawerKey: string) => void;
}

export default function CapabilityDetail({ activeIndex, onClose, onSelect, onQuoteRequest }: CapabilityDetailProps) {
  const cap = capabilitiesList[activeIndex];
  const [activeTab, setActiveTab] = useState<'equipment' | 'inventory' | 'process'>('equipment');
  const [prevIndex, setPrevIndex] = useState(activeIndex);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Derived state pattern instead of useEffect to avoid cascading render error
  if (activeIndex !== prevIndex) {
    setPrevIndex(activeIndex);
    setActiveTab('equipment');
  }

  const carouselImages = Array.from(new Set([
    cap.imageSrc,
    '/images/die-casting-hq.png',
    '/images/standard_room_quality.png',
    '/images/eyelet_assembly_product.png',
    '/images/outer_tube_product.png',
    '/images/spring_seat_product.png',
  ]));
  const [imgIndex, setImgIndex] = React.useState(0);

  const subAssemblyImages = [
    '/images/cap-sub-assembly.png',
    '/images/product-outer-tube.png',
    '/images/sub-assembly-3.png',
    '/images/sub-assembly-4.png',
    '/images/product-suspension-shox.png',
  ];

  const qualitySystemsImages = [
    '/images/cap-sub-assembly.png',
    '/images/product-outer-tube.png',
    '/images/sub-assembly-3.png',
    '/images/sub-assembly-4.png',
    '/images/product-suspension-shox.png',
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="capability-detail-container" role="region" aria-label={`${cap.title} Details`}>
      <MiniNav activeIndex={activeIndex} onSelect={onSelect} />
      
      <button className="btn-back" onClick={onClose}>
        ← All Capabilities
      </button>

      <div className="detail-split">
        {/* Left Panel */}
        <div className="detail-media-panel" style={{ position: 'relative' }}>
          {carouselImages.map((src, i) => (
            <img 
              key={`${src}-${i}`} 
              src={src} 
              alt={cap.title} 
              className="detail-media-video" 
              style={{ 
                position: 'absolute', top: 0, left: 0, 
                width: '100%', height: '100%', objectFit: 'cover',
                opacity: imgIndex === i ? 1 : 0, transition: 'opacity 1s ease-in-out'
              }} 
            />
          ))}
          <div className="detail-media-gradient"></div>
          
          <div className="detail-media-watermark" style={{ zIndex: 10 }}>
            {cap.title}
          </div>
          
          {cap.certBadge && (
            <div className="detail-media-badge" style={{ zIndex: 10 }}>
              {cap.certBadge}
            </div>
          )}
        </div>

        {/* Right Panel */}
        <div className="detail-specs-panel">
          <div className="detail-specs-header">
            <span className="detail-specs-eyebrow">{cap.number} &nbsp;·&nbsp; {cap.title}</span>
            <p className="detail-specs-power">{cap.powerStatement}</p>
          </div>

          <div className="detail-specs-grid">
            {cap.specs.map((spec, i) => (
              <div key={i} className="spec-card">
                <i className={`${spec.icon} spec-card-icon`}></i>
                <div className="spec-card-content">
                  <span className="spec-card-label">{spec.label}</span>
                  <span className="spec-card-value">{spec.value}</span>
                </div>
              </div>
            ))}
            {cap.id === 'sub-assembly' && (
              <>
                <style>{`
                  @keyframes slideVerticalLoop {
                    0%, 15% { transform: translateY(0); }
                    20%, 35% { transform: translateY(-16.666%); }
                    40%, 55% { transform: translateY(-33.333%); }
                    60%, 75% { transform: translateY(-50%); }
                    80%, 95% { transform: translateY(-66.666%); }
                    100% { transform: translateY(-83.333%); }
                  }
                `}</style>
                <div className="sub-assembly-slider-wrapper" style={{ overflow: 'hidden', position: 'relative', height: '90px', borderRadius: '10px', background: '#f8fbff', border: '1px solid #eef2f7' }}>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    animation: 'slideVerticalLoop 10s infinite linear'
                  }}>
                    {/* Render original images plus a duplicate of the first one for seamless looping */}
                    {[...subAssemblyImages, subAssemblyImages[0]].map((src, i) => (
                      <img key={i} src={src} onClick={() => setSelectedImage(src)} style={{ width: '100%', height: '90px', objectFit: 'contain', padding: '8px', boxSizing: 'border-box', cursor: 'pointer' }} alt={`Sub-assembly part ${i + 1}`} />
                    ))}
                  </div>
                </div>
              </>
            )}

            {cap.id === 'quality-systems' && (
              <>
                <style>{`
                  @keyframes slideVerticalLoopQuality {
                    0%, 15% { transform: translateY(0); }
                    20%, 35% { transform: translateY(-16.666%); }
                    40%, 55% { transform: translateY(-33.333%); }
                    60%, 75% { transform: translateY(-50%); }
                    80%, 95% { transform: translateY(-66.666%); }
                    100% { transform: translateY(-83.333%); }
                  }
                `}</style>
                <div className="quality-systems-slider-wrapper" style={{ overflow: 'hidden', position: 'relative', height: '90px', borderRadius: '10px', background: '#f8fbff', border: '1px solid #eef2f7' }}>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    animation: 'slideVerticalLoopQuality 10s infinite linear'
                  }}>
                    {/* Render original images plus a duplicate of the first one for seamless looping */}
                    {[...qualitySystemsImages, qualitySystemsImages[0]].map((src, i) => (
                      <img key={`quality-img-${i}`} src={src} onClick={() => setSelectedImage(src)} style={{ width: '100%', height: '90px', objectFit: 'contain', padding: '8px', boxSizing: 'border-box', cursor: 'pointer' }} alt={`Quality section image ${i + 1}`} />
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="detail-tabs">
            <button className={`tab-btn ${activeTab === 'equipment' ? 'active' : ''}`} onClick={() => setActiveTab('equipment')}>Equipment</button>
            <button className={`tab-btn ${activeTab === 'process' ? 'active' : ''}`} onClick={() => setActiveTab('process')}>Process Flow</button>
          </div>

          <div className="detail-tab-content">
            {activeTab === 'equipment' && (
              <ul className="equipment-list-simple">
                {cap.equipmentList.map((eq, i) => (
                  <li key={i}>{eq.name} {eq.qty ? <span className="eq-qty">{eq.qty}</span> : null}</li>
                ))}
              </ul>
            )}

            {activeTab === 'process' && (
              <div className="process-flow-stepper">
                {cap.processFlow.map((step, i) => (
                  <div key={i} className="process-step" style={{ animationDelay: `${i * 100}ms` }}>
                    <div className="process-step-node">{i + 1}</div>
                    <div className="process-step-label">{step}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="detail-trust-points">
            {cap.trustPoints.map((point, i) => (
              <div key={i} className="trust-point">
                <i className="ti ti-check trust-point-icon"></i> {point}
              </div>
            ))}
          </div>

          <button className="btn-primary detail-cta" onClick={() => onQuoteRequest(cap.drawerKey)}>
            Enquery →
          </button>
        </div>
      </div>

      {selectedImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            cursor: 'pointer'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            style={{ 
              maxWidth: '90%', 
              maxHeight: '90%', 
              objectFit: 'contain',
              borderRadius: '8px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.3)'
            }} 
            alt="Full view" 
          />
        </div>
      )}
    </div>
  );
}

