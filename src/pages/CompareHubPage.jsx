import React from 'react';
import { Link } from 'react-router-dom';
import { GitCompare, ArrowRight, Sparkles } from 'lucide-react';
import { comparisons } from '../data/mockData';

export default function CompareHubPage() {
  return (
    <div className="page-wrapper container">
      <div className="page-hero">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#818cf8', fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
          <GitCompare size={14} />
          Side-by-Side Matrices
        </div>
        <h1 className="page-hero-title">Compare AI Tools</h1>
        <p className="page-hero-desc">
          Unbiased side-by-side feature comparisons, pricing breakdowns, benchmark scores, and ideal use cases.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {comparisons.map(comp => (
          <Link
            key={comp.id}
            to={`/compare/${comp.slug}`}
            className="glass-card"
            style={{
              padding: '1.75rem',
              borderRadius: '20px',
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#818cf8', background: 'rgba(99, 102, 241, 0.12)', padding: '0.2rem 0.6rem', borderRadius: '6px' }}>
                {comp.category}
              </span>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#fb923c' }}>
                {comp.badge}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', margin: '0.75rem 0 1.25rem' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: '800', color: '#ffffff' }}>{comp.toolA}</span>
              <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#64748b', background: 'rgba(255, 255, 255, 0.08)', padding: '0.2rem 0.5rem', borderRadius: '6px' }}>VS</span>
              <span style={{ fontSize: '1.25rem', fontWeight: '800', color: '#ffffff' }}>{comp.toolB}</span>
            </div>

            <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: '1.5', marginBottom: '1.5rem', flex: 1 }}>
              {comp.summary}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#818cf8', fontWeight: '600', fontSize: '0.875rem', marginTop: 'auto' }}>
              <span>View Full Matrix</span>
              <ArrowRight size={15} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
