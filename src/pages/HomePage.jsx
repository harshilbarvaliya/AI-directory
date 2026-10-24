import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, GitCompare, Plus, ShieldCheck, Sparkles } from 'lucide-react';
import SearchBar from '../components/common/SearchBar';
import ToolCard from '../components/cards/ToolCard';
import CategoryCard from '../components/cards/CategoryCard';
import TaskCard from '../components/cards/TaskCard';
import Button from '../components/common/Button';
import { tools, categories, tasks, comparisons } from '../data/mockData';

export default function HomePage() {
  const heroRef = useRef(null);
  const featuredTools = tools.filter(tool => tool.featured).slice(0, 6);
  const latestTools = tools.filter(tool => tool.new).slice(0, 4);

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
          <div className="hero-kicker"><Sparkles size={14} /> Independent AI tool discovery</div>
          <h1>Find the right AI tool<br /><span className="text-gradient">for your work.</span></h1>
          <p>Search, compare and choose AI products using practical use cases, clear pricing and independent listing information.</p>
          <SearchBar size="lg" showChips />
          <div className="home-trust-strip">
            <span><ShieldCheck size={16} /> Independent rankings</span>
            <span><CheckCircle2 size={16} /> Clear pricing</span>
            <span><GitCompare size={16} /> Simple comparisons</span>
          </div>
        </div>
      </section>

      <section className="section directory-section">
        <div className="container">
          <SectionHeader label="Featured" title="Tools worth a closer look" description="A concise selection across popular categories." to="/tools" action="View all tools" />
          <div className="grid-tools directory-tool-grid">
            {featuredTools.map(tool => <ToolCard key={tool.id} tool={tool} compact />)}
          </div>
        </div>
      </section>

      <section className="section directory-section directory-section-alt">
        <div className="container">
          <SectionHeader label="Categories" title="Browse by type of work" description="Start with the kind of task you need to complete." to="/categories" action="All categories" />
          <div className="grid-categories directory-category-grid">
            {categories.map(category => <CategoryCard key={category.id} category={category} />)}
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
        <div className="container directory-principles">
          <div>
            <span className="directory-eyebrow"><ShieldCheck size={14} /> Clear listing standards</span>
            <h2>Useful details without paid ranking.</h2>
            <p>Sponsored placements are labeled. Organic listings are organized by relevance, completeness and freshness.</p>
            <Link to="/ranking-methodology">Read the ranking methodology <ArrowRight size={15} /></Link>
          </div>
          <div className="directory-principle-list">
            <span><CheckCircle2 size={18} /><strong>Clear pricing</strong><small>Free, freemium and paid options are identified.</small></span>
            <span><CheckCircle2 size={18} /><strong>Practical summaries</strong><small>See what each tool does and who it is for.</small></span>
            <span><CheckCircle2 size={18} /><strong>Visible sponsorships</strong><small>Paid placements are shown separately.</small></span>
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

      <section className="section directory-section directory-section-alt">
        <div className="container directory-faq-layout">
          <div><span className="directory-eyebrow">Before you choose</span><h2>Common questions</h2><p>Quick answers about listings, pricing and rankings.</p><Link to="/faq">View all questions <ArrowRight size={15} /></Link></div>
          <div className="directory-faq-list">
            <details open><summary>How are tools organized?</summary><p>Tools are grouped by category, task, pricing and listing relevance.</p></details>
            <details><summary>Does payment improve organic ranking?</summary><p>No. Sponsored placements are labeled and kept separate from organic listings.</p></details>
            <details><summary>Can I find free tools?</summary><p>Yes. Use the Free Tools page or pricing filters to find free and freemium products.</p></details>
            <details><summary>How do I submit a tool?</summary><p>Use the submission form. A standard listing can be submitted without a listing fee.</p></details>
          </div>
        </div>
      </section>

      <section className="directory-submit-section">
        <div className="container directory-submit-inner">
          <div><span>For product teams</span><h2>Add your AI tool to the directory.</h2><p>Submit a free listing or choose a promotion plan for additional visibility.</p></div>
          <div><Button to="/submit" variant="primary" size="lg" icon={Plus} iconPosition="left">Submit a tool</Button><Link to="/pricing">See listing plans</Link></div>
        </div>
      </section>
    </div>
  );
}

function SectionHeader({ label, title, description, to, action }) {
  return (
    <div className="directory-section-head">
      <div><span>{label}</span><h2>{title}</h2><p>{description}</p></div>
      <Link to={to}>{action}<ArrowRight size={15} /></Link>
    </div>
  );
}
