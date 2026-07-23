'use client';

import { useState, useEffect, FC } from 'react';
import { usePathname } from 'next/navigation';
import NavLink from '@/components/ui/NavLink';
import { useLanguage } from '@/i18n/LanguageContext';
import './Navbar.css';

const NAV_LINKS = [
  { labelKey: 'about', href: '/about' },
  { 
    labelKey: 'capabilities', 
    href: '/capabilities',
    subLinks: [
      { labelKey: 'dieCasting', href: '/capabilities?id=die-casting' },
      { labelKey: 'cncMachining', href: '/capabilities?id=cnc-machining' },
      { labelKey: 'powderCoating', href: '/capabilities?id=powder-coating' },
      { labelKey: 'subAssembly', href: '/capabilities?id=sub-assembly' },
      { labelKey: 'qualityInspection', href: '/capabilities?id=quality-systems' }
    ]
  },
  { 
    labelKey: 'products', 
    href: '/products',
    subLinks: [
      { labelKey: 'eyeletAssembly', href: '/products#eyelet-assembly' },
      { labelKey: 'springSeatAdjuster', href: '/products#spring-seat-adjuster' },
      { labelKey: 'outerTube', href: '/products#outer-tube' }
    ]
  },
  { labelKey: 'quality', href: '/quality' },
  { 
    labelKey: 'careers', 
    href: '#',
    subLinks: [
      { labelKey: 'jobVacancies', href: '/careers' },
      { labelKey: 'internships', href: '/internships' }
    ]
  },
  { labelKey: 'contact', href: '/contact' },
];

const LANGUAGES = [
  { code: 'EN', name: 'English', flag: 'gb' },
  { code: 'JP', name: 'Japanese', flag: 'jp' },
  { code: 'ES', name: 'Spanish', flag: 'es' },
  { code: 'DE', name: 'German', flag: 'de' },
  { code: 'IL', name: 'Hebrew', flag: 'il' },
  { code: 'RU', name: 'Russian', flag: 'ru' },
  { code: 'FR', name: 'French', flag: 'fr' },
  { code: 'PL', name: 'Polish', flag: 'pl' }
];

interface NavbarProps {
  theme?: string;
}

const Navbar: FC<NavbarProps> = ({ theme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 72);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and dropdowns on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setLangDropdownOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''} ${theme === 'light' ? 'nav--light' : ''} ${mobileMenuOpen ? 'nav--mobile-open' : ''}`}>

      <NavLink href="/" className="nav__brand">
        <img src="/images/hebron-logo_v2.png" alt="Hebron Automotive" className="nav__logo" />
      </NavLink>

      <nav className={`nav__links ${mobileMenuOpen ? 'nav__links--open' : ''}`}>
        {NAV_LINKS.map((link) => {
          if (link.subLinks) {
            return (
              <div 
                key={link.labelKey} 
                className="nav__dropdown-container"
                onMouseEnter={() => setActiveDropdown(link.labelKey)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.href === '#' ? (
                  <span className={`nav__dropdown-trigger ${pathname.startsWith('/careers') || pathname.startsWith('/internships') ? 'active' : ''}`}>
                    {t('nav', link.labelKey)}
                  </span>
                ) : (
                  <NavLink 
                    href={link.href}
                    className={`nav__dropdown-trigger ${pathname.startsWith(link.href) && link.href !== '#' ? 'active' : ''}`}
                  >
                    {t('nav', link.labelKey)}
                  </NavLink>
                )}
                <div className={`nav__dropdown-menu ${activeDropdown === link.labelKey ? 'is-active' : ''}`}>
                  {link.subLinks.map(sub => (
                    <NavLink key={sub.labelKey} href={sub.href} className="nav__dropdown-item" onClick={() => setMobileMenuOpen(false)}>
                      {t('nav', sub.labelKey)}
                    </NavLink>
                  ))}
                </div>
              </div>
            );
          }
          
          const isActive = pathname === link.href;
          return (
            <NavLink 
              key={link.labelKey}
              href={link.href} 
              className={isActive ? 'active' : ''}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav', link.labelKey)}
            </NavLink>
          );
        })}
      </nav>

      <div className="nav__right">
        <div className="nav__lang-switcher" style={{ display: 'flex', gap: '12px', alignItems: 'center', marginLeft: '16px', marginRight: '16px' }}>
          {LANGUAGES.map(lang => (
            <button 
              key={lang.code} 
              className="nav__lang-btn-inline"
              onClick={() => setLanguage(lang.code as any)}
              style={{ 
                background: 'none', border: 'none', padding: 0, cursor: 'pointer', 
                opacity: language === lang.code ? 1 : 0.5,
                transition: 'opacity 0.2s',
                display: 'flex', alignItems: 'center', gap: '4px',
                fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600, color: '#0a1930'
              }}
              title={lang.name}
            >
              <img src={`https://flagcdn.com/w20/${lang.flag}.png`} alt={lang.name} style={{ width: 16, borderRadius: 2 }} />
              <span>{lang.code}</span>
            </button>
          ))}
        </div>

        <NavLink href="/contact" className="nav__cta">
          Enquiry
          <span className="nav__cta-arrow">→</span>
        </NavLink>

        <button 
          className={`nav__mobile-toggle ${mobileMenuOpen ? 'is-open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

    </header>
  );
};

export default Navbar;
