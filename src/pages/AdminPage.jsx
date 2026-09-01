import React, { useState } from 'react';
import { tools, categories, tasks } from '../data/mockData';

export default function AdminPage() {
  const [tab,setTab]=useState('Submissions');
  const [status,setStatus]=useState('Pending review');
  const tabs=['Submissions','Tools','Categories','Tasks','Users & founders','Plans'];
  return <main className="page-wrapper container">
    <div className="demo-banner"><strong>Development admin preview:</strong> controls update local UI only. Authentication and a production data service must be connected before launch.</div>
    <div className="section-header"><h1 className="section-title">Admin workspace</h1><p>Review submissions, manage directory content, and keep paid placement separate from organic ranking.</p></div>
    <div style={{display:'flex',gap:'.5rem',flexWrap:'wrap',marginBottom:'1.5rem'}}>{tabs.map(x=><button className={`btn ${tab===x?'btn-primary':'btn-secondary'}`} onClick={()=>setTab(x)} key={x}>{x}</button>)}</div>
    {tab==='Submissions' ? <div className="simple-panel"><h2>Submission review</h2><table className="data-table"><thead><tr><th>Submission</th><th>Plan</th><th>Payment</th><th>Status</th><th>Action</th></tr></thead><tbody><tr><td>Sample tool submission</td><td>Free listing</td><td>Not required</td><td>{status}</td><td><select value={status} onChange={e=>setStatus(e.target.value)}><option>Pending review</option><option>Changes requested</option><option>Approved</option><option>Rejected</option></select></td></tr></tbody></table></div> :
    <div className="simple-grid"><div className="simple-panel"><h2>{tab}</h2><p>{tab==='Tools'?`${tools.length} sample listings`:tab==='Categories'?`${categories.length} categories`:tab==='Tasks'?`${tasks.length} tasks`:'Management view ready for backend data.'}</p><p>Publish/unpublish, edit, verify, sponsor and feature actions will persist once the admin API is connected.</p></div><div className="simple-panel"><h2>Trust controls</h2><p>Verified and Sponsored are independent fields. Sponsorship never changes organic order.</p></div></div>}
  </main>;
}
