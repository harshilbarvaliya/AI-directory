import React from 'react';
import { ShieldCheck, CheckCircle2, Scale, Cpu, Activity } from 'lucide-react';

export default function RankingMethodologyPage() {
  return (
    <div className="page-wrapper container" style={{ maxWidth: '840px' }}>
      <div className="page-hero">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#34d399', fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
          <ShieldCheck size={14} />
          Editorial Trust
        </div>
        <h1 className="page-hero-title">How Rankings Work</h1>
        <p className="page-hero-desc">
          A transparent disclosure of the signals, benchmarks, and community metrics used to rank AI tools across our directory.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div className="glass-card" style={{ padding: '2rem', borderRadius: '20px' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Scale size={20} style={{ color: '#818cf8' }} />
            1. Organic Ranking Signals
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.9375rem', lineHeight: '1.6', marginBottom: '1rem' }}>
            Our organic ranking score is computed dynamically using a weighted composite of four core vectors:
          </p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: '1.25rem', color: '#cbd5e1', fontSize: '0.9375rem' }}>
            <li><strong>Benchmark & Output Accuracy (35%):</strong> Evaluated performance against standard domain tests (coding accuracy, image prompt adherence, voice synthesis fidelity).</li>
            <li><strong>User Satisfaction & Verified Reviews (25%):</strong> Normalized ratings from authenticated operators and verified developers.</li>
            <li><strong>Update Velocity & Changelog Health (20%):</strong> Active feature maintenance, model upgrade frequency, and bugfix cadence.</li>
            <li><strong>Value-to-Price Ratio (20%):</strong> Generosity of free/freemium tiers relative to market benchmarks.</li>
          </ul>
        </div>

        <div className="glass-card" style={{ padding: '2rem', borderRadius: '20px' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Activity size={20} style={{ color: '#34d399' }} />
            2. Anti-Bias & Editorial Firewall
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.9375rem', lineHeight: '1.6' }}>
            Sponsorship payments, Fast Track reviews, and advertising packages <strong>cannot alter organic ranking calculations</strong>. When a sponsored tool is presented on the homepage or in category headers, it is visibly badged as "Sponsored" and clearly demarcated from organic algorithm winners.
          </p>
        </div>
      </div>
    </div>
  );
}
