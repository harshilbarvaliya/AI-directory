import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Sliders, Layers } from 'lucide-react';
import Button from '../components/common/Button';
import ToolCard from '../components/cards/ToolCard';
import { tools } from '../data/mockData';

export default function AiFinderPage() {
  const [role, setRole] = useState('developer');
  const [budget, setBudget] = useState('freemium');

  return (
    <div className="page-wrapper container">
      <div className="page-hero">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#38bdf8', fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
          <Sparkles size={14} />
          Interactive Matchmaker
        </div>
        <h1 className="page-hero-title">AI Tool Finder & Matchmaker</h1>
        <p className="page-hero-desc">
          Answer 2 simple questions to generate a tailored recommendation stack matched to your specific role and budget requirements.
        </p>
      </div>

      {/* Matchmaker Interactive Card */}
      <div
        className="glass-card"
        style={{
          maxWidth: '720px',
          margin: '0 auto 3.5rem',
          padding: '2.5rem',
          borderRadius: '24px',
          border: '1px solid rgba(99, 102, 241, 0.3)'
        }}
      >
        <div style={{ marginBottom: '2rem' }}>
          <label style={{ fontSize: '0.9375rem', fontWeight: '700', color: '#f8fafc', display: 'block', marginBottom: '0.75rem' }}>
            1. What is your primary focus?
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem' }}>
            {[
              { id: 'developer', label: 'Developer / Engineer' },
              { id: 'marketer', label: 'Marketer / Writer' },
              { id: 'creator', label: 'Designer / Creator' },
              { id: 'founder', label: 'Founder / Executive' }
            ].map(item => (
              <button
                key={item.id}
                type="button"
                onClick={() => setRole(item.id)}
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  border: `1px solid ${role === item.id ? '#6366f1' : 'rgba(255, 255, 255, 0.1)'}`,
                  background: role === item.id ? 'rgba(99, 102, 241, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                  color: role === item.id ? '#ffffff' : '#94a3b8',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  textAlign: 'center'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <label style={{ fontSize: '0.9375rem', fontWeight: '700', color: '#f8fafc', display: 'block', marginBottom: '0.75rem' }}>
            2. What is your preferred budget model?
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem' }}>
            {[
              { id: 'free', label: '100% Free' },
              { id: 'freemium', label: 'Freemium / Flexible' },
              { id: 'paid', label: 'Paid Pro Tools ($20+/mo)' }
            ].map(item => (
              <button
                key={item.id}
                type="button"
                onClick={() => setBudget(item.id)}
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  border: `1px solid ${budget === item.id ? '#6366f1' : 'rgba(255, 255, 255, 0.1)'}`,
                  background: budget === item.id ? 'rgba(99, 102, 241, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                  color: budget === item.id ? '#ffffff' : '#94a3b8',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  textAlign: 'center'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Button variant="primary" size="lg" icon={Sparkles} iconPosition="left" style={{ width: '100%' }}>
            Generate Recommended Stack
          </Button>
        </div>
      </div>

      {/* Suggested Matches */}
      <div className="section-header">
        <h2 className="section-title" style={{ fontSize: '1.75rem' }}>
          Curated Suggestions for Your Profile
        </h2>
      </div>

      <div className="grid-tools">
        {tools.slice(0, 3).map(tool => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}
