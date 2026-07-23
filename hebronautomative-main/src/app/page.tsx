import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import CapabilitiesOverview from '@/components/home/CapabilitiesOverview';
import QualityStrip from '@/components/home/QualityStrip';
import MissionVision from '@/components/home/MissionVision';
import GallerySection from '@/components/home/GallerySection';
import HomeCTA from '@/components/home/HomeCTA';
import CertificateWidget from '@/components/ui/CertificateWidget';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <CapabilitiesOverview />
        <QualityStrip />
        <MissionVision />
        <GallerySection />
        <HomeCTA />
        <CertificateWidget />
      </main>
    </>
  );
}
