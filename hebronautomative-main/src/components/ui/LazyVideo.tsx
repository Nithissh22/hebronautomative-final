'use client';

import React, { useRef, useEffect } from 'react';

interface LazyVideoProps {
  webmSrc: string;
  mp4Src: string;
  posterSrc: string;
  className?: string;
}

export default function LazyVideo({ webmSrc, mp4Src, posterSrc, className = '' }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            // Start loading and playing when the video is visible
            videoRef.current.preload = 'auto';
            videoRef.current.play().catch((err) => {
              console.warn('Auto-play prevented:', err);
            });
            // Stop observing once loaded
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '200px 0px', // start loading slightly before it enters viewport
        threshold: 0.1,
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      poster={posterSrc}
    >
      <source src={webmSrc} type="video/webm" />
      <source src={mp4Src} type="video/mp4" />
    </video>
  );
}
