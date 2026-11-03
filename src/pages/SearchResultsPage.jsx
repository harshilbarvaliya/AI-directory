import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Sparkles, Filter } from 'lucide-react';
import ToolCard from '../components/cards/ToolCard';
import SearchBar from '../components/common/SearchBar';
import { tools } from '../data/mockData';

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const pricing = searchParams.get('pricing') || '';
  const pricingLabel = {
    free: 'Free',
    freemium: 'Freemium',
    paid: 'Paid',
    trial: 'Free Trial'
  }[pricing] || '';

  const results = useMemo(() => {
    const lower = query.toLowerCase();
    return tools.filter(tool => {
      const matchesQuery = !query.trim() ||
        tool.name.toLowerCase().includes(lower) ||
        tool.tagline.toLowerCase().includes(lower) ||
        tool.category.toLowerCase().includes(lower) ||
        (tool.tasks && tool.tasks.some(task => task.toLowerCase().includes(lower))) ||
        (tool.features && tool.features.some(feature => feature.toLowerCase().includes(lower)));
      const matchesPricing = !pricing ||
        (pricing === 'trial' ? tool.freeTrial : tool.pricingType.toLowerCase() === pricing);
      return matchesQuery && matchesPricing;
    });
  }, [query, pricing]);

  return (
    <div className="page-wrapper container">
      <div className="page-hero">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#818cf8', fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
          <Search size={14} />
          Discovery Results
        </div>
        <h1 className="page-hero-title">
          {query ? `Search: "${query}"` : pricingLabel ? `${pricingLabel} AI Tools` : 'Search Directory'}
        </h1>
        <p className="page-hero-desc">
          Found {results.length} directory {results.length === 1 ? 'listing' : 'listings'} matching your selection.
        </p>
        <div style={{ marginTop: '1.5rem' }}>
          <SearchBar placeholder="Try searching another tool, workflow, or capability..." showChips={false} />
        </div>
      </div>

      {results.length > 0 ? (
        <div className="grid-tools">
          {results.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="glass-card" style={{ padding: '3.5rem 2rem', textAlign: 'center', borderRadius: '20px', maxWidth: '600px', margin: '0 auto' }}>
          <Sparkles size={36} style={{ color: '#818cf8', margin: '0 auto 1rem' }} />
          <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.5rem' }}>No direct matches found</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
            We couldn't find exact tools matching your selection. Try searching by broader terms like "Code", "Writing", or "Free".
          </p>
          <Link to="/tools" className="btn btn-primary btn-sm">
            Browse All Tools
          </Link>
        </div>
      )}
    </div>
  );
}
