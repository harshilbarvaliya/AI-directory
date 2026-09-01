import React from 'react';
import { Rocket, CheckCircle2, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import Button from '../components/common/Button';
import PricingCard from '../components/cards/PricingCard';
import { founderPricingPlans } from '../data/mockData';

export default function SubmitPage() {
  return (
    <div className="page-wrapper container">
      {/* Hero Section */}
      <div className="page-hero">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#818cf8', fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
          <Rocket size={14} />
          Founder Growth Engine
        </div>
        <h1 className="page-hero-title">Submit & Launch Your AI Tool</h1>
        <p className="page-hero-desc">
          Get your software in front of thousands of developers, founders, and AI enthusiasts seeking modern workflow automation.
        </p>
        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Button to="/submit/new" variant="primary" size="lg" icon={Rocket} iconPosition="left">
            Start Submission Form
          </Button>
          <Button to="/pricing" variant="secondary" size="lg">
            Compare Founder Plans
          </Button>
        </div>
      </div>

      {/* Submission Plan Grid */}
      <div className="section-header" style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h2 className="section-title">Select a Listing or Promotion Package</h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          Standard organic queue is completely free. Fast Track and Launch packages provide guaranteed review timelines, homepage spotlight, and telemetry.
        </p>
      </div>

      <div className="grid-pricing" style={{ marginBottom: '4rem' }}>
        {founderPricingPlans.slice(0, 3).map(plan => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>

      {/* Trust Guarantee */}
      <div
        className="glass-card"
        style={{
          padding: '2rem',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <ShieldCheck size={32} style={{ color: '#34d399', flexShrink: 0 }} />
        <div>
          <h4 style={{ fontSize: '1.0625rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.25rem' }}>
            Our Editorial Transparency Commitment
          </h4>
          <p style={{ fontSize: '0.875rem', color: '#94a3b8', margin: 0 }}>
            Purchasing a Fast Track or Pro Launch package expedites review queue time and provides labeled featured placements. Payment does not guarantee an artificially positive review or alter our organic ranking algorithm.
          </p>
        </div>
      </div>
    </div>
  );
}
