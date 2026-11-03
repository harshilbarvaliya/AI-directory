import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Seo from '../common/Seo';
import StructuredData from '../common/StructuredData';
import { useLocation } from 'react-router-dom';
import { getFooterCta } from '../../data/footerCta';

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith('/admin');
  const footerCta = getFooterCta(pathname);

  React.useEffect(() => {
    if (isAdmin) return undefined;

    const decoratedSections = [];
    const sections = document.querySelectorAll('main section:not(.interactive-hero):not(.home-tool-marquee)');
    sections.forEach((section, index) => {
      const field = document.createElement('div');
      field.className = `site-bubble-field site-bubble-variant-${(index % 4) + 1}`;
      field.setAttribute('aria-hidden', 'true');

      for (let bubbleIndex = 1; bubbleIndex <= 6; bubbleIndex += 1) {
        const bubble = document.createElement('span');
        bubble.className = `site-ambient-bubble site-ambient-bubble-${bubbleIndex}`;
        field.appendChild(bubble);
      }

      section.classList.add('site-bubble-zone');
      section.prepend(field);
      decoratedSections.push({ section, field });
    });

    return () => {
      decoratedSections.forEach(({ section, field }) => {
        section.classList.remove('site-bubble-zone');
        field.remove();
      });
    };
  }, [pathname, isAdmin]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
      <Seo />
      <StructuredData />
      {!isAdmin && <Header />}
      <main style={{ flex: 1, width: '100%' }}>
        {children}
      </main>
      {!isAdmin && <Footer cta={footerCta} />}
    </div>
  );
}
