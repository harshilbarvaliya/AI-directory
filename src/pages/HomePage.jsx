import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight, BadgeCheck, BadgePercent, BriefcaseBusiness, Camera,
  CircleDollarSign,
  CircleHelp, ClipboardCheck, Code2,
  Gift, GraduationCap, LayoutGrid, Megaphone, Palette, Rocket,
  ShieldCheck, Sparkles, Users, WandSparkles
} from 'lucide-react';
import TaskCard from '../components/cards/TaskCard';
import Button from '../components/common/Button';
import SearchBar from '../components/common/SearchBar';
import { tools, categories, tasks, comparisons, deals } from '../data/mockData';

export default function HomePage() {
  const heroRef = useRef(null);
  const heroPointerFrame = useRef(null);
  const navigate = useNavigate();
  const popularTools = tools.slice(0, 8);
  const latestTools = tools.filter(tool => tool.new).slice(0, 4);
  const launchTools = tools.filter(tool => tool.new || tool.trending).slice(0, 3);
  const marqueeTools = tools.filter(tool => !['jasper', 'canva-magic-studio'].includes(tool.id));
  const populatedCategories = categories
    .map(category => ({ ...category, matches: tools.filter(tool => tool.categorySlug === category.slug).slice(0, 7) }))
    .filter(category => category.matches.length > 0);
  const roles = [
    { name: 'Software developers', description: 'Code generation, debugging and application development', label: 'Build better', color: '#6366f1', icon: Code2, query: 'coding' },
    { name: 'Marketers', description: 'SEO, paid campaigns, analytics and content marketing', label: 'Grow your reach', color: '#10b981', icon: Megaphone, query: 'marketing' },
    { name: 'Content creators', description: 'Writing, image, video and voice production', label: 'Create content', color: '#ec4899', icon: Palette, query: 'content' },
    { name: 'Startup founders', description: 'Market research, automation, customer support and growth', label: 'Scale smarter', color: '#f59e0b', icon: BriefcaseBusiness, query: 'productivity' },
    { name: 'Students & researchers', description: 'Literature review, source analysis and research synthesis', label: 'Research faster', color: '#0ea5e9', icon: GraduationCap, query: 'research' },
    { name: 'Teams & operations', description: 'Documentation, collaboration and repeatable business processes', label: 'Work efficiently', color: '#8b5cf6', icon: Users, query: 'automation' }
  ];
  const pricingOptions = [
    { id: 'free', title: 'Free', description: 'Use core features without a paid plan.', icon: Gift, color: '#0891b2', count: tools.filter(tool => tool.pricingType === 'Free').length },
    { id: 'freemium', title: 'Freemium', description: 'Start free, then upgrade as your needs grow.', icon: Sparkles, color: '#4f46e5', count: tools.filter(tool => tool.pricingType === 'Freemium').length },
    { id: 'paid', title: 'Paid', description: 'Premium software for professional and business use.', icon: CircleDollarSign, color: '#d97706', count: tools.filter(tool => tool.pricingType === 'Paid').length },
    { id: 'trial', title: 'Free trial', description: 'Test premium features before purchasing a plan.', icon: BadgePercent, color: '#db2777', count: tools.filter(tool => tool.freeTrial).length }
  ];

  useEffect(() => {
    const sections = document.querySelectorAll('.home-page.directory-home .directory-section');
    sections.forEach(section => section.classList.add('home-scroll-reveal'));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px' });
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const pointerQuery = window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)');
    if (!pointerQuery.matches) return undefined;
    const sections = document.querySelectorAll('.home-page.directory-home section:not(.interactive-hero)');
    const cleanups = [];
    const effectsObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle('effects-in-view', entry.isIntersecting);
      });
    }, { rootMargin: '260px 0px' });
    sections.forEach(section => {
      section.classList.add('section-jelly-zone');
      effectsObserver.observe(section);
      const field = document.createElement('div');
      field.className = 'section-clone-field';
      field.setAttribute('aria-hidden', 'true');
      for (let index = 1; index <= 5; index += 1) {
        const clone = document.createElement('span');
        clone.className = `section-clone section-clone-${index}`;
        field.appendChild(clone);
      }
      section.prepend(field);
      let pointerFrame = null;
      const move = event => {
        const clientX = event.clientX;
        const clientY = event.clientY;
        if (pointerFrame) window.cancelAnimationFrame(pointerFrame);
        pointerFrame = window.requestAnimationFrame(() => {
          const rect = section.getBoundingClientRect();
          section.style.setProperty('--section-mouse-x', `${clientX - rect.left}px`);
          section.style.setProperty('--section-mouse-y', `${clientY - rect.top}px`);
          section.classList.add('section-pointer-active');
          pointerFrame = null;
        });
      };
      const leave = () => {
        if (pointerFrame) {
          window.cancelAnimationFrame(pointerFrame);
          pointerFrame = null;
        }
        section.classList.remove('section-pointer-active');
      };
      section.addEventListener('pointermove', move, { passive: true });
      section.addEventListener('pointerleave', leave);
      cleanups.push(() => {
        section.removeEventListener('pointermove', move);
        section.removeEventListener('pointerleave', leave);
        field.remove();
      });
    });
    return () => {
      effectsObserver.disconnect();
      cleanups.forEach(cleanup => cleanup());
    };
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return undefined;
    const setInitialPointerPosition = () => {
      hero.style.setProperty('--mouse-x', `${hero.clientWidth / 2}px`);
      hero.style.setProperty('--mouse-y', `${hero.clientHeight * 0.45}px`);
    };
    setInitialPointerPosition();
    window.addEventListener('resize', setInitialPointerPosition, { passive: true });
    return () => {
      window.removeEventListener('resize', setInitialPointerPosition);
      if (heroPointerFrame.current) window.cancelAnimationFrame(heroPointerFrame.current);
    };
  }, []);

  const moveHeroEffect = event => {
    const hero = heroRef.current;
    if (!hero) return;
    const clientX = event.clientX;
    const clientY = event.clientY;
    if (heroPointerFrame.current) window.cancelAnimationFrame(heroPointerFrame.current);
    heroPointerFrame.current = window.requestAnimationFrame(() => {
      const rect = hero.getBoundingClientRect();
      const mouseX = clientX - rect.left;
      const mouseY = clientY - rect.top;
      hero.style.setProperty('--mouse-x', `${mouseX}px`);
      hero.style.setProperty('--mouse-y', `${mouseY}px`);
      hero.style.setProperty('--tilt-x', `${(mouseX / rect.width - 0.5) * 6}px`);
      hero.style.setProperty('--tilt-y', `${(mouseY / rect.height - 0.5) * 4}px`);
      heroPointerFrame.current = null;
    });
  };

  const pulseHero = () => {
    const hero = heroRef.current;
    if (!hero) return;
    hero.classList.remove('hero-clicked');
    void hero.offsetWidth;
    hero.classList.add('hero-clicked');
  };

  return (
    <div className="home-page directory-home">
      <section className="home-hero interactive-hero" ref={heroRef} onMouseMove={moveHeroEffect} onClick={pulseHero}>
        <div className="hero-clone-field" aria-hidden="true">
          <span className="hero-clone clone-one" />
          <span className="hero-clone clone-two" />
          <span className="hero-clone clone-three" />
          <span className="hero-clone clone-four" />
          <span className="hero-clone clone-five" />
        </div>
        <div className="hero-fluid-field" aria-hidden="true">
          <span className="hero-fluid-blob fluid-blob-one" />
          <span className="hero-fluid-blob fluid-blob-two" />
          <span className="hero-fluid-blob fluid-blob-three" />
        </div>
        <div className="hero-mouse-light" />
        <div className="hero-particle hero-particle-one" />
        <div className="hero-particle hero-particle-two" />
        <div className="hero-particle hero-particle-three" />
        <div className="container home-hero-inner">
          <h1><span className="hero-title-main">Find and Compare <span>AI Tools</span></span><span className="hero-accent-line">for Work and Business</span></h1>
          <p>Discover AI software for writing, coding, marketing, design and research. Compare features, pricing, free plans and practical limitations before you choose.</p>
          <SearchBar className="home-hero-search" placeholder="Search AI tools by name, task or category..." showChips={false} />
          <div className="hero-simple-actions">
            <Button to="/tools" variant="primary" size="lg" icon={ArrowRight} iconPosition="right">Browse AI tools</Button>
          </div>
        </div>
      </section>

      <section className="home-tool-marquee" aria-label="Popular AI software available in the directory">
        <div className="home-tool-marquee-viewport">
          <div className="home-tool-marquee-track">
            <div className="home-tool-marquee-group">
              {marqueeTools.map(tool => (
                <Link to={`/tool/${tool.slug}`} key={tool.id}>
                  <img src={tool.logo} alt="" loading="lazy" decoding="async" />
                  <span>{tool.name}</span>
                </Link>
              ))}
            </div>
            <div className="home-tool-marquee-group" aria-hidden="true">
              {marqueeTools.map(tool => (
                <span className="home-tool-marquee-copy" key={`copy-${tool.id}`}>
                  <img src={tool.logo} alt="" loading="lazy" decoding="async" />
                  <span>{tool.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section directory-section directory-section-alt home-category-explorer-section">
        <div className="container">
          <div className="home-category-explorer-head">
            <span>Browse AI software by category</span>
            <h2>Explore AI tools for every workflow</h2>
            <p>Compare software for coding, writing, research, design, video and everyday business productivity.</p>
          </div>
          <div className="home-category-explorer home-category-explorer-populated">
            {populatedCategories.map(category => {
              const matches = category.matches;
              return (
                <article className="home-category-panel" key={category.id} style={{ '--category-color': category.color }}>
                  <header>
                    <span><LayoutGrid size={15} /></span>
                    <h3>{category.name}</h3>
                    <small>{matches.length} {matches.length === 1 ? 'tool' : 'tools'}</small>
                  </header>
                  <div className="home-category-panel-accent" />
                  <div className={`home-category-panel-list ${matches.length ? '' : 'is-empty'}`}>
                    {matches.length ? matches.map(tool => (
                      <Link to={`/tool/${tool.slug}`} key={tool.id}>
                        <img src={tool.logo} alt="" loading="lazy" decoding="async" />
                        <span>{tool.name}</span>
                        <ArrowRight size={12} />
                      </Link>
                    )) : <div><strong>No published tools yet</strong><span>This category is ready for future listings.</span></div>}
                  </div>
                  <Link className="home-category-panel-action" to={`/category/${category.slug}`}>View category <ArrowRight size={14} /></Link>
                </article>
              );
            })}
          </div>
          <div className="home-category-all"><Button to="/categories" variant="primary" icon={ArrowRight} iconPosition="right">View all categories</Button></div>
        </div>
      </section>

      <section className="section directory-section popular-tools-section">
        <div className="container">
          <div className="popular-tools-head">
            <div>
              <span>Popular with professionals</span>
              <h2>Popular AI tools for work</h2>
              <p>Explore widely used AI software for professional work, creative projects and growing businesses.</p>
            </div>
            <Link to="/tools">View all <ArrowRight size={17} /></Link>
          </div>
          <div className="popular-tools-grid">
            {popularTools.map(tool => (
              <Link className="popular-tool-card" to={`/tool/${tool.slug}`} key={tool.id}>
                <div className="popular-tool-preview">
                  <img
                    src={getWebsitePreview(tool.websiteUrl)}
                    alt={`${tool.name} website preview`}
                    loading="lazy"
                    decoding="async"
                    onError={event => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = createToolFallback(tool.name, true);
                    }}
                  />
                </div>
                <div className="popular-tool-identity">
                  <img
                    src={tool.logo}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    onError={event => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = createToolFallback(tool.name);
                    }}
                  />
                  <div><h3>{tool.name}{tool.verified && <BadgeCheck size={15} aria-label="Verified" />}</h3><span>{tool.category}</span></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section directory-section home-pricing-browse-section" id="pricing">
        <div className="container">
          <SectionHeader label="Plans and pricing" title="Find AI tools for your budget" description="Compare free, freemium, paid and trial options before choosing a software plan." to="/tools" action="View all tools" />
          <div className="home-pricing-browse-grid">
            {pricingOptions.map(option => {
              const Icon = option.icon;
              return (
                <button
                  className="home-pricing-browse-card"
                  style={{ '--pricing-color': option.color }}
                  type="button"
                  onClick={() => navigate(`/search?pricing=${encodeURIComponent(option.id)}`)}
                  aria-label={`Search ${option.title} AI tools`}
                  key={option.id}
                >
                  <span className="home-pricing-browse-icon"><Icon size={22} /></span>
                  <span className="home-pricing-browse-copy"><strong>{option.title}</strong><small>{option.description}</small></span>
                  <span className="home-pricing-browse-count">{option.count} tools</span>
                  <ArrowRight size={17} />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section directory-section directory-section-alt" id="professions">
        <div className="container">
          <SectionHeader label="Built for your role" title="AI tools for professionals and teams" description="Find practical AI software for developers, marketers, creators, founders, researchers and operations teams." to="/ai-finder" action="Get tailored matches" />
          <div className="role-grid">
            {roles.map((role, index) => {
              const Icon = role.icon;
              return (
                <button
                  className="role-card"
                  style={{ '--role-color': role.color }}
                  type="button"
                  onClick={() => navigate(`/search?q=${encodeURIComponent(role.query)}`)}
                  aria-label={`Search AI tools for ${role.name}`}
                  key={role.name}
                >
                  <span className="role-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="role-icon"><Icon size={21} /></span>
                  <span className="role-content"><strong>{role.name}</strong><small>{role.description}</small></span>
                  <span className="role-cta">{role.label} <ArrowRight size={15} /></span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section directory-section home-tasks-section">
        <div className="container home-finder-panel">
          <div className="home-finder-copy">
            <span className="directory-eyebrow"><WandSparkles size={14} /> AI Tool Finder</span>
            <h2>Build the right AI software stack in minutes.</h2>
            <p>Choose your role and budget to get a focused shortlist of tools for your day-to-day work and business goals.</p>
            <Button to="/ai-finder" variant="primary" size="lg" icon={Sparkles} iconPosition="left">Find tools for me</Button>
          </div>
          <div className="home-finder-preview" aria-label="AI Finder preview">
            <div><span>1</span><p><strong>Select your role</strong><small>Developer, marketer, creator, founder or researcher</small></p></div>
            <div><span>2</span><p><strong>Choose your budget</strong><small>Free, freemium, trial or paid software</small></p></div>
            <div><span>3</span><p><strong>Compare your matches</strong><small>Review tools aligned with your workflow</small></p></div>
          </div>
        </div>
      </section>

      <section className="section directory-section directory-section-alt home-guides-section">
        <div className="container">
          <SectionHeader label="Make a confident choice" title="Independent guides and AI tool comparisons" description="Understand features, pricing, privacy considerations and workflow fit before choosing software." to="/reviews" action="View all guides" />
          <div className="home-guide-grid">
            <Link to="/reviews" className="home-guide-card">
              <div className="home-guide-card-top"><i><ClipboardCheck size={23} /></i><small>01</small></div>
              <span>Buying guide</span><h3>How to choose AI software for work</h3><p>Use a practical checklist covering output quality, privacy, pricing, support and workflow fit.</p><b>Read the guide <ArrowRight size={16} /></b>
            </Link>
            <Link to="/compare" className="home-guide-card">
              <div className="home-guide-card-top"><i><LayoutGrid size={23} /></i><small>02</small></div>
              <span>Comparison</span><h3>Compare features, pricing and limitations</h3><p>Review leading tools side by side and look beyond product marketing claims.</p><b>Explore comparisons <ArrowRight size={16} /></b>
            </Link>
            <Link to="/free-ai-tools" className="home-guide-card">
              <div className="home-guide-card-top"><i><Sparkles size={23} /></i><small>03</small></div>
              <span>Free tools</span><h3>Find AI software with a free plan</h3><p>Browse free and freemium options for development, content, research, marketing and design.</p><b>Browse free tools <ArrowRight size={16} /></b>
            </Link>
          </div>
        </div>
      </section>

      <section className="section directory-section home-tasks-section">
        <div className="container">
          <SectionHeader label="Start with your goal" title="What do you want to achieve?" description="Choose a task to compare AI tools designed for that type of work." to="/tasks" action="View all tasks" />
          <div className="grid-tasks home-task-grid">
            {tasks.map(task => <TaskCard key={task.id} task={task} />)}
          </div>
        </div>
      </section>

      <section className="section directory-section home-latest-section">
        <div className="container">
          <SectionHeader label="New to the directory" title="Recently added AI tools" description="Explore new software listings and recently published product updates." to="/new" action="View new tools" />
          <div className="directory-latest-list">
            {latestTools.map(tool => (
              <Link to={`/tool/${tool.slug}`} className="directory-latest-row" key={tool.id}>
                <img src={tool.logo} alt="" loading="lazy" decoding="async" />
                <span className="directory-latest-name"><strong>{tool.name}</strong><small>{tool.tagline}</small></span>
                <span className="directory-latest-category">{tool.category}</span>
                <span className="directory-latest-price">{tool.pricingType}</span>
                <ArrowRight size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section directory-section directory-section-alt home-fresh-section" id="fresh-updates">
        <div className="container">
          <SectionHeader label="Deals and launches" title="New AI launches and current software deals" description="Discover recently launched products and review current offers. Eligibility and availability may vary by region." />
          <div className="home-fresh-grid">
            <article className="home-fresh-panel home-deals-panel">
              <header><span><BadgePercent size={18} /> Latest AI deals</span><Link to="/deals">View all <ArrowRight size={15} /></Link></header>
              <div className="home-fresh-list">
                {deals.slice(0, 3).map(deal => (
                  <Link to={`/tool/${deal.toolSlug}`} key={deal.id}>
                    <span><strong>{deal.toolName}</strong><small>{deal.type}</small></span>
                    <b>{deal.discount}</b>
                    <ArrowRight size={15} />
                  </Link>
                ))}
              </div>
            </article>
            <article className="home-fresh-panel home-launches-panel">
              <header><span><Rocket size={18} /> New AI launches</span><Link to="/launches">View all <ArrowRight size={15} /></Link></header>
              <div className="home-fresh-list">
                {launchTools.map(tool => (
                  <Link to={`/tool/${tool.slug}`} key={tool.id}>
                    <img src={tool.logo} alt="" loading="lazy" decoding="async" />
                    <span><strong>{tool.name}</strong><small>{tool.category}</small></span>
                    <b>{tool.pricingType}</b>
                    <ArrowRight size={15} />
                  </Link>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section directory-section directory-section-alt home-review-section">
        <div className="container">
          <SectionHeader label="Our review standards" title="How we review and classify AI software" description="A transparent process for accurate listings, practical evaluations and clearly disclosed promotions." to="/review-methodology" action="Read our methodology" />
          <div className="home-review-process">
            <article><span>01</span><ClipboardCheck size={22} /><h3>Confirm the product</h3><p>We check the official website, public availability, category and core product claims before publishing a listing.</p></article>
            <article><span>02</span><Camera size={22} /><h3>Test practical workflows</h3><p>Hands-on conclusions and screenshots are published only for products the editorial team has directly tested.</p></article>
            <article><span>03</span><BadgeCheck size={22} /><h3>Review pricing and limits</h3><p>We record free access, starting prices, trials and important plan limitations that may affect your decision.</p></article>
            <article><span>04</span><ShieldCheck size={22} /><h3>Keep advertising separate</h3><p>Paid placement is clearly marked and never changes organic rankings, comparisons or editorial conclusions.</p></article>
          </div>
        </div>
      </section>

      <section className="section directory-section home-about-section">
        <div className="container home-about-directory">
          <div className="home-about-heading">
            <span className="directory-eyebrow">About the directory</span>
            <h2>What is AI Directory?</h2>
            <p className="home-about-kicker">A practical way for professionals and businesses to compare AI software.</p>
            <div className="home-about-highlights">
              <div><ShieldCheck size={20} /><span><strong>Independent by design</strong><small>Paid promotion never changes organic results.</small></span></div>
              <div><ClipboardCheck size={20} /><span><strong>Built for comparison</strong><small>Compare tools by task, role, use case and pricing.</small></span></div>
            </div>
          </div>
          <div className="home-about-copy">
            <span className="home-about-copy-label"><Sparkles size={15} /> Better software decisions</span>
            <p>AI Directory is an independent discovery and comparison platform for professionals, freelancers and businesses in the United States, United Kingdom and other English-speaking markets.</p>
            <p>Listings are grouped by task, category, role and pricing model. Product details may come from official sources or founder submissions; hands-on editorial conclusions are published separately and only when supported by direct testing.</p>
            <p>Features, regional availability and prices in US dollars or pounds sterling can change. Always confirm current commercial terms on the provider's official website before purchasing.</p>
            <div className="home-about-actions"><Link to="/about">Learn about our standards <ArrowRight size={15} /></Link><Link to="/contact">Suggest a correction <ArrowRight size={15} /></Link></div>
          </div>
        </div>
      </section>

      <section className="section directory-section home-comparison-section">
        <div className="container">
          <SectionHeader label="Compare AI software" title="Compare leading AI tools side by side" description="Review features, pricing, strengths and limitations before choosing a product." to="/compare" action="View all comparisons" />
          <div className="directory-comparison-grid">
            {comparisons.slice(0, 4).map(item => (
              <Link to={`/compare/${item.slug}`} className="directory-comparison-card" key={item.id}>
                <span>{item.category}</span>
                <div><strong>{item.toolA}</strong><small>vs</small><strong>{item.toolB}</strong></div>
                <p>{item.summary}</p>
                <b>View comparison <ArrowRight size={14} /></b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section directory-section directory-faq-section">
        <div className="container directory-faq-layout">
          <div className="directory-faq-intro">
            <span className="directory-eyebrow">Common questions</span>
            <h2>Questions about choosing AI tools</h2>
            <p>Clear answers about comparing software, checking prices and finding free AI tools.</p>
            <div className="directory-faq-visual" aria-hidden="true">
              <div className="directory-faq-visual-top"><i /><i /><i /></div>
              <div className="directory-faq-visual-body">
                <span className="directory-faq-visual-icon"><CircleHelp size={40} /></span>
                <div><b>Need help choosing?</b><small>Practical answers for better software decisions.</small></div>
                <span className="directory-faq-visual-line is-wide" />
                <span className="directory-faq-visual-line" />
                <span className="directory-faq-visual-line is-short" />
              </div>
            </div>
          </div>
          <div className="directory-faq-list">
            <details open><summary>What is an AI tools directory?</summary><p>An AI tools directory groups software by task, category, pricing and use case so you can discover and compare relevant products in one place.</p></details>
            <details><summary>How should I compare AI tools?</summary><p>Compare the features you need, total subscription cost, free-plan limits, privacy terms, support and fit with your existing workflow.</p></details>
            <details><summary>Does payment improve organic ranking?</summary><p>No. Sponsored placements are clearly marked and kept separate from organic listings and editorial conclusions.</p></details>
            <details><summary>Can I find free AI tools?</summary><p>Yes. Use the pricing filters or Free Tools page to compare products with free or freemium access.</p></details>
            <details><summary>Are prices available in USD and GBP?</summary><p>Providers may display prices in US dollars, pounds sterling or local currency. Confirm taxes, exchange rates and regional availability on the official product website.</p></details>
            <details><summary>How often are listings updated?</summary><p>Listings are reviewed when product information changes, and recently added tools are displayed separately for easier discovery.</p></details>
          </div>
        </div>
      </section>

    </div>
  );
}

function getWebsitePreview(websiteUrl) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(websiteUrl)}?w=800`;
}

function createToolFallback(name, wide = false) {
  const width = wide ? 900 : 120;
  const height = wide ? 506 : 120;
  const label = wide ? 'AI TOOL PREVIEW' : (name?.trim()?.charAt(0) || 'A').toUpperCase();
  const fontSize = wide ? 52 : 54;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#171b2b"/><stop offset="1" stop-color="#090b12"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/><circle cx="${wide ? 720 : 90}" cy="${wide ? 70 : 25}" r="${wide ? 190 : 38}" fill="#4f46e5" opacity=".22"/><text x="50%" y="50%" fill="#c7d2fe" font-family="Arial,sans-serif" font-size="${fontSize}" font-weight="700" text-anchor="middle" dominant-baseline="middle" letter-spacing="3">${label}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function SectionHeader({ label, title, description, to, action }) {
  return (
    <div className="directory-section-head">
      <div><span>{label}</span><h2>{title}</h2><p>{description}</p></div>
      {to && action && <Link to={to}>{action}<ArrowRight size={15} /></Link>}
    </div>
  );
}
