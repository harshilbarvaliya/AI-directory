import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Clock3,
  Search,
  Sparkles,
  UserRound
} from 'lucide-react';
import BlogVisual from '../components/common/BlogVisual';
import { blogArticles, blogCategories } from '../data/blogData';

function ArticleMeta({ article }) {
  return (
    <div className="blog-article-meta">
      <span><Clock3 size={14} /> {article.readTime}</span>
      <span><UserRound size={14} /> {article.author}</span>
    </div>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All guides');
  const [query, setQuery] = useState('');
  const featured = blogArticles.find(article => article.featured) || blogArticles[0];

  const visibleArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return blogArticles.filter(article => {
      const matchesCategory = activeCategory === 'All guides' || article.category === activeCategory;
      const matchesQuery = !normalizedQuery || `${article.title} ${article.excerpt} ${article.category}`.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <div className="blog-page">
      <section className="blog-hero" aria-labelledby="blog-title">
        <div className="container blog-hero-shell">
          <div className="blog-hero-copy">
            <span className="blog-eyebrow"><BookOpen size={15} /> AI Directory editorial</span>
            <h1 id="blog-title">Practical AI guidance for <span>better software choices.</span></h1>
            <p>Independent buying guides, clear comparisons and useful workflows for people choosing AI software in the UK, US and beyond.</p>

            <form className="blog-search" onSubmit={event => event.preventDefault()} role="search">
              <Search size={19} aria-hidden="true" />
              <input
                value={query}
                onChange={event => setQuery(event.target.value)}
                type="search"
                placeholder="Search guides, tools or workflows"
                aria-label="Search blog guides"
              />
              <button type="submit">Search</button>
            </form>

            <div className="blog-trust-row">
              <span><Sparkles size={14} /> Independent editorial</span>
              <span>Clear pricing context</span>
              <span>Practical workflow tests</span>
            </div>
          </div>

          <Link to={`/blog/${featured.slug}`} className="blog-featured-card" aria-label={`Read ${featured.title}`}>
            <BlogVisual article={featured} large />
            <div className="blog-featured-content">
              <div>
                <span className="blog-category-pill">Featured guide</span>
                <span className="blog-featured-date">{featured.date}</span>
              </div>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <span className="blog-read-link">Read the guide <ArrowUpRight size={16} /></span>
            </div>
          </Link>
        </div>
      </section>

      <section className="blog-library" aria-labelledby="blog-library-title">
        <div className="container">
          <header className="blog-library-header">
            <div>
              <span className="blog-eyebrow"><Sparkles size={15} /> Browse the library</span>
              <h2 id="blog-library-title">Guides for choosing and using AI tools</h2>
            </div>
            <p>Focused advice with the trade-offs, limitations and checks that matter before you choose a product.</p>
          </header>

          <div className="blog-filter-row" aria-label="Filter articles by category">
            {blogCategories.map(category => (
              <button
                type="button"
                className={activeCategory === category ? 'is-active' : ''}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                key={category}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="blog-results-summary" aria-live="polite">
            <span>{visibleArticles.length} {visibleArticles.length === 1 ? 'guide' : 'guides'}</span>
            {(query || activeCategory !== 'All guides') && (
              <button type="button" onClick={() => { setQuery(''); setActiveCategory('All guides'); }}>Clear filters</button>
            )}
          </div>

          {visibleArticles.length > 0 ? (
            <div className="blog-article-grid">
              {visibleArticles.map((article, index) => (
                <article className={`blog-article-card${index === 0 && !query && activeCategory === 'All guides' ? ' is-editor-pick' : ''}`} key={article.slug}>
                  <Link to={`/blog/${article.slug}`} className="blog-card-visual-link" aria-label={`Read ${article.title}`}>
                    <BlogVisual article={article} />
                  </Link>
                  <div className="blog-card-body">
                    <div className="blog-card-topline">
                      <span className="blog-category-pill">{article.category}</span>
                      <time>{article.date}</time>
                    </div>
                    <h3><Link to={`/blog/${article.slug}`}>{article.title}</Link></h3>
                    <p>{article.excerpt}</p>
                    <ArticleMeta article={article} />
                    <Link to={`/blog/${article.slug}`} className="blog-read-link">Read guide <ArrowRight size={16} /></Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="blog-empty-state">
              <Search size={30} />
              <h3>No matching guides</h3>
              <p>Try a broader search or clear the selected category.</p>
              <button type="button" onClick={() => { setQuery(''); setActiveCategory('All guides'); }}>Show all guides</button>
            </div>
          )}

          <div className="blog-library-note">
            <span><BookOpen size={18} /></span>
            <div>
              <strong>Built for useful decisions—not content volume.</strong>
              <p>We prioritise practical comparisons, transparent assumptions and workflows readers can test for themselves.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
