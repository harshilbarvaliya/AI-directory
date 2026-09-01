import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Save, CheckCircle2, ChevronRight } from 'lucide-react';
import Button from '../components/common/Button';
import { tools } from '../data/mockData';

export default function ManageListingPage() {
  const { id } = useParams();
  const tool = tools.find(t => t.id === id) || tools[0];
  const [saved, setSaved] = useState(false);
  const [tagline, setTagline] = useState(tool.tagline);
  const [price, setPrice] = useState(tool.startingPrice);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="page-wrapper container" style={{ maxWidth: '800px' }}>
      <div className="breadcrumb">
        <Link to="/founder/dashboard">Founder Dashboard</Link>
        <ChevronRight size={14} className="breadcrumb-separator" />
        <span style={{ color: '#f8fafc' }}>Manage {tool.name}</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: '800', color: '#ffffff' }}>Edit {tool.name} Listing</h1>
          <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Update media, pricing tiers, and descriptions in real time.</p>
        </div>
      </div>

      {saved && (
        <div style={{ padding: '1rem', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)', color: '#34d399', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', fontWeight: '600' }}>
          <CheckCircle2 size={18} />
          Changes saved successfully!
        </div>
      )}

      <form onSubmit={handleSave} className="glass-card" style={{ padding: '2.5rem', borderRadius: '24px' }}>
        <div className="demo-banner">Development form: saving updates local UI feedback only until founder authentication and the listing API are connected.</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={labelStyle}>Product Name</label>
            <input type="text" value={tool.name} disabled style={{ ...inputStyle, opacity: 0.6, cursor: 'not-allowed' }} />
          </div>

          <div>
            <label style={labelStyle}>Headline Tagline</label>
            <input type="text" value={tagline} onChange={(e) => setTagline(e.target.value)} style={inputStyle} />
          </div>

          <div>
            <label style={labelStyle}>Starting Price</label>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} style={inputStyle} />
          </div>

          <div>
            <label style={labelStyle}>Ideal Target Audience (Best For)</label>
            <textarea rows={3} defaultValue={tool.bestFor} style={inputStyle} />
          </div>
          <div><label style={labelStyle}>Description</label><textarea rows={5} defaultValue={tool.tagline} style={inputStyle} /></div>
          <div><label style={labelStyle}>Categories</label><input defaultValue={tool.category} style={inputStyle} /></div>
          <div><label style={labelStyle}>Features</label><textarea rows={5} defaultValue={tool.features?.join('\n')} style={inputStyle} /></div>
          <div><label style={labelStyle}>Media URLs</label><textarea rows={3} placeholder="One screenshot or video URL per line" style={inputStyle} /></div>
          <div><label style={labelStyle}>Exclusive deal</label><input placeholder="Optional offer and terms" style={inputStyle} /></div>
          <div><label style={labelStyle}>Founder information</label><textarea rows={3} placeholder="Company and founder details" style={inputStyle} /></div>
          <div className="simple-panel"><strong>Listing status:</strong> Development preview · <strong>Plan:</strong> No billing connection</div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
            <Button to="/founder/dashboard" variant="secondary">Cancel</Button>
            <Button type="submit" variant="primary" icon={Save} iconPosition="left">Save Changes</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

const labelStyle = {
  display: 'block',
  fontSize: '0.8125rem',
  fontWeight: '600',
  color: '#cbd5e1',
  marginBottom: '0.35rem'
};

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
