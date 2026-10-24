import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, Mail, Sparkles } from 'lucide-react';
import Button from '../components/common/Button';

export default function LoginPage() {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const signIn = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const account = JSON.parse(localStorage.getItem('ai-directory-account') || 'null');
    if (!account || account.email !== data.get('email').toLowerCase() || account.password !== data.get('password')) {
      setError('Email or password is incorrect. Create an account first if you are new.');
      return;
    }
    localStorage.setItem('ai-directory-session', JSON.stringify({ name: account.name, email: account.email, role: account.role }));
    navigate(account.role === 'founder' ? '/founder/dashboard' : '/tools');
  };
  return (
    <div className="page-wrapper container" style={{ maxWidth: '440px', paddingTop: '3.5rem' }}>
      <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', margin: '0 auto 1rem' }}>
            <Sparkles size={22} />
          </div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.35rem' }}>Welcome Back</h1>
          <p style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Access your saved tools, collections, and founder portal.</p>
        </div>

        <form onSubmit={signIn} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {error && <p role="alert" style={{color:'#fda4af',fontSize:'.8rem'}}>{error}</p>}
          <div>
            <label style={{ fontSize: '0.8125rem', color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>Email Address</label>
            <input name="email" type="email" required placeholder="name@company.com" style={inputStyle} />
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
              <label style={{ fontSize: '0.8125rem', color: '#cbd5e1' }}>Password</label>
              <Link to="/forgot-password" style={{ fontSize: '0.75rem', color: '#818cf8' }}>Forgot password?</Link>
            </div>
            <input name="password" type="password" required placeholder="••••••••" style={inputStyle} />
          </div>

          <Button type="submit" variant="primary" size="lg" style={{ width: '100%', marginTop: '0.5rem' }}>
            Sign In
          </Button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.84375rem', color: '#94a3b8' }}>
          Don't have an account? <Link to="/signup" style={{ color: '#818cf8', fontWeight: '600' }}>Create one free</Link>
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
