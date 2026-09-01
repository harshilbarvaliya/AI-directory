import React from 'react';
import { Cpu, Sparkles } from 'lucide-react';
import TaskCard from '../components/cards/TaskCard';
import { tasks } from '../data/mockData';

export default function TasksPage() {
  return (
    <div className="page-wrapper container">
      <div className="page-hero">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#22d3ee', fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
          <Cpu size={14} />
          Intent-Driven Workflows
        </div>
        <h1 className="page-hero-title">Browse AI Tools by Task</h1>
        <p className="page-hero-desc">
          Organized by jobs-to-be-done. Find the exact software stack suited for specific creation, automation, and development tasks.
        </p>
      </div>

      <div className="grid-tasks">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
