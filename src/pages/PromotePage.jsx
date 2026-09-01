import React from 'react';
import { Rocket, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import Button from '../components/common/Button';
import PricingCard from '../components/cards/PricingCard';
import { founderPricingPlans } from '../data/mockData';

export default function PromotePage() {
  return (
    <div className="page-wrapper container">
      <div className="page-hero">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#fb923c', fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
          <Zap size={14} />
          Growth & Promotion
        </div>
        <h1 className="page-hero-title">Promote Your AI Product</h1>
        <p className="page-hero-desc">
          Accelerate your distribution with transparent featured spots, homepage spotlights, newsletter dispatches, and category sponsorships.
        </p>
      </div>

      <div className="grid-pricing">
        {founderPricingPlans.map(plan => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
}
