import React from 'react';
import { Link } from 'react-router-dom';
import { Tag, ShieldCheck } from 'lucide-react';
import { deals } from '../data/mockData';

export default function DealsPage() {
  return (
    <div className="page-wrapper container">
      <div className="page-hero">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#fb7185', fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
          <Tag size={14} />
          Verified Discounts
        </div>
        <h1 className="page-hero-title">Exclusive AI Deals & Offers</h1>
        <p className="page-hero-desc">
          Exclusive discount codes, promotional credits, and extended trials negotiated directly with AI founders.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {deals.map(deal => (
          <div
            key={deal.id}
            className="glass-card"
            style={{
              padding: '1.75rem',
              borderRadius: '20px',
              border: '1px solid rgba(244, 63, 94, 0.25)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#ffffff' }}>
                {deal.toolName}
              </h2>
              <span
                style={{
                  fontSize: '0.875rem',
                  fontWeight: '800',
                  background: 'rgba(244, 63, 94, 0.15)',
                  color: '#fb7185',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(244, 63, 94, 0.3)'
                }}
              >
                {deal.discount}
              </span>
            </div>

            <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: '1.5', marginBottom: '1.5rem', flex: 1 }}>
              {deal.description}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(0, 0, 0, 0.3)', padding: '0.75rem 1rem', borderRadius: '12px', border: '1px dashed rgba(255, 255, 255, 0.15)' }}>
              <span style={{ fontSize: '0.9375rem', fontFamily: 'ui-monospace, monospace', fontWeight: '600', color: '#f8fafc' }}>
                {deal.code}
              </span>
              <Link to={`/tool/${deal.toolSlug}`} className="btn btn-primary btn-sm">
                Claim Deal
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
