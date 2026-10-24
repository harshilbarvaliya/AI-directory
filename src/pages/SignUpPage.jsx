import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../components/common/Button';

export default function SignUpPage() {
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const createAccount = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const password = data.get('password');
    if (password.length < 6) return setError('Password must contain at least 6 characters.');
    const account = { name: data.get('name'), email: data.get('email').toLowerCase(), password, role };
    localStorage.setItem('ai-directory-account', JSON.stringify(account));
    localStorage.setItem('ai-directory-session', JSON.stringify({ name: account.name, email: account.email, role }));
    navigate(role === 'founder' ? '/founder/dashboard' : '/tools');
  };

  return (
    <div className="page-wrapper container" style={{ maxWidth: '480px', paddingTop: '3rem' }}>
      <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', margin: '0 auto 1rem' }}>
            <Sparkles size={22} />
          </div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.35rem' }}>Create Your Account</h1>
          <p style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Join AI Directory to save tools, track stacks, or list products.</p>
        </div>

        {/* Role Selector */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1.5rem', background: 'rgba(255, 255, 255, 0.04)', padding: '0.3rem', borderRadius: '10px' }}>
          <button
            type="button"
            onClick={() => setRole('user')}
            style={{
              padding: '0.5rem',
              borderRadius: '8px',
              border: 'none',
              fontSize: '0.8125rem',
              fontWeight: '600',
              cursor: 'pointer',
              background: role === 'user' ? '#6366f1' : 'transparent',
              color: role === 'user' ? '#ffffff' : '#94a3b8'
            }}
          >
            I'm an AI User / Explorer
          </button>
          <button
            type="button"
            onClick={() => setRole('founder')}
            style={{
              padding: '0.5rem',
              borderRadius: '8px',
              border: 'none',
              fontSize: '0.8125rem',
              fontWeight: '600',
              cursor: 'pointer',
              background: role === 'founder' ? '#6366f1' : 'transparent',
              color: role === 'founder' ? '#ffffff' : '#94a3b8'
            }}
          >
            I'm a Tool Founder
          </button>
        </div>

        <form onSubmit={createAccount} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {error && <p role="alert" style={{color:'#fda4af',fontSize:'.8rem'}}>{error}</p>}
          <div>
            <label style={{ fontSize: '0.8125rem', color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>Full Name</label>
            <input name="name" type="text" required placeholder="Alex Mercer" style={inputStyle} />
          </div>
          <div>
            <label style={{ fontSize: '0.8125rem', color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>Email Address</label>
            <input name="email" type="email" required placeholder="alex@company.com" style={inputStyle} />
          </div>
          <div>
            <label style={{ fontSize: '0.8125rem', color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>Password</label>
            <input name="password" type="password" minLength={6} required placeholder="••••••••" style={inputStyle} />
          </div>

          <Button type="submit" variant="primary" size="lg" style={{ width: '100%', marginTop: '0.5rem' }}>
            Create Free Account
          </Button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.84375rem', color: '#94a3b8' }}>
          Already have an account? <Link to="/login" style={{ color: '#818cf8', fontWeight: '600' }}>Log In</Link>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  background: 'rgba(15, 18, 28, 0.8)',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  borderRadius: '10px',
  padding: '0.625rem 0.875rem',
  color: '#ffffff',
  fontSize: '0.875rem',
  outline: 'none'
};
