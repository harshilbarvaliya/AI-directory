import React from 'react';
import { Flame } from 'lucide-react';
import ToolCard from '../components/cards/ToolCard';
import { tools } from '../data/mockData';

export default function TrendingPage() {
  const trendingTools = tools.filter(t => t.trending);

  return (
    <div className="page-wrapper container">
      <div className="page-hero">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#fb923c', fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
          <Flame size={14} />
          Community Leaderboard
        </div>
        <h1 className="page-hero-title">Trending AI Tools</h1>
        <p className="page-hero-desc">
          The fastest-growing, most bookmarked, and actively reviewed AI software this week.
        </p>
      </div>

      <div className="grid-tools">
        {trendingTools.map(tool => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}
