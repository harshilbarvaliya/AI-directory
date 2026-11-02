import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, BadgeCheck, BriefcaseBusiness, Camera,
  CircleHelp, ClipboardCheck, Code2,
  GraduationCap, LayoutGrid, Megaphone, Palette,
  ShieldCheck, Sparkles, Target, Users, WandSparkles
} from 'lucide-react';
import TaskCard from '../components/cards/TaskCard';
import Button from '../components/common/Button';
import { tools, categories, tasks, comparisons } from '../data/mockData';

export default function HomePage() {
  const heroRef = useRef(null);
  const popularTools = tools.slice(0, 8);
  const latestTools = tools.filter(tool => tool.new).slice(0, 4);
  const marqueeTools = tools.filter(tool => !['jasper', 'canva-magic-studio'].includes(tool.id));
  const roles = [
    { name: 'Software developers', description: 'Coding, debugging and app-building tools', label: 'Build faster', color: '#6366f1', icon: Code2, query: 'coding' },
    { name: 'Marketers', description: 'SEO, campaigns and growth workflows', label: 'Grow smarter', color: '#10b981', icon: Megaphone, query: 'marketing' },
    { name: 'Content creators', description: 'Writing, video, image and voice tools', label: 'Create more', color: '#ec4899', icon: Palette, query: 'content' },
    { name: 'Startup founders', description: 'Research, automation and support tools', label: 'Move quickly', color: '#f59e0b', icon: BriefcaseBusiness, query: 'productivity' },
    { name: 'Students & researchers', description: 'Research, summaries and document analysis', label: 'Learn deeply', color: '#0ea5e9', icon: GraduationCap, query: 'research' },
    { name: 'Teams & operations', description: 'Collaboration and repeatable workflows', label: 'Work together', color: '#8b5cf6', icon: Users, query: 'automation' }
  ];
  const discoveryPaths = [
    { title: 'Browse by task', copy: 'Start with the job you need to complete.', icon: Target, to: '/tasks', color: '#4f46e5' },
    { title: 'Browse categories', copy: 'Explore tools by software capability.', icon: LayoutGrid, to: '/categories', color: '#7c3aed' },
    { title: 'Browse by profession', copy: 'See practical tools for your role.', icon: BriefcaseBusiness, to: '#professions', color: '#0891b2' },
    { title: 'Use AI Finder', copy: 'Match your role and budget to a stack.', icon: WandSparkles, to: '/ai-finder', color: '#059669' }
  ];

  useEffect(() => {
    const sections = document.querySelectorAll('.directory-home .directory-section, .directory-home .directory-submit-section');
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
    const sections = document.querySelectorAll('.directory-home section:not(.interactive-hero)');
    const cleanups = [];
    sections.forEach(section => {
      section.classList.add('section-jelly-zone');
      const field = document.createElement('div');
      field.className = 'section-clone-field';
      field.setAttribute('aria-hidden', 'true');
      for (let index = 1; index <= 5; index += 1) {
        const clone = document.createElement('span');
        clone.className = `section-clone section-clone-${index}`;
        field.appendChild(clone);
      }
      section.prepend(field);
      const move = event => {
        const rect = section.getBoundingClientRect();
        section.style.setProperty('--section-mouse-x', `${event.clientX - rect.left}px`);
        section.style.setProperty('--section-mouse-y', `${event.clientY - rect.top}px`);
        section.classList.add('section-pointer-active');
      };
      const leave = () => section.classList.remove('section-pointer-active');
      section.addEventListener('pointermove', move, { passive: true });
      section.addEventListener('pointerleave', leave);
      cleanups.push(() => {
        section.removeEventListener('pointermove', move);
        section.removeEventListener('pointerleave', leave);
        field.remove();
      });
    });
    return () => cleanups.forEach(cleanup => cleanup());
  }, []);

  const moveHeroEffect = event => {
    const hero = heroRef.current;
    if (!hero) return;
    const rect = hero.getBoundingClientRect();
    hero.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`);
    hero.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`);
    hero.style.setProperty('--tilt-x', `${((event.clientX - rect.left) / rect.width - 0.5) * 6}px`);
    hero.style.setProperty('--tilt-y', `${((event.clientY - rect.top) / rect.height - 0.5) * 4}px`);
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
          <h1>AI Tools Directory<br /><span className="hero-accent-line">with Honest Comparisons</span></h1>
          <p>Find free and paid AI tools for your work. Compare practical use cases, pricing and important limitations before you choose.</p>
          <div className="hero-simple-actions">
            <Button to="/tools" variant="primary" size="lg" icon={ArrowRight} iconPosition="right">Explore tools</Button>
          </div>
        </div>
      </section>

      <section className="home-tool-marquee" aria-label="Popular AI tools covered in the directory">
        <div className="home-tool-marquee-viewport">
          <div className="home-tool-marquee-track">
            <div className="home-tool-marquee-group">
              {marqueeTools.map(tool => (
                <Link to={`/tool/${tool.slug}`} key={tool.id}>
                  <img src={tool.logo} alt="" loading="lazy" />
                  <span>{tool.name}</span>
                </Link>
              ))}
            </div>
            <div className="home-tool-marquee-group" aria-hidden="true">
              {marqueeTools.map(tool => (
                <span className="home-tool-marquee-copy" key={`copy-${tool.id}`}>
                  <img src={tool.logo} alt="" loading="lazy" />
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
            <span>Popular AI categories</span>
            <h2>Find the right category for the job</h2>
            <p>Start with a category, preview matching tools and open the complete collection when you need more.</p>
          </div>
          <div className="home-category-explorer">
            {categories.map(category => {
              const matches = tools.filter(tool => tool.categorySlug === category.slug).slice(0, 7);
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
                        <img src={tool.logo} alt="" loading="lazy" />
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

      <section className="section directory-section directory-discovery-section">
        <div className="container">
          <SectionHeader label="Start here" title="Find AI tools your way" description="Choose the discovery path that matches how you work." to="/tools" action="Explore all tools" />
          <div className="home-discovery-grid">
            {discoveryPaths.map((item, index) => {
              const Icon = item.icon;
              return item.to.startsWith('#') ? (
                <a href={item.to} className="home-discovery-card" key={item.title} style={{ '--path-color': item.color }}>
                  <small>{String(index + 1).padStart(2, '0')}</small><span><Icon size={22} /></span><div><h3>{item.title}</h3><p>{item.copy}</p></div><ArrowRight size={17} />
                </a>
              ) : (
                <Link to={item.to} className="home-discovery-card" key={item.title} style={{ '--path-color': item.color }}>
                  <small>{String(index + 1).padStart(2, '0')}</small><span><Icon size={22} /></span><div><h3>{item.title}</h3><p>{item.copy}</p></div><ArrowRight size={17} />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section directory-section popular-tools-section">
        <div className="container">
          <div className="popular-tools-head">
            <div>
              <span>Directory picks</span>
              <h2>Popular AI Tools</h2>
              <p>Discover useful AI tools making everyday work faster and easier.</p>
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

      <section className="section directory-section directory-section-alt" id="professions">
        <div className="container">
          <SectionHeader label="By profession" title="AI tools for the way you work" description="Explore focused recommendations for common roles and workflows." to="/ai-finder" action="Get a personal match" />
          <div className="role-grid">
            {roles.map((role, index) => {
              const Icon = role.icon;
              return (
                <Link className="role-card" style={{ '--role-color': role.color }} to={`/search?q=${encodeURIComponent(role.query)}`} key={role.name}>
                  <span className="role-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="role-icon"><Icon size={21} /></span>
                  <span className="role-content"><strong>{role.name}</strong><small>{role.description}</small></span>
                  <span className="role-cta">{role.label} <ArrowRight size={15} /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section directory-section">
        <div className="container home-finder-panel">
          <div className="home-finder-copy">
            <span className="directory-eyebrow"><WandSparkles size={14} /> Personalized discovery</span>
            <h2>Find the right AI tools in under a minute.</h2>
            <p>Tell us your role and preferred budget. The finder matches those choices against tool categories and returns a focused recommendation stack.</p>
            <Button to="/ai-finder" variant="primary" size="lg" icon={Sparkles} iconPosition="left">Build my AI stack</Button>
          </div>
          <div className="home-finder-preview" aria-label="AI Finder preview">
            <div><span>1</span><p><strong>Select your role</strong><small>Developer, marketer, creator or founder</small></p></div>
            <div><span>2</span><p><strong>Choose your budget</strong><small>Free, freemium or paid products</small></p></div>
            <div><span>3</span><p><strong>Review your matches</strong><small>See tools aligned with your workflow</small></p></div>
          </div>
        </div>
      </section>

      <section className="section directory-section directory-section-alt home-guides-section">
        <div className="container">
          <SectionHeader label="Learn before you choose" title="Expert reviews and practical guides" description="Understand the trade-offs, pricing and best-fit workflows behind popular AI products." to="/reviews" action="View all guides" />
          <div className="home-guide-grid">
            <Link to="/reviews" className="home-guide-card">
              <div className="home-guide-card-top"><i><ClipboardCheck size={23} /></i><small>01</small></div>
              <span>Buying guide</span><h3>How to evaluate an AI tool before paying</h3><p>Use a practical checklist covering output quality, privacy, pricing and workflow fit.</p><b>Read the guide <ArrowRight size={16} /></b>
            </Link>
            <Link to="/compare" className="home-guide-card">
              <div className="home-guide-card-top"><i><LayoutGrid size={23} /></i><small>02</small></div>
              <span>Comparison</span><h3>Compare features, pricing and limitations</h3><p>Review popular tools side by side instead of relying on marketing claims alone.</p><b>Explore comparisons <ArrowRight size={16} /></b>
            </Link>
            <Link to="/free-ai-tools" className="home-guide-card">
              <div className="home-guide-card-top"><i><Sparkles size={23} /></i><small>03</small></div>
              <span>Free tools</span><h3>Find useful AI software with a free plan</h3><p>Browse free and freemium options across development, content, research and design.</p><b>Browse free tools <ArrowRight size={16} /></b>
            </Link>
          </div>
        </div>
      </section>

      <section className="section directory-section">
        <div className="container">
          <SectionHeader label="Browse by task" title="What do you want help with?" description="Choose a task to see tools suited to that type of work." to="/tasks" action="View all tasks" />
          <div className="grid-tasks home-task-grid">
            {tasks.map(task => <TaskCard key={task.id} task={task} />)}
          </div>
        </div>
      </section>

      <section className="section directory-section">
        <div className="container">
          <SectionHeader label="Recently added" title="New listings" description="New tools and product updates added to the directory." to="/new" action="View new tools" />
          <div className="directory-latest-list">
            {latestTools.map(tool => (
              <Link to={`/tool/${tool.slug}`} className="directory-latest-row" key={tool.id}>
                <img src={tool.logo} alt="" />
                <span className="directory-latest-name"><strong>{tool.name}</strong><small>{tool.tagline}</small></span>
                <span className="directory-latest-category">{tool.category}</span>
                <span className="directory-latest-price">{tool.pricingType}</span>
                <ArrowRight size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section directory-section directory-section-alt">
        <div className="container">
          <SectionHeader label="Our review process" title="How we research and organize AI tools" description="A transparent workflow for useful listings, practical reviews and clearly disclosed promotions." to="/review-methodology" action="Read the full methodology" />
          <div className="home-review-process">
            <article><span>01</span><ClipboardCheck size={22} /><h3>Verify the product</h3><p>We check the official website, public availability, category and core product claims before a listing is published.</p></article>
            <article><span>02</span><Camera size={22} /><h3>Review a real workflow</h3><p>Hands-on conclusions and screenshots are reserved for products the editorial team has actually tested.</p></article>
            <article><span>03</span><BadgeCheck size={22} /><h3>Check plans and limits</h3><p>We record the pricing model, starting price, free access and important limitations that affect the buying decision.</p></article>
            <article><span>04</span><ShieldCheck size={22} /><h3>Separate promotion</h3><p>Paid placement is visibly labeled and does not change organic rankings, comparisons or editorial conclusions.</p></article>
          </div>
        </div>
      </section>

      <section className="section directory-section">
        <div className="container home-about-directory">
          <div>
            <span className="directory-eyebrow">About the directory</span>
            <h2>What is AI Directory?</h2>
          </div>
          <div>
            <p>AI Directory is an independent discovery and comparison platform for people choosing software for coding, content, design, research, marketing and automation.</p>
            <p>Listings are organized by task, category, profession and pricing model. Product information may come from official sources or founder submissions; hands-on editorial conclusions are presented separately and only when supported by direct review.</p>
            <p>Pricing and features can change, so important commercial details should always be confirmed on the provider's official website before purchase.</p>
            <div><Link to="/about">About AI Directory <ArrowRight size={15} /></Link><Link to="/contact">Suggest a correction <ArrowRight size={15} /></Link></div>
          </div>
        </div>
      </section>

      <section className="section directory-section">
        <div className="container">
          <SectionHeader label="Compare" title="Compare popular tools" description="Review the main differences before choosing a product." to="/compare" action="All comparisons" />
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
            <span className="directory-eyebrow">Helpful answers</span>
            <h2>FAQs about AI Directory</h2>
            <p>Everything you need to know about finding, comparing, and submitting AI tools.</p>
            <div className="directory-faq-visual" aria-hidden="true">
              <div className="directory-faq-visual-top"><i /><i /><i /></div>
              <div className="directory-faq-visual-body">
                <span className="directory-faq-visual-icon"><CircleHelp size={40} /></span>
                <div><b>How can we help?</b><small>Clear answers for smarter choices.</small></div>
                <span className="directory-faq-visual-line is-wide" />
                <span className="directory-faq-visual-line" />
                <span className="directory-faq-visual-line is-short" />
              </div>
            </div>
            <Link to="/faq">Browse all questions <ArrowRight size={15} /></Link>
          </div>
          <div className="directory-faq-list">
            <details open><summary>What is an AI tools directory?</summary><p>An AI tools directory organizes software by task, category, pricing and use case so people can discover and compare relevant products in one place.</p></details>
            <details><summary>How are tools organized?</summary><p>Tools are grouped by category, task, pricing and listing relevance. Dedicated pages help users compare products for a specific workflow.</p></details>
            <details><summary>Does payment improve organic ranking?</summary><p>No. Sponsored placements are labeled and kept separate from organic listings.</p></details>
            <details><summary>Can I find free tools?</summary><p>Yes. Use the Free Tools page or pricing filters to find free and freemium products.</p></details>
            <details><summary>How often are listings updated?</summary><p>Listings are reviewed as product information changes. Recently added and updated products are surfaced separately for easier discovery.</p></details>
            <details><summary>How do I submit a tool?</summary><p>Use the submission form. A standard listing can be submitted without a listing fee.</p></details>
          </div>
        </div>
      </section>

      <section className="directory-submit-section">
        <div className="container directory-submit-inner">
          <span className="directory-submit-corner directory-submit-corner-left" aria-hidden="true" />
          <span className="directory-submit-corner directory-submit-corner-right" aria-hidden="true" />
          <div className="directory-submit-copy">
            <span>For AI founders and product teams</span>
            <h2>Get your AI tool discovered.<br /><em>Reach the right audience.</em></h2>
            <p>Submit your product for an editorial review and put it in front of people actively comparing AI tools.</p>
            <Link className="directory-submit-button" to="/submit">Submit your tool <ArrowRight size={17} /></Link>
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
      <Link to={to}>{action}<ArrowRight size={15} /></Link>
    </div>
  );
}
