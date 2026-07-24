import React from 'react';
import Navbar from '@/components/layout/Navbar';
import './products.css';

const PRODUCTS_DATA = [
  {
    slug: 'eyelet-assembly',
    title: 'Eyelet Assembly',
    subtitle: 'PDC PARTS — EYELET ASSEMBLY',
    image: '/images/product-eyelet-assembly.png',
  },
  {
    slug: 'spring-seat-adjuster',
    title: 'Spring Seat Adjuster',
    subtitle: 'PDC PARTS — SPRING SEAT ADJUSTER',
    image: '/images/product-spring-seat-adjuster.png',
  },
  {
    slug: 'outer-tube',
    title: 'Outer Tube LH & RH',
    subtitle: 'GDC PARTS — FULL FINISHED WITH POWDER COATED PART',
    image: '/images/product-outer-tube.png',
  },
  {
    slug: 'shox-parts',
    title: 'Suspension & Shox Parts',
    subtitle: 'SHOCK ABSORBER ASSEMBLY COMPONENTS',
    image: '/images/product-suspension-shox.png',
  }
];

const MACHINING_DATA = [
  {
    slug: 'machining-part-1',
    title: 'Machined Component',
    subtitle: 'PRECISION MACHINED PART',
    image: '/images/machining-part-1.png',
  },
  {
    slug: 'machining-part-2',
    title: 'Machined Component',
    subtitle: 'PRECISION MACHINED PART',
    image: '/images/machining-part-2.png',
  },
  {
    slug: 'machining-part-3',
    title: 'Die Cast Component',
    subtitle: 'DIE CASTING PART',
    image: '/images/machining-part-3.png',
  },
  {
    slug: 'machining-part-4',
    title: 'Die Cast Component',
    subtitle: 'DIE CASTING PART',
    image: '/images/machining-part-4.png',
  }
];

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      
      <section className="products-hero">
        <img 
          src="/images/process-capabilities-bg.png" 
          alt="Process Capabilities Background" 
          className="products-hero__bg" 
        />
        <div className="products-hero__overlay"></div>
        
        <div className="container products-hero__content">
          <div className="eyebrow hero-eyebrow">
            MANUFACTURING PRODUCTS
          </div>
          <h1 className="hero-serif-title">Our Products</h1>
        </div>
      </section>

      <main id="main-content" style={{ backgroundColor: '#F8FAFC', padding: '64px 0 120px 0' }}>
        <div className="container">
          {/* Section 1: Machining Parts and Die Casting */}
          <div style={{ marginBottom: '40px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 700, color: 'var(--brand-navy-deep)', display: 'inline-block', borderBottom: '3px solid var(--brand-cyan)', paddingBottom: '12px' }}>MACHINING PARTS AND DIE CASTING</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '32px', marginBottom: '80px' }}>
            {MACHINING_DATA.map((product) => (
              <div 
                key={product.slug} 
                id={product.slug} 
                className="bento-card" 
                style={{ flexDirection: 'column', borderRadius: '16px', overflow: 'hidden', backgroundColor: '#ffffff', boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}
              >
                <div style={{ width: '100%', backgroundColor: '#ffffff', padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid #f1f5f9' }}>
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    style={{ width: '100%', height: 'auto', maxHeight: '420px', objectFit: 'contain' }} 
                  />
                </div>
                <div style={{ padding: '24px 28px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--brand-cyan)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {product.subtitle}
                  </span>
                  <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--brand-navy-deep)', marginTop: '6px' }}>
                    {product.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>

          {/* Section 2: Assembled and Finished Parts */}
          <div style={{ marginBottom: '40px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 700, color: 'var(--brand-navy-deep)', display: 'inline-block', borderBottom: '3px solid var(--brand-cyan)', paddingBottom: '12px' }}>ASSEMBLED AND FINISHED PARTS</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '32px' }}>
            {PRODUCTS_DATA.map((product) => (
              <div 
                key={product.slug} 
                id={product.slug} 
                className="bento-card" 
                style={{ flexDirection: 'column', borderRadius: '16px', overflow: 'hidden', backgroundColor: '#ffffff', boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}
              >
                <div style={{ width: '100%', backgroundColor: '#ffffff', padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid #f1f5f9' }}>
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    style={{ width: '100%', height: 'auto', maxHeight: '420px', objectFit: 'contain' }} 
                  />
                </div>
                <div style={{ padding: '24px 28px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--brand-cyan)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {product.subtitle}
                  </span>
                  <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--brand-navy-deep)', marginTop: '6px' }}>
                    {product.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
