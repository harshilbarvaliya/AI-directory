import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import Button from '../components/common/Button';

export default function GenericInfoPage({ title, tag, subtitle, content, ctaText, ctaLink }) {
  return (
    <div className="page-wrapper container" style={{ maxWidth: '840px' }}>
      <div className="page-hero">
        {tag && (
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#818cf8', fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
            <Sparkles size={14} />
            {tag}
          </div>
        )}
        <h1 className="page-hero-title">{title}</h1>
        {subtitle && <p className="page-hero-desc">{subtitle}</p>}
      </div>

      <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '24px', display: 'flex', flexDirection: 'column', gap: '1.5rem', color: '#cbd5e1', fontSize: '0.9375rem', lineHeight: '1.7' }}>
        {content}

        {ctaText && ctaLink && (
          <div style={{ marginTop: '1rem' }}>
            <Button to={ctaLink} variant="primary" size="md" icon={ArrowRight} iconPosition="right">
              {ctaText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
