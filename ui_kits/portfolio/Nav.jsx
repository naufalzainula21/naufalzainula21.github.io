// Nav.jsx — fixed translucent top nav used on index.html
const Nav = ({ active='home', dark, onToggleDark, onNav }) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const bg = scrolled
    ? (dark ? 'rgba(15,23,42,.97)' : 'rgba(255,255,255,.97)')
    : (dark ? 'rgba(15,23,42,.85)' : 'rgba(255,255,255,.8)');
  const items = [
    ['home','Home'],['about','About'],['experience','Experience'],
    ['certificates','Certificates'],['portfolio','Portfolio'],['contact','Contact']
  ];
  return (
    <nav style={{
      position:'fixed', top:0, left:0, right:0, zIndex:100,
      padding:'1rem 0', background:bg, backdropFilter:'blur(20px)',
      WebkitBackdropFilter:'blur(20px)',
      borderBottom:'1px solid var(--border)', transition:'background .3s'
    }}>
      <div style={{maxWidth:1000, margin:'0 auto', padding:'0 1.5rem', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <a href="#" onClick={e=>{e.preventDefault();onNav&&onNav('home');}} style={{fontWeight:800, fontSize:'2.4rem', color:'var(--text)', textDecoration:'none', lineHeight:1}}>
          n<span style={{background:'var(--gradient)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>.</span>
        </a>
        <ul style={{display:'flex', gap:'2rem', listStyle:'none', margin:0, padding:0}}>
          {items.map(([id,label])=> (
            <li key={id}>
              <a href={'#'+id} onClick={e=>{e.preventDefault();onNav&&onNav(id);}} style={{
                color: active===id ? 'var(--text)' : 'var(--text-secondary)',
                textDecoration:'none', fontSize:'.9rem', fontWeight:500,
                position:'relative', paddingBottom:2, transition:'color .2s'
              }}>
                {label}
                {active===id && <span style={{position:'absolute', left:0, right:0, bottom:-3, height:2, background:'var(--accent)', borderRadius:2}}/>}
              </a>
            </li>
          ))}
        </ul>
        <button onClick={onToggleDark} title="Toggle dark mode" style={{
          background:'var(--bg-secondary)', border:'1px solid var(--border)', color:'var(--text)',
          width:38, height:38, borderRadius:10, cursor:'pointer', fontSize:'1rem',
          display:'flex', alignItems:'center', justifyContent:'center'
        }}>{dark?'☀️':'🌙'}</button>
      </div>
    </nav>
  );
};

window.Nav = Nav;
