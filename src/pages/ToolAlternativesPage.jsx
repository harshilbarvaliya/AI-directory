import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Zap, ChevronRight, ArrowRight } from 'lucide-react';
import ToolCard from '../components/cards/ToolCard';
import { tools } from '../data/mockData';

export default function ToolAlternativesPage() {
  const { slug } = useParams();
  const targetTool = tools.find(t => t.slug === slug) || tools[0];
  const alternatives = tools.filter(t => t.id !== targetTool.id);
  const [reason, setReason] = useState('More features');
  const rankedAlternatives = [...alternatives].sort((a, b) => {
    if (reason === 'Free option') return Number(['Free','Freemium'].includes(b.pricingType)) - Number(['Free','Freemium'].includes(a.pricingType));
    if (reason === 'Lower price') return (parseFloat(a.startingPrice.replace(/[^0-9.]/g, '')) || 0) - (parseFloat(b.startingPrice.replace(/[^0-9.]/g, '')) || 0);
    if (reason === 'Better privacy') return Number(b.verified) - Number(a.verified);
    return (b.features?.length || 0) - (a.features?.length || 0);
  });

  return (
    <div className="page-wrapper container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <ChevronRight size={14} className="breadcrumb-separator" />
        <Link to="/alternatives">Alternatives</Link>
        <ChevronRight size={14} className="breadcrumb-separator" />
        <span style={{ color: '#f8fafc' }}>{targetTool.name} Alternatives</span>
      </div>

      <section className="content-section"><h2>Why are you switching?</h2><div style={{display:'flex',gap:'.5rem',flexWrap:'wrap'}}>{['Lower price','Free option','Simpler workflow','More features','Better privacy'].map(x=><button onClick={() => setReason(x)} className={`btn btn-sm ${reason === x ? 'btn-primary' : 'btn-secondary'}`} key={x}>{x}</button>)}</div></section>
      <section className="content-section"><h2>Top picks</h2><div className="simple-grid"><div className="simple-panel"><h3>Best overall</h3><p>{alternatives[0]?.name}. A strong general-purpose fit.</p></div><div className="simple-panel"><h3>Best free</h3><p>{alternatives.find(x=>x.pricingType==='Free')?.name || alternatives.find(x=>x.pricingType==='Freemium')?.name}. A useful entry point with a free option.</p></div><div className="simple-panel"><h3>Best budget</h3><p>{alternatives.find(x=>x.startingPrice.includes('$5'))?.name || alternatives[1]?.name}. A lower starting cost.</p></div></div></section>

      <div className="page-hero">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#06b6d4', fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
          <Zap size={14} />
          High-Intent Alternatives
        </div>
        <h1 className="page-hero-title">Best {targetTool.name} Alternatives</h1>
        <p className="page-hero-desc">
          Looking for better pricing, self-hosting options, or specialized features? Explore the top verified alternatives to {targetTool.name}.
        </p>
      </div>

      <div className="grid-tools">
        {rankedAlternatives.map(tool => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
      <section className="content-section"><h2>Alternative comparison</h2><table className="data-table"><thead><tr><th>Alternative</th><th>Pricing model</th><th>Starts at</th><th>Free trial</th></tr></thead><tbody>{alternatives.slice(0,5).map(x=><tr key={x.id}><td>{x.name}</td><td>{x.pricingType}</td><td>{x.startingPrice}</td><td>{x.freeTrial?'Yes':'No'}</td></tr>)}</tbody></table></section>
      <section className="content-section"><h2>FAQ</h2><div className="simple-panel"><h3>How should I evaluate an alternative?</h3><p>Run the same real task through your shortlist, compare output and total cost, then review privacy and export terms on each provider’s site.</p></div></section>
    </div>
  );
}
