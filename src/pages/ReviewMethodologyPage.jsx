import React from 'react';
import { Award, CheckCircle2, ShieldAlert, Cpu } from 'lucide-react';

export default function ReviewMethodologyPage() {
  return (
    <div className="page-wrapper container" style={{ maxWidth: '840px' }}>
      <div className="page-hero">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#818cf8', fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
          <Award size={14} />
          Editorial Standards
        </div>
        <h1 className="page-hero-title">Review Methodology</h1>
        <p className="page-hero-desc">
          How our editorial staff and independent reviewers test, score, and critique software in real-world environments.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div className="glass-card" style={{ padding: '2rem', borderRadius: '20px' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem' }}>
            Hands-On Testing Protocols
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.9375rem', lineHeight: '1.6', marginBottom: '1rem' }}>
            Every tool given an editorial breakdown undergoes a minimum 14-day evaluation period involving:
          </p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: '1.25rem', color: '#cbd5e1', fontSize: '0.9375rem' }}>
            <li><strong>Stress-testing prompt adherence:</strong> Pushing edge cases, complex logic prompts, multi-modal vision inputs, and long context loads.</li>
            <li><strong>UI & Workflow friction audit:</strong> Evaluating setup complexity, API latency, export flexibility, and browser performance.</li>
            <li><strong>Data privacy & retention inspection:</strong> Checking whether user inputs are used to train foundational models by default.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
