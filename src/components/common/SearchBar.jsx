import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Sparkles, ArrowRight } from 'lucide-react';

export default function SearchBar({
  placeholder = "Search AI tools, tasks, categories, or 'What do you want to build?'...",
  size = "lg",
  showChips = true,
  autoFocus = false,
  className = ""
}) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleChipClick = (term) => {
    navigate(`/search?q=${encodeURIComponent(term)}`);
  };

  const quickTags = [
    "Code Assistant",
    "SEO Writer",
    "Image Gen",
    "Voice Clone",
    "Free Tools",
    "Video Editor"
  ];

  return (
    <div className={`search-container ${className}`} style={{ width: '100%', maxWidth: '780px', margin: '0 auto' }}>
      <form onSubmit={handleSearch} style={{ position: 'relative', width: '100%' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: '#ffffff',
            border: '1px solid #cbd5e1',
            borderRadius: '16px',
            padding: size === 'lg' ? '0.5rem 0.75rem 0.5rem 1.25rem' : '0.35rem 0.5rem 0.35rem 0.875rem',
            boxShadow: '0 6px 20px rgba(15, 23, 42, 0.08)',
            transition: 'all 0.25s ease'
          }}
          className="search-input-wrapper"
        >
          <Search
            size={size === 'lg' ? 22 : 18}
            style={{ color: '#818cf8', flexShrink: 0, marginRight: '0.875rem' }}
          />

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            autoFocus={autoFocus}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#0f172a',
              fontSize: size === 'lg' ? '1.0625rem' : '0.9375rem',
              fontWeight: '500'
            }}
          />

          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: 'none',
                borderRadius: '50%',
                width: '24px',
                height: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#94a3b8',
                cursor: 'pointer',
                marginRight: '0.5rem'
              }}
            >
              <X size={14} />
            </button>
          )}

          <button
            type="submit"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.375rem',
              background: '#4f46e5',
              color: '#ffffff',
              border: 'none',
              borderRadius: '10px',
              padding: size === 'lg' ? '0.625rem 1.25rem' : '0.45rem 0.875rem',
              fontSize: size === 'lg' ? '0.9375rem' : '0.8125rem',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: 'none',
              transition: 'all 0.2s ease',
              flexShrink: 0
            }}
          >
            <span>Search</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </form>

      {showChips && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginTop: '0.875rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          <span style={{ fontSize: '0.8125rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <Sparkles size={13} style={{ color: '#818cf8' }} />
            Popular:
          </span>
          {quickTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => handleChipClick(tag)}
              style={{
                background: '#ffffff',
                border: '1px solid #dbe3ee',
                borderRadius: '9999px',
                padding: '0.2rem 0.65rem',
                fontSize: '0.75rem',
                color: '#475569',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(99, 102, 241, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                e.currentTarget.style.color = '#4338ca';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.borderColor = '#dbe3ee';
                e.currentTarget.style.color = '#475569';
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
