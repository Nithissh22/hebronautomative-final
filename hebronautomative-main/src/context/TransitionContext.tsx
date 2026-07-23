'use client';

import { createContext, useContext, useState, ReactNode, useCallback, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface TransitionContextType {
  isTransitioning: boolean;
  startTransition: (href: string) => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export function TransitionProvider({ children }: { children: ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Whenever the pathname changes, navigation has completed.
    // We set a small timeout to allow the exit animation to look smooth.
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 400); // 400ms minimum transition time
      return () => clearTimeout(timer);
    }
  }, [pathname, isTransitioning]);

  const startTransition = useCallback(
    (href: string) => {
      // If we are already transitioning, don't start a new one
      if (isTransitioning) return;
      
      // If navigating to the same page, do not trigger transition loader
      if (href === pathname || href.startsWith(pathname + '?') || href.startsWith(pathname + '#')) {
        router.push(href);
        return;
      }

      setIsTransitioning(true);
      router.push(href);
      
      // Fallback in case navigation fails or is aborted
      setTimeout(() => {
         setIsTransitioning(false);
      }, 3000);
    },
    [router, isTransitioning, pathname]
  );

  return (
    <TransitionContext.Provider value={{ isTransitioning, startTransition }}>
      {children}
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  const context = useContext(TransitionContext);
  if (context === undefined) {
    throw new Error('useTransition must be used within a TransitionProvider');
  }
  return context;
}
