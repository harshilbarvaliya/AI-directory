import React from 'react';
import { DollarSign, ShieldCheck, CheckCircle2 } from 'lucide-react';
import PricingCard from '../components/cards/PricingCard';
import { founderPricingPlans } from '../data/mockData';

export default function FounderPricingPage() {
  return (
    <div className="page-wrapper container">
      <div className="page-hero">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#34d399', fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
          <DollarSign size={14} />
          Transparent Pricing
        </div>
        <h1 className="page-hero-title">Founder Pricing & Listing Packages</h1>
        <p className="page-hero-desc">
          Choose between our free editorial submission queue or guaranteed launch and growth amplification packages.
        </p>
      </div>

      <div className="grid-pricing" style={{ marginBottom: '4rem' }}>
        {founderPricingPlans.map(plan => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>

      {/* Comparison Rules */}
      <div className="glass-card" style={{ padding: '2rem', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem' }}>
          Monetization & Integrity Standards
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: '700', color: '#34d399', marginBottom: '0.25rem' }}>What Money Buys</h4>
            <p style={{ fontSize: '0.8125rem', color: '#94a3b8', lineHeight: '1.5' }}>Expedited 48h review queues, labeled featured banners, newsletter slots, and telemetry access.</p>
          </div>
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: '700', color: '#fb7185', marginBottom: '0.25rem' }}>What Money Never Buys</h4>
            <p style={{ fontSize: '0.8125rem', color: '#94a3b8', lineHeight: '1.5' }}>Artificially high organic rankings, fabricated review scores, or dishonest comparison verdicts.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
