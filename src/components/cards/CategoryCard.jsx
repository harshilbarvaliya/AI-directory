import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, FileText, Image as ImageIcon, Video, Compass, 
  TrendingUp, MessageSquare, Headphones, ChevronRight, Layers 
} from 'lucide-react';

const iconMap = {
  Code,
  FileText,
  Image: ImageIcon,
  Video,
  Compass,
  TrendingUp,
  MessageSquare,
  Headphones,
  Layers
};

export default function CategoryCard({ category }) {
  const IconComponent = iconMap[category.icon] || Layers;

  return (
    <Link
      to={`/category/${category.slug}`}
      className="glass-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '1.25rem',
        textDecoration: 'none',
        borderRadius: '16px',
        position: 'relative'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.875rem' }}>
        <div
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: `rgba(${category.color === '#6366f1' ? '99, 102, 241' : category.color === '#8b5cf6' ? '139, 92, 246' : '6, 182, 212'}, 0.12)`,
            border: `1px solid ${category.color}33`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: category.color || '#6366f1'
          }}
        >
          <IconComponent size={20} />
        </div>

        <span
          style={{
            fontSize: '0.75rem',
            fontWeight: '600',
            background: 'rgba(255, 255, 255, 0.06)',
            padding: '0.2rem 0.6rem',
            borderRadius: '9999px',
            color: '#94a3b8'
          }}
        >
          {category.count} tools
        </span>
      </div>

      <h3 style={{ fontSize: '1.0625rem', fontWeight: '700', color: '#f8fafc', marginBottom: '0.35rem' }}>
        {category.name}
      </h3>

      <p
        style={{
          fontSize: '0.8125rem',
          color: '#94a3b8',
          lineHeight: '1.5',
          marginBottom: '1rem',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          flex: 1
        }}
      >
        {category.description}
      </p>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem',
          fontSize: '0.8125rem',
          fontWeight: '600',
          color: '#818cf8',
          marginTop: 'auto'
        }}
      >
        <span>Explore Category</span>
        <ChevronRight size={14} />
      </div>
    </Link>
  );
}
