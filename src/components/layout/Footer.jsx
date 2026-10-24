import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, ShieldCheck, Sparkles, Twitter } from 'lucide-react';

const groups = [
  { title: 'Discover', links: [['All AI Tools','/tools'],['Categories','/categories'],['Tasks & Use Cases','/tasks'],['Industries','/industries'],['Free AI Tools','/free-ai-tools'],['Trending AI Tools','/trending'],['New Releases','/new']] },
  { title: 'Resources', links: [['Compare Hub','/compare'],['Tool Alternatives','/alternatives'],['AI Matchmaker Finder','/ai-finder'],['Editorial Reviews','/reviews'],['Exclusive AI Deals','/deals'],['Blog & Growth Guides','/blog'],['AI Launches','/launches']] },
  { title: 'For Founders', links: [['Submit AI Tool','/submit'],['Founder Pricing & Plans','/pricing'],['Promote Your Tool','/promote'],['Get Verified Badge','/verified'],['Claim Existing Listing','/claim'],['Advertise / Sponsor','/advertise'],['Founder Dashboard','/founder/dashboard']] },
  { title: 'Trust & Integrity', links: [['About AI Directory','/about'],['How Rankings Work','/ranking-methodology'],['Review Methodology','/review-methodology'],['Sponsored Content Policy','/sponsored-policy'],['Frequently Asked Questions','/faq'],['Contact & Support','/contact']] },
  { title: 'Legal & Policy', links: [['Terms of Service','/terms'],['Privacy Policy','/privacy'],['Cookie Policy','/cookies'],['Refund Policy','/refund-policy'],['Community & UGC Guidelines','/community-guidelines']] }
];

export default function Footer() {
  return (
    <footer className="classic-footer">
      <div className="container">
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
