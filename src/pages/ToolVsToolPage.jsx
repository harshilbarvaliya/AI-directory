import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { GitCompare, ChevronRight, Check, X, Star, ExternalLink, ArrowRight } from 'lucide-react';
import Button from '../components/common/Button';
import { comparisons, tools } from '../data/mockData';

export default function ToolVsToolPage() {
  const { compareSlug } = useParams();
  const comp = comparisons.find(c => c.slug === compareSlug) || comparisons[0];
  
  return (
    <div className="page-wrapper container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <ChevronRight size={14} className="breadcrumb-separator" />
        <Link to="/compare">Compare Hub</Link>
        <ChevronRight size={14} className="breadcrumb-separator" />
        <span style={{ color: '#f8fafc' }}>{comp.toolA} vs {comp.toolB}</span>
      </div>

      {/* Comparison Hero */}
      <div className="page-hero page-feature-hero comparison-page-hero">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#818cf8', fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
          <GitCompare size={14} />
          Direct Comparison Breakdown
        </div>
        <h1 className="page-hero-title">
          {comp.toolA} <span className="text-gradient">vs</span> {comp.toolB}
        </h1>
        <p className="page-hero-desc">
          {comp.summary}
        </p>
      </div>

      {/* Comparison Matrix Table */}
      <div
        className="glass-card"
        style={{
          borderRadius: '20px',
          overflow: 'hidden',
          marginBottom: '3.5rem',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <table className="data-table comparison-matrix">
          <thead>
            <tr style={{ background: 'rgba(255, 255, 255, 0.04)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <th style={{ padding: '1.5rem', fontSize: '1rem', color: '#64748b', width: '30%' }}>Feature / Dimension</th>
              <th style={{ padding: '1.5rem', fontSize: '1.25rem', color: '#ffffff', fontWeight: '700', width: '35%' }}>{comp.toolA}</th>
              <th style={{ padding: '1.5rem', fontSize: '1.25rem', color: '#ffffff', fontWeight: '700', width: '35%' }}>{comp.toolB}</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <td style={{ padding: '1.25rem 1.5rem', fontWeight: '600', color: '#cbd5e1' }}>Category</td>
              <td style={{ padding: '1.25rem 1.5rem', color: '#94a3b8' }}>{comp.category}</td>
              <td style={{ padding: '1.25rem 1.5rem', color: '#94a3b8' }}>{comp.category}</td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <td style={{ padding: '1.25rem 1.5rem', fontWeight: '600', color: '#cbd5e1' }}>Overall Score</td>
              <td style={{ padding: '1.25rem 1.5rem', color: '#fbbf24', fontWeight: '700' }}>★ 4.9 / 5.0</td>
              <td style={{ padding: '1.25rem 1.5rem', color: '#fbbf24', fontWeight: '700' }}>★ 4.8 / 5.0</td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <td style={{ padding: '1.25rem 1.5rem', fontWeight: '600', color: '#cbd5e1' }}>Pricing Model</td>
              <td style={{ padding: '1.25rem 1.5rem', color: '#cbd5e1' }}>Freemium (from $20/mo)</td>
              <td style={{ padding: '1.25rem 1.5rem', color: '#cbd5e1' }}>Freemium (from $10/mo)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <td style={{ padding: '1.25rem 1.5rem', fontWeight: '600', color: '#cbd5e1' }}>Primary Advantage</td>
              <td style={{ padding: '1.25rem 1.5rem', color: '#34d399' }}>Full repo context & multi-file reasoning</td>
              <td style={{ padding: '1.25rem 1.5rem', color: '#38bdf8' }}>Native IDE integration & ecosystem depth</td>
            </tr>
            <tr>
              <td style={{ padding: '1.5rem', fontWeight: '600', color: '#cbd5e1' }}>Verdict Recommendation</td>
              <td style={{ padding: '1.5rem' }}>
                <span style={{ display: 'inline-block', padding: '0.4rem 0.85rem', borderRadius: '8px', background: 'rgba(99, 102, 241, 0.15)', color: '#818cf8', fontWeight: '700', fontSize: '0.8125rem' }}>
                  Best for Power Users
                </span>
              </td>
              <td style={{ padding: '1.5rem' }}>
                <span style={{ display: 'inline-block', padding: '0.4rem 0.85rem', borderRadius: '8px', background: 'rgba(6, 182, 212, 0.15)', color: '#22d3ee', fontWeight: '700', fontSize: '0.8125rem' }}>
                  Best for Enterprise Teams
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Action CTA */}
      <div style={{ textAlign: 'center' }}>
        <Button to="/compare" variant="outline" size="lg">
          Explore Other Comparisons
        </Button>
      </div>
    </div>
  );
}
