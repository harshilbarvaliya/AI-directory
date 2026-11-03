import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  AlertCircle,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  ExternalLink,
  Layers3,
  MonitorPlay,
  Star,
  X
} from 'lucide-react';
import Badge from '../components/common/Badge';
import { tools } from '../data/mockData';

const pricingCopy = {
  Free: 'Free access is listed for this product.',
  Freemium: 'A free option is listed, with paid upgrades available.',
  Paid: 'Paid access is required to use this product.',
  'Free Trial': 'A trial is listed before a paid subscription is required.'
};

export default function ToolDetailPage() {
  const { slug } = useParams();
  const [screenshotFailed, setScreenshotFailed] = useState(false);
  const tool = tools.find((entry) => entry.slug === slug) || tools[0];

  const relatedTools = useMemo(
    () => tools.filter((entry) => entry.id !== tool.id && entry.categorySlug === tool.categorySlug).slice(0, 3),
    [tool]
  );

  const useCases = tool.tasks?.length ? tool.tasks : tool.features?.slice(0, 3) || [];
  const featureList = tool.features?.length ? tool.features : ['Core product information is being reviewed.'];
  const priceSummary = pricingCopy[tool.pricingType] || `${tool.pricingType} access is currently listed.`;
  const screenshotUrl = tool.screenshot || `https://image.thum.io/get/width/1200/crop/800/noanimate/${tool.websiteUrl}`;

  useEffect(() => {
    setScreenshotFailed(false);
  }, [tool.id]);

  return (
    <main className="tool-profile-page">
      <div className="container tool-profile-container">
        <nav className="tool-profile-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <Link to="/tools">AI tools</Link>
          <ChevronRight size={14} />
          <Link to={`/category/${tool.categorySlug}`}>{tool.category}</Link>
          <ChevronRight size={14} />
          <span>{tool.name}</span>
        </nav>

        <section className="tool-profile-hero" aria-labelledby="tool-profile-title">
          <div className="tool-profile-hero-intro">
            <span className="tool-profile-eyebrow">{tool.category}</span>
            <div className="tool-profile-hero-name">
              <div className="tool-profile-logo">
                <img src={tool.logo} alt={`${tool.name} logo`} />
              </div>
              <div className="tool-profile-title-line">
                <h1 id="tool-profile-title">{tool.name}</h1>
                {tool.verified && (
                  <span className="tool-profile-verified-mark" title="Verified tool" aria-label="Verified tool">
                    <img src="/assets/meta-verified-badge.png" alt="" aria-hidden="true" />
                  </span>
                )}
              </div>
            </div>
            <div className="tool-profile-logo-row">
              <div className="tool-profile-badges">
                {tool.sponsored && <Badge type="sponsored" />}
                {tool.new && <Badge type="new" />}
                <span className="tool-profile-price-badge">{tool.pricingType}</span>
              </div>
            </div>
            <p className="tool-profile-tagline">{tool.tagline}</p>
          </div>

          <aside className="tool-profile-hero-aside" aria-label={`${tool.name} quick facts`}>
            <span className="tool-profile-section-label">At a glance</span>
            <dl>
              <div><dt><Star size={16} fill="currentColor" /> Directory score</dt><dd>{tool.rating}</dd></div>
              <div><dt><Layers3 size={16} /> Pricing model</dt><dd>{tool.pricingType}</dd></div>
              <div><dt><Clock3 size={16} /> Starting price</dt><dd>{tool.startingPrice}</dd></div>
              <div><dt><CheckCircle2 size={16} /> Free access</dt><dd>{tool.freeTrial ? 'Listed' : 'Not listed'}</dd></div>
            </dl>
            <div className="tool-profile-actions">
              <a className="tool-profile-primary-action" href={tool.websiteUrl} target="_blank" rel="noopener noreferrer">
                Visit official website <ExternalLink size={17} />
              </a>
            </div>
          </aside>
        </section>

        <section className="tool-profile-media-stage" aria-labelledby="tool-preview-title">
          <div className="tool-profile-media-heading">
            <div>
              <span className="tool-profile-section-label">Product interface</span>
              <h2 id="tool-preview-title">See {tool.name} in context</h2>
            </div>
          </div>
          <div className="tool-profile-visual" aria-label={`${tool.name} website preview`}>
            {!screenshotFailed ? (
              <figure className="tool-profile-screenshot">
                <img
                  key={tool.id}
                  src={screenshotUrl}
                  alt={`${tool.name} website preview`}
                  loading="lazy"
                  decoding="async"
                  fetchpriority="low"
                  referrerPolicy="no-referrer"
                  onError={() => setScreenshotFailed(true)}
                />
              </figure>
            ) : (
              <div className="tool-profile-visual-canvas tool-profile-image-fallback">
                <div className="tool-profile-visual-orbit tool-profile-visual-orbit-one" />
                <div className="tool-profile-visual-orbit tool-profile-visual-orbit-two" />
                <div className="tool-profile-visual-logo">
                  <img src={tool.logo} alt="" aria-hidden="true" />
                </div>
                <strong>{tool.name}</strong>
                <span>Product image unavailable</span>
              </div>
            )}
          </div>
        </section>

        <nav className="tool-profile-jump-nav" aria-label="On this page">
          <span>On this page</span>
          <a href="#overview">Overview</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#fit">Who it is for</a>
          <a href="#alternatives">Alternatives</a>
        </nav>

        <div className="tool-profile-content-grid">
          <div className="tool-profile-main-column">
            <section className="tool-profile-section" id="overview">
              <span className="tool-profile-section-label">Product overview</span>
              <h2>What is {tool.name}?</h2>
              <p className="tool-profile-lead">
                {tool.name} is an AI product in the {tool.category.toLowerCase()} category. {tool.tagline}.
              </p>
              <p>
                This profile brings the main decision points into one place: what the product does, who it may suit, its listed pricing model and the practical limitations to check before signing up.
              </p>
            </section>

            <section className="tool-profile-section" id="features">
              <span className="tool-profile-section-label">Key capabilities</span>
              <h2>What you can do with {tool.name}</h2>
              <div className="tool-profile-feature-grid">
                {featureList.map((feature, index) => (
                  <article key={feature}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <CheckCircle2 size={21} />
                    <h3>{feature}</h3>
                  </article>
                ))}
              </div>
            </section>

            <section className="tool-profile-section tool-profile-inline-pricing" id="pricing">
              <div className="tool-profile-inline-pricing-heading">
                <div>
                  <span className="tool-profile-section-label">Pricing snapshot</span>
                  <div className="tool-profile-price-heading">
                    <strong>{tool.startingPrice}</strong>
                    <small>listed starting price</small>
                  </div>
                </div>
                <p>{priceSummary}</p>
              </div>
              <div className="tool-profile-inline-pricing-details">
                <ul>
                  <li><Check size={16} /> Model: {tool.pricingType}</li>
                  <li><Check size={16} /> {tool.freeTrial ? 'Free access or trial listed' : 'No free trial recorded'}</li>
                  <li><Check size={16} /> Web-based product</li>
                </ul>
                <p className="tool-profile-inline-pricing-note">
                  Pricing, taxes and plan availability can vary by region. Confirm the latest details on the official website before choosing a plan.
                </p>
              </div>
            </section>

            <section className="tool-profile-section" id="fit">
              <span className="tool-profile-section-label">Decision guide</span>
              <h2>Who should consider {tool.name}?</h2>
              <div className="tool-profile-fit-grid">
                <article className="is-positive">
                  <div><Check size={19} /><strong>Best suited to</strong></div>
                  <p>{tool.bestFor}</p>
                </article>
                <article className="is-caution">
                  <div><X size={19} /><strong>May not suit</strong></div>
                  <p>{tool.notIdealFor}</p>
                </article>
              </div>
            </section>

            <section className="tool-profile-section">
              <span className="tool-profile-section-label">Popular workflows</span>
              <h2>Common use cases</h2>
              <div className="tool-profile-use-cases">
                {useCases.map((useCase, index) => (
                  <div key={useCase}>
                    <span>{index + 1}</span>
                    <p>{useCase}</p>
                    <ArrowRight size={17} />
                  </div>
                ))}
              </div>
            </section>

            <section className="tool-profile-section">
              <span className="tool-profile-section-label">Editorial summary</span>
              <h2>Pros and practical limits</h2>
              <div className="tool-profile-pros-cons">
                <article>
                  <h3><CheckCircle2 size={20} /> What stands out</h3>
                  <ul>
                    {featureList.slice(0, 3).map((feature) => <li key={feature}>{feature}</li>)}
                  </ul>
                </article>
                <article>
                  <h3><AlertCircle size={20} /> What to check</h3>
                  <ul>
                    <li>{tool.notIdealFor}</li>
                    <li>Pricing, usage limits and feature access can vary by plan or region.</li>
                    <li>Confirm data handling and commercial-use terms for your workflow.</li>
                  </ul>
                </article>
              </div>
            </section>
          </div>

          <aside className="tool-profile-sidebar" aria-label={`${tool.name} quick facts`}>
            <section className="tool-profile-side-card tool-profile-glance-card">
              <span className="tool-profile-section-label">At a glance</span>
              <dl>
                <div><dt>Category</dt><dd>{tool.category}</dd></div>
                <div><dt>Pricing</dt><dd>{tool.pricingType}</dd></div>
                <div><dt>Free access</dt><dd>{tool.freeTrial ? 'Listed' : 'Not listed'}</dd></div>
                <div><dt>Directory status</dt><dd>{tool.verified ? 'Verified badge' : 'Standard listing'}</dd></div>
              </dl>
            </section>

            <section className="tool-profile-side-card tool-profile-founder-card">
              <MonitorPlay size={24} />
              <h3>Represent {tool.name}?</h3>
              <p>Claim the profile to request corrections and supply approved product media.</p>
              <Link to="/claim">Claim this listing <ArrowRight size={15} /></Link>
            </section>
          </aside>
        </div>

        <section className="tool-profile-faq" aria-labelledby="tool-faq-title">
          <div>
            <span className="tool-profile-section-label">Quick answers</span>
            <h2 id="tool-faq-title">Questions about {tool.name}</h2>
            <p>Useful checks before you create an account or choose a plan.</p>
          </div>
          <div className="tool-profile-faq-list">
            <details open>
              <summary>Is {tool.name} free to use?<span>+</span></summary>
              <p>{priceSummary} Confirm the current plan limits with the provider before relying on a specific feature.</p>
            </details>
            <details>
              <summary>What is {tool.name} best for?<span>+</span></summary>
              <p>{tool.bestFor}.</p>
            </details>
            <details>
              <summary>What should I check before choosing it?<span>+</span></summary>
              <p>Review current pricing, privacy terms, usage limits, export options and whether the product fits your existing workflow.</p>
            </details>
          </div>
        </section>

        {relatedTools.length > 0 && (
          <section className="tool-profile-related" id="alternatives">
            <div className="tool-profile-related-head">
              <div>
                <span className="tool-profile-section-label">More options</span>
                <h2>Similar tools to {tool.name}</h2>
              </div>
              <Link to={`/category/${tool.categorySlug}`}>View the full category <ArrowRight size={16} /></Link>
            </div>
            <div className="tool-profile-related-grid">
              {relatedTools.map((relatedTool) => (
                <article className="tool-profile-related-card" key={relatedTool.id}>
                  <header className="tool-profile-related-card-top">
                    <div className="tool-profile-related-logo">
                      <img src={relatedTool.logo} alt={`${relatedTool.name} logo`} loading="lazy" decoding="async" />
                    </div>
                    <div className="tool-profile-related-identity">
                      <h3><Link to={`/tool/${relatedTool.slug}`}>{relatedTool.name}</Link></h3>
                      <small>{relatedTool.category}</small>
                    </div>
                    {relatedTool.verified && <Badge type="verified" />}
                  </header>
                  <p>{relatedTool.tagline}</p>
                  <ul>
                    {relatedTool.features?.slice(0, 2).map((feature) => (
                      <li key={feature}><Check size={14} /> {feature}</li>
                    ))}
                  </ul>
                  <footer>
                    <div>
                      <span><Star size={13} fill="currentColor" /> {relatedTool.rating}</span>
                      <b>{relatedTool.pricingType}</b>
                    </div>
                    <Link to={`/tool/${relatedTool.slug}`}>View details <ArrowRight size={15} /></Link>
                  </footer>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
