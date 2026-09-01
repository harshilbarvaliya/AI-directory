import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Seo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const label = pathname === '/' ? 'Discover AI tools by task' : pathname.split('/').filter(Boolean).map(x=>x.replaceAll('-',' ')).join(' · ');
    document.title = `${label.charAt(0).toUpperCase()+label.slice(1)} | AI Directory`;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta=document.createElement('meta'); meta.name='description'; document.head.appendChild(meta); }
    meta.content = `Explore clear, independently labeled AI tool listings, pricing, comparisons and alternatives for ${label}.`;
  }, [pathname]);
  return null;
}
