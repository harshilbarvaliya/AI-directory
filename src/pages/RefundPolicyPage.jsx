import React from 'react';

export default function RefundPolicyPage() {
  return (
    <div className="page-wrapper container" style={{ maxWidth: '840px' }}>
      <div className="page-hero">
        <h1 className="page-hero-title">Refund Policy</h1>
        <p className="page-hero-desc">Last updated: September 2026</p>
      </div>

      <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '24px', display: 'flex', flexDirection: 'column', gap: '1.5rem', color: '#cbd5e1', fontSize: '0.9375rem', lineHeight: '1.7' }}>
        <h2 style={{ color: '#ffffff', fontSize: '1.25rem' }}>1. Fast Track & Submission Services</h2>
        <p>If our editorial team fails to review your tool within the guaranteed 48-hour window for Fast Track submissions, you are entitled to a 100% full refund upon request.</p>

        <h2 style={{ color: '#ffffff', fontSize: '1.25rem' }}>2. Rejections & Delistings</h2>
        <p>If a submitted tool fails our security, safety, or quality audit prior to publishing, any paid listing fees will be refunded immediately.</p>

        <h2 style={{ color: '#ffffff', fontSize: '1.25rem' }}>3. How to Request a Refund</h2>
        <p>Contact support@aidirectory.example with your invoice ID and submission URL. Refunds are processed back to the original payment method within 3 to 5 business days.</p>
      </div>
    </div>
  );
}
