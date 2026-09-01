import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../components/common/Button';

export default function PasswordPage() {
  const { pathname } = useLocation();
  const reset = pathname === '/reset-password';
  const [sent, setSent] = useState(false);
  return <main className="page-wrapper container-narrow">
    <div className="page-hero"><h1 className="page-hero-title">{reset ? 'Set a new password' : 'Reset your password'}</h1><p className="page-hero-desc">{reset ? 'Choose a strong password for your account.' : 'Enter your account email and we’ll send reset instructions.'}</p></div>
    <form className="simple-panel" style={{maxWidth:480,margin:'0 auto',display:'grid',gap:'1rem'}} onSubmit={e=>{e.preventDefault();setSent(true)}}>
      {sent ? <><p role="status">{reset ? 'Password updated in this demo flow.' : 'If an account exists, reset instructions have been prepared.'}</p><Button to="/login">Return to login</Button></> : <>
        {!reset && <label>Email address<input type="email" required style={{display:'block',width:'100%',padding:'.75rem',marginTop:'.35rem'}} /></label>}
        {reset && <><label>New password<input type="password" minLength="8" required style={{display:'block',width:'100%',padding:'.75rem',marginTop:'.35rem'}} /></label><label>Confirm password<input type="password" minLength="8" required style={{display:'block',width:'100%',padding:'.75rem',marginTop:'.35rem'}} /></label></>}
        <Button type="submit">{reset ? 'Update password' : 'Send reset instructions'}</Button>
        <Link to="/login">Back to login</Link>
      </>}
    </form>
  </main>;
}
