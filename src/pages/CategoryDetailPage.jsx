import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Layers, ChevronRight, Sparkles, Filter } from 'lucide-react';
import ToolCard from '../components/cards/ToolCard';
import { categories, tools } from '../data/mockData';

export default function CategoryDetailPage() {
  const { slug } = useParams();
  const category = categories.find(c => c.slug === slug) || categories[0];
  const categoryTools = tools.filter(t => t.categorySlug === category.slug);

  return (
    <div className="page-wrapper container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <ChevronRight size={14} className="breadcrumb-separator" />
        <Link to="/categories">Categories</Link>
        <ChevronRight size={14} className="breadcrumb-separator" />
        <span style={{ color: '#f8fafc' }}>{category.name}</span>
      </div>

      {/* Category Hero */}
      <div style={{ marginBottom: '3rem', padding: '2.5rem', background: 'rgba(18, 20, 30, 0.7)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: category.color || '#818cf8', fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
          <Sparkles size={14} />
          Category Spotlight
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.75rem' }}>
          Best {category.name} AI Tools
        </h1>
        <p style={{ fontSize: '1.0625rem', color: '#94a3b8', maxWidth: '780px', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          {category.description}
        </p>

        {category.popularTasks && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.8125rem', color: '#64748b', fontWeight: '600' }}>Popular Tasks:</span>
            {category.popularTasks.map((t, idx) => (
              <span key={idx} style={{ fontSize: '0.75rem', background: 'rgba(255, 255, 255, 0.06)', padding: '0.2rem 0.6rem', borderRadius: '9999px', color: '#cbd5e1' }}>
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Category Tools Grid */}
      <div className="section-header">
        <h2 className="section-title" style={{ fontSize: '1.75rem' }}>
          Top Rated Tools in {category.name} ({categoryTools.length})
        </h2>
      </div>

      {categoryTools.length > 0 ? (
        <div className="grid-tools">
          {categoryTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="grid-tools">
          {tools.slice(0, 3).map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      )}
      <section className="content-section"><h2>Browse and compare</h2><div className="simple-grid">
        <div className="simple-panel"><h3>Filters</h3><p>Refine by free, freemium, paid, free trial, or verified status from the full directory.</p><Link className="btn btn-secondary btn-sm" to={`/tools`}>Open filters</Link></div>
        <div className="simple-panel"><h3>Featured tools</h3><p>Promotional placements appear separately and always carry a visible Sponsored label.</p></div>
        <div className="simple-panel"><h3>Compare options</h3><p>Review pricing, core features, and ideal users side by side.</p><Link className="btn btn-secondary btn-sm" to="/compare">View comparisons</Link></div>
        <div className="simple-panel"><h3>Alternatives</h3><p>Explore lower-cost, free, and specialist options.</p><Link className="btn btn-secondary btn-sm" to="/alternatives">Find alternatives</Link></div>
      </div></section>
      <section className="content-section"><h2>Frequently asked questions</h2><div className="simple-grid"><div className="simple-panel"><h3>How are tools ordered?</h3><p>Tools are ordered by relevance, listing completeness, freshness and editorial signals. Payment does not affect organic ranking.</p></div><div className="simple-panel"><h3>Are all tools verified?</h3><p>No. Verification appears only when ownership and listing details have been checked.</p></div></div></section>
      <section className="content-section"><h2>Related categories</h2><div style={{display:'flex',gap:'.5rem',flexWrap:'wrap'}}>{categories.filter(c=>c.id!==category.id).slice(0,4).map(c=><Link className="btn btn-secondary btn-sm" to={`/category/${c.slug}`} key={c.id}>{c.name}</Link>)}</div></section>
    </div>
  );
}
