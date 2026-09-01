import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Seo from '../common/Seo';

export default function Layout({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
      <Seo />
      <Header />
      <main style={{ flex: 1, width: '100%' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
