// FeedShell.jsx — three-column app shell for portfolio/articles pages
const navItems = [
  ['home','Home','M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z'],
  ['portfolio','Portfolio','rect'],
  ['articles','Articles','M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0119 9.414V19a2 2 0 01-2 2z'],
  ['github','GitHub','M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22'],
];
const NavIcon = ({ d, type }) => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    {type==='rect' ? <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></> : <path d={d}/>}
  </svg>
);

const Sidebar = ({ active='portfolio', onNav, dark, onToggleDark }) => (
  <aside style={{
    position:'sticky', top:0, height:'100vh', display:'flex', flexDirection:'column',
    padding:'1.75rem 1.25rem', borderRight:'1px solid var(--border)', background:'var(--bg)'
  }}>
    <a href="#" onClick={e=>{e.preventDefault();onNav('home');}} style={{fontWeight:800, fontSize:'2rem', textDecoration:'none', color:'var(--text)', marginBottom:'2rem'}}>
      n<span style={{background:'var(--gradient)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>.</span>
    </a>
    <nav style={{display:'flex', flexDirection:'column', gap:'.25rem', flex:1}}>
      {navItems.map(([id,label,d])=> {
        const isActive = active===id;
        return (
          <a key={id} href={'#'+id} onClick={e=>{e.preventDefault();onNav(id);}} style={{
            display:'flex', alignItems:'center', gap:'.75rem',
            padding:'.65rem .85rem', borderRadius:10, textDecoration:'none',
            color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
            background: isActive ? 'var(--accent-light)' : 'transparent',
            fontSize:'.925rem', fontWeight: isActive ? 600 : 500, transition:'all .2s'
          }}>
            <NavIcon d={d} type={id==='portfolio'?'rect':''}/>
            {label}
          </a>
        );
      })}
    </nav>
    <hr style={{border:'none', borderTop:'1px solid var(--border)', margin:'1rem 0'}}/>
    <button onClick={onToggleDark} style={{
      display:'flex', alignItems:'center', gap:'.75rem',
      padding:'.65rem .85rem', borderRadius:10, cursor:'pointer',
      color:'var(--text-secondary)', fontSize:'.925rem', fontWeight:500,
      background:'none', border:'none', width:'100%', fontFamily:'inherit', textAlign:'left'
    }}>
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
      {dark ? 'Light Mode' : 'Dark Mode'}
    </button>
  </aside>
);

const RightRail = ({ activeTag, onTag, activeType, onType, search, onSearch }) => (
  <aside style={{position:'sticky', top:0, height:'100vh', overflowY:'auto', padding:'1.75rem 1.25rem', background:'var(--bg)'}}>
    <div style={{
      display:'flex', alignItems:'center', gap:'.5rem',
      padding:'.6rem .85rem', border:'1px solid var(--border)', borderRadius:10,
      marginBottom:'1.5rem', background:'var(--bg-secondary)'
    }}>
      <svg width="15" height="15" fill="none" stroke="var(--text-secondary)" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <input value={search} onChange={e=>onSearch(e.target.value)} placeholder="Search projects…" style={{border:'none', background:'none', fontFamily:'inherit', fontSize:'.875rem', color:'var(--text)', outline:'none', width:'100%'}}/>
    </div>

    <div style={{padding:'1rem', border:'1px solid var(--border)', borderRadius:12, background:'var(--bg-card)', textAlign:'center', marginBottom:'1.25rem'}}>
      <div style={{width:52, height:52, borderRadius:'50%', background:'var(--gradient)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.25rem', fontWeight:800, color:'white', margin:'0 auto .6rem'}}>N</div>
      <div style={{fontSize:'.9rem', fontWeight:700, color:'var(--text)', marginBottom:'.2rem'}}>Naufal Zainul Arifin</div>
      <div style={{fontSize:'.75rem', color:'var(--text-secondary)', marginBottom:'.75rem'}}>GIS Analyst &amp; Data Engineer</div>
      <div style={{display:'flex', gap:'.5rem', justifyContent:'center'}}>
        {['LinkedIn','GitHub','Medium'].map(l=> <a key={l} href="#" style={{padding:'.3rem .65rem', borderRadius:7, fontSize:'.75rem', fontWeight:500, textDecoration:'none', background:'var(--bg-secondary)', border:'1px solid var(--border)', color:'var(--text-secondary)'}}>{l}</a>)}
      </div>
    </div>

    <hr style={{border:'none', borderTop:'1px solid var(--border)', margin:'1.25rem 0'}}/>

    <div style={{marginBottom:'1.5rem'}}>
      <div style={{fontSize:'.7rem', fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', color:'var(--text-secondary)', marginBottom:'.75rem'}}>Tech Stack</div>
      <div style={{display:'flex', flexWrap:'wrap', gap:'.4rem'}}>
        {['all','SQL','Python','Database','GIS','Urban','GitHub'].map(t=> (
          <button key={t} onClick={()=>onTag(t)} style={{
            padding:'.3rem .7rem', borderRadius:20, border:'1px solid var(--border)',
            fontSize:'.775rem', fontWeight:500, cursor:'pointer', whiteSpace:'nowrap',
            background: activeTag===t ? 'var(--accent-light)' : 'var(--bg-secondary)',
            color: activeTag===t ? 'var(--accent)' : 'var(--text-secondary)',
            borderColor: activeTag===t ? 'var(--accent)' : 'var(--border)',
            fontFamily:'inherit'
          }}>{t==='all'?'All':t}</button>
        ))}
      </div>
    </div>

    <hr style={{border:'none', borderTop:'1px solid var(--border)', margin:'1.25rem 0'}}/>

    <div>
      <div style={{fontSize:'.7rem', fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', color:'var(--text-secondary)', marginBottom:'.75rem'}}>Project Type</div>
      <div style={{display:'flex', flexWrap:'wrap', gap:'.4rem'}}>
        {[['all','All Types'],['article','Articles'],['github','GitHub Repos'],['thesis','Thesis']].map(([v,l])=> (
          <button key={v} onClick={()=>onType(v)} style={{
            padding:'.3rem .7rem', borderRadius:20, border:'1px solid var(--border)',
            fontSize:'.775rem', fontWeight:500, cursor:'pointer', whiteSpace:'nowrap',
            background: activeType===v ? 'var(--accent-light)' : 'var(--bg-secondary)',
            color: activeType===v ? 'var(--accent)' : 'var(--text-secondary)',
            borderColor: activeType===v ? 'var(--accent)' : 'var(--border)',
            fontFamily:'inherit'
          }}>{l}</button>
        ))}
      </div>
    </div>
  </aside>
);

window.Sidebar = Sidebar;
window.RightRail = RightRail;
