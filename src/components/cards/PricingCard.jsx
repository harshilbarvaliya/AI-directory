import React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import Button from '../common/Button';

export default function PricingCard({ plan }) {
  return (
    <div
      className={`glass-card ${plan.popular ? 'glass-card-glow' : ''}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem 1.5rem',
        borderRadius: '20px',
        border: plan.popular ? '1px solid rgba(99, 102, 241, 0.45)' : '1px solid rgba(255, 255, 255, 0.08)',
        background: plan.popular 
          ? 'linear-gradient(180deg, rgba(99, 102, 241, 0.08) 0%, rgba(18, 20, 30, 0.9) 100%)' 
          : 'rgba(18, 20, 30, 0.75)',
        position: 'relative',
        height: '100%'
      }}
    >
      {plan.badge && (
        <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
          <span
            style={{
              fontSize: '0.71875rem',
              fontWeight: '700',
              padding: '0.25rem 0.65rem',
              borderRadius: '9999px',
              background: plan.popular ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'rgba(255, 255, 255, 0.08)',
              color: '#ffffff',
              boxShadow: plan.popular ? '0 2px 10px rgba(99, 102, 241, 0.4)' : 'none'
            }}
          >
            {plan.badge}
          </span>
        </div>
      )}

      <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#f8fafc', marginBottom: '0.5rem' }}>
        {plan.name}
      </h3>

      <p style={{ fontSize: '0.84375rem', color: '#94a3b8', minHeight: '42px', marginBottom: '1.25rem', lineHeight: '1.5' }}>
        {plan.description}
      </p>

      {/* Price */}
      <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'baseline', gap: '0.375rem' }}>
        <span style={{ fontSize: '2.25rem', fontWeight: '800', fontFamily: 'Inter, sans-serif', color: '#ffffff', letterSpacing: '-0.02em' }}>
          {plan.price}
        </span>
        <span style={{ fontSize: '0.84375rem', color: '#64748b' }}>
          {plan.period}
        </span>
      </div>

      {/* CTA Button */}
      <Button
        to={`/submit/new?plan=${plan.id}`}
        variant={plan.popular ? 'primary' : 'secondary'}
        size="lg"
        style={{ width: '100%', marginBottom: '1.75rem' }}
        icon={ArrowRight}
        iconPosition="right"
      >
        {plan.cta}
      </Button>

      {/* Features List */}
      <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '1.25rem' }}>
        <span style={{ fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#64748b', display: 'block', marginBottom: '0.75rem' }}>
          What's Included:
        </span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
          {plan.features.map((feat, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.84375rem', color: '#cbd5e1' }}>
              <Check size={16} style={{ color: '#34d399', flexShrink: 0, marginTop: '2px' }} />
              <span style={{ lineHeight: '1.4' }}>{feat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
