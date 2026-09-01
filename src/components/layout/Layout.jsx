import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Seo from '../common/Seo';
import StructuredData from '../common/StructuredData';
import { useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith('/admin');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
      <Seo />
      <StructuredData />
      {!isAdmin && <Header />}
      <main style={{ flex: 1, width: '100%' }}>
        {children}
      </main>
      {!isAdmin && <Footer />}
    </div>
  );
}
