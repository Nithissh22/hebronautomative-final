'use client';

import React, { useState } from 'react';
import './CertificateWidget.css';

export default function CertificateWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className="certificate-widget-btn" 
        onClick={() => setIsOpen(true)}
        title="View IATF Certificate"
      >
        <div className="certificate-widget-icon">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="8" r="7"></circle>
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
          </svg>
        </div>
        <span className="certificate-widget-text">IATF 16949</span>
      </div>

      {isOpen && (
        <div className="certificate-modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="certificate-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="certificate-modal-close" onClick={() => setIsOpen(false)}>&times;</button>
            <img 
              src="/images/IATF.png" 
              alt="IATF 16949:2016 Certificate" 
              className="certificate-modal-img"
            />
          </div>
        </div>
      )}
    </>
  );
}
