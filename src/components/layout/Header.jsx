import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Sparkles, ChevronDown, PlusCircle, User, Menu, X, 
  Layers, GitCompare, Zap, Flame, Award, Tag, Rocket, 
  Search, ShieldCheck, ArrowRight, Sun, Moon
} from 'lucide-react';
import Button from '../common/Button';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [discoverDropdown, setDiscoverDropdown] = useState(false);
  const [compareDropdown, setCompareDropdown] = useState(false);
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light');
  const location = useLocation();

  const setActiveTheme = (nextTheme) => {
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem('ai-directory-theme', nextTheme);
  };

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDiscoverDropdown(false);
    setCompareDropdown(false);
  }, [location]);

  // Track scroll for sticky backdrop blur enhancement
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        width: '100%',
        background: scrolled ? 'rgba(9, 10, 15, 0.88)' : 'rgba(9, 10, 15, 0.65)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${scrolled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)'}`,
        transition: 'all 0.25s ease'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        
        {/* Brand Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', textDecoration: 'none' }}>
          <div
            className="brand-mark"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 16px rgba(99, 102, 241, 0.45)',
              color: '#ffffff'
            }}
          >
            <Sparkles size={20} />
          </div>
          <div>
            <span style={{ fontSize: '1.25rem', fontWeight: '800', fontFamily: 'Inter, sans-serif', color: '#ffffff', letterSpacing: '-0.02em', display: 'block', lineHeight: '1.1' }}>
              AI<span style={{ color: '#818cf8' }}>Directory</span>
            </span>
            <span style={{ fontSize: '0.6875rem', color: '#64748b', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Verified & Ranked
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }} className="desktop-nav">
          
          {/* Discover Dropdown */}
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setDiscoverDropdown(true)}
            onMouseLeave={() => setDiscoverDropdown(false)}
          >
            <button
              type="button"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                background: 'transparent',
                border: 'none',
                color: location.pathname.startsWith('/tool') || location.pathname.startsWith('/categor') ? '#0f172a' : '#334155',
                fontSize: '0.9375rem',
                fontWeight: '600',
                padding: '0.5rem 0.25rem',
                cursor: 'pointer'
              }}
            >
              <span>Discover</span>
              <ChevronDown size={14} style={{ transform: discoverDropdown ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} />
            </button>

            {discoverDropdown && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-1rem',
                  width: '280px',
                  background: 'rgba(15, 18, 28, 0.96)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '14px',
                  padding: '0.75rem',
                  boxShadow: '0 16px 36px -4px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(99, 102, 241, 0.15)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem'
                }}
              >
                <Link to="/tools" className="dropdown-item" style={dropdownItemStyle}>
                  <Layers size={16} style={{ color: '#818cf8' }} />
                  <div>
                    <div style={{ fontWeight: '600', color: '#f8fafc', fontSize: '0.875rem' }}>All AI Tools</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Search full searchable directory</div>
                  </div>
                </Link>

                <Link to="/categories" className="dropdown-item" style={dropdownItemStyle}>
                  <Sparkles size={16} style={{ color: '#c084fc' }} />
                  <div>
                    <div style={{ fontWeight: '600', color: '#f8fafc', fontSize: '0.875rem' }}>Categories</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Browse by software capability</div>
                  </div>
                </Link>

                <Link to="/tasks" className="dropdown-item" style={dropdownItemStyle}>
                  <Zap size={16} style={{ color: '#38bdf8' }} />
                  <div>
                    <div style={{ fontWeight: '600', color: '#f8fafc', fontSize: '0.875rem' }}>Tasks & Use Cases</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Jobs to be done solutions</div>
                  </div>
                </Link>

                <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.06)', margin: '0.25rem 0' }} />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.25rem' }}>
                  <Link to="/free-ai-tools" style={{ ...dropdownItemStyle, padding: '0.4rem 0.5rem', fontSize: '0.8125rem' }}>
                    <Tag size={13} style={{ color: '#34d399' }} />
                    <span style={{ color: '#cbd5e1' }}>Free Tools</span>
                  </Link>
                  <Link to="/trending" style={{ ...dropdownItemStyle, padding: '0.4rem 0.5rem', fontSize: '0.8125rem' }}>
                    <Flame size={13} style={{ color: '#fb923c' }} />
                    <span style={{ color: '#cbd5e1' }}>Trending</span>
                  </Link>
                  <Link to="/new" style={{ ...dropdownItemStyle, padding: '0.4rem 0.5rem', fontSize: '0.8125rem' }}>
                    <Rocket size={13} style={{ color: '#f472b6' }} />
                    <span style={{ color: '#cbd5e1' }}>New Tools</span>
                  </Link>
                  <Link to="/industries" style={{ ...dropdownItemStyle, padding: '0.4rem 0.5rem', fontSize: '0.8125rem' }}>
                    <Award size={13} style={{ color: '#fbbf24' }} />
                    <span style={{ color: '#cbd5e1' }}>Industries</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Compare Dropdown */}
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setCompareDropdown(true)}
            onMouseLeave={() => setCompareDropdown(false)}
          >
            <button
              type="button"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                background: 'transparent',
                border: 'none',
                color: location.pathname.startsWith('/compare') || location.pathname.startsWith('/alternative') ? '#0f172a' : '#334155',
                fontSize: '0.9375rem',
                fontWeight: '600',
                padding: '0.5rem 0.25rem',
                cursor: 'pointer'
              }}
            >
              <span>Compare</span>
              <ChevronDown size={14} style={{ transform: compareDropdown ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} />
            </button>

            {compareDropdown && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-1rem',
                  width: '260px',
                  background: 'rgba(15, 18, 28, 0.96)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '14px',
                  padding: '0.75rem',
                  boxShadow: '0 16px 36px -4px rgba(0, 0, 0, 0.7)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem'
                }}
              >
                <Link to="/compare" className="dropdown-item" style={dropdownItemStyle}>
                  <GitCompare size={16} style={{ color: '#818cf8' }} />
                  <div>
                    <div style={{ fontWeight: '600', color: '#f8fafc', fontSize: '0.875rem' }}>Compare Hub</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Side-by-side matrices</div>
                  </div>
                </Link>

                <Link to="/alternatives" className="dropdown-item" style={dropdownItemStyle}>
                  <Zap size={16} style={{ color: '#06b6d4' }} />
                  <div>
                    <div style={{ fontWeight: '600', color: '#f8fafc', fontSize: '0.875rem' }}>Alternatives Directory</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Find cheaper & better tools</div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Quick Nav Links */}
          <Link
            to="/ai-finder"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              color: '#38bdf8',
              fontSize: '0.9375rem',
              fontWeight: '600',
              padding: '0.35rem 0.65rem',
              borderRadius: '8px',
              background: 'rgba(6, 182, 212, 0.08)',
              border: '1px solid rgba(6, 182, 212, 0.2)'
            }}
          >
            <Sparkles size={14} />
            <span>AI Finder</span>
          </Link>

          <Link to="/deals" style={navLinkStyle(location.pathname === '/deals')}>
            Deals
          </Link>

          <Link to="/launches" style={navLinkStyle(location.pathname === '/launches')}>
            Launches
          </Link>

          <Link to="/reviews" style={navLinkStyle(location.pathname === '/reviews')}>
            Reviews
          </Link>
        </nav>

        {/* Action CTAs */}
        <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div className="theme-switch" aria-label="Website color theme">
            <button type="button" className={theme === 'light' ? 'active' : ''} onClick={() => setActiveTheme('light')} aria-label="Use light mode" title="Light mode">
              <Sun size={16} /><span>Light</span>
            </button>
            <button type="button" className={theme === 'dark' ? 'active' : ''} onClick={() => setActiveTheme('dark')} aria-label="Use dark mode" title="Dark mode">
              <Moon size={16} /><span>Dark</span>
            </button>
          </div>

          <Link
            to="/login"
            className="btn btn-ghost btn-sm"
            style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}
          >
            <User size={15} />
            <span>Login</span>
          </Link>

          <Button
            to="/submit"
            variant="primary"
            size="sm"
            icon={PlusCircle}
            iconPosition="left"
          >
            Submit Tool
          </Button>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            style={{
              display: 'none',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              padding: '0.5rem',
              color: '#f8fafc',
              cursor: 'pointer'
            }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: '#0a0c14',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}
        >
          <Link to="/tools" style={mobileNavLinkStyle}>Discover All AI Tools</Link>
          <Link to="/categories" style={mobileNavLinkStyle}>Categories</Link>
          <Link to="/tasks" style={mobileNavLinkStyle}>Tasks & Use Cases</Link>
          <Link to="/compare" style={mobileNavLinkStyle}>Compare Tools</Link>
          <Link to="/alternatives" style={mobileNavLinkStyle}>Tool Alternatives</Link>
          <Link to="/ai-finder" style={{ ...mobileNavLinkStyle, color: '#38bdf8' }}>AI Tool Finder</Link>
          <Link to="/deals" style={mobileNavLinkStyle}>AI Deals & Discounts</Link>
          <Link to="/launches" style={mobileNavLinkStyle}>New AI Launches</Link>
          <Link to="/reviews" style={mobileNavLinkStyle}>Editorial Reviews</Link>
          <Link to="/pricing" style={mobileNavLinkStyle}>Founder Pricing & Listing</Link>
          <div className="mobile-theme-switch">
            <span>Appearance</span>
            <div className="theme-switch">
              <button type="button" className={theme === 'light' ? 'active' : ''} onClick={() => setActiveTheme('light')}><Sun size={16} /> Light</button>
              <button type="button" className={theme === 'dark' ? 'active' : ''} onClick={() => setActiveTheme('dark')}><Moon size={16} /> Dark</button>
            </div>
          </div>
          <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.08)', margin: '0.5rem 0' }} />
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <Button to="/submit" variant="primary" style={{ flex: 1 }}>Submit Tool</Button>
            <Button to="/login" variant="secondary" style={{ flex: 1 }}>Login</Button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1100px) {
          .desktop-nav {
            display: none !important;
          }
          .header-actions > .theme-switch,
          .header-actions > .btn {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}

const dropdownItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  padding: '0.625rem 0.75rem',
  borderRadius: '8px',
  textDecoration: 'none',
  transition: 'background 0.15s ease'
};

const navLinkStyle = (active) => ({
  color: active ? '#0f172a' : '#334155',
  fontSize: '0.9375rem',
  fontWeight: '600',
  textDecoration: 'none',
  padding: '0.5rem 0.25rem',
  transition: 'color 0.15s ease'
});

const mobileNavLinkStyle = {
  color: '#f8fafc',
  fontSize: '1rem',
  fontWeight: '600',
  textDecoration: 'none',
  padding: '0.5rem 0'
};
