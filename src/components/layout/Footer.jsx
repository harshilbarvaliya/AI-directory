import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Mail, Check, ShieldCheck, ArrowRight, Github, Twitter, Linkedin } from 'lucide-react';
import Button from '../common/Button';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer
      style={{
        background: '#07080c',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '4.5rem',
        paddingBottom: '3rem',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container">
        
        {/* Newsletter Section Box */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(139, 92, 246, 0.05) 50%, rgba(6, 182, 212, 0.08) 100%)',
            border: '1px solid rgba(99, 102, 241, 0.25)',
            borderRadius: '20px',
            padding: '2.5rem 2rem',
            marginBottom: '4rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem'
          }}
        >
          <div style={{ maxWidth: '520px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8125rem', fontWeight: '700', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
              <Mail size={14} />
              The AI Directory Dispatch
            </div>
            <h3 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.5rem' }}>
              Stay ahead with curated AI breakdowns
            </h3>
            <p style={{ fontSize: '0.9375rem', color: '#94a3b8', lineHeight: '1.5' }}>
              Get our weekly breakdown of genuine AI tool launches, stack comparisons, and exclusive founder discounts. Zero spam.
            </p>
          </div>

          <div style={{ minWidth: '320px', flex: '1 1 320px', maxWidth: '460px' }}>
            {subscribed ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '1rem 1.25rem',
                  borderRadius: '12px',
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  color: '#34d399',
                  fontWeight: '600'
                }}
              >
                <Check size={18} />
                <span>You're subscribed! Welcome to the AI Directory Dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email..."
                  style={{
                    flex: 1,
                    background: 'rgba(15, 18, 28, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '10px',
                    padding: '0.75rem 1rem',
                    color: '#ffffff',
                    fontSize: '0.9375rem',
                    outline: 'none'
                  }}
                />
                <Button type="submit" variant="primary" size="md" icon={ArrowRight} iconPosition="right">
                  Subscribe
                </Button>
              </form>
            )}
            <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748b', marginTop: '0.5rem' }}>
              Newsletter automation is not connected yet. Unsubscribe controls will be included before launch.
            </span>
          </div>
        </div>

        {/* 5-Column Navigation Grid matching Excel Navigation sheet */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* Col 1: Discover */}
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: '700', color: '#f8fafc', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Discover
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              <li><Link to="/tools" style={footerLinkStyle}>All AI Tools</Link></li>
              <li><Link to="/categories" style={footerLinkStyle}>Categories</Link></li>
              <li><Link to="/tasks" style={footerLinkStyle}>Tasks & Use Cases</Link></li>
              <li><Link to="/industries" style={footerLinkStyle}>Industries</Link></li>
              <li><Link to="/free-ai-tools" style={footerLinkStyle}>Free AI Tools</Link></li>
              <li><Link to="/trending" style={footerLinkStyle}>Trending AI Tools</Link></li>
              <li><Link to="/new" style={footerLinkStyle}>New Releases</Link></li>
            </ul>
          </div>

          {/* Col 2: Resources & Comparison */}
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: '700', color: '#f8fafc', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Resources
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              <li><Link to="/compare" style={footerLinkStyle}>Compare Hub</Link></li>
              <li><Link to="/alternatives" style={footerLinkStyle}>Tool Alternatives</Link></li>
              <li><Link to="/ai-finder" style={footerLinkStyle}>AI Matchmaker Finder</Link></li>
              <li><Link to="/reviews" style={footerLinkStyle}>Editorial Reviews</Link></li>
              <li><Link to="/deals" style={footerLinkStyle}>Exclusive AI Deals</Link></li>
              <li><Link to="/blog" style={footerLinkStyle}>Blog & Growth Guides</Link></li>
              <li><Link to="/launches" style={footerLinkStyle}>AI Launches</Link></li>
            </ul>
          </div>

          {/* Col 3: For Founders */}
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: '700', color: '#f8fafc', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              For Founders
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              <li><Link to="/submit" style={footerLinkStyle}>Submit AI Tool</Link></li>
              <li><Link to="/pricing" style={footerLinkStyle}>Founder Pricing & Plans</Link></li>
              <li><Link to="/promote" style={footerLinkStyle}>Promote Your Tool</Link></li>
              <li><Link to="/verified" style={footerLinkStyle}>Get Verified Badge</Link></li>
              <li><Link to="/claim" style={footerLinkStyle}>Claim Existing Listing</Link></li>
              <li><Link to="/advertise" style={footerLinkStyle}>Advertise / Sponsor</Link></li>
              <li><Link to="/founder/dashboard" style={footerLinkStyle}>Founder Dashboard</Link></li>
            </ul>
          </div>

          {/* Col 4: Trust & Methodology */}
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: '700', color: '#f8fafc', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Trust & Integrity
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              <li><Link to="/about" style={footerLinkStyle}>About AI Directory</Link></li>
              <li><Link to="/ranking-methodology" style={footerLinkStyle}>How Rankings Work</Link></li>
              <li><Link to="/review-methodology" style={footerLinkStyle}>Review Methodology</Link></li>
              <li><Link to="/sponsored-policy" style={footerLinkStyle}>Sponsored Content Policy</Link></li>
              <li><Link to="/faq" style={footerLinkStyle}>Frequently Asked Questions</Link></li>
              <li><Link to="/contact" style={footerLinkStyle}>Contact & Support</Link></li>
            </ul>
          </div>

          {/* Col 5: Legal */}
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: '700', color: '#f8fafc', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Legal & Policy
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              <li><Link to="/terms" style={footerLinkStyle}>Terms of Service</Link></li>
              <li><Link to="/privacy" style={footerLinkStyle}>Privacy Policy</Link></li>
              <li><Link to="/cookies" style={footerLinkStyle}>Cookie Policy</Link></li>
              <li><Link to="/refund-policy" style={footerLinkStyle}>Refund Policy</Link></li>
              <li><Link to="/community-guidelines" style={footerLinkStyle}>Community & UGC Guidelines</Link></li>
            </ul>
          </div>
        </div>

        {/* Ethical Transparency Disclaimer */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            background: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.875rem',
            marginBottom: '2.5rem'
          }}
        >
          <ShieldCheck size={24} style={{ color: '#34d399', flexShrink: 0 }} />
          <p style={{ fontSize: '0.8125rem', color: '#94a3b8', margin: 0, lineHeight: '1.5' }}>
            <strong style={{ color: '#f8fafc' }}>Editorial Independence Guarantee:</strong> Sponsored listings and advertisements are clearly labeled across AI Directory. Paid placement does not alter organic rankings, editorial reviews, or benchmark scores.
          </p>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '6px',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff'
              }}
            >
              <Sparkles size={13} />
            </div>
            <span style={{ fontSize: '0.875rem', color: '#64748b' }}>
              © {new Date().getFullYear()} AI Directory. Built for the AI ecosystem.
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle} aria-label="Twitter">
              <Twitter size={16} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle} aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle} aria-label="GitHub">
              <Github size={16} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

const footerLinkStyle = {
  fontSize: '0.875rem',
  color: '#94a3b8',
  textDecoration: 'none',
  transition: 'color 0.15s ease'
};

const socialIconStyle = {
  width: '36px',
  height: '36px',
  borderRadius: '8px',
  background: 'rgba(255, 255, 255, 0.04)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#94a3b8',
  textDecoration: 'none',
  transition: 'all 0.15s ease'
};
