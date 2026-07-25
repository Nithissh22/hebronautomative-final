'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import { useTranslation } from '@/i18n/LanguageContext';
import './contact.css';

const Icons = {
  Location: () => <svg className="contact-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  Phone: () => <svg className="contact-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
  Mail: () => <svg className="contact-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  Globe: () => <svg className="contact-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
  Check: () => <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
};

export default function ContactPage() {
  const t = useTranslation('contact');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "e0da2c62-eb99-4d99-a692-6a7271a314c0");
    formData.append("subject", "New Enquiry from Hebron Automotive Website");
    formData.append("from_name", "Hebron Automotive Website");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      
      if (response.ok) {
        setIsSuccess(true);
        e.currentTarget.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("Something went wrong. Please try again or email us directly.");
      }
    } catch (error) {
      alert("Error submitting form. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar theme="dark" />

      {/* ── HERO STRIP ── */}
      <section className="contact-hero">
        <div className="contact-hero__content">
          <span className="contact-label">{t('heroLabel')}</span>
          <h1 className="contact-hero__heading">{t('heroTitle')}</h1>
          <p className="contact-hero__subtitle" style={{ fontWeight: 600, color: 'var(--brand-cyan)', marginBottom: '8px' }}>
            {t('heroTagline')}
          </p>
          <p className="contact-hero__subtitle">
            {t('heroSubtitle')}
          </p>
        </div>
      </section>

      <main className="contact-main">
        <div className="contact-grid">

          {/* ── LEFT: CONTACT INFO ── */}
          <div className="contact-info-panel">
            <span className="info-eyebrow">{t('getInTouch')}</span>
            <h2 className="info-title">Hebron Automotive Products Pvt Ltd</h2>

            <div className="contact-icon-row">
              <Icons.Location />
              <div className="contact-details">
                <p className="highlight">{t('factoryLocation')}</p>
                <p>Hebron Automotive Products Pvt Ltd</p>
                <p>No. 3/250, Bharathiyar Nagar</p>
                <p>Avalapalli Road, Hosur - 635 109</p>
                <p>Krishnagiri Dist., Tamil Nadu, India</p>
                <p className="sub" style={{ marginTop: '8px' }}>GSTIN: 33AAECH6875K1Z6</p>
              </div>
            </div>

            <hr className="contact-divider" />

            <div className="contact-icon-row">
              <Icons.Phone />
              <div className="contact-details">
                <p className="highlight">+91 63823 97202</p>
              </div>
            </div>

            <hr className="contact-divider" />

            <div className="contact-icon-row">
              <Icons.Mail />
              <div className="contact-details">
                <p><a href="mailto:director@hebronautomotive.com" style={{ textDecoration: 'none', color: 'inherit' }}>director@hebronautomotive.com</a></p>
              </div>
            </div>

            <hr className="contact-divider" />

            <span className="info-eyebrow" style={{ marginBottom: '8px', display: 'block' }}>{t('businessHours')}</span>
            <div className="contact-details">
              <p>{t('businessHoursVal')}</p>
            </div>

            <div className="map-container" style={{ marginTop: '48px' }}>
              <iframe
                src="https://maps.google.com/maps?q=Hebron+Automotive+Products+Pvt+Ltd,+Hosur,+Tamil+Nadu&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* ── RIGHT: RFQ FORM ── */}
          <div className="contact-rfq-panel">
            <span className="info-eyebrow">{t('requestQuotation')}</span>
            <h2 className="info-title" style={{ marginTop: '8px', marginBottom: '32px' }}>{t('sendRequirements')}</h2>

            <form className="rfq-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">{t('companyName')}</label>
                  <input type="text" name="Company_Name" className="form-input" required />
                </div>
                <div className="form-group">
                  <label className="form-label">{t('contactName')}</label>
                  <input type="text" name="Contact_Name" className="form-input" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">{t('emailAddress')}</label>
                  <input type="email" name="Email_Address" className="form-input" required />
                </div>
                <div className="form-group">
                  <label className="form-label">{t('phone')}</label>
                  <input type="tel" name="Phone_Number" className="form-input" required />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">{t('componentDesc')}</label>
                <textarea name="Component_Description" className="form-input" style={{ height: '120px', resize: 'vertical' }} required></textarea>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">{t('annualVolume')}</label>
                  <input type="number" name="Annual_Volume" className="form-input" required />
                </div>
                <div className="form-group">
                  <label className="form-label">{t('toleranceReq')}</label>
                  <input type="text" name="Tolerance_Required" className="form-input" placeholder={t('tolerancePlaceholder')} />
                </div>
              </div>

              <div className="trust-signals">
                <div className="trust-signal">
                  <Icons.Check /> {t('trust1')}
                </div>
                <div className="trust-signal">
                  <Icons.Check /> {t('trust2')}
                </div>
                <div className="trust-signal">
                  <Icons.Check /> {t('trust3')}
                </div>
              </div>

              <button type="submit" className="rfq-submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : isSuccess ? 'Sent Successfully!' : t('submitBtn')}
              </button>
            </form>
          </div>

        </div>

        {/* ── AFTER YOU SUBMIT ── */}
        <div className="post-submit-strip">
          <span className="info-eyebrow">{t('afterSubmit')}</span>
          <div className="timeline-grid">
            <div className="timeline-step-card">
              <div className="step-num-large">01</div>
              <div className="step-title">{t('step1Title')}</div>
              <div className="step-time">{t('step1Time')}</div>
            </div>
            <div className="timeline-step-card">
              <div className="step-num-large">02</div>
              <div className="step-title">{t('step2Title')}</div>
              <div className="step-time">{t('step2Time')}</div>
            </div>
            <div className="timeline-step-card">
              <div className="step-num-large">03</div>
              <div className="step-title">{t('step3Title')}</div>
              <div className="step-time">{t('step3Time')}</div>
            </div>
          </div>
        </div>

      </main>

    </>
  );
}
