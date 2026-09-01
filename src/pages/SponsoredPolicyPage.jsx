import React from 'react';
import { Tag, ShieldCheck, AlertCircle } from 'lucide-react';

export default function SponsoredPolicyPage() {
  return (
    <div className="page-wrapper container" style={{ maxWidth: '840px' }}>
      <div className="page-hero">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#fbbf24', fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
          <Tag size={14} />
          Full Disclosure
        </div>
        <h1 className="page-hero-title">Sponsored Content Policy</h1>
        <p className="page-hero-desc">
          Clear rules on paid placements, affiliate commissions, and advertising transparency.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div className="glass-card" style={{ padding: '2rem', borderRadius: '20px' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem' }}>
            1. Clear Labeling
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.9375rem', lineHeight: '1.6' }}>
            Every promotional slot, featured listing, and newsletter sponsor on AI Directory is unambiguously labeled with a "Sponsored" or "Featured" badge. We never disguise paid advertising as organic editorial recommendations.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '2rem', borderRadius: '20px' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem' }}>
            2. Affiliate Disclosure
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.9375rem', lineHeight: '1.6' }}>
            Some outbound links to AI tools and deals may contain affiliate referral tracking codes. When you purchase a subscription via our links, we may earn a small commission at no additional cost to you. Affiliate partnerships never influence our review scores or comparative pros and cons.
          </p>
        </div>
      </div>
    </div>
  );
}
