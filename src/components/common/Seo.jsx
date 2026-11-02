import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { tools, categories, tasks, comparisons } from '../../data/mockData';

const SITE = 'https://harshilbarvaliya.github.io/AI-directory';
const staticSeo = {
  '/': ['AI Directory: Find and Compare AI Tools by Task', 'Discover AI tools by task, category, features and pricing. Compare options, explore alternatives and choose tools that fit your workflow.'],
  '/tools': ['All AI Tools: Search, Filter and Compare | AI Directory', 'Browse AI tools for coding, writing, image creation, research, marketing, audio and video. Filter by category and pricing model.'],
  '/categories': ['AI Tool Categories for Work and Creative Tasks | AI Directory', 'Explore AI software categories including coding, writing, design, video, research, marketing, customer support and music.'],
  '/tasks': ['Best AI Tools by Task and Use Case | AI Directory', 'Find AI tools for specific tasks such as coding, SEO writing, product images, voiceovers, research and video editing.'],
  '/compare': ['Compare AI Tools: Features, Pricing and Best Use Cases', 'Compare AI tools side by side across features, pricing, strengths, limitations and ideal use cases before choosing a product.'],
  '/alternatives': ['AI Tool Alternatives: Free, Budget and Specialist Options', 'Find practical alternatives to popular AI tools based on price, features, workflow fit and free-plan availability.'],
  '/ai-finder': ['AI Tool Finder: Find Software for Your Workflow', 'Describe your goal, role and budget to explore AI tools that may fit your workflow. Recommendation features are in development.'],
  '/free-ai-tools': ['Free AI Tools and Freemium Software | AI Directory', 'Explore AI tools with free or freemium access for coding, content, research, design, audio, video and productivity.'],
  '/trending': ['Trending AI Tools to Explore | AI Directory', 'Explore AI tools currently highlighted across coding, research, creative work, productivity and business workflows.'],
  '/new': ['New AI Tools and Product Launches | AI Directory', 'Discover recently added AI tools, product launches and emerging software across popular AI categories.'],
  '/deals': ['AI Tool Deals, Discounts and Free Trials | AI Directory', 'Explore clearly disclosed AI software deals, discounts and extended trials. Confirm eligibility and current terms with each provider.'],
  '/submit': ['Submit an AI Tool to AI Directory', 'Submit your AI product for editorial review. Compare free listing, fast-track review and clearly labeled promotion options.'],
  '/pricing': ['AI Tool Listing and Promotion Pricing for Founders', 'Compare founder listing, review and promotional plans. Payment never guarantees a positive review or higher organic ranking.'],
  '/ranking-methodology': ['How AI Directory Rankings Work', 'Learn how AI Directory separates organic discovery signals from paid placements and labels sponsored tools.'],
  '/review-methodology': ['AI Tool Review Methodology | AI Directory', 'Learn how AI tools are selected, assessed and corrected, and how sponsorship is separated from editorial conclusions.'],
  '/sponsored-policy': ['Sponsored Content and Paid Placement Policy', 'Understand what paid AI tool promotion can buy, what it cannot influence and how sponsored placements are labeled.'],
  '/about': ['About AI Directory and Our Editorial Principles', 'Learn why AI Directory exists, how tool discovery works and the principles guiding rankings, reviews and sponsorship labels.'],
  '/contact': ['Contact AI Directory', 'Contact AI Directory for listing corrections, founder support, advertising questions or policy concerns.']
};

function setMeta(selector, attribute, value) {
  let element = document.head.querySelector(selector);
  if (!element) { element = document.createElement('meta'); element.setAttribute(attribute, value); document.head.appendChild(element); }
  return element;
}

export default function Seo() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    let seo = staticSeo[pathname];
    if (pathname.startsWith('/tool/')) {
      const tool = tools.find(x => x.slug === pathname.split('/')[2]);
      if (tool) seo = [`${tool.name}: Features, Pricing and Alternatives`, `${tool.name} overview with key features, pricing, free-trial information, best use cases, limitations and comparable AI tools.`];
    } else if (pathname.startsWith('/category/')) {
      const item = categories.find(x => x.slug === pathname.split('/')[2]);
      if (item) seo = [`Best ${item.name} AI Tools: Compare Features and Pricing`, `Explore ${item.name.toLowerCase()} AI tools. Compare pricing, features, free options and suitability for common ${item.name.toLowerCase()} tasks.`];
    } else if (pathname.startsWith('/task/')) {
      const item = tasks.find(x => x.slug === pathname.split('/')[2]);
      if (item) seo = [`Best AI Tools to ${item.name}`, `Compare recommended AI tools to ${item.name.toLowerCase()}, including free options, pricing, workflow fit and selection guidance.`];
    } else if (pathname.startsWith('/compare/')) {
      const item = comparisons.find(x => x.slug === pathname.split('/')[2]);
      if (item) seo = [`${item.toolA} vs ${item.toolB}: Features and Pricing`, `Compare ${item.toolA} and ${item.toolB} across pricing, features, strengths, limitations and best-fit use cases.`];
    }
    seo ||= ['AI Directory', 'Discover and compare AI tools by task, category, features and pricing.'];
    const [title, description] = seo;
    const canonicalUrl = `${SITE}${pathname === '/' ? '/' : pathname}`;
    document.title = title;
    setMeta('meta[name="description"]', 'name', 'description').content = description;
    setMeta('meta[name="robots"]', 'name', 'robots').content = pathname.startsWith('/admin') || pathname.startsWith('/founder/') || pathname.startsWith('/login') || pathname.startsWith('/signup') || pathname.startsWith('/submit/new') || pathname === '/search' ? 'noindex, nofollow' : 'index, follow, max-image-preview:large';
    setMeta('meta[property="og:title"]', 'property', 'og:title').content = title;
    setMeta('meta[property="og:description"]', 'property', 'og:description').content = description;
    setMeta('meta[property="og:type"]', 'property', 'og:type').content = 'website';
    setMeta('meta[property="og:url"]', 'property', 'og:url').content = canonicalUrl;
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card').content = 'summary';
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = canonicalUrl;
  }, [pathname, search]);
  return null;
}
