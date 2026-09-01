import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="page-wrapper container" style={{ maxWidth: '840px' }}>
      <div className="page-hero">
        <h1 className="page-hero-title">Privacy Policy</h1>
        <p className="page-hero-desc">Last updated: September 2026</p>
      </div>

      <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '24px', display: 'flex', flexDirection: 'column', gap: '1.5rem', color: '#cbd5e1', fontSize: '0.9375rem', lineHeight: '1.7' }}>
        <h2 style={{ color: '#ffffff', fontSize: '1.25rem' }}>1. Data We Collect</h2>
        <p>We collect information you provide directly to us when you create an account, submit a product, sign up for our weekly dispatch newsletter, or contact support.</p>

        <h2 style={{ color: '#ffffff', fontSize: '1.25rem' }}>2. How We Use Data</h2>
        <p>We use your information to operate, maintain, and enhance the AI Directory platform, process founder submissions, and send curated updates.</p>

        <h2 style={{ color: '#ffffff', fontSize: '1.25rem' }}>3. Cookies & Analytics</h2>
        <p>We utilize essential and performance analytics cookies to understand user interaction patterns and optimize directory discovery.</p>
      </div>
    </div>
  );
}
