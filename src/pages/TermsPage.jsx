import React from 'react';

export default function TermsPage() {
  return (
    <div className="page-wrapper container" style={{ maxWidth: '840px' }}>
      <div className="page-hero">
        <h1 className="page-hero-title">Terms of Service</h1>
        <p className="page-hero-desc">Last updated: September 2026</p>
      </div>

      <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '24px', display: 'flex', flexDirection: 'column', gap: '1.5rem', color: '#cbd5e1', fontSize: '0.9375rem', lineHeight: '1.7' }}>
        <h2 style={{ color: '#ffffff', fontSize: '1.25rem' }}>1. Acceptance of Terms</h2>
        <p>By accessing or using AI Directory, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.</p>

        <h2 style={{ color: '#ffffff', fontSize: '1.25rem' }}>2. Tool Submissions & Founder Responsibilities</h2>
        <p>Founders submitting products must provide accurate, non-misleading descriptions and maintain active software. We reserve the right to delist spam or deceptive tools.</p>

        <h2 style={{ color: '#ffffff', fontSize: '1.25rem' }}>3. Paid Services & Listings</h2>
        <p>Purchases of Fast Track submissions or promotion packages are subject to our Refund Policy and our independent Editorial Standards.</p>
      </div>
    </div>
  );
}
