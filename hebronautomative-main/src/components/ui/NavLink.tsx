'use client';

import React from 'react';
import { useTransition } from '@/context/TransitionContext';

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className = '', onClick, ...props }: NavLinkProps) {
  const { startTransition } = useTransition();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if it's an external link or a modifier key was pressed
    if (
      href.startsWith('http') || 
      href.startsWith('mailto') || 
      e.ctrlKey || 
      e.metaKey || 
      e.shiftKey || 
      e.altKey ||
      href.startsWith('#')
    ) {
      if (onClick) onClick(e);
      return;
    }

    e.preventDefault();
    if (onClick) onClick(e);
    
    startTransition(href);
  };

  return (
    <a href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
