import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, LayoutDashboard, Sparkles } from 'lucide-react';
import Button from '../components/common/Button';

export default function SubmitSuccessPage() {
  return (
    <div className="page-wrapper container" style={{ maxWidth: '640px', textAlign: 'center', paddingTop: '4rem' }}>
      <div
        style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          background: 'rgba(16, 185, 129, 0.15)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#34d399',
          margin: '0 auto 1.5rem'
        }}
      >
        <CheckCircle2 size={36} />
      </div>

      <h1 style={{ fontSize: '2.25rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.75rem' }}>
        Submission Received!
      </h1>
      
      <p style={{ fontSize: '1.0625rem', color: '#94a3b8', lineHeight: '1.6', marginBottom: '2rem' }}>
        Thank you for submitting your AI tool. Our editorial team has received your submission and will verify the profile details, screenshots, and licensing tiers.
      </p>

      <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '16px', textAlign: 'left', marginBottom: '2rem' }}>
        <h4 style={{ fontSize: '0.9375rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.75rem' }}>
          What happens next?
        </h4>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: '#cbd5e1', paddingLeft: '1.25rem' }}>
          <li>Editorial verification & metadata audit</li>
          <li>Confirmation email sent with listing preview</li>
          <li>Listing published to official directory & category hubs</li>
        </ul>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <Button to="/founder/dashboard" variant="primary" size="lg" icon={LayoutDashboard} iconPosition="left">
          Go to Founder Dashboard
        </Button>
        <Button to="/" variant="secondary" size="lg">
          Back to Home
        </Button>
      </div>
    </div>
  );
}
