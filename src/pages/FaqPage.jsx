import React from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FaqPage() {
  const faqs = [
    {
      q: "How are AI tools evaluated and listed?",
      a: "Our editorial team benchmarks tools for prompt comprehension, workflow efficiency, export support, and pricing honesty before approving listings."
    },
    {
      q: "Is submitting an AI tool free?",
      a: "Yes! Any founder can submit their tool for standard editorial queue review completely free of charge. Fast Track 48-hour options are available for expedited verification."
    },
    {
      q: "Can founders pay to get top rankings?",
      a: "No. Organic ranking positions and benchmark scores cannot be purchased. Sponsored tools are explicitly badged and clearly demarcated."
    },
    {
      q: "How do I claim an existing listing?",
      a: "If your tool is already indexed, click the 'Claim Listing' button on your tool's detail page or visit /claim to verify ownership with your corporate email."
    }
  ];

  return (
    <div className="page-wrapper container" style={{ maxWidth: '840px' }}>
      <div className="page-hero">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#818cf8', fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
          <HelpCircle size={14} />
          Questions & Answers
        </div>
        <h1 className="page-hero-title">Frequently Asked Questions</h1>
        <p className="page-hero-desc">
          Everything you need to know about navigating, submitting, ranking, and promoting on AI Directory.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {faqs.map((faq, idx) => (
          <div key={idx} className="glass-card" style={{ padding: '1.75rem', borderRadius: '16px' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.5rem' }}>
              {faq.q}
            </h3>
            <p style={{ fontSize: '0.9375rem', color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
