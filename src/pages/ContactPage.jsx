import React, { useState } from 'react';
import { Mail, MessageSquare, CheckCircle2, Send } from 'lucide-react';
import Button from '../components/common/Button';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="page-wrapper container" style={{ maxWidth: '640px' }}>
      <div className="page-hero">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#818cf8', fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
          <Mail size={14} />
          Get in Touch
        </div>
        <h1 className="page-hero-title">Contact & Support</h1>
        <p className="page-hero-desc">
          Have an inquiry, sponsorship question, or want to report an inaccurate listing? Send us a message.
        </p>
      </div>

      <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '24px' }}>
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <CheckCircle2 size={48} style={{ color: '#34d399', margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.5rem' }}>Message Sent</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Thank you for reaching out. We will get back to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label style={{ fontSize: '0.8125rem', color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>Your Name</label>
              <input type="text" required placeholder="Jane Doe" style={inputStyle} />
            </div>
            <div>
              <label style={{ fontSize: '0.8125rem', color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>Email Address</label>
              <input type="email" required placeholder="jane@company.com" style={inputStyle} />
            </div>
            <div>
              <label style={{ fontSize: '0.8125rem', color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>Subject / Department</label>
              <select style={inputStyle}>
                <option>General Inquiry</option>
                <option>Founder / Submission Support</option>
                <option>Advertising / Sponsorship</option>
                <option>Report Inaccurate Listing / Broken Link</option>
              </select>
            </div>
            <div>
              <label style={{ fontSize: '0.8125rem', color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>Message</label>
              <textarea rows={4} required placeholder="How can our editorial team help you?" style={inputStyle} />
            </div>

            <Button type="submit" variant="primary" size="lg" icon={Send} iconPosition="right" style={{ width: '100%', marginTop: '0.5rem' }}>
              Send Message
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  background: 'rgba(15, 18, 28, 0.8)',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  borderRadius: '10px',
  padding: '0.625rem 0.875rem',
  color: '#ffffff',
  fontSize: '0.875rem',
  outline: 'none'
};
