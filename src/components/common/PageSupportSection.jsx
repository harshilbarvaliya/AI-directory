import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  GitCompareArrows,
  ListChecks,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Tags
} from 'lucide-react';

const sectionGroups = {
  discovery: {
    eyebrow: 'Continue exploring',
    title: 'Find the right AI tool from every angle',
    description: 'Move from a broad search to a practical shortlist using tasks, pricing and side-by-side comparisons.',
    links: [
      { title: 'Browse by task', description: 'Start with the job you need to complete.', to: '/tasks', icon: ListChecks },
      { title: 'Compare your shortlist', description: 'Review features, pricing and product fit together.', to: '/compare', icon: GitCompareArrows },
      { title: 'Explore free options', description: 'Find free and freemium tools before paying.', to: '/free-ai-tools', icon: Tags }
    ]
  },
  comparison: {
    eyebrow: 'Make a confident choice',
    title: 'Turn your shortlist into a clear decision',
    description: 'Check alternatives, compare costs and use the same workflow test before choosing a product.',
    links: [
      { title: 'Find alternatives', description: 'Explore lower-cost and specialist replacements.', to: '/alternatives', icon: Search },
      { title: 'Use AI Finder', description: 'Get a shorter list based on your role and budget.', to: '/ai-finder', icon: Sparkles },
      { title: 'Read our methodology', description: 'See how editorial conclusions are prepared.', to: '/review-methodology', icon: ShieldCheck }
    ]
  },
  editorial: {
    eyebrow: 'Fresh directory intelligence',
    title: 'Keep up with useful AI products—not launch noise',
    description: 'Review recent launches, current offers and our independent evaluation standards in one place.',
    links: [
      { title: 'New AI launches', description: 'See recently added and updated products.', to: '/launches', icon: Rocket },
      { title: 'Current AI deals', description: 'Check clearly labelled offers and discounts.', to: '/deals', icon: Tags },
      { title: 'Editorial reviews', description: 'Read practical product assessments and limitations.', to: '/reviews', icon: BadgeCheck }
    ]
  },
  founder: {
    eyebrow: 'For AI founders',
    title: 'Build a complete, trustworthy product listing',
    description: 'Submit accurate product details, choose an optional promotion plan and keep editorial review independent.',
    links: [
      { title: 'Submit your product', description: 'Share the information required for editorial review.', to: '/submit', icon: Rocket },
      { title: 'Review founder plans', description: 'Compare listing and promotion options clearly.', to: '/pricing', icon: Tags },
      { title: 'Understand sponsorship', description: 'See how paid placements are labelled and separated.', to: '/sponsored-policy', icon: ShieldCheck }
    ]
  },
  trust: {
    eyebrow: 'Trust and transparency',
    title: 'See how AI Directory stays useful and independent',
    description: 'Our ranking, review and sponsorship policies explain what influences a listing—and what never does.',
    links: [
      { title: 'Ranking methodology', description: 'Understand how organic directory order is determined.', to: '/ranking-methodology', icon: ListChecks },
      { title: 'Review methodology', description: 'Learn how products and workflows are assessed.', to: '/review-methodology', icon: BadgeCheck },
      { title: 'Sponsored content policy', description: 'See how commercial placements are disclosed.', to: '/sponsored-policy', icon: ShieldCheck }
    ]
  }
};

function getSectionGroup(pathname) {
  if (
    pathname === '/' ||
    pathname.startsWith('/tool/') ||
    pathname.startsWith('/admin') ||
    pathname.startsWith('/login') ||
    pathname.startsWith('/signup') ||
    pathname.startsWith('/forgot-password') ||
    pathname.startsWith('/reset-password') ||
    pathname.startsWith('/submit/new') ||
    pathname.startsWith('/submit/success') ||
    pathname.startsWith('/founder/dashboard') ||
    pathname.startsWith('/founder/tools/')
  ) return null;

  if (
    pathname.startsWith('/compare') ||
    pathname.startsWith('/alternatives') ||
    pathname.endsWith('-alternatives')
  ) return sectionGroups.comparison;

  if (
    pathname.startsWith('/deals') ||
    pathname.startsWith('/launches') ||
    pathname.startsWith('/reviews') ||
    pathname.startsWith('/blog')
  ) return sectionGroups.editorial;

  if (
    pathname.startsWith('/submit') ||
    pathname.startsWith('/promote') ||
    pathname.startsWith('/pricing') ||
    pathname.startsWith('/founders') ||
    pathname.startsWith('/claim') ||
    pathname.startsWith('/verified') ||
    pathname.startsWith('/advertise')
  ) return sectionGroups.founder;

  if (
    pathname.startsWith('/about') ||
    pathname.startsWith('/contact') ||
    pathname.startsWith('/ranking-methodology') ||
    pathname.startsWith('/review-methodology') ||
    pathname.startsWith('/sponsored-policy') ||
    pathname.startsWith('/terms') ||
    pathname.startsWith('/privacy') ||
    pathname.startsWith('/cookies') ||
    pathname.startsWith('/refund-policy') ||
    pathname.startsWith('/community-guidelines')
  ) return sectionGroups.trust;

  return sectionGroups.discovery;
}

export default function PageSupportSection({ pathname }) {
  const section = getSectionGroup(pathname);
  if (!section) return null;

  return (
    <section className="page-support-section" id="next-steps" aria-labelledby="page-support-title">
      <span className="page-support-orb page-support-orb-one" aria-hidden="true" />
      <span className="page-support-orb page-support-orb-two" aria-hidden="true" />
      <div className="container page-support-inner">
        <header className="page-support-heading">
          <div>
            <span>{section.eyebrow}</span>
            <h2 id="page-support-title">{section.title}</h2>
          </div>
          <p>{section.description}</p>
        </header>
        <div className="page-support-grid">
          {section.links.map(({ title, description, to, icon: Icon }, index) => (
            <Link to={to} className="page-support-card" key={to}>
              <span className="page-support-card-number">0{index + 1}</span>
              <span className="page-support-card-icon"><Icon size={20} /></span>
              <strong>{title}</strong>
              <p>{description}</p>
              <span className="page-support-card-link">Explore <ArrowRight size={15} /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
