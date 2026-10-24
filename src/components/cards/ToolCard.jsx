import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ExternalLink, Bookmark, Check, ArrowUpRight } from 'lucide-react';
import Badge from '../common/Badge';

export default function ToolCard({ tool, featured = false, compact = false }) {
  const [saved, setSaved] = useState(false);

  const toggleSave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSaved(!saved);
  };

  return (
    <div
      className={`glass-card tool-card ${compact ? 'tool-card-compact' : ''} ${tool.sponsored ? 'glass-card-glow' : ''}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: compact ? '1rem' : '1.25rem',
        borderRadius: '16px',
        border: tool.sponsored ? '1px solid rgba(245, 158, 11, 0.25)' : undefined
      }}
    >
      {/* Header with Logo, Name, Meta & Bookmark */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.875rem', marginBottom: '0.875rem' }}>
        <Link to={`/tool/${tool.slug}`} style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', textDecoration: 'none', flex: 1, minWidth: 0 }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              overflow: 'hidden',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img
              src={tool.logo}
              alt={`${tool.name} logo`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="lazy"
            />
          </div>

          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#f8fafc', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {tool.name}
              </h3>
              {tool.verified && <Badge type="verified" />}
              {tool.sponsored && <Badge type="sponsored" />}
              {tool.new && <Badge type="new" />}
            </div>
            <span style={{ fontSize: '0.8125rem', color: '#94a3b8' }}>
              {tool.category}
            </span>
          </div>
        </Link>

        {!compact && <button
          className="tool-save-button"
          type="button"
          onClick={toggleSave}
          title={saved ? "Remove from saved" : "Save tool"}
          style={{
            background: saved ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255, 255, 255, 0.04)',
            border: `1px solid ${saved ? 'rgba(99, 102, 241, 0.4)' : 'rgba(255, 255, 255, 0.08)'}`,
            borderRadius: '8px',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: saved ? '#818cf8' : '#64748b',
            cursor: 'pointer',
            flexShrink: 0,
            transition: 'all 0.15s ease'
          }}
        >
          <Bookmark size={15} fill={saved ? 'currentColor' : 'none'} />
        </button>}
      </div>

      {/* Tagline */}
      <p
        style={{
          fontSize: '0.875rem',
          color: '#94a3b8',
          lineHeight: '1.5',
          marginBottom: '1rem',
          display: '-webkit-box',
          WebkitLineClamp: compact ? 1 : 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          flex: '0 0 auto'
        }}
      >
        {tool.tagline}
      </p>

      {/* Key Feature Bullets */}
      {!compact && tool.features && (
        <div style={{ marginBottom: '1.25rem', flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            {tool.features.slice(0, 2).map((feat, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78125rem', color: '#cbd5e1' }}>
                <Check size={13} style={{ color: '#34d399', flexShrink: 0 }} />
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Card Footer: Rating, Pricing Tag, and Actions */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '0.875rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          marginTop: 'auto',
          gap: '0.5rem'
        }}
      >
        {/* Rating & Pricing */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8125rem', fontWeight: '600', color: '#fbbf24' }}>
            <Star size={13} fill="#fbbf24" stroke="none" />
            <span>{tool.rating}</span>
            <span style={{ color: '#64748b', fontWeight: '400', fontSize: '0.75rem' }}>({tool.reviewsCount})</span>
          </div>

          <Badge type={tool.pricingType.toLowerCase()}>
            {tool.startingPrice ? `${tool.pricingType} • ${tool.startingPrice}` : tool.pricingType}
          </Badge>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          <Link
            to={`/tool/${tool.slug}`}
            className="btn btn-secondary btn-sm"
            style={{ padding: '0.35rem 0.65rem', fontSize: '0.75rem' }}
          >
            Details
          </Link>
          {!compact && <a
            href={tool.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
            style={{ padding: '0.35rem 0.65rem', fontSize: '0.75rem' }}
            title="Visit official website"
          >
            <span>Visit</span>
            <ArrowUpRight size={13} />
          </a>}
        </div>
      </div>
    </div>
  );
}
