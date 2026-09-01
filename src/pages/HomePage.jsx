import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, Flame, Rocket, Star, GitCompare, Tag, 
  Layers, ArrowRight, ShieldCheck, CheckCircle2, ChevronRight,
  TrendingUp, Users, Cpu, Award
} from 'lucide-react';
import SearchBar from '../components/common/SearchBar';
import ToolCard from '../components/cards/ToolCard';
import CategoryCard from '../components/cards/CategoryCard';
import TaskCard from '../components/cards/TaskCard';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import { tools, categories, tasks, comparisons, deals } from '../data/mockData';

export default function HomePage() {
  const trendingTools = tools.filter(t => t.trending);
  const newTools = tools.filter(t => t.new);
  const sponsoredTools = tools.filter(t => t.sponsored);

  return (
    <div className="home-page" style={{ width: '100%' }}>
      
      {/* 1. HERO SECTION & 2. AI TOOL SEARCH */}
      <section
        style={{
          position: 'relative',
          paddingTop: '5.5rem',
          paddingBottom: '5rem',
          textAlign: 'center',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          
          {/* Top Pill Announcement */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              background: '#eef2ff',
              border: '1px solid #c7d2fe',
              marginBottom: '1.75rem'
            }}
          >
            <Sparkles size={14} style={{ color: '#818cf8' }} />
            <span style={{ fontSize: '0.8125rem', fontWeight: '600', color: '#4338ca' }}>
              Independent AI Tool Discovery and Comparison
            </span>
          </div>

          {/* Main Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
              fontWeight: '800',
              lineHeight: '1.12',
              letterSpacing: '-0.03em',
              maxWidth: '920px',
              margin: '0 auto 1.5rem',
              color: '#ffffff'
            }}
          >
            Find the Right AI Tool for <span className="text-gradient">Your Next Task</span>
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontSize: 'clamp(1.0625rem, 2vw, 1.25rem)',
              color: '#94a3b8',
              maxWidth: '680px',
              margin: '0 auto 2.5rem',
              lineHeight: '1.6'
            }}
          >
            Browse AI tools by task, category, features and pricing. Compare practical options, understand their limitations and build a workflow that fits your needs.
          </p>

          {/* Search Bar / Matchmaker Input */}
          <SearchBar size="lg" showChips={true} />

          {/* Quick Metrics Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2.5rem',
              marginTop: '3.5rem',
              flexWrap: 'wrap'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(99, 102, 241, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#818cf8' }}>
                <Layers size={16} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.9375rem', fontWeight: '700', color: '#ffffff' }}>Curated Tool Catalog</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Sample listings clearly marked</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34d399' }}>
                <ShieldCheck size={16} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.9375rem', fontWeight: '700', color: '#ffffff' }}>Independent Rankings</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>No paid rank manipulation</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(6, 182, 212, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#22d3ee' }}>
                <GitCompare size={16} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.9375rem', fontWeight: '700', color: '#ffffff' }}>Comparison Ready</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Clear feature matrices</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. BROWSE BY TASK / USE CASE */}
      <section className="section" style={{ background: 'rgba(255, 255, 255, 0.01)', borderTop: '1px solid rgba(255, 255, 255, 0.04)', borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
        <div className="container">
          <div className="section-header with-action">
            <div>
              <span className="section-tag">
                <Cpu size={14} />
                Intent-Based Discovery
              </span>
              <h2 className="section-title">What Do You Want to Accomplish?</h2>
              <p className="section-subtitle">
                Skip generic lists. Find purpose-built AI tools organized specifically by your exact workflow goal.
              </p>
            </div>
            <Link to="/tasks" className="btn btn-outline btn-sm">
              <span>View All Tasks</span>
              <ChevronRight size={14} />
            </Link>
          </div>

          <div className="grid-tasks">
            {tasks.map(task => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. POPULAR CATEGORIES */}
      <section className="section">
        <div className="container">
          <div className="section-header with-action">
            <div>
              <span className="section-tag">
                <Layers size={14} />
                Explore Ecosystems
              </span>
              <h2 className="section-title">Browse by Category</h2>
              <p className="section-subtitle">
                Explore comprehensive software categories covering every vertical of modern artificial intelligence.
              </p>
            </div>
            <Link to="/categories" className="btn btn-outline btn-sm">
              <span>All Categories</span>
              <ChevronRight size={14} />
            </Link>
          </div>

          <div className="grid-categories">
            {categories.map(cat => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. TRENDING AI TOOLS */}
      <section className="section" style={{ background: 'rgba(255, 255, 255, 0.015)' }}>
        <div className="container">
          <div className="section-header with-action">
            <div>
              <span className="section-tag" style={{ color: '#fb923c' }}>
                <Flame size={14} />
                High Momentum
              </span>
              <h2 className="section-title">Trending AI Tools This Week</h2>
              <p className="section-subtitle">
                The most bookmarked, tested, and high-performing AI products across the community right now.
              </p>
            </div>
            <Link to="/trending" className="btn btn-outline btn-sm">
              <span>View Leaderboard</span>
              <ChevronRight size={14} />
            </Link>
          </div>

          <div className="grid-tools">
            {trendingTools.slice(0, 6).map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. NEWLY LAUNCHED TOOLS */}
      <section className="section">
        <div className="container">
          <div className="section-header with-action">
            <div>
              <span className="section-tag" style={{ color: '#22d3ee' }}>
                <Rocket size={14} />
                Fresh Submissions
              </span>
              <h2 className="section-title">Newly Launched AI Tools</h2>
              <p className="section-subtitle">
                Fresh product launches and innovative agentic software published over the past 14 days.
              </p>
            </div>
            <Link to="/new" className="btn btn-outline btn-sm">
              <span>Explore All New</span>
              <ChevronRight size={14} />
            </Link>
          </div>

          <div className="grid-tools">
            {newTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. FEATURED & SPONSORED TOOLS (Transparently Labeled) */}
      <section className="section" style={{ background: 'linear-gradient(180deg, rgba(245, 158, 11, 0.03) 0%, transparent 100%)' }}>
        <div className="container">
          <div className="section-header with-action">
            <div>
              <span className="section-tag" style={{ color: '#fbbf24' }}>
                <Award size={14} />
                Featured Showcase
              </span>
              <h2 className="section-title">Featured AI Innovations</h2>
              <p className="section-subtitle">
                Spotlighted partner tools and launch packages. Clearly labeled according to our transparent sponsored content policy.
              </p>
            </div>
            <Link to="/promote" className="btn btn-ghost btn-sm" style={{ color: '#fbbf24' }}>
              <span>Feature Your Tool</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid-tools">
            {sponsoredTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. POPULAR COMPARISONS */}
      <section className="section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <div className="section-header with-action">
            <div>
              <span className="section-tag">
                <GitCompare size={14} />
                Side-by-Side Analysis
              </span>
              <h2 className="section-title">Head-to-Head Comparisons</h2>
              <p className="section-subtitle">
                Make confident decisions with side-by-side feature breakdowns, pricing calculators, and honest trade-offs.
              </p>
            </div>
            <Link to="/compare" className="btn btn-outline btn-sm">
              <span>All Comparisons</span>
              <ChevronRight size={14} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {comparisons.map(comp => (
              <Link
                key={comp.id}
                to={`/compare/${comp.slug}`}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '1.5rem',
                  textDecoration: 'none',
                  borderRadius: '16px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: '600', color: '#a5b4fc', background: 'rgba(99, 102, 241, 0.12)', padding: '0.2rem 0.5rem', borderRadius: '6px' }}>
                    {comp.category}
                  </span>
                  <span style={{ fontSize: '0.71875rem', fontWeight: '700', color: '#fb923c' }}>
                    {comp.badge}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', margin: '0.5rem 0 1rem' }}>
                  <span style={{ fontSize: '1.125rem', fontWeight: '700', color: '#ffffff' }}>{comp.toolA}</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#64748b', background: 'rgba(255, 255, 255, 0.06)', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>VS</span>
                  <span style={{ fontSize: '1.125rem', fontWeight: '700', color: '#ffffff' }}>{comp.toolB}</span>
                </div>

                <p style={{ fontSize: '0.8125rem', color: '#94a3b8', lineHeight: '1.5', marginBottom: '1.25rem', flex: 1 }}>
                  {comp.summary}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8125rem', fontWeight: '600', color: '#818cf8', marginTop: 'auto' }}>
                  <span>Read Full Comparison</span>
                  <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. EXCLUSIVE AI DEALS */}
      <section className="section" style={{ background: 'rgba(244, 63, 94, 0.02)' }}>
        <div className="container">
          <div className="section-header with-action">
            <div>
              <span className="section-tag" style={{ color: '#fb7185' }}>
                <Tag size={14} />
                Verified Discounts
              </span>
              <h2 className="section-title">Exclusive AI Deals & Offers</h2>
              <p className="section-subtitle">
                Save on your AI stack with verified promo codes, annual discounts, and extended trials negotiated for our community.
              </p>
            </div>
            <Link to="/deals" className="btn btn-outline btn-sm">
              <span>Browse All Deals</span>
              <ChevronRight size={14} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {deals.map(deal => (
              <div
                key={deal.id}
                className="glass-card"
                style={{
                  padding: '1.5rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(244, 63, 94, 0.25)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#ffffff' }}>
                    {deal.toolName}
                  </h3>
                  <span
                    style={{
                      fontSize: '0.8125rem',
                      fontWeight: '800',
                      background: 'rgba(244, 63, 94, 0.15)',
                      color: '#fb7185',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '8px',
                      border: '1px solid rgba(244, 63, 94, 0.3)'
                    }}
                  >
                    {deal.discount}
                  </span>
                </div>

                <p style={{ fontSize: '0.84375rem', color: '#94a3b8', lineHeight: '1.5', marginBottom: '1.25rem', flex: 1 }}>
                  {deal.description}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(0, 0, 0, 0.3)', padding: '0.625rem 0.875rem', borderRadius: '10px', border: '1px dashed rgba(255, 255, 255, 0.15)' }}>
                  <span style={{ fontSize: '0.875rem', fontFamily: 'ui-monospace, monospace', fontWeight: '600', color: '#f8fafc' }}>
                    {deal.code}
                  </span>
                  <Link to={`/tool/${deal.toolSlug}`} className="btn btn-primary btn-sm" style={{ padding: '0.35rem 0.75rem', fontSize: '0.78125rem' }}>
                    Claim Offer
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. BUILD YOUR AI STACK CTA */}
      <section className="section">
        <div className="container">
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.18) 0%, rgba(139, 92, 246, 0.12) 50%, rgba(6, 182, 212, 0.15) 100%)',
              border: '1px solid rgba(99, 102, 241, 0.35)',
              borderRadius: '24px',
              padding: '3.5rem 2.5rem',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ position: 'relative', zIndex: 2, maxWidth: '720px', margin: '0 auto' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8125rem', fontWeight: '700', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
                <Sparkles size={15} />
                Multi-Tool Workflow Engine
              </span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#ffffff', marginBottom: '1rem' }}>
                Build & Optimize Your Complete AI Stack
              </h2>
              <p style={{ fontSize: '1.0625rem', color: '#cbd5e1', lineHeight: '1.6', marginBottom: '2rem' }}>
                Tell our recommendation engine your exact role, company size, and monthly budget. We’ll generate a cohesive, interoperable AI toolchain tailored for your specific goals.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <Button to="/ai-finder" variant="primary" size="lg" icon={Sparkles} iconPosition="left">
                  Try AI Matchmaker Finder
                </Button>
                <Button to="/compare" variant="secondary" size="lg" icon={GitCompare} iconPosition="left">
                  Explore Stack Matrices
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FOR FOUNDERS & SUBMISSION CTA */}
      <section className="section" style={{ background: 'rgba(255, 255, 255, 0.015)', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center'
            }}
          >
            <div>
              <span className="section-tag" style={{ color: '#818cf8' }}>
                <Rocket size={14} />
                For AI Product Builders
              </span>
              <h2 className="section-title" style={{ marginBottom: '1rem' }}>
                Get Discovered by Thousands of High-Intent AI Buyers
              </h2>
              <p style={{ fontSize: '1rem', color: '#94a3b8', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Launch your tool on a high-trust directory designed for conversion. We provide clear attribution, do-follow links, comparison matrices, and real feedback from verified operators.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.9375rem', color: '#cbd5e1' }}>
                  <CheckCircle2 size={18} style={{ color: '#34d399' }} />
                  <span>Free standard submission queue reviewed by editors</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.9375rem', color: '#cbd5e1' }}>
                  <CheckCircle2 size={18} style={{ color: '#34d399' }} />
                  <span>Fast Track 48-hour publishing and launch packages available</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.9375rem', color: '#cbd5e1' }}>
                  <CheckCircle2 size={18} style={{ color: '#34d399' }} />
                  <span>Transparent founder dashboard with click and save analytics</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button to="/submit" variant="primary" size="lg" icon={Rocket} iconPosition="left">
                  Submit Your AI Tool
                </Button>
                <Button to="/pricing" variant="secondary" size="lg">
                  View Founder Pricing
                </Button>
              </div>
            </div>

            {/* Founder Promo Card Preview */}
            <div
              className="glass-card"
              style={{
                padding: '2rem',
                borderRadius: '20px',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                background: 'linear-gradient(135deg, rgba(20, 24, 38, 0.9) 0%, rgba(15, 18, 28, 0.95) 100%)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(99, 102, 241, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#818cf8' }}>
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.0625rem', fontWeight: '700', color: '#ffffff' }}>Fast Track 48h</h3>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Guaranteed expedited review</span>
                  </div>
                </div>
                <span style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'Inter, sans-serif', color: '#ffffff' }}>
                  ₹1,499
                </span>
              </div>

              <p style={{ fontSize: '0.84375rem', color: '#94a3b8', marginBottom: '1.25rem' }}>
                Skip the 3-week standard queue. Get featured screenshots, FAQ cards, and live telemetry.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.8125rem', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={14} style={{ color: '#34d399' }} /> Guaranteed review under 48 hours
                </div>
                <div style={{ fontSize: '0.8125rem', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={14} style={{ color: '#34d399' }} /> Do-follow website link
                </div>
                <div style={{ fontSize: '0.8125rem', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={14} style={{ color: '#34d399' }} /> Live founder dashboard telemetry
                </div>
              </div>

              <Button to="/submit/new?plan=fast-track" variant="primary" style={{ width: '100%' }}>
                Get Fast Track Listing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 12. TRUST & VERIFICATION EXPLAINER */}
      <section className="section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <div
            className="glass-card"
            style={{
              padding: '2.5rem',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              alignItems: 'center'
            }}
          >
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', fontWeight: '700', color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
                <ShieldCheck size={16} />
                Editorial Integrity
              </div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.75rem' }}>
                How AI Directory Ranks & Evaluates Tools
              </h3>
              <p style={{ fontSize: '0.9375rem', color: '#94a3b8', lineHeight: '1.6' }}>
                We believe trust is our only sustainable advantage. We test tools with real-world workloads and maintain an impenetrable firewall between sponsorship packages and editorial verdict scores.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(16, 185, 129, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34d399', flexShrink: 0, marginTop: '2px' }}>
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9375rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.2rem' }}>Organic Ranking Algorithm</h4>
                  <p style={{ fontSize: '0.8125rem', color: '#94a3b8' }}>Rankings are calculated based on benchmark performance, user satisfaction, feature completeness, and update velocity.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(245, 158, 11, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fbbf24', flexShrink: 0, marginTop: '2px' }}>
                  <Tag size={16} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9375rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.2rem' }}>Explicit Sponsorship Labels</h4>
                  <p style={{ fontSize: '0.8125rem', color: '#94a3b8' }}>Every paid placement is labeled "Sponsored". Money cannot buy higher organic ratings or altered comparison verdicts.</p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', justifyContent: 'center' }}>
              <Button to="/ranking-methodology" variant="outline" size="md">
                Read Ranking Methodology
              </Button>
              <Button to="/sponsored-policy" variant="ghost" size="md">
                View Sponsored Policy
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
