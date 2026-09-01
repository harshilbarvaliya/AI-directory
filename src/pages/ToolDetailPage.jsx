import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Star, ExternalLink, ShieldCheck, Check, X, Bookmark, 
  ChevronRight, ArrowRight, GitCompare, MessageSquare, 
  CheckCircle2, AlertCircle, Share2 
} from 'lucide-react';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import ToolCard from '../components/cards/ToolCard';
import { tools } from '../data/mockData';

export default function ToolDetailPage() {
  const { slug } = useParams();
  const [saved, setSaved] = useState(false);
  const tool = tools.find(t => t.slug === slug) || tools[0];
  const relatedTools = tools.filter(t => t.id !== tool.id && t.categorySlug === tool.categorySlug).slice(0, 3);

  return (
    <div className="page-wrapper container">
      <div className="demo-banner">Sample directory listing for development. Ratings, review counts, offers, and verification states shown here are not production claims.</div>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <ChevronRight size={14} className="breadcrumb-separator" />
        <Link to="/tools">Tools</Link>
        <ChevronRight size={14} className="breadcrumb-separator" />
        <Link to={`/category/${tool.categorySlug}`}>{tool.category}</Link>
        <ChevronRight size={14} className="breadcrumb-separator" />
        <span style={{ color: '#f8fafc' }}>{tool.name}</span>
      </div>

      <section className="content-section"><h2>Product overview</h2><div className="simple-panel"><p>{tool.tagline}. This sample profile demonstrates the long-form description area where independently reviewed product details, platform support, and important limitations will appear.</p></div></section>
      <section className="content-section"><h2>Screenshots & demo</h2><div className="simple-grid"><div className="simple-panel" style={{minHeight:160}}><strong>Product screenshot</strong><p>Media will appear after the founder supplies approved screenshots.</p></div><div className="simple-panel" style={{minHeight:160}}><strong>Demo video</strong><p>No demo video has been supplied for this sample listing.</p></div></div></section>

      {/* Main Tool Header Card */}
      <div
        style={{
          background: 'rgba(18, 20, 30, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24px',
          padding: '2.5rem',
          marginBottom: '2.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '2rem'
        }}
      >
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '20px',
              overflow: 'hidden',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              flexShrink: 0
            }}
          >
            <img
              src={tool.logo}
              alt={tool.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div style={{ maxWidth: '600px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
              <h1 style={{ fontSize: '2.25rem', fontWeight: '800', color: '#ffffff' }}>
                {tool.name}
              </h1>
              {tool.verified && <Badge type="verified" />}
              {tool.sponsored && <Badge type="sponsored" />}
              <Badge type={tool.pricingType.toLowerCase()}>{tool.pricingType}</Badge>
            </div>

            <p style={{ fontSize: '1.125rem', color: '#cbd5e1', lineHeight: '1.6', marginBottom: '1rem' }}>
              {tool.tagline}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#fbbf24', fontWeight: '700' }}>
                <Star size={16} fill="#fbbf24" stroke="none" />
                <span>{tool.rating}</span>
                <span style={{ color: '#64748b', fontWeight: '400' }}>({tool.reviewsCount} user reviews)</span>
              </div>
              <span style={{ color: '#64748b' }}>•</span>
              <span style={{ color: '#94a3b8' }}>Starting from <strong style={{ color: '#ffffff' }}>{tool.startingPrice}</strong></span>
              {tool.freeTrial && (
                <>
                  <span style={{ color: '#64748b' }}>•</span>
                  <span style={{ color: '#34d399', fontWeight: '600' }}>Free Trial Available</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Header Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => setSaved(!saved)}
            className="btn btn-secondary"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <Bookmark size={16} fill={saved ? 'currentColor' : 'none'} color={saved ? '#818cf8' : 'currentColor'} />
            <span>{saved ? 'Saved' : 'Save Tool'}</span>
          </button>

          <Button
            href={tool.websiteUrl}
            variant="primary"
            size="lg"
            icon={ExternalLink}
            iconPosition="right"
          >
            Visit Official Website
          </Button>
        </div>
      </div>

      <section className="content-section"><h2>Pros and cons</h2><div className="simple-grid"><div className="simple-panel"><h3>Pros</h3><ul style={{paddingLeft:'1.25rem'}}><li>Clear fit for its stated audience</li><li>Trial availability is shown transparently</li><li>Core capabilities are easy to compare</li></ul></div><div className="simple-panel"><h3>Cons</h3><ul style={{paddingLeft:'1.25rem'}}><li>Provider limits and prices can change</li><li>May not fit the users listed under “Not ideal for”</li><li>Independent testing is still pending for this sample</li></ul></div></div></section>
      <section className="content-section"><h2>Use cases</h2><div style={{display:'flex',gap:'.5rem',flexWrap:'wrap'}}>{tool.tasks?.map(x=><span className="badge badge-subtle" key={x}>{x}</span>)}</div></section>
      <section className="content-section"><h2>Ratings and reviews</h2><div className="simple-panel"><p>The review structure is ready, but production reviews require authenticated submission and moderation. No sample rating should be treated as verified user feedback.</p><Link className="btn btn-secondary btn-sm" to="/review-methodology">Read review methodology</Link></div></section>
      <section className="content-section"><h2>Founder information & Q&amp;A</h2><div className="simple-panel"><p>No verified founder response has been supplied for this sample listing. Claimed listings can add company details and answer editorial questions.</p><Link className="btn btn-secondary btn-sm" to="/claim">Claim listing</Link></div></section>
      <section className="content-section"><h2>Frequently asked questions</h2><div className="simple-grid"><div className="simple-panel"><h3>Is a free trial available?</h3><p>{tool.freeTrial?'The sample data indicates a trial. Confirm current terms on the provider website.':'No trial is recorded in the sample data.'}</p></div><div className="simple-panel"><h3>Is this placement sponsored?</h3><p>{tool.sponsored?'Yes. This listing carries a visible Sponsored label. Sponsorship does not affect organic rankings.':'No sponsored placement is indicated.'}</p></div></div></section>
      <section className="content-section"><div className="simple-panel" style={{display:'flex',justifyContent:'space-between',gap:'1rem',flexWrap:'wrap'}}><div><h2>Listing accuracy</h2><p>Found an issue or represent this product?</p></div><div style={{display:'flex',gap:'.5rem',alignItems:'center'}}><Link className="btn btn-secondary" to="/contact">Report listing</Link><Link className="btn btn-primary" to="/claim">Claim listing</Link></div></div></section>

      {/* 2-Column Content Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
        
        {/* Left Column: What it does, Features, Best for */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Key Features Card */}
          <div className="glass-card" style={{ padding: '2rem', borderRadius: '20px' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#ffffff', marginBottom: '1.25rem' }}>
              Core Capabilities & Features
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {tool.features && tool.features.map((feat, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.9375rem', color: '#cbd5e1' }}>
                  <CheckCircle2 size={18} style={{ color: '#34d399', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ lineHeight: '1.5' }}>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Best For vs Not Ideal For Breakdown */}
          <div className="glass-card" style={{ padding: '2rem', borderRadius: '20px' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#ffffff', marginBottom: '1.25rem' }}>
              Editorial Assessment: Fit & Suitability
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ padding: '1rem', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: '700', color: '#34d399', fontSize: '0.875rem', marginBottom: '0.35rem' }}>
                  <Check size={16} />
                  Best For:
                </div>
                <p style={{ fontSize: '0.875rem', color: '#cbd5e1', lineHeight: '1.5', margin: 0 }}>
                  {tool.bestFor}
                </p>
              </div>

              <div style={{ padding: '1rem', borderRadius: '12px', background: 'rgba(244, 63, 94, 0.08)', border: '1px solid rgba(244, 63, 94, 0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: '700', color: '#fb7185', fontSize: '0.875rem', marginBottom: '0.35rem' }}>
                  <AlertCircle size={16} />
                  Not Ideal For:
                </div>
                <p style={{ fontSize: '0.875rem', color: '#cbd5e1', lineHeight: '1.5', margin: 0 }}>
                  {tool.notIdealFor}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Pricing details, Comparisons, Founder Q&A */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Pricing Model Card */}
          <div className="glass-card" style={{ padding: '2rem', borderRadius: '20px' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem' }}>
              Pricing & Plans
            </h2>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: '800', color: '#ffffff', fontFamily: 'Inter, sans-serif' }}>
                {tool.startingPrice}
              </span>
              <span style={{ color: '#64748b', fontSize: '0.9375rem' }}>tier starting tier</span>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: '1.5', marginBottom: '1.5rem' }}>
              Structured under {tool.pricingType} licensing with commercial usage rights. Free evaluation tier available.
            </p>
            <Button href={tool.websiteUrl} variant="primary" style={{ width: '100%' }}>
              View Complete Pricing Tiers
            </Button>
          </div>

          {/* Quick Comparison Links */}
          <div className="glass-card" style={{ padding: '2rem', borderRadius: '20px' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem' }}>
              Compare {tool.name} with Alternatives
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link
                to={`/compare`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  color: '#cbd5e1',
                  textDecoration: 'none',
                  fontSize: '0.875rem'
                }}
              >
                <span>Compare {tool.name} vs competitors</span>
                <ChevronRight size={15} style={{ color: '#818cf8' }} />
              </Link>
              <Link
                to={`/alternatives`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  color: '#cbd5e1',
                  textDecoration: 'none',
                  fontSize: '0.875rem'
                }}
              >
                <span>Browse top {tool.name} alternatives</span>
                <ChevronRight size={15} style={{ color: '#818cf8' }} />
              </Link>
            </div>
          </div>

          {/* Claim Listing Box */}
          <div style={{ padding: '1.25rem', borderRadius: '16px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <span style={{ fontSize: '0.8125rem', fontWeight: '600', color: '#f8fafc', display: 'block' }}>Are you the founder of {tool.name}?</span>
              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Claim this listing to update media and access telemetry.</span>
            </div>
            <Link to="/claim" className="btn btn-secondary btn-sm" style={{ flexShrink: 0 }}>
              Claim
            </Link>
          </div>

        </div>

      </div>

      {/* Similar Tools */}
      {relatedTools.length > 0 && (
        <div>
          <div className="section-header">
            <h2 className="section-title" style={{ fontSize: '1.75rem' }}>
              Similar AI Tools in {tool.category}
            </h2>
          </div>
          <div className="grid-tools">
            {relatedTools.map(t => (
              <ToolCard key={t.id} tool={t} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
