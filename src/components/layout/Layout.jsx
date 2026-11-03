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

    const siteMain = document.querySelector('.site-main-canvas');
    const pageRoot = siteMain?.firstElementChild;
    if (!pageRoot) return undefined;

    const effectsLayer = document.createElement('div');
    effectsLayer.className = 'site-page-effects';
    effectsLayer.setAttribute('aria-hidden', 'true');

    for (let bandIndex = 0; bandIndex < 4; bandIndex += 1) {
      const field = document.createElement('div');
      field.className = `site-bubble-field site-page-bubble-field site-bubble-variant-${bandIndex + 1}`;
      field.style.setProperty('--bubble-band', bandIndex);

      for (let bubbleIndex = 1; bubbleIndex <= 6; bubbleIndex += 1) {
        const bubble = document.createElement('span');
        bubble.className = `site-ambient-bubble site-ambient-bubble-${bubbleIndex}`;
        field.appendChild(bubble);
      }
      effectsLayer.appendChild(field);
    }

    const pointerField = document.createElement('div');
    pointerField.className = 'site-page-pointer-field';
    pointerField.innerHTML = '<span class="site-page-pointer-glow"></span><span class="site-page-pointer-clone site-page-pointer-clone-1"></span><span class="site-page-pointer-clone site-page-pointer-clone-2"></span><span class="site-page-pointer-clone site-page-pointer-clone-3"></span><span class="site-page-pointer-clone site-page-pointer-clone-4"></span><span class="site-page-pointer-clone site-page-pointer-clone-5"></span>';
    effectsLayer.appendChild(pointerField);

    pageRoot.classList.add('site-global-effects-zone');
    pageRoot.prepend(effectsLayer);

    let pointerFrame = null;
    const pointerMove = (event) => {
      if (pathname === '/' || !window.matchMedia('(pointer: fine)').matches) return;
      if (pointerFrame) window.cancelAnimationFrame(pointerFrame);
      pointerFrame = window.requestAnimationFrame(() => {
        const bounds = pageRoot.getBoundingClientRect();
        pageRoot.style.setProperty('--page-mouse-x', `${event.clientX - bounds.left}px`);
        pageRoot.style.setProperty('--page-mouse-y', `${event.clientY - bounds.top}px`);
        pageRoot.classList.add('site-global-pointer-active');
      });
    };
    const pointerLeave = () => pageRoot.classList.remove('site-global-pointer-active');
    pageRoot.addEventListener('pointermove', pointerMove, { passive: true });
    pageRoot.addEventListener('pointerleave', pointerLeave);

    return () => {
      if (pointerFrame) window.cancelAnimationFrame(pointerFrame);
      pageRoot.removeEventListener('pointermove', pointerMove);
      pageRoot.removeEventListener('pointerleave', pointerLeave);
      pageRoot.classList.remove('site-global-effects-zone', 'site-global-pointer-active');
      pageRoot.style.removeProperty('--page-mouse-x');
      pageRoot.style.removeProperty('--page-mouse-y');
      effectsLayer.remove();
    };
  }, [pathname, isAdmin]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
      <Seo />
      <StructuredData />
      {!isAdmin && <Header />}
      <main className="site-main-canvas" style={{ flex: 1, width: '100%' }}>
        {children}
      </main>
      {!isAdmin && <Footer cta={footerCta} />}
    </div>
  );
}
