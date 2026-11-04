import React from 'react';
import {
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  GitCompareArrows,
  Image,
  Layers3,
  SearchCheck,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

const visualIcons = {
  briefcase: BriefcaseBusiness,
  compare: GitCompareArrows,
  research: SearchCheck,
  sparkles: Sparkles,
  checklist: CheckCircle2,
  image: Image,
  shield: ShieldCheck,
  code: Code2,
  layers: Layers3
};

export default function BlogVisual({ article, large = false }) {
  const Icon = visualIcons[article.icon] || BarChart3;

  return (
    <div className={`blog-visual blog-visual-${article.accent}${large ? ' is-large' : ''}`} aria-hidden="true">
      <div className="blog-visual-grid" />
      <span className="blog-visual-orb blog-visual-orb-one" />
      <span className="blog-visual-orb blog-visual-orb-two" />
      <div className="blog-visual-copy">
        <span><Sparkles size={13} /> AI Directory guide</span>
        <strong>{article.title}</strong>
      </div>
      <div className="blog-visual-stage">
        <div className="blog-visual-window">
          <span /><span /><span />
          <Icon size={large ? 40 : 30} />
          <i /><i /><i />
        </div>
        <div className="blog-visual-logos">
          {article.logos.slice(0, 3).map((domain, index) => (
            <span key={domain} style={{ '--logo-index': index }}>
              <img src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`} alt="" loading="lazy" decoding="async" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
