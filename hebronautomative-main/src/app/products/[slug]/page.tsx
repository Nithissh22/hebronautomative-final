import React from 'react';
import Navbar from '@/components/layout/Navbar';
import NavLink from '@/components/ui/NavLink';
import './product-detail.css';

// Mock DB matching the approved JSON hardcoded MVP structure
const PRODUCTS_DB: Record<string, any> = {
  'eyelet-assy': {
    name: 'Eyelet Assembly',
    app: 'Front Suspension',
    desc: 'Critical load-bearing component for passenger vehicle front suspension assemblies. Engineered for maximum fatigue resistance.',
    specs: {
      Material: 'ADC12 Aluminium',
      Weight: '248g ± 2g',
      Tolerance: '±0.01mm',
      Surface: 'Ra 1.6 μm',
      'Tensile Strength': '320 MPa'
    },
    route: ['High Pressure Die Casting (400T)', 'VMC Machining (4-Axis)', 'Ultrasonic Cleaning', 'Assembly & Inspection'],
    related: ['bracket-susp', 'housing-valve']
  },
  // Add fallback for others for simplicity in this MVP
};

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const prod = PRODUCTS_DB[params.slug] || PRODUCTS_DB['eyelet-assy'];

  return (
    <>
      <Navbar />
      <main id="main-content" className="page-padding">
        <div className="container">
          
          <NavLink href="/products" className="back-link eyebrow">
            &larr; BACK TO PORTFOLIO
          </NavLink>

          <div className="product-detail-grid">
            
            {/* Left: Photos */}
            <div className="product-visuals">
              <div className="product-main-photo">
                <span className="eyebrow">[HIGH-RES STATIC PHOTO: {prod.name.toUpperCase()}]</span>
              </div>
              <div className="product-thumbnails">
                <div className="thumb"><span className="eyebrow">FRONT</span></div>
                <div className="thumb"><span className="eyebrow">SIDE</span></div>
                <div className="thumb"><span className="eyebrow">ISO</span></div>
              </div>
            </div>

            {/* Right: Data */}
            <div className="product-data">
              <h1 className="section-heading product-title">{prod.name}</h1>
              <p className="eyebrow product-app">{prod.app}</p>
              
              <p className="product-desc">{prod.desc}</p>

              <div className="data-section">
                <h3 className="eyebrow section-header">Technical Specifications</h3>
                <table className="data-table">
                  <tbody>
                    {Object.entries(prod.specs).map(([k, v]) => (
                      <tr key={k}>
                        <th>{k}</th>
                        <td className="tabular-data">{v as React.ReactNode}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="data-section">
                <h3 className="eyebrow section-header">Manufacturing Route</h3>
                <ol className="route-list">
                  {prod.route.map((step: string, i: number) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>

              <div className="product-actions">
                <button className="btn-primary">Download Technical Drawing (PDF)</button>
                <NavLink href="/contact" className="btn-outline">Request Quote</NavLink>
              </div>

            </div>
          </div>

        </div>
      </main>
    </>
  );
}
