import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Cpu, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';
import ToolCard from '../components/cards/ToolCard';
import Button from '../components/common/Button';
import { tasks, tools } from '../data/mockData';

export default function TaskDetailPage() {
  const { slug } = useParams();
  const task = tasks.find(t => t.slug === slug) || tasks[0];
  const matchingTools = tools.filter(t => t.tasks && t.tasks.includes(task.name));
  const displayTools = matchingTools.length > 0 ? matchingTools : tools.slice(0, 4);

  return (
    <div className="page-wrapper container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <ChevronRight size={14} className="breadcrumb-separator" />
        <Link to="/tasks">Tasks</Link>
        <ChevronRight size={14} className="breadcrumb-separator" />
        <span style={{ color: '#f8fafc' }}>{task.name}</span>
      </div>

      {/* Task Hero */}
      <div className="page-feature-hero">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#22d3ee', fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
          <Cpu size={14} />
          Workflow Guide
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.75rem' }}>
          {task.name}
        </h1>
        <p style={{ fontSize: '1.0625rem', color: '#94a3b8', maxWidth: '780px', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          {task.summary} Compare top-ranked AI tools recommended by benchmark tests for this specific job-to-be-done.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button to="/ai-finder" variant="primary" size="sm">
            Find Matching Stack
          </Button>
          <Button to="/compare" variant="secondary" size="sm">
            Compare Top Tools
          </Button>
        </div>
      </div>

      <div className="section-header">
        <h2 className="section-title" style={{ fontSize: '1.75rem' }}>
          Recommended Tools for this Task ({displayTools.length})
        </h2>
      </div>

      <div className="grid-tools">
        {displayTools.map(tool => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
      <section className="content-section"><h2>Options by budget</h2><div className="simple-grid"><div className="simple-panel"><h3>Free options</h3><p>Start with tools marked Free or Freemium and confirm usage limits on the provider website.</p></div><div className="simple-panel"><h3>Best value</h3><p>Compare the features you will actually use against the monthly starting price.</p></div><div className="simple-panel"><h3>How to choose</h3><p>Test output quality, workflow fit, privacy terms, export options, and total recurring cost.</p></div></div></section>
      <section className="content-section"><h2>Suggested workflow</h2><div className="simple-panel"><ol style={{paddingLeft:'1.25rem'}}><li>Define the input and success criteria.</li><li>Use one primary tool to create the first result.</li><li>Validate accuracy and edit manually.</li><li>Export to your existing workflow and measure time saved.</li></ol></div></section>
      <section className="content-section"><h2>Quick comparison</h2><div style={{overflowX:'auto'}}><table className="data-table"><thead><tr><th>Tool</th><th>Pricing</th><th>Free trial</th><th>Best for</th></tr></thead><tbody>{displayTools.slice(0,4).map(t=><tr key={t.id}><td><Link to={`/tool/${t.slug}`}>{t.name}</Link></td><td>{t.startingPrice}</td><td>{t.freeTrial?'Yes':'No'}</td><td>{t.bestFor}</td></tr>)}</tbody></table></div></section>
      <section className="content-section"><h2>FAQ and related tasks</h2><div className="simple-grid"><div className="simple-panel"><h3>Should I use more than one tool?</h3><p>Only when each tool has a clear role. Start small and avoid overlapping subscriptions.</p></div><div className="simple-panel"><h3>Explore related tasks</h3>{tasks.filter(x=>x.id!==task.id).slice(0,3).map(x=><p key={x.id}><Link to={`/task/${x.slug}`}>{x.name}</Link></p>)}</div></div></section>
    </div>
  );
}
