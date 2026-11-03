import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, ShieldCheck, Sparkles, Twitter } from 'lucide-react';
import { defaultFooterCta } from '../../data/footerCta';

const groups = [
  { title: 'Discover', links: [['All AI Tools','/tools'],['Categories','/categories'],['Tasks & Use Cases','/tasks'],['Industries','/industries'],['Free AI Tools','/free-ai-tools'],['Trending AI Tools','/trending'],['New Releases','/new']] },
  { title: 'Resources', links: [['Compare Hub','/compare'],['Tool Alternatives','/alternatives'],['AI Matchmaker Finder','/ai-finder'],['Editorial Reviews','/reviews'],['Exclusive AI Deals','/deals'],['Blog & Growth Guides','/blog'],['AI Launches','/launches']] },
  { title: 'For Founders', links: [['Submit AI Tool','/submit'],['Founder Pricing & Plans','/pricing'],['Promote Your Tool','/promote'],['Get Verified Badge','/verified'],['Claim Existing Listing','/claim'],['Advertise / Sponsor','/advertise'],['Founder Dashboard','/founder/dashboard']] },
  { title: 'Trust & Integrity', links: [['About AI Directory','/about'],['How Rankings Work','/ranking-methodology'],['Review Methodology','/review-methodology'],['Sponsored Content Policy','/sponsored-policy'],['Contact & Support','/contact']] },
  { title: 'Legal & Policy', links: [['Terms of Service','/terms'],['Privacy Policy','/privacy'],['Cookie Policy','/cookies'],['Refund Policy','/refund-policy'],['Community & UGC Guidelines','/community-guidelines']] }
];

export default function Footer({ cta = defaultFooterCta }) {
  const ctaContent = { ...defaultFooterCta, ...cta };
  const handlePointerMove = (event) => {
    const footer = event.currentTarget;
    const bounds = footer.getBoundingClientRect();
    const mouseX = `${event.clientX - bounds.left}px`;
    const mouseY = `${event.clientY - bounds.top}px`;
    footer.style.setProperty('--footer-mouse-x', mouseX);
    footer.style.setProperty('--footer-mouse-y', mouseY);
    footer.style.setProperty('--section-mouse-x', mouseX);
    footer.style.setProperty('--section-mouse-y', mouseY);
    footer.classList.add('footer-pointer-active');
  };

  const handlePointerLeave = (event) => {
    event.currentTarget.classList.remove('footer-pointer-active');
  };

  return (
    <footer className="classic-footer directory-home" onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave}>
      <div className="footer-clone-field" aria-hidden="true">
        <span className="section-clone section-clone-1" />
        <span className="section-clone section-clone-2" />
        <span className="section-clone section-clone-3" />
        <span className="section-clone section-clone-4" />
        <span className="section-clone section-clone-5" />
      </div>
      <span className="footer-ambient-orb footer-ambient-orb-one" aria-hidden="true" />
      <span className="footer-ambient-orb footer-ambient-orb-two" aria-hidden="true" />
      <span className="footer-ambient-orb footer-ambient-orb-three" aria-hidden="true" />
      <span className="footer-ambient-orb footer-ambient-orb-four" aria-hidden="true" />
      <span className="footer-ambient-orb footer-ambient-orb-five" aria-hidden="true" />
      <span className="footer-ambient-orb footer-ambient-orb-six" aria-hidden="true" />
      <section className="directory-submit-section footer-cta-section">
        <div className="container directory-submit-inner">
          <span className="directory-submit-corner directory-submit-corner-left" aria-hidden="true" />
          <span className="directory-submit-corner directory-submit-corner-right" aria-hidden="true" />
          <div className="directory-submit-copy">
            <span>{ctaContent.eyebrow}</span>
            <h2>{ctaContent.title}<br /><em>{ctaContent.accent}</em></h2>
            <p>{ctaContent.description}</p>
            <Link className="directory-submit-button" to={ctaContent.buttonTo}>{ctaContent.buttonLabel} <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      <div className="container classic-footer-main">
        <div className="classic-footer-grid">
          {groups.map(group => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              <ul>{group.links.map(([label,to]) => <li key={to}><Link to={to}>{label}</Link></li>)}</ul>
            </div>
          ))}
        </div>

        <div className="classic-footer-note">
          <ShieldCheck size={22} />
          <p><strong>Editorial Independence Guarantee:</strong> Sponsored listings and advertisements are clearly labeled. Paid placement does not alter organic rankings, editorial reviews or benchmark scores.</p>
        </div>

        <div className="classic-footer-bottom">
          <div><span className="classic-footer-mark"><Sparkles size={13} /></span><span>© {new Date().getFullYear()} AI Directory. Independent tool research.</span></div>
          <div className="classic-footer-socials">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter size={16} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={16} /></a>
          </div>
        </div>

        <div className="footer-live-finale">
          <div className="footer-art-wordmark">AI Directory</div>
          <div className="footer-image-stage">
            <img src="/assets/ai-directory-footer-network.png" alt="Interactive AI tools network" />
            <svg className="footer-data-flow" viewBox="0 0 2048 683" preserveAspectRatio="none" aria-hidden="true">
              <g className="footer-network-packet footer-network-packet-1"><circle cx="282" cy="460" r="5" /><circle cx="282" cy="460" r="11" /></g>
              <g className="footer-network-packet footer-network-packet-2"><circle cx="641" cy="352" r="5" /><circle cx="641" cy="352" r="11" /></g>
              <g className="footer-network-packet footer-network-packet-3"><circle cx="1165" cy="443" r="5" /><circle cx="1165" cy="443" r="11" /></g>
              <g className="footer-network-packet footer-network-packet-4"><circle cx="1174" cy="529" r="5" /><circle cx="1174" cy="529" r="11" /></g>
            </svg>
            {[1, 2, 3, 4, 5].map(index => <span className={`footer-worker-activity worker-activity-${index}`} key={index}><i /><b /></span>)}
            <Link to="/tools" className="footer-image-action"><Sparkles size={15} /> Explore all AI tools</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
