import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, PenTool, Camera, Mic, Search, Scissors, ArrowRight, CheckCircle2 } from 'lucide-react';

const taskIcons = {
  Terminal,
  PenTool,
  Camera,
  Mic,
  Search,
  Scissors
};

export default function TaskCard({ task }) {
  const IconComponent = taskIcons[task.icon] || CheckCircle2;

  return (
    <Link
      to={`/task/${task.slug}`}
      className="glass-card task-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '1.25rem',
        textDecoration: 'none',
        borderRadius: '16px'
      }}
    >
      <div className="task-card-top" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.875rem' }}>
        <div
          className="task-card-icon"
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: 'rgba(6, 182, 212, 0.12)',
            border: '1px solid rgba(6, 182, 212, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#22d3ee'
          }}
        >
          <IconComponent size={20} />
        </div>

        {task.badge && (
          <span
            className="task-card-badge"
            style={{
              fontSize: '0.71875rem',
              fontWeight: '600',
              padding: '0.2rem 0.55rem',
              borderRadius: '9999px',
              background: 'rgba(99, 102, 241, 0.12)',
              color: '#a5b4fc',
              border: '1px solid rgba(99, 102, 241, 0.25)'
            }}
          >
            {task.badge}
          </span>
        )}
      </div>

      <h3 className="task-card-title" style={{ fontSize: '1.0625rem', fontWeight: '700', color: '#f8fafc', marginBottom: '0.35rem' }}>
        {task.name}
      </h3>

      <p
        className="task-card-summary"
        style={{
          fontSize: '0.8125rem',
          color: '#94a3b8',
          lineHeight: '1.5',
          marginBottom: '1rem',
          flex: 1
        }}
      >
        {task.summary}
      </p>

      <div
        className="task-card-footer"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '0.75rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          marginTop: 'auto'
        }}
      >
        <span className="task-card-count" style={{ fontSize: '0.78125rem', color: '#64748b' }}>
          {task.toolCount} curated tools
        </span>

        <div className="task-card-action" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.78125rem', fontWeight: '600', color: '#38bdf8' }}>
          <span>View Tools</span>
          <ArrowRight size={13} />
        </div>
      </div>
    </Link>
  );
}
