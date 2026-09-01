import React from 'react';
import { Award, Star, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { tools } from '../data/mockData';

export default function ReviewsPage() {
  return (
    <div className="page-wrapper container">
      <div className="page-hero">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#fbbf24', fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
          <Award size={14} />
          Editorial Teardowns
        </div>
        <h1 className="page-hero-title">Editorial Reviews & Benchmarks</h1>
        <p className="page-hero-desc">
          In-depth hands-on evaluations, real workflow test scores, and transparent verdict breakdowns.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {tools.slice(0, 6).map(tool => (
          <div key={tool.id} className="glass-card" style={{ padding: '1.75rem', borderRadius: '20px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <img src={tool.logo} alt={tool.name} style={{ width: '48px', height: '48px', borderRadius: '12px', objectFit: 'cover' }} />
              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#ffffff' }}>{tool.name}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#fbbf24', fontSize: '0.8125rem', fontWeight: '700' }}>
                  <Star size={13} fill="#fbbf24" stroke="none" />
                  <span>{tool.rating} / 5.0 Editorial Score</span>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: '1.5', marginBottom: '1.25rem', flex: 1 }}>
              {tool.tagline}
            </p>

            <div style={{ padding: '0.875rem', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.03)', fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '1.25rem' }}>
              <strong>Best For:</strong> {tool.bestFor}
            </div>

            <Link to={`/tool/${tool.slug}`} className="btn btn-primary btn-sm" style={{ width: '100%' }}>
              Read Full Breakdown
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
