import React from 'react';
import { Rocket, Sparkles } from 'lucide-react';
import ToolCard from '../components/cards/ToolCard';
import Button from '../components/common/Button';
import { tools } from '../data/mockData';

export default function LaunchesPage() {
  const launchTools = tools.filter(t => t.new || t.trending);

  return (
    <div className="page-wrapper container">
      <div className="page-hero">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#f472b6', fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
          <Rocket size={14} />
          Community Releases
        </div>
        <h1 className="page-hero-title">New AI Launches</h1>
        <p className="page-hero-desc">
          Discover the latest innovative artificial intelligence tools launched by independent builders and research labs.
        </p>
        <div style={{ marginTop: '1.5rem' }}>
          <Button to="/submit/new" variant="primary" size="md" icon={Rocket} iconPosition="left">
            Launch Your Product
          </Button>
        </div>
      </div>

      <div className="grid-tools">
        {launchTools.map(tool => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}
