'use client';

import { useEffect, useState } from 'react';
import { useTransition } from '@/context/TransitionContext';
import './PageLoader.css';

export default function PageLoader() {
  const { isTransitioning } = useTransition();
  // Start with 'enter' so the animation plays on the initial page load
  const [renderState, setRenderState] = useState<'hidden' | 'enter' | 'exit'>('enter');

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isTransitioning) {
      setRenderState('enter');
    } else {
      setRenderState((prev) => {
        if (prev === 'enter') {
          // Trigger exit animation after a short delay for initial load feel
          timer = setTimeout(() => {
            setRenderState('hidden');
          }, 800);
          return 'exit';
        }
        return prev;
      });
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isTransitioning]);

  if (renderState === 'hidden') return null;

  return (
    <div className={`page-loader ${renderState === 'enter' ? 'loader-enter' : 'loader-exit'}`}>
      <div className="loader-metal-container">
        {/* Metal glowing ring */}
        <div className="loader-metal-ring"></div>
        {/* The user's image in the center */}
        <div className="loader-metal-image-wrapper">
          <img src="/images/loading_logo.png" alt="Loading" className="loader-metal-image" />
        </div>
      </div>
    </div>
  );
}
