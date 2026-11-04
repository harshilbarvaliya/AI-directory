import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChartNoAxesCombined,
  CircleDollarSign,
  Code2,
  Compass,
  FileText,
  Gamepad2,
  GraduationCap,
  Headphones,
  Heart,
  HeartPulse,
  Image,
  Languages,
  Layers3,
  Mail,
  MessageSquare,
  Mic2,
  Palette,
  PanelsTopLeft,
  Presentation,
  Scale,
  Search,
  Share2,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  UsersRound,
  Video,
  Workflow
} from 'lucide-react';
import { categories, tools } from '../data/mockData';

const iconMap = {
  Code: Code2,
  FileText,
  Image,
  Video,
  Compass,
  TrendingUp,
  MessageSquare,
  Headphones,
  Share2,
  Mail,
  ShieldCheck,
  Palette,
  ScanFace: Image,
  Mic2,
  PanelsTopLeft,
  Workflow,
  ChartNoAxesCombined,
  MessagesSquare: MessageSquare,
  Presentation,
  UsersRound,
  CircleDollarSign,
  Scale,
  ShoppingBag,
  GraduationCap,
  Gamepad2,
  Heart,
  HeartPulse,
  Shield,
  Languages
};

export default function CategoriesPage() {
  const [query, setQuery] = useState('');
  const normalizedQuery = query.trim().toLowerCase();

  const categoryDirectory = useMemo(() => categories.map(category => ({
    ...category,
    publishedTools: tools.filter(tool => tool.categorySlug === category.slug)
  })), []);

  const visibleCategories = categoryDirectory.filter(category => (
    !normalizedQuery ||
    category.name.toLowerCase().includes(normalizedQuery) ||
    category.description.toLowerCase().includes(normalizedQuery) ||
    category.popularTasks.some(task => task.toLowerCase().includes(normalizedQuery))
  ));

  return (
    <div className="categories-directory-page">
      <section className="categories-directory-hero">
        <div className="container">
          <span className="categories-hero-kicker"><Layers3 size={16} /> Browse the complete taxonomy</span>
          <h1>Explore AI tools by <span>category and workflow.</span></h1>
          <p>Start with the kind of work you need to complete, then compare relevant tools, pricing models and practical limitations.</p>
          <label className="categories-search-box">
            <Search size={19} />
            <input
              type="search"
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="Search categories or capabilities"
              aria-label="Search categories"
            />
            <span>{visibleCategories.length} categories</span>
          </label>
          <div className="categories-hero-facts">
            <span><Sparkles size={14} /> {categories.length} focused categories</span>
            <span>{tools.length} published tools</span>
            <span>New listings reviewed continuously</span>
          </div>
        </div>
      </section>

      <section className="categories-directory-library" aria-labelledby="categories-library-title">
        <div className="container">
          <header className="categories-directory-heading">
            <div>
              <span>All AI software categories</span>
              <h2 id="categories-library-title">Find the right starting point</h2>
            </div>
            <p>Each category groups related capabilities together. Tool counts only include products currently published in this directory.</p>
          </header>

          {visibleCategories.length > 0 ? (
            <div className="categories-directory-grid">
              {visibleCategories.map((category, index) => {
                const Icon = iconMap[category.icon] || Layers3;
                const publishedCount = category.publishedTools.length;
                return (
                  <article className="category-directory-card" style={{ '--category-color': category.color }} key={category.id}>
                    <header>
                      <span className="category-directory-icon"><Icon size={21} /></span>
                      <div>
                        <small>{String(index + 1).padStart(2, '0')}</small>
                        <h3>{category.name}</h3>
                      </div>
                      <span className="category-directory-count">{publishedCount ? `${publishedCount} listed` : 'Open'}</span>
                    </header>
                    <div className="category-directory-accent" />
                    <p>{category.description}</p>
                    <div className="category-directory-tasks">
                      {category.popularTasks.slice(0, 4).map(task => <span key={task}>{task}</span>)}
                    </div>
                    <Link to={`/category/${category.slug}`}>
                      Explore category <ArrowRight size={15} />
                    </Link>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="categories-empty-state">
              <Search size={30} />
              <h3>No matching category</h3>
              <p>Try a broader capability or browse all available categories.</p>
              <button type="button" onClick={() => setQuery('')}>Show all categories</button>
            </div>
          )}
        </div>
      </section>

      <section className="categories-choice-guide">
        <div className="container categories-choice-guide-inner">
          <div>
            <span>Need a faster route?</span>
            <h2>Start with your task, budget or shortlist.</h2>
          </div>
          <div className="categories-choice-links">
            <Link to="/tasks"><strong>Browse by task</strong><span>Choose the outcome you need first.</span><ArrowRight size={16} /></Link>
            <Link to="/free-ai-tools"><strong>Explore free tools</strong><span>Check free and freemium options.</span><ArrowRight size={16} /></Link>
            <Link to="/compare"><strong>Compare products</strong><span>Review features and pricing together.</span><ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
