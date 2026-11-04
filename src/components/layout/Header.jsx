import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BookOpen,
  ChevronDown,
  Flame,
  GitCompare,
  Layers,
  LayoutGrid,
  Menu,
  Moon,
  Plus,
  Radio,
  RefreshCw,
  Rocket,
  Search,
  Sparkles,
  Sun,
  Tag,
  User,
  WandSparkles,
  X,
  Zap
} from 'lucide-react';

const discoverPrimary = [
  { to: '/tools', label: 'All AI tools', description: 'Search the complete directory', icon: Layers, tone: 'indigo' },
  { to: '/categories', label: 'Browse categories', description: 'Explore tools by capability', icon: LayoutGrid, tone: 'violet' },
  { to: '/tasks', label: 'Browse by task', description: 'Find tools for a specific job', icon: Zap, tone: 'cyan' }
];

const discoverQuick = [
  { to: '/free-ai-tools', label: 'Free tools', icon: Tag },
  { to: '/trending', label: 'Trending', icon: Flame },
  { to: '/new', label: 'New releases', icon: Rocket },
  { to: '/launches', label: 'AI launches', icon: Radio }
];

const compareLinks = [
  { to: '/compare', label: 'Compare hub', description: 'Side-by-side features and pricing', icon: GitCompare, tone: 'indigo' },
  { to: '/alternatives', label: 'Tool alternatives', description: 'Find a better fit for your needs', icon: RefreshCw, tone: 'cyan' }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light');
  const scrollFrame = useRef(null);
  const scrolledRef = useRef(false);
  const location = useLocation();

  const isDiscoverActive = ['/tools', '/categories', '/category', '/tasks', '/task', '/free-ai-tools', '/trending', '/new', '/launches'].some(path => location.pathname.startsWith(path));
  const isCompareActive = location.pathname.startsWith('/compare') || location.pathname.startsWith('/alternative');

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem('ai-directory-theme', nextTheme);
  };

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenMenu(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollFrame.current) return;
      scrollFrame.current = window.requestAnimationFrame(() => {
        const nextScrolled = window.scrollY > 18;
        if (nextScrolled !== scrolledRef.current) {
          scrolledRef.current = nextScrolled;
          setScrolled(nextScrolled);
        }
        scrollFrame.current = null;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollFrame.current) window.cancelAnimationFrame(scrollFrame.current);
    };
  }, []);

  const menuButton = (name, label, active) => (
    <button
      type="button"
      className={`premium-nav-button${active ? ' is-active' : ''}${openMenu === name ? ' is-open' : ''}`}
      aria-expanded={openMenu === name}
      aria-controls={`${name}-menu`}
      onClick={() => setOpenMenu(openMenu === name ? null : name)}
    >
      {label}
      <ChevronDown size={14} />
    </button>
  );

  return (
    <header className={`premium-site-header header-variant-a${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container premium-header-inner">
        <Link to="/" className="premium-brand" aria-label="AI Directory home">
          <span className="premium-brand-mark"><Sparkles size={20} /></span>
          <span className="premium-brand-copy">
            <strong>AI<span>Directory</span></strong>
            <small>Independent AI reviews</small>
          </span>
        </Link>

        <nav className="premium-desktop-nav" aria-label="Primary navigation">
          <div
            className="premium-nav-group"
            onMouseEnter={() => setOpenMenu('discover')}
            onMouseLeave={() => setOpenMenu(null)}
            onFocus={() => setOpenMenu('discover')}
          >
            {menuButton('discover', 'Discover', isDiscoverActive)}
            {openMenu === 'discover' && (
              <div id="discover-menu" className="premium-nav-dropdown premium-discover-menu">
                <div className="premium-menu-heading">
                  <span>Explore AI software</span>
                  <small>Start with the way you want to browse</small>
                </div>
                <div className="premium-menu-primary">
                  {discoverPrimary.map(item => <MenuCard item={item} key={item.to} />)}
                </div>
                <div className="premium-menu-quick">
                  {discoverQuick.map(({ to, label, icon: Icon }) => (
                    <Link to={to} key={to}><Icon size={14} /><span>{label}</span></Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div
            className="premium-nav-group"
            onMouseEnter={() => setOpenMenu('compare')}
            onMouseLeave={() => setOpenMenu(null)}
            onFocus={() => setOpenMenu('compare')}
          >
            {menuButton('compare', 'Compare', isCompareActive)}
            {openMenu === 'compare' && (
              <div id="compare-menu" className="premium-nav-dropdown premium-compare-menu">
                <div className="premium-menu-heading">
                  <span>Make a confident choice</span>
                  <small>Compare products before you commit</small>
                </div>
                <div className="premium-menu-primary">
                  {compareLinks.map(item => <MenuCard item={item} key={item.to} />)}
                </div>
                <Link to="/reviews" className="premium-menu-editorial">
                  <BookOpen size={16} />
                  <span><strong>Expert reviews</strong><small>Read practical, independent buying guides</small></span>
                </Link>
              </div>
            )}
          </div>

          <Link to="/ai-finder" className={`premium-finder-link${location.pathname === '/ai-finder' ? ' is-active' : ''}`}>
            <WandSparkles size={15} /> AI Finder
          </Link>
          <Link to="/deals" className={`premium-nav-link${location.pathname === '/deals' ? ' is-active' : ''}`}>Deals</Link>
          <Link to="/blog" className={`premium-nav-link${location.pathname.startsWith('/blog') ? ' is-active' : ''}`}>Guides</Link>
        </nav>

        <div className="premium-header-actions">
          <Link to="/search" className="premium-search-link" aria-label="Search AI tools">
            <Search size={17} /><span>Search</span>
          </Link>
          <button type="button" className="premium-theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} title={`Use ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <Link to="/login" className="premium-login-link"><User size={16} /><span>Login</span></Link>
          <Link to="/submit" className="premium-submit-link"><Plus size={16} /><span>Submit tool</span></Link>
          <button type="button" className="premium-mobile-toggle" onClick={() => setMobileMenuOpen(value => !value)} aria-expanded={mobileMenuOpen} aria-label="Toggle navigation menu">
            {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="premium-mobile-menu">
          <div className="premium-mobile-menu-inner">
            <div className="premium-mobile-search-row">
              <Link to="/search"><Search size={17} />Search AI tools</Link>
              <button type="button" onClick={toggleTheme}>{theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}{theme === 'dark' ? 'Light mode' : 'Dark mode'}</button>
            </div>
            <div className="premium-mobile-columns">
              <div>
                <span>Discover</span>
                <Link to="/tools">All AI tools</Link>
                <Link to="/categories">Categories</Link>
                <Link to="/tasks">Tasks & use cases</Link>
                <Link to="/free-ai-tools">Free AI tools</Link>
                <Link to="/launches">New launches</Link>
              </div>
              <div>
                <span>Choose</span>
                <Link to="/compare">Compare tools</Link>
                <Link to="/alternatives">Alternatives</Link>
                <Link to="/ai-finder">AI Finder</Link>
                <Link to="/deals">AI deals</Link>
                <Link to="/reviews">Expert reviews</Link>
                <Link to="/blog">Guides & insights</Link>
              </div>
            </div>
            <div className="premium-mobile-actions">
              <Link to="/login"><User size={16} />Login</Link>
              <Link to="/submit"><Plus size={16} />Submit your tool</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function MenuCard({ item }) {
  const Icon = item.icon;
  return (
    <Link to={item.to} className="premium-menu-card">
      <span className={`premium-menu-icon is-${item.tone}`}><Icon size={17} /></span>
      <span><strong>{item.label}</strong><small>{item.description}</small></span>
      <ChevronDown className="premium-menu-arrow" size={14} />
    </Link>
  );
}
