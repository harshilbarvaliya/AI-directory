import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Eye, MousePointer, Bookmark, TrendingUp, Plus, Edit3, ExternalLink } from 'lucide-react';
import Button from '../components/common/Button';
import { tools } from '../data/mockData';

export default function FounderDashboardPage() {
  const userTools = tools.slice(0, 2);

  return (
    <div className="page-wrapper container">
      <div className="demo-banner"><strong>Demo analytics:</strong> all figures on this page are development data and are not production traffic or customer activity.</div>
      {/* Dashboard Top Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#818cf8', fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.25rem' }}>
            <LayoutDashboard size={14} />
            Founder Portal
          </div>
          <h1 style={{ fontSize: '2rem', fontWeight: '800', color: '#ffffff' }}>Founder Telemetry & Listings</h1>
        </div>
        <Button to="/submit/new" variant="primary" size="md" icon={Plus} iconPosition="left">
          Add New Product
        </Button>
      </div>

      <section className="content-section"><h2>Performance detail</h2><div className="simple-grid"><div className="simple-panel"><h3>Recommendation appearances</h3><p>Demo: 126</p></div><div className="simple-panel"><h3>Comparison appearances</h3><p>Demo: 84</p></div><div className="simple-panel"><h3>Leads</h3><p>Demo: 7</p></div><div className="simple-panel"><h3>Traffic sources</h3><p>Demo: Search, category pages, comparisons</p></div><div className="simple-panel"><h3>Search terms</h3><p>Demo: AI code editor, research assistant</p></div><div className="simple-panel"><h3>Plan status</h3><p>Development preview — no active billing connection.</p></div></div></section>

      {/* Metrics Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
        <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#64748b', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.8125rem', fontWeight: '600' }}>30-Day Impressions</span>
            <Eye size={16} />
          </div>
          <div style={{ fontSize: '1.875rem', fontWeight: '800', color: '#ffffff' }}>4,820</div>
          <span style={{ fontSize: '0.75rem', color: '#34d399', fontWeight: '600' }}>+18.4% vs last month</span>
        </div>

        <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#64748b', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.8125rem', fontWeight: '600' }}>Outbound Website Clicks</span>
            <MousePointer size={16} />
          </div>
          <div style={{ fontSize: '1.875rem', fontWeight: '800', color: '#ffffff' }}>684</div>
          <span style={{ fontSize: '0.75rem', color: '#34d399', fontWeight: '600' }}>14.2% CTR</span>
        </div>

        <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#64748b', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.8125rem', fontWeight: '600' }}>Community Saves</span>
            <Bookmark size={16} />
          </div>
          <div style={{ fontSize: '1.875rem', fontWeight: '800', color: '#ffffff' }}>192</div>
          <span style={{ fontSize: '0.75rem', color: '#818cf8', fontWeight: '600' }}>Added to user stacks</span>
        </div>

        <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#64748b', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.8125rem', fontWeight: '600' }}>Active Plan</span>
            <TrendingUp size={16} />
          </div>
          <div style={{ fontSize: '1.25rem', fontWeight: '800', color: '#38bdf8' }}>Founder Pro</div>
          <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Renews in 18 days</span>
        </div>
      </div>

      {/* Managed Listings */}
      <div className="section-header">
        <h2 className="section-title" style={{ fontSize: '1.5rem' }}>Your Published AI Products</h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
        {userTools.map(t => (
          <div
            key={t.id}
            className="glass-card"
            style={{
              padding: '1.5rem',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img src={t.logo} alt={t.name} style={{ width: '48px', height: '48px', borderRadius: '12px', objectFit: 'cover' }} />
              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#ffffff' }}>{t.name}</h3>
                <span style={{ fontSize: '0.8125rem', color: '#94a3b8' }}>{t.category} • Status: <strong style={{ color: '#34d399' }}>Live & Verified</strong></span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Link to={`/founder/tools/${t.id}`} className="btn btn-secondary btn-sm" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Edit3 size={14} />
                <span>Manage Listing</span>
              </Link>
              <Link to={`/tool/${t.slug}`} className="btn btn-ghost btn-sm" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <span>Public View</span>
                <ExternalLink size={14} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
