import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { tools, categories, tasks, comparisons } from '../../data/mockData';

const SITE_URL = 'https://harshilbarvaliya.github.io/AI-directory';
const absolute = (path = '/') => `${SITE_URL}${path === '/' ? '/' : path}`;

function breadcrumbSchema(pathname, currentName) {
  const parts = pathname.split('/').filter(Boolean);
  if (!parts.length) return null;
  const parentNames = { tool: 'AI Tools', category: 'Categories', task: 'Tasks', compare: 'Compare', alternatives: 'Alternatives' };
  const parentPaths = { tool: '/tools', category: '/categories', task: '/tasks', compare: '/compare', alternatives: '/alternatives' };
  const items = [{ '@type': 'ListItem', position: 1, name: 'Home', item: absolute('/') }];
  const parent = parts[0];
  if (parts.length > 1 && parentNames[parent]) {
    items.push({ '@type': 'ListItem', position: 2, name: parentNames[parent], item: absolute(parentPaths[parent]) });
  }
  items.push({ '@type': 'ListItem', position: items.length + 1, name: currentName, item: absolute(pathname) });
  return { '@type': 'BreadcrumbList', itemListElement: items };
}

function itemList(name, pathname, entries, type, pathPrefix) {
  return {
    '@type': 'CollectionPage',
    name,
    url: absolute(pathname),
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: entries.length,
      itemListElement: entries.map((entry, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: { '@type': type, name: entry.name || `${entry.toolA} vs ${entry.toolB}`, url: absolute(`${pathPrefix}${entry.slug}`) }
      }))
    }
  };
}

export default function StructuredData() {
  const { pathname } = useLocation();

  useEffect(() => {
    const graph = [];
    let currentName = pathname.split('/').filter(Boolean).pop()?.replaceAll('-', ' ') || 'AI Directory';

    if (pathname === '/') {
      graph.push(
        { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: 'AI Directory', url: absolute('/'), description: 'An independent directory for discovering and comparing AI tools.' },
        { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, name: 'AI Directory', url: absolute('/'), publisher: { '@id': `${SITE_URL}/#organization` }, inLanguage: 'en' }
      );
      currentName = 'AI Directory';
    } else if (pathname === '/tools') {
      graph.push(itemList('All AI Tools', pathname, tools, 'SoftwareApplication', '/tool/'));
      currentName = 'All AI Tools';
    } else if (pathname === '/categories') {
      graph.push(itemList('AI Tool Categories', pathname, categories, 'CollectionPage', '/category/'));
      currentName = 'AI Tool Categories';
    } else if (pathname === '/tasks') {
      graph.push(itemList('AI Tools by Task', pathname, tasks, 'CollectionPage', '/task/'));
      currentName = 'AI Tools by Task';
    } else if (pathname === '/compare') {
      graph.push(itemList('AI Tool Comparisons', pathname, comparisons, 'WebPage', '/compare/'));
      currentName = 'AI Tool Comparisons';
    } else if (pathname.startsWith('/tool/')) {
      const slug = pathname.split('/')[2];
      const tool = tools.find(entry => entry.slug === slug);
      if (tool) {
        currentName = tool.name;
        const numericPrice = tool.pricingType === 'Free' ? 0 : Number(tool.startingPrice.match(/[\d.]+/)?.[0] || 0);
        graph.push({
          '@type': 'SoftwareApplication',
          name: tool.name,
          url: absolute(pathname),
          description: tool.tagline,
          image: tool.logo,
          applicationCategory: tool.category,
          operatingSystem: 'Web',
          offers: { '@type': 'Offer', price: numericPrice, priceCurrency: 'USD', url: tool.websiteUrl, availability: 'https://schema.org/OnlineOnly' }
        });
      }
    } else if (pathname.startsWith('/category/')) {
      const category = categories.find(entry => entry.slug === pathname.split('/')[2]);
      if (category) { currentName = category.name; graph.push(itemList(category.name, pathname, tools.filter(tool => tool.categorySlug === category.slug), 'SoftwareApplication', '/tool/')); }
    } else if (pathname.startsWith('/task/')) {
      const task = tasks.find(entry => entry.slug === pathname.split('/')[2]);
      if (task) { currentName = task.name; graph.push(itemList(task.name, pathname, tools.filter(tool => tool.tasks?.includes(task.name)), 'SoftwareApplication', '/tool/')); }
    }

    const breadcrumb = breadcrumbSchema(pathname, currentName);
    if (breadcrumb) graph.push(breadcrumb);

    document.querySelectorAll('script[data-ai-directory-schema]').forEach(node => node.remove());
    if (graph.length) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.aiDirectorySchema = 'true';
      script.text = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
      document.head.appendChild(script);
    }
    return () => document.querySelectorAll('script[data-ai-directory-schema]').forEach(node => node.remove());
  }, [pathname]);

  return null;
}
