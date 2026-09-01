import React from 'react';
import { Rocket } from 'lucide-react';
import ToolCard from '../components/cards/ToolCard';
import { tools } from '../data/mockData';

export default function NewToolsPage() {
  const newTools = tools.filter(t => t.new || t.trending);

  return (
    <div className="page-wrapper container">
      <div className="page-hero">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#22d3ee', fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
          <Rocket size={14} />
          Fresh Arrivals
        </div>
        <h1 className="page-hero-title">New AI Tools & Models</h1>
        <p className="page-hero-desc">
          Recently cataloged artificial intelligence products, agents, and generative apps.
        </p>
      </div>

      <div className="grid-tools">
        {newTools.map(tool => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}
