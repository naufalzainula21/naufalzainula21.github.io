// ProjectFeed.jsx — feed page center column
const PROJECTS = [
  {emoji:'🗃️', category:'SQL & Database', date:'Jan 2026', readTime:'15 min read',
   title:'Building a Relational Database for a Used Car Marketplace',
   excerpt:'Final Project — SQL & Relational Database Course, Pacmann Academy. Designed and implemented a normalized relational schema, covering entity relationships, constraints, and query optimization.',
   tags:['SQL','Python','Database'], type:'article'},
  {emoji:'🏪', category:'Data Warehouse', date:'Jan 2026', readTime:'6 min read',
   title:'Data Warehouse Design for Olist E-Commerce Platform',
   excerpt:'A step-by-step approach to designing a data warehouse for Brazil\'s largest online marketplace, applying Kimball methodology with star schema architecture.',
   tags:['Database','SQL'], type:'article'},
  {emoji:'🕌', category:'GIS & Urban Planning', date:'May 2024', readTime:'Bachelor Thesis',
   title:'Hedonic Pricing Analysis of Land Value Changes Near Al-Jabbar Mosque',
   excerpt:'Identified changes in land prices following the development of Al-Jabbar Mosque in Gedebage District, Bandung using the Hedonic Pricing Method.',
   tags:['GIS','Urban'], type:'thesis'},
  {emoji:'🚲', category:'Data Science', date:'Feb 2025', readTime:'Article',
   title:'Uncovering NYC Bike-Share Patterns: A Data Science Approach to Urban Mobility',
   excerpt:'Analyzed 2.1 million NYC Citi Bike trips from February 2024 using Python, geospatial analysis, and statistical modeling.',
   tags:['Python','GIS','Urban'], type:'article'},
  {emoji:'📊', category:'GitHub Repository', date:'Feb 2025', readTime:'Source Code',
   title:'NYC Citi Bike Analysis — Full Python Codebase',
   excerpt:'Full Python codebase: 2.1M trip records, station-level geospatial mapping with GeoPandas & Folium, trip duration regression (R²=0.68).',
   tags:['Python','GIS','Urban','GitHub'], type:'github'},
  {emoji:'🏗️', category:'GitHub Repository', date:'Jan 2026', readTime:'Source Code',
   title:'Olist Data Warehouse — Dimensional Modeling',
   excerpt:'Production-ready star schema DWH using Kimball methodology. Implements 5 fact table types with conformed dimensions in PostgreSQL.',
   tags:['Database','SQL','GitHub'], type:'github'},
  {emoji:'⚙️', category:'GitHub Repository', date:'Feb 2026', readTime:'Source Code',
   title:'Olist Data Warehouse — ELT Pipeline',
   excerpt:'End-to-end ELT pipeline with SCD Type 1 & 2 logic, Luigi-orchestrated daily ingestion, PostgreSQL star schema, and error alerting.',
   tags:['Database','SQL','Python','GitHub'], type:'github'}
];

const ProjectCard = ({ p }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <a href="#" onClick={e=>e.preventDefault()} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={{
      background:'var(--bg-card)', border:'1px solid '+(hover?'var(--border-hover)':'var(--border)'),
      borderRadius:14, marginBottom:'1rem', overflow:'hidden', display:'block',
      textDecoration:'none', color:'inherit',
      boxShadow: hover ? '0 4px 20px rgba(0,0,0,.07)' : 'none',
      transform: hover ? 'translateY(-1px)' : 'none',
      transition:'all .2s'
    }}>
      <div style={{
        width:'100%', height:180, display:'flex', alignItems:'center', justifyContent:'center',
        fontSize:'4.5rem', background:'linear-gradient(135deg, var(--accent-light) 0%, var(--bg-secondary) 100%)',
        borderBottom:'1px solid var(--border)', position:'relative', overflow:'hidden'
      }}>
        <div style={{position:'absolute', inset:0, background:'var(--gradient)', opacity:.06}}/>
        <span style={{position:'relative'}}>{p.emoji}</span>
      </div>
      <div style={{padding:'1.25rem'}}>
        <div style={{display:'flex', alignItems:'center', gap:'.5rem', marginBottom:'.6rem', fontSize:'.78rem', color:'var(--text-secondary)'}}>
          <span>{p.category}</span><span style={{opacity:.4}}>·</span>
          <span>{p.date}</span><span style={{opacity:.4}}>·</span>
          <span>{p.readTime}</span>
        </div>
        <div style={{display:'inline-flex', alignItems:'center', gap:'.35rem', padding:'.2rem .6rem', borderRadius:6, background:'var(--accent-light)', color:'var(--accent)', fontSize:'.72rem', fontWeight:600, marginBottom:'.6rem'}}>
          {p.category}
        </div>
        <h2 style={{fontSize:'1rem', fontWeight:700, color:'var(--text)', lineHeight:1.4, marginBottom:'.5rem'}}>{p.title}</h2>
        <p style={{fontSize:'.875rem', color:'var(--text-secondary)', lineHeight:1.6, marginBottom:'1rem'}}>{p.excerpt}</p>
        <div style={{display:'flex', flexWrap:'wrap', gap:'.4rem', marginBottom:'1rem'}}>
          {p.tags.map(t=> <span key={t} style={{padding:'.2rem .55rem', borderRadius:5, background:'var(--bg-secondary)', border:'1px solid var(--border)', fontSize:'.72rem', fontWeight:500, color:'var(--text-secondary)'}}>{t}</span>)}
        </div>
        <div style={{display:'flex', alignItems:'center', gap:'.75rem', paddingTop:'.75rem', borderTop:'1px solid var(--border)'}}>
          <button onClick={e=>e.preventDefault()} style={{display:'flex', alignItems:'center', gap:'.35rem', fontSize:'.8rem', color:'var(--text-secondary)', background:'none', border:'none', cursor:'pointer', padding:'.25rem .5rem', borderRadius:6, fontFamily:'inherit'}}>
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
          </button>
          <button onClick={e=>e.preventDefault()} style={{display:'flex', alignItems:'center', gap:'.35rem', fontSize:'.8rem', color:'var(--text-secondary)', background:'none', border:'none', cursor:'pointer', padding:'.25rem .5rem', borderRadius:6, fontFamily:'inherit'}}>
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg> Save
          </button>
          <span style={{marginLeft:'auto', display:'flex', alignItems:'center', gap:'.35rem', fontSize:'.8rem', color:'var(--accent)', padding:'.25rem .5rem', borderRadius:6, background: hover ? 'var(--accent-light)' : 'transparent'}}>
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            Open →
          </span>
        </div>
      </div>
    </a>
  );
};

const ProjectFeed = ({ tab, activeTag, activeType, search }) => {
  const list = PROJECTS.filter(p => {
    const tabMatch = tab==='all' || tab.split(',').some(t => p.tags.includes(t));
    const tagMatch = activeTag==='all' || p.tags.includes(activeTag);
    const typeMatch = activeType==='all' || p.type===activeType;
    const q = (search||'').toLowerCase();
    const sMatch = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
    return tabMatch && tagMatch && typeMatch && sMatch;
  });
  return (
    <>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'1.25rem'}}>
        <span style={{fontSize:'.78rem', color:'var(--text-secondary)'}}>Updated just now</span>
        <span style={{fontSize:'.78rem', color:'var(--text-secondary)', background:'var(--bg-card)', border:'1px solid var(--border)', padding:'.2rem .6rem', borderRadius:20}}>
          {list.length} project{list.length!==1 ? 's' : ''}
        </span>
      </div>
      {list.length===0
        ? <div style={{textAlign:'center', padding:'3rem 1rem', color:'var(--text-secondary)'}}><p style={{fontSize:'.9rem'}}>No projects match this filter.</p></div>
        : list.map((p,i) => <ProjectCard key={i} p={p}/>)}
    </>
  );
};

window.ProjectFeed = ProjectFeed;
