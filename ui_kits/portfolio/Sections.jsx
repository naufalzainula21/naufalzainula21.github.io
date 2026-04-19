// Sections.jsx — bento, experience, certificates (used on Home)
const heroCardSx = {
  background:'var(--bg-card)', border:'1px solid var(--border)',
  borderRadius:16, padding:'1.5rem', transition:'all .3s ease'
};

const BentoGrid = () => {
  const tech = [
    ['Python','Data analysis & scripting'],['SQL','Database querying & design'],
    ['ArcGIS Pro','Professional GIS platform'],['QGIS','Open-source GIS platform'],
    ['PostGIS','Spatial database extension'],['Pandas','Python data manipulation'],
    ['Docker','Container platform'],['Power BI','BI & dashboards'],
    ['ETL Pipeline','Data pipeline orchestration'],['Agisoft Metashape','Photogrammetry'],
    ['Pix4D','Drone mapping & 3D modelling']
  ];
  return (
    <section id="about" style={{padding:'4rem 0', background:'var(--bg-secondary)'}}>
      <div style={{maxWidth:1000, margin:'0 auto', padding:'0 1.5rem'}}>
        <h2 style={{fontSize:'1.5rem', fontWeight:700, color:'var(--text)', marginBottom:'2rem'}}>At a Glance</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'1rem'}}>
          <div style={heroCardSx}>
            <p style={{fontSize:'.8rem', color:'var(--text-secondary)', textTransform:'uppercase', letterSpacing:'.5px', marginBottom:'.5rem'}}>Based in</p>
            <h3 style={{fontSize:'1.25rem', fontWeight:600, color:'var(--text)'}}>Bandung, Indonesia <span style={{fontSize:'1.5rem', marginLeft:'.5rem'}}>🇮🇩</span></h3>
          </div>
          <div style={heroCardSx}>
            <p style={{fontSize:'.8rem', color:'var(--text-secondary)', textTransform:'uppercase', letterSpacing:'.5px', marginBottom:'.5rem'}}>Current Role</p>
            <h3 style={{fontSize:'1.25rem', fontWeight:600, color:'var(--text)', marginBottom:4}}>GIS Data Processing</h3>
            <p style={{fontSize:'.9rem', color:'var(--text-secondary)'}}>Trinusa Resources</p>
          </div>
          <div style={heroCardSx}>
            <p style={{fontSize:'.8rem', color:'var(--text-secondary)', textTransform:'uppercase', letterSpacing:'.5px', marginBottom:'.5rem'}}>Education</p>
            <h3 style={{fontSize:'1.25rem', fontWeight:600, color:'var(--text)', marginBottom:4}}>Institut Teknologi Bandung</h3>
            <p style={{fontSize:'.9rem', color:'var(--text-secondary)'}}>Urban &amp; Regional Planning</p>
          </div>
          <div style={{...heroCardSx, gridColumn:'span 2'}}>
            <p style={{fontSize:'.8rem', color:'var(--text-secondary)', textTransform:'uppercase', letterSpacing:'.5px', marginBottom:'.5rem'}}>Tech Stack</p>
            <h3 style={{fontSize:'1.25rem', fontWeight:600, color:'var(--text)', marginBottom:'1rem'}}>Tools &amp; Technologies</h3>
            <div style={{display:'flex', flexWrap:'wrap', gap:'.5rem'}}>
              {tech.map(([n,d])=> (
                <span key={n} title={d} style={{
                  background:'var(--bg-secondary)', border:'1px solid var(--border)',
                  padding:'.4rem .8rem', borderRadius:8, fontSize:'.8rem', color:'var(--text-secondary)'
                }}>{n}</span>
              ))}
            </div>
          </div>
          <div style={heroCardSx}>
            <p style={{fontSize:'.8rem', color:'var(--text-secondary)', textTransform:'uppercase', letterSpacing:'.5px', marginBottom:'.5rem'}}>What I Do</p>
            <h3 style={{fontSize:'1.25rem', fontWeight:600, color:'var(--text)', marginBottom:4}}>Services</h3>
            <p style={{fontSize:'.9rem', color:'var(--text-secondary)'}}>GIS Analysis, Data Engineering, Spatial Visualization, Drone Mapping</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceList = () => {
  const items = [
    {title:'GIS Data Processing', org:'Trinusa Resources — North Morowali, Central Sulawesi',
     desc:'Conducted daily drone, Total Station, and RTK data collection for mining operations. Managed inventory and stockpile tracking. Utilized ArcGIS, Surpac, Agisoft Metashape, and Pix4D for data processing and visualization.',
     date:'Jul 2024 — Aug 2025'},
    {title:'Regional Infrastructure Development Intern', org:'BPSDM Kementrian PUPR — Bandung',
     desc:'Developed a national ArcGIS training curriculum adopted by the Indonesian Ministry of Public Works. Designed hands-on geospatial training modules based on real-world case studies.',
     date:'Jun 2022 — Oct 2022'}
  ];
  return (
    <section id="experience" style={{padding:'3rem 0', background:'var(--bg)'}}>
      <div style={{maxWidth:1000, margin:'0 auto', padding:'0 1.5rem'}}>
        <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:'1.5rem'}}>
          <h2 style={{fontSize:'1.5rem', fontWeight:700, color:'var(--text)', margin:0}}>Experience</h2>
          <span style={{fontSize:'.75rem', color:'var(--text-secondary)', textTransform:'uppercase', letterSpacing:'.5px', fontWeight:600}}>{items.length} roles</span>
        </div>
        <div style={{position:'relative', paddingLeft:'1.5rem', borderLeft:'2px solid var(--border)'}}>
          {items.map((e,i)=> (
            <div key={i} style={{position:'relative', paddingBottom: i === items.length-1 ? 0 : '1.5rem'}}>
              <span style={{position:'absolute', left:'-1.9rem', top:'.35rem', width:10, height:10, borderRadius:'50%', background:'var(--accent)', border:'3px solid var(--bg)', boxShadow:'0 0 0 2px var(--accent)'}}/>
              <div style={{display:'flex', flexWrap:'wrap', alignItems:'baseline', gap:'.5rem .75rem', marginBottom:'.35rem'}}>
                <h3 style={{fontSize:'1rem', fontWeight:600, color:'var(--text)', margin:0}}>{e.title}</h3>
                <span style={{fontSize:'.72rem', color:'var(--text-secondary)', fontWeight:500, padding:'.15rem .5rem', background:'var(--bg-secondary)', borderRadius:20, whiteSpace:'nowrap'}}>{e.date}</span>
              </div>
              <h4 style={{color:'var(--accent)', fontSize:'.82rem', fontWeight:500, margin:'0 0 .45rem'}}>{e.org}</h4>
              <p style={{color:'var(--text-secondary)', fontSize:'.85rem', lineHeight:1.55, margin:0}}>{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CertificateList = () => {
  const certs = [
    {title:'Prerequisite Course: Python', org:'Pacmann Academy', desc:'Mastered Python fundamentals, OOP, Git, and database design through real-world streaming and membership system projects.'},
    {title:'Relational Database (SQL)', org:'Pacmann Academy', desc:'Mastered advanced SQL, database design, and optimization by building scalable food delivery and e-commerce systems.'},
    {title:'Introduction to Data Engineering', org:'Pacmann Academy', desc:'Mastered data wrangling, web scraping, and ETL pipelines using Pandas and Luigi for production-ready ingestion.'},
    {title:'Data Storage: Warehouse, Mart, and Lake', org:'Pacmann Academy', desc:'Mastered data warehousing, ELT pipelines, and scalable data transformation systems.'}
  ];
  return (
    <section id="certificates" style={{padding:'3rem 0', background:'var(--bg-secondary)'}}>
      <div style={{maxWidth:1000, margin:'0 auto', padding:'0 1.5rem'}}>
        <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:'1.5rem'}}>
          <h2 style={{fontSize:'1.5rem', fontWeight:700, color:'var(--text)', margin:0}}>Certificates</h2>
          <span style={{fontSize:'.75rem', color:'var(--text-secondary)', textTransform:'uppercase', letterSpacing:'.5px', fontWeight:600}}>{certs.length} completed &middot; Pacmann Academy</span>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(230px, 1fr))', gap:'.75rem'}}>
          {certs.map((c,i)=> (
            <a key={i} href="#" style={{
              display:'block', textDecoration:'none',
              padding:'1rem 1.1rem', background:'var(--bg-card)',
              border:'1px solid var(--border)', borderRadius:12,
              transition:'all .2s', position:'relative'
            }} onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.borderColor='var(--accent)';}}
               onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.borderColor='var(--border)';}}>
              <div style={{display:'flex', alignItems:'center', gap:'.5rem', marginBottom:'.4rem'}}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M9 13.5V21l3-2 3 2v-7.5"/></svg>
                <span style={{fontSize:'.68rem', color:'var(--accent)', fontWeight:700, textTransform:'uppercase', letterSpacing:'.5px'}}>{c.org}</span>
              </div>
              <h3 style={{fontSize:'.95rem', fontWeight:600, color:'var(--text)', margin:'0 0 .35rem', lineHeight:1.3}}>{c.title}</h3>
              <p style={{fontSize:'.8rem', color:'var(--text-secondary)', lineHeight:1.5, margin:0, display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden'}}>{c.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section id="contact" style={{padding:'5rem 0', textAlign:'center', background:'var(--bg)'}}>
    <div style={{maxWidth:1000, margin:'0 auto', padding:'0 1.5rem'}}>
      <h2 style={{fontSize:'1.75rem', marginBottom:'.75rem', color:'var(--text)'}}>Get in touch</h2>
      <p style={{color:'var(--text-secondary)', marginBottom:'2rem'}}>Feel free to reach out for collaborations or just a friendly hello</p>
      <a href="mailto:naufalzainula21@gmail.com" style={{
        display:'inline-block', fontSize:'1.1rem', color:'var(--accent)', textDecoration:'none',
        padding:'1rem 2rem', background:'var(--bg-card)', border:'1px solid var(--border)',
        borderRadius:12, marginBottom:'2rem'
      }}>naufalzainula21@gmail.com</a>
      <div style={{display:'flex', justifyContent:'center', gap:'1rem', flexWrap:'wrap'}}>
        {['LinkedIn','GitHub','Medium'].map(l=> (
          <a key={l} href="#" style={{
            color:'var(--text-secondary)', textDecoration:'none', fontSize:'.9rem', fontWeight:500,
            padding:'.75rem 1.25rem', background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:10
          }}>{l}</a>
        ))}
      </div>
    </div>
  </section>
);

window.BentoGrid = BentoGrid;
window.ExperienceList = ExperienceList;
window.CertificateList = CertificateList;
window.ContactSection = ContactSection;
