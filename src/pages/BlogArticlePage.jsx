import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Clock3, Home, UserRound } from 'lucide-react';
import BlogVisual from '../components/common/BlogVisual';
import { blogArticles, getBlogArticle } from '../data/blogData';

export default function BlogArticlePage() {
  const { slug } = useParams();
  const article = getBlogArticle(slug);

  if (!article) return <Navigate to="/blog" replace />;

  const related = blogArticles
    .filter(item => item.slug !== article.slug && item.category === article.category)
    .concat(blogArticles.filter(item => item.slug !== article.slug && item.category !== article.category))
    .slice(0, 3);

  return (
    <article className="blog-detail-page">
      <div className="container">
        <nav className="blog-breadcrumbs" aria-label="Breadcrumb">
          <Link to="/"><Home size={14} /> Home</Link>
          <span>/</span>
          <Link to="/blog">Guides</Link>
          <span>/</span>
          <span>{article.category}</span>
        </nav>

        <header className="blog-detail-hero">
          <div className="blog-detail-heading">
            <span className="blog-category-pill">{article.category}</span>
            <h1>{article.title}</h1>
            <p>{article.excerpt}</p>
            <div className="blog-article-meta">
              <span><Clock3 size={15} /> {article.readTime}</span>
              <span><UserRound size={15} /> {article.author}</span>
              <time>{article.date}</time>
            </div>
          </div>
          <BlogVisual article={article} large />
        </header>

        <div className="blog-detail-layout">
          <aside className="blog-detail-aside">
            <span>In this guide</span>
            <a href="#overview">Overview</a>
            <a href="#checklist">Practical checklist</a>
            <a href="#decision">Make the decision</a>
            <Link to="/blog"><ArrowLeft size={14} /> All guides</Link>
          </aside>

          <div className="blog-detail-content">
            <section id="overview">
              <span className="blog-section-label">Overview</span>
              <h2>Start with the workflow, not the feature list</h2>
              <p>{article.intro}</p>
              <p>Product pages are useful for understanding what a tool can do, but the final decision should reflect your own inputs, expected output quality and the time required to review the result. Regional pricing and availability can also change, so confirm current terms directly with the provider.</p>
            </section>

            <section id="checklist" className="blog-checklist-panel">
              <span className="blog-section-label">Practical checklist</span>
              <h2>What to check before you choose</h2>
              <ul>
                {article.points.map(point => <li key={point}><CheckCircle2 size={20} /><span>{point}</span></li>)}
              </ul>
            </section>

            <section id="decision">
              <span className="blog-section-label">Decision framework</span>
              <h2>Run one fair, repeatable comparison</h2>
              <p>Use the same brief, source material and success criteria across every tool. Record output quality, required edits, processing time and plan limits. A product that performs consistently on your real task is usually a safer choice than one with the longest feature list.</p>
              <div className="blog-callout">
                <strong>Editorial reminder</strong>
                <p>AI Directory provides independent discovery information. Features, pricing and provider terms can change, so verify important commercial details before purchasing.</p>
              </div>
            </section>
          </div>
        </div>

        <section className="blog-related" aria-labelledby="related-guides-title">
          <header>
            <div>
              <span className="blog-eyebrow">Keep exploring</span>
              <h2 id="related-guides-title">Related practical guides</h2>
            </div>
            <Link to="/blog">View all guides <ArrowRight size={16} /></Link>
          </header>
          <div className="blog-related-grid">
            {related.map(item => (
              <Link to={`/blog/${item.slug}`} className="blog-related-card" key={item.slug}>
                <BlogVisual article={item} />
                <span>{item.category} · {item.readTime}</span>
                <strong>{item.title}</strong>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
