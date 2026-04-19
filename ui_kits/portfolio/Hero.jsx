// Hero.jsx — textured bg + photo + typewriter
const ROLES = ['GIS Analyst','Data Engineer','Spatial Data Scientist','Drone Mapping Expert','ETL Developer'];

const Typed = () => {
  const [text, setText] = React.useState('');
  const state = React.useRef({i:0, c:0, del:false}).current;
  React.useEffect(() => {
    let t;
    const tick = () => {
      const cur = ROLES[state.i];
      if (!state.del) {
        state.c++;
        setText(cur.slice(0, state.c));
        if (state.c === cur.length) { state.del = true; t = setTimeout(tick, 1800); return; }
      } else {
        state.c--;
        setText(cur.slice(0, state.c));
        if (state.c === 0) { state.del = false; state.i = (state.i+1) % ROLES.length; t = setTimeout(tick, 400); return; }
      }
      t = setTimeout(tick, state.del ? 45 : 85);
    };
    t = setTimeout(tick, 500);
    return () => clearTimeout(t);
  }, []);
  return (
    <span>
      <span style={{color:'var(--accent)', fontWeight:600}}>{text}</span>
      <span style={{display:'inline-block', width:2, height:'1em', background:'var(--accent)', marginLeft:1, verticalAlign:'text-bottom', animation:'blink .7s infinite'}}/>
    </span>
  );
};

const Counter = ({ target, suffix='' }) => {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    const start = performance.now(); const dur = 1400;
    let raf;
    const step = now => {
      const p = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(ease * target));
      if (p < 1) raf = requestAnimationFrame(step);
      else setVal(target);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target]);
  return <span style={{fontSize:'1.75rem', fontWeight:800, lineHeight:1, color:'var(--text)'}}>{val}{suffix}</span>;
};

const Hero = ({ dark }) => (
  <section style={{
    minHeight:'100vh', display:'flex', alignItems:'center',
    padding:'8rem 0 4rem',
    backgroundImage:'url(../../assets/hero-bg.jpg)',
    backgroundSize:'cover', backgroundPosition:'center',
    position:'relative', overflow:'hidden'
  }}>
    <div style={{position:'absolute', inset:0, background: dark ? 'rgba(15,23,42,.88)' : 'rgba(255,255,255,.75)'}}/>
    <div style={{position:'relative', maxWidth:1000, margin:'0 auto', padding:'0 1.5rem', width:'100%'}}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:'4rem'}}>
        <div style={{maxWidth:700}}>
          <div style={{
            display:'inline-flex', alignItems:'center', gap:'.5rem',
            background:'rgba(34,197,94,.1)', border:'1px solid rgba(34,197,94,.3)',
            padding:'.4rem 1rem', borderRadius:50, fontSize:'.8rem',
            color:'#16a34a', marginBottom:'1.5rem'
          }}>
            <span style={{width:8, height:8, background:'#22c55e', borderRadius:'50%', animation:'pulse 2s infinite'}}/>
            Open to work
          </div>
          <h1 style={{fontSize:'3.2rem', fontWeight:800, lineHeight:1.1, marginBottom:'1rem', letterSpacing:'-.02em', color:'var(--text)'}}>
            I'm <span style={{background:'var(--gradient)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>Naufal Zainul Arifin</span>
          </h1>
          <p style={{fontSize:'1rem', color:'var(--text-secondary)', marginBottom:'1.5rem', maxWidth:550}}>
            <Typed /> with a passion for geospatial technology and data-driven solutions.
          </p>
          <div style={{display:'flex', gap:'2.5rem', marginBottom:'2rem'}}>
            {[[2,'Years Exp.','+'],[4,'Certificates'],[7,'Projects'],[11,'Tech Tools','+']].map(([n,l,s],i)=> (
              <div key={i}>
                <Counter target={n} suffix={s||''} />
                <div style={{fontSize:'.72rem', color:'var(--text-secondary)', textTransform:'uppercase', letterSpacing:'.5px', marginTop:'.2rem'}}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{display:'flex', gap:'1rem', flexWrap:'wrap'}}>
            <a className="btn-primary" href="../../assets/CV_NAUFAL_ZAINUL_ARIFIN.pdf" download style={{
              display:'inline-flex', alignItems:'center', gap:'.5rem',
              padding:'.75rem 1.5rem', borderRadius:10, fontWeight:600, fontSize:'.9rem',
              textDecoration:'none', background:'var(--text)', color:'var(--bg)', transition:'all .2s'
            }}>Get Resume</a>
            <a href="portfolio-interactive.html" style={{
              display:'inline-flex', alignItems:'center', gap:'.5rem',
              padding:'.75rem 1.5rem', borderRadius:10, fontWeight:600, fontSize:'.9rem',
              textDecoration:'none', background:'var(--accent)', color:'#fff', transition:'all .2s'
            }}>
              Open Portfolio
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            <a href="#about" style={{
              display:'inline-flex', alignItems:'center', gap:'.5rem',
              padding:'.75rem 1.5rem', borderRadius:10, fontWeight:600, fontSize:'.9rem',
              textDecoration:'none', background:'var(--bg)', color:'var(--text)', border:'1px solid var(--border)'
            }}>More About Me</a>
          </div>
        </div>
        <img src="../../assets/profile.jpg" alt="Naufal" style={{
          width:280, height:280, borderRadius:'50%', objectFit:'cover',
          border:'4px solid var(--border)', boxShadow:'0 10px 40px rgba(0,0,0,.1)',
          flexShrink:0, transition:'transform .4s ease'
        }}/>
      </div>
    </div>
  </section>
);

window.Hero = Hero;
