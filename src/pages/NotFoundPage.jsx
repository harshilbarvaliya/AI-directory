import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Home, Layers, ArrowLeft } from 'lucide-react';
import Button from '../components/common/Button';

export default function NotFoundPage() {
  return (
    <div className="page-wrapper container" style={{ textAlign: 'center', paddingTop: '5rem', maxWidth: '600px' }}>
      <div style={{ fontSize: '5rem', fontWeight: '900', fontFamily: 'Inter, sans-serif', color: '#6366f1', lineHeight: '1', marginBottom: '1rem' }}>
        404
      </div>
      <h1 style={{ fontSize: '2rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.75rem' }}>
        Page Not Found
      </h1>
      <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
        The page or tool listing you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <Button to="/" variant="primary" size="lg" icon={Home} iconPosition="left">
          Return to Homepage
        </Button>
        <Button to="/tools" variant="secondary" size="lg" icon={Layers} iconPosition="left">
          Browse Directory
        </Button>
      </div>
    </div>
  );
}
