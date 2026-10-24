import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard, Inbox, Wrench, FolderTree, ListChecks, Users, CreditCard,
  Search, ExternalLink, CheckCircle2, Clock3, AlertCircle, Eye, MousePointer,
  ShieldCheck, Star, BadgeDollarSign, MoreHorizontal, Plus, ChevronRight
} from 'lucide-react';
import { tools, categories, tasks, founderPricingPlans } from '../data/mockData';

const submissionsSeed = [
  { id: 'SUB-1042', name: 'Sample Research Copilot', founder: 'Demo Founder', plan: 'Fast Track', payment: 'Demo paid', status: 'Pending review', submitted: 'Today' },
  { id: 'SUB-1041', name: 'Sample Video Assistant', founder: 'Demo Studio', plan: 'Free listing', payment: 'Not required', status: 'Changes requested', submitted: 'Yesterday' },
  { id: 'SUB-1040', name: 'Sample Support Agent', founder: 'Demo Labs', plan: 'Pro Launch', payment: 'Demo paid', status: 'Approved', submitted: '2 days ago' }
];

const navItems = [
  ['Overview', LayoutDashboard], ['Submissions', Inbox], ['Tools', Wrench],
  ['Categories', FolderTree], ['Tasks', ListChecks], ['Users & Founders', Users], ['Plans & Payments', CreditCard]
];

export default function AdminPage() {
  const [active, setActive] = useState('Overview');
  const [query, setQuery] = useState('');
  const [submissions, setSubmissions] = useState(submissionsSeed);
  const [toolState, setToolState] = useState(() => Object.fromEntries(tools.map(t => [t.id, { published: true, verified: t.verified, sponsored: t.sponsored, featured: t.featured }])));
  const filteredTools = useMemo(() => tools.filter(t => `${t.name} ${t.category}`.toLowerCase().includes(query.toLowerCase())), [query]);

  const updateSubmission = (id, status) => setSubmissions(rows => rows.map(row => row.id === id ? { ...row, status } : row));
  const toggleTool = (id, key) => setToolState(current => ({ ...current, [id]: { ...current[id], [key]: !current[id][key] } }));

  return <div className="admin-shell">
    <aside className="admin-sidebar">
      <Link to="/" className="admin-brand"><span>AI</span>Directory <small>Admin</small></Link>
      <nav aria-label="Admin navigation">{navItems.map(([label, Icon]) => <button key={label} className={active === label ? 'active' : ''} onClick={() => setActive(label)}><Icon size={17}/>{label}</button>)}</nav>
      <div className="admin-sidebar-note"><ShieldCheck size={18}/><div><strong>Trust controls</strong><p>Sponsored and Verified remain independent.</p></div></div>
      <Link to="/" className="btn btn-secondary btn-sm">View public website <ExternalLink size={14}/></Link>
    </aside>

    <main className="admin-main">
      <header className="admin-topbar"><div><span className="admin-kicker">Directory operations</span><h1>{active}</h1></div><div className="admin-user"><span>Development Admin</span><div>DA</div></div></header>
      <div className="demo-banner"><strong>Development admin:</strong> changes on this screen are temporary UI state. Connect secure Admin authentication, database APIs and payment webhooks before production.</div>

      {active === 'Overview' && <Overview submissions={submissions} setActive={setActive}/>} 
      {active === 'Submissions' && <Submissions rows={submissions} update={updateSubmission}/>} 
      {active === 'Tools' && <ToolsAdmin rows={filteredTools} states={toolState} toggle={toggleTool} query={query} setQuery={setQuery}/>} 
      {active === 'Categories' && <Taxonomy title="Categories" rows={categories} description="Organize tools into clear product categories."/>}
      {active === 'Tasks' && <Taxonomy title="Tasks and use cases" rows={tasks} description="Manage intent pages used for discovery and recommendations."/>}
      {active === 'Users & Founders' && <UsersAdmin/>}
      {active === 'Plans & Payments' && <PlansAdmin/>}
    </main>
  </div>;
}

function Overview({ submissions, setActive }) {
  const pending = submissions.filter(x => x.status === 'Pending review').length;
  return <>
    <section className="admin-stats">
      <Stat icon={Inbox} label="Pending submissions" value={pending} detail="Requires editorial review" tone="purple"/>
      <Stat icon={Wrench} label="Published tools" value={tools.length} detail="Sample directory listings" tone="blue"/>
      <Stat icon={FolderTree} label="Categories" value={categories.length} detail="Active taxonomy groups" tone="green"/>
      <Stat icon={Users} label="Founder accounts" value="Demo" detail="Authentication not connected" tone="amber"/>
    </section>
    <section className="admin-grid-two">
      <div className="admin-card"><div className="admin-card-head"><div><h2>Submission queue</h2><p>Latest founder submissions awaiting action.</p></div><button className="btn btn-secondary btn-sm" onClick={() => setActive('Submissions')}>Review all <ChevronRight size={14}/></button></div><SubmissionTable rows={submissions.slice(0,3)} compact/></div>
      <div className="admin-card"><div className="admin-card-head"><div><h2>Directory health</h2><p>Development readiness checks.</p></div></div><div className="health-list"><Health ok label="Sponsored labels visible"/><Health ok label="Verified status separated from payment"/><Health ok label="Organic ranking policy published"/><Health label="Production database connection"/><Health label="Admin role authentication"/><Health label="Payment webhook connection"/></div></div>
    </section>
    <section className="admin-card"><div className="admin-card-head"><div><h2>Demo activity</h2><p>Illustrative events only. These are not production analytics.</p></div></div><div className="activity-list"><Activity icon={CheckCircle2} text="Sample Support Agent approved" time="2 days ago"/><Activity icon={AlertCircle} text="Changes requested for Sample Video Assistant" time="Yesterday"/><Activity icon={Clock3} text="Sample Research Copilot entered review queue" time="Today"/></div></section>
  </>;
}

function Submissions({ rows, update }) { return <section className="admin-card"><div className="admin-card-head"><div><h2>Tool submissions</h2><p>Approve, reject or request changes after editorial review.</p></div></div><SubmissionTable rows={rows} update={update}/></section>; }

function SubmissionTable({ rows, update, compact=false }) { return <div className="table-scroll"><table className="admin-table"><thead><tr><th>Submission</th><th>Founder</th><th>Plan / payment</th><th>Status</th>{!compact&&<th>Editorial action</th>}</tr></thead><tbody>{rows.map(row=><tr key={row.id}><td><strong>{row.name}</strong><small>{row.id} · {row.submitted}</small></td><td>{row.founder}</td><td>{row.plan}<small>{row.payment}</small></td><td><Status value={row.status}/></td>{!compact&&<td><select value={row.status} onChange={e=>update(row.id,e.target.value)} aria-label={`Update ${row.name} status`}><option>Pending review</option><option>Changes requested</option><option>Approved</option><option>Rejected</option></select></td>}</tr>)}</tbody></table></div>; }

function ToolsAdmin({ rows, states, toggle, query, setQuery }) { return <section className="admin-card"><div className="admin-card-head"><div><h2>Tool listings</h2><p>Publish listings and manage independent trust and promotional labels.</p></div><div className="admin-search"><Search size={16}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search tools or categories"/></div></div><div className="table-scroll"><table className="admin-table"><thead><tr><th>Tool</th><th>Category</th><th>Published</th><th>Verified</th><th>Sponsored</th><th>Featured</th><th>View</th></tr></thead><tbody>{rows.map(tool=><tr key={tool.id}><td><div className="tool-cell"><img src={tool.logo} alt=""/><strong>{tool.name}</strong></div></td><td>{tool.category}</td>{['published','verified','sponsored','featured'].map(key=><td key={key}><button className={`admin-toggle ${states[tool.id][key]?'on':''}`} onClick={()=>toggle(tool.id,key)} aria-label={`Toggle ${key} for ${tool.name}`}><span/></button></td>)}<td><Link to={`/tool/${tool.slug}`} aria-label={`View ${tool.name}`}><ExternalLink size={16}/></Link></td></tr>)}</tbody></table></div></section>; }

function Taxonomy({ title, rows, description }) { return <section className="admin-card"><div className="admin-card-head"><div><h2>{title}</h2><p>{description}</p></div><button className="btn btn-primary btn-sm" title="Requires database connection"><Plus size={14}/> Add new</button></div><div className="admin-taxonomy">{rows.map((row,index)=><div key={row.id}><div><strong>{row.name}</strong><p>{row.description || row.summary}</p></div><span>{row.count || row.toolCount || 0} tools</span><button className="btn btn-secondary btn-sm" title="Requires database connection">Edit</button></div>)}</div></section>; }

function UsersAdmin() { return <section className="admin-card"><div className="admin-card-head"><div><h2>Users and founders</h2><p>Role, account status and listing ownership management.</p></div></div><div className="empty-admin"><Users size={32}/><h3>Authentication data is not connected</h3><p>Once the account backend is connected, admins can search users, assign User/Founder/Admin roles, review ownership and suspend accounts.</p></div></section>; }

function PlansAdmin() { return <><section className="admin-stats"><Stat icon={CreditCard} label="Payment gateway" value="Offline" detail="No production credentials" tone="amber"/><Stat icon={BadgeDollarSign} label="Payment records" value="Demo" detail="No real transactions shown" tone="purple"/><Stat icon={Star} label="Plans configured" value={founderPricingPlans.length} detail="From approved workbook pricing" tone="green"/></section><section className="admin-card"><div className="admin-card-head"><div><h2>Founder plans</h2><p>Published pricing configuration. Payment does not influence organic ranking.</p></div></div><div className="admin-taxonomy">{founderPricingPlans.map(plan=><div key={plan.id}><div><strong>{plan.name}</strong><p>{plan.description}</p></div><span>{plan.price} · {plan.period}</span><button className="btn btn-secondary btn-sm" title="Requires database connection">Manage</button></div>)}</div></section></>; }

function Stat({ icon:Icon, label, value, detail, tone }) { return <div className="admin-stat"><div className={`admin-stat-icon ${tone}`}><Icon size={19}/></div><div><span>{label}</span><strong>{value}</strong><small>{detail}</small></div></div>; }
function Status({ value }) { return <span className={`status-pill ${value.toLowerCase().replaceAll(' ','-')}`}>{value}</span>; }
function Health({ ok=false, label }) { return <div><span className={ok?'ok':'pending'}>{ok?<CheckCircle2 size={16}/>:<Clock3 size={16}/>}</span>{label}</div>; }
function Activity({ icon:Icon, text, time }) { return <div><Icon size={17}/><span>{text}</span><small>{time}</small></div>; }
