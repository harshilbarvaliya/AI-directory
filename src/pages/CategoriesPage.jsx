import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Sparkles } from 'lucide-react';
import CategoryCard from '../components/cards/CategoryCard';
import { categories } from '../data/mockData';

export default function CategoriesPage() {
  return (
    <div className="page-wrapper container">
      <div className="page-hero">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#c084fc', fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
          <Layers size={14} />
          Taxonomy & Ecosystems
        </div>
        <h1 className="page-hero-title">AI Tool Categories</h1>
        <p className="page-hero-desc">
          Explore structured software verticals covering code generation, copy editing, voice cloning, autonomous agents, and marketing workflows.
        </p>
      </div>

      <div className="grid-categories">
        {categories.map(cat => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>
    </div>
  );
}
