import React from 'react';
import { Tag, Sparkles } from 'lucide-react';
import ToolCard from '../components/cards/ToolCard';
import { tools } from '../data/mockData';

export default function FreeToolsPage() {
  const freeTools = tools.filter(t => t.pricingType === 'Free' || t.pricingType === 'Freemium');

  return (
    <div className="page-wrapper container">
      <div className="page-hero">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#34d399', fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
          <Tag size={14} />
          Zero Cost AI
        </div>
        <h1 className="page-hero-title">Free AI Tools & Open-Source Models</h1>
        <p className="page-hero-desc">
          Discover top-performing AI tools that offer generous free tiers, open-source weights, or no-credit-card trials.
        </p>
      </div>

      <div className="grid-tools">
        {freeTools.map(tool => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}
