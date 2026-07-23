import React from 'react';
import { capabilitiesList } from './capabilityData';
import './MiniNav.css';

interface MiniNavProps {
  activeIndex: number;
  onSelect: (index: number) => void;
}

export default function MiniNav({ activeIndex, onSelect }: MiniNavProps) {
  return (
    <div className="mini-nav">
      {capabilitiesList.map((cap, index) => (
        <div 
          key={cap.id}
          className={`mini-nav__item ${index === activeIndex ? 'is-active' : ''}`}
          onClick={() => onSelect(index)}
          role="button"
          tabIndex={0}
          title={cap.title}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onSelect(index); }}
        >
          <span className="mini-nav__number">{cap.number}</span>
          <div className="mini-nav__line"></div>
        </div>
      ))}
    </div>
  );
}
