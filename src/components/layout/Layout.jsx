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
  const pointerFrame = React.useRef(null);
  const [effectMode, setEffectMode] = React.useState(() => ({
    compact: window.matchMedia('(max-width: 767px), (prefers-reduced-motion: reduce)').matches,
    pointer: window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches
  }));

  React.useEffect(() => {
    const compactQuery = window.matchMedia('(max-width: 767px), (prefers-reduced-motion: reduce)');
    const pointerQuery = window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)');
    const updateMode = () => {
      setEffectMode({ compact: compactQuery.matches, pointer: pointerQuery.matches });
    };
    compactQuery.addEventListener('change', updateMode);
    pointerQuery.addEventListener('change', updateMode);

    return () => {
      compactQuery.removeEventListener('change', updateMode);
      pointerQuery.removeEventListener('change', updateMode);
      if (pointerFrame.current) window.cancelAnimationFrame(pointerFrame.current);
    };
  }, []);

  const handlePointerMove = (event) => {
    if (isAdmin || pathname === '/' || !effectMode.pointer) return;
    const main = event.currentTarget;
    const clientX = event.clientX;
    const clientY = event.clientY;
    if (pointerFrame.current) window.cancelAnimationFrame(pointerFrame.current);
    pointerFrame.current = window.requestAnimationFrame(() => {
      const bounds = main.getBoundingClientRect();
      main.style.setProperty('--page-mouse-x', `${clientX - bounds.left}px`);
      main.style.setProperty('--page-mouse-y', `${clientY - bounds.top}px`);
      main.classList.add('site-global-pointer-active');
      pointerFrame.current = null;
    });
  };

  const handlePointerLeave = (event) => {
    if (pointerFrame.current) {
      window.cancelAnimationFrame(pointerFrame.current);
      pointerFrame.current = null;
    }
    event.currentTarget.classList.remove('site-global-pointer-active');
  };

  const bandCount = effectMode.compact ? 2 : 4;
  const bubblesPerBand = effectMode.compact ? 3 : 6;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
      <Seo />
      <StructuredData />
      {!isAdmin && <Header />}
      <main
        className={`site-main-canvas${isAdmin ? '' : ' site-global-effects-zone'}`}
        style={{ flex: 1, width: '100%' }}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        {!isAdmin && (
          <div className="site-page-effects" aria-hidden="true">
            {Array.from({ length: bandCount }, (_, bandIndex) => (
              <div
                className={`site-bubble-field site-page-bubble-field site-bubble-variant-${bandIndex + 1}`}
                style={{ '--bubble-band': bandIndex }}
                key={bandIndex}
              >
                {Array.from({ length: bubblesPerBand }, (_, bubbleIndex) => (
                  <span className={`site-ambient-bubble site-ambient-bubble-${bubbleIndex + 1}`} key={bubbleIndex} />
                ))}
              </div>
            ))}
            {effectMode.pointer && (
              <div className="site-page-pointer-field">
                <span className="site-page-pointer-glow" />
                {Array.from({ length: 5 }, (_, index) => (
                  <span className={`site-page-pointer-clone site-page-pointer-clone-${index + 1}`} key={index} />
                ))}
              </div>
            )}
          </div>
        )}
        {children}
      </main>
      {!isAdmin && <Footer cta={footerCta} />}
    </div>
  );
}
