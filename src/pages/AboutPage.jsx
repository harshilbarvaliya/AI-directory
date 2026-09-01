import React from 'react';
import { Sparkles, ShieldCheck, Target, HeartHandshake } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="page-wrapper container" style={{ maxWidth: '840px' }}>
      <div className="page-hero">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#818cf8', fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
          <Sparkles size={14} />
          Our Mission
        </div>
        <h1 className="page-hero-title">About AI Directory</h1>
        <p className="page-hero-desc">
          Building the most trusted discovery, comparison, and decision engine for modern artificial intelligence software.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div className="glass-card" style={{ padding: '2rem', borderRadius: '20px' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Target size={20} style={{ color: '#818cf8' }} />
            Why We Built AI Directory
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.9375rem', lineHeight: '1.6' }}>
            With thousands of generative AI apps and agentic tools launching every month, finding genuine software that delivers measurable value has become noisy and frustrating. AI Directory cut through marketing hype by testing tools against real benchmarks, clarifying pricing models, and establishing transparent editorial reviews.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '2rem', borderRadius: '20px' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldCheck size={20} style={{ color: '#34d399' }} />
            Our Editorial Principles
          </h2>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: '1.25rem', color: '#cbd5e1', fontSize: '0.9375rem' }}>
            <li><strong>Independence:</strong> No amount of money can buy a positive verdict or artificially inflated review score.</li>
            <li><strong>Authenticity:</strong> We test software with actual prompt workloads before awarding badges.</li>
            <li><strong>Transparency:</strong> Sponsored placements and affiliate relationships are always clearly disclosed.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
