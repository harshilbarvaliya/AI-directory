import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Sparkles } from 'lucide-react';
import CategoryCard from '../components/cards/CategoryCard';
import { categories } from '../data/mockData';

export default function CategoriesPage() {
  return (
    <div className="page-wrapper container">
      <div className="page-hero">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#c084fc', fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
          <Layers size={14} />
          Taxonomy & Ecosystems
        </div>
        <h1 className="page-hero-title">AI Tool Categories</h1>
        <p className="page-hero-desc">
          Explore AI tools by category, from coding and content creation to research, marketing, customer support, image, video and audio workflows.
        </p>
      </div>

      <div className="grid-categories">
        {categories.map(cat => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>
      <section className="content-section"><h2>How to choose an AI tool category</h2><div className="simple-grid"><div className="simple-panel"><h3>Start with the task</h3><p>Choose the outcome you need first, such as writing code, researching sources or producing a voiceover. Then compare tools built for that workflow.</p><Link to="/tasks">Browse AI tools by task</Link></div><div className="simple-panel"><h3>Compare the total cost</h3><p>Check free-plan limits, monthly pricing, usage credits and export restrictions. The lowest starting price is not always the lowest operating cost.</p><Link to="/free-ai-tools">Explore free AI tools</Link></div><div className="simple-panel"><h3>Check product fit</h3><p>Review platform support, privacy terms, integrations, output quality and whether the tool suits individual or team use.</p><Link to="/compare">Compare AI tools</Link></div></div></section>
      <section className="content-section"><h2>Popular AI software categories</h2><p>Developers can explore AI coding assistants and application builders. Marketing teams can compare writing, SEO and growth tools. Creative teams can evaluate image, video, voice and music software, while operations teams can browse research, productivity and customer-support automation.</p></section>
    </div>
  );
}
