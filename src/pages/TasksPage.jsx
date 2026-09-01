import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Sparkles } from 'lucide-react';
import TaskCard from '../components/cards/TaskCard';
import { tasks } from '../data/mockData';

export default function TasksPage() {
  return (
    <div className="page-wrapper container">
      <div className="page-hero">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#22d3ee', fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
          <Cpu size={14} />
          Intent-Driven Workflows
        </div>
        <h1 className="page-hero-title">Browse AI Tools by Task</h1>
        <p className="page-hero-desc">
          Start with what you need to accomplish, then compare AI tools by workflow fit, features, pricing and free-plan availability.
        </p>
      </div>

      <div className="grid-tasks">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
      <section className="content-section"><h2>Find AI software for a specific workflow</h2><div className="simple-grid"><div className="simple-panel"><h3>Define the outcome</h3><p>Be specific about the deliverable, input format and quality standard. A focused task makes tool comparisons more useful.</p></div><div className="simple-panel"><h3>Test with real work</h3><p>Use the same representative task across your shortlist. Compare accuracy, editing time, reliability and how easily results move into your existing process.</p></div><div className="simple-panel"><h3>Review risk and cost</h3><p>Confirm data handling, commercial-use terms, usage limits and recurring cost on the provider’s official website before adopting a tool.</p></div></div></section>
      <section className="content-section"><h2>More ways to discover AI tools</h2><p>Browse the <Link to="/categories">complete AI tool categories</Link>, explore <Link to="/free-ai-tools">free and freemium AI tools</Link>, or use the <Link to="/compare">AI tool comparison hub</Link> to evaluate shortlisted products.</p></section>
    </div>
  );
}
