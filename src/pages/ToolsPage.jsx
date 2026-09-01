import React, { useState } from 'react';
import { Layers, Filter, Sparkles, SlidersHorizontal } from 'lucide-react';
import ToolCard from '../components/cards/ToolCard';
import SearchBar from '../components/common/SearchBar';
import { tools, categories } from '../data/mockData';
import { Link } from 'react-router-dom';

export default function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [pricingFilter, setPricingFilter] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const filteredTools = tools.filter(tool => {
    if (selectedCategory !== 'all' && tool.categorySlug !== selectedCategory) return false;
    if (pricingFilter !== 'all' && tool.pricingType.toLowerCase() !== pricingFilter) return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'reviews') return b.reviewsCount - a.reviewsCount;
    return 0;
  });

  return (
    <div className="page-wrapper container">
      <div className="page-hero">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#818cf8', fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
          <Layers size={14} />
          Master Directory
        </div>
        <h1 className="page-hero-title">All AI Tools</h1>
        <p className="page-hero-desc">
          Browse, filter, and compare our complete index of verified artificial intelligence software and autonomous agents.
        </p>
        <div style={{ marginTop: '1.5rem' }}>
          <SearchBar placeholder="Search by name, capability, or feature..." showChips={false} />
        </div>
      </div>

      {/* Filter & Sort Controls */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          padding: '1rem 1.25rem',
          background: 'rgba(18, 20, 30, 0.7)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          marginBottom: '2rem'
        }}
      >
        {/* Category Pills */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => setSelectedCategory('all')}
            style={{
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              fontSize: '0.8125rem',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              background: selectedCategory === 'all' ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'rgba(255, 255, 255, 0.05)',
              color: selectedCategory === 'all' ? '#ffffff' : '#94a3b8'
            }}
          >
            All Categories ({tools.length})
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.slug)}
              style={{
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                fontSize: '0.8125rem',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                background: selectedCategory === cat.slug ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'rgba(255, 255, 255, 0.05)',
                color: selectedCategory === cat.slug ? '#ffffff' : '#94a3b8'
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Filters & Sorting */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <select
            value={pricingFilter}
            onChange={(e) => setPricingFilter(e.target.value)}
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              padding: '0.4rem 0.75rem',
              color: '#cbd5e1',
              fontSize: '0.8125rem',
              outline: 'none'
            }}
          >
            <option value="all">All Pricing Models</option>
            <option value="free">Free Only</option>
            <option value="freemium">Freemium</option>
            <option value="paid">Paid</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              padding: '0.4rem 0.75rem',
              color: '#cbd5e1',
              fontSize: '0.8125rem',
              outline: 'none'
            }}
          >
            <option value="popular">Most Popular</option>
            <option value="rating">Highest Rated</option>
            <option value="reviews">Most Reviewed</option>
          </select>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid-tools">
        {filteredTools.map(tool => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>

      {filteredTools.length === 0 && (
        <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
          <p style={{ color: '#94a3b8', fontSize: '1.125rem' }}>No AI tools found matching your active filters.</p>
          <button
            onClick={() => { setSelectedCategory('all'); setPricingFilter('all'); }}
            className="btn btn-outline btn-sm"
            style={{ marginTop: '1rem' }}
          >
            Reset Filters
          </button>
        </div>
      )}
      {filteredTools.length > 0 && <div style={{textAlign:'center',marginTop:'2rem'}}><button className="btn btn-secondary" disabled title="All sample tools are currently shown">All sample tools loaded</button></div>}
      <div className="simple-panel" style={{marginTop:'3rem',display:'flex',justifyContent:'space-between',alignItems:'center',gap:'1rem',flexWrap:'wrap'}}><div><h2>Can’t find a tool?</h2><p>Founders can submit a missing product for editorial review.</p></div><Link className="btn btn-primary" to="/submit">Submit a tool</Link></div>
    </div>
  );
}
