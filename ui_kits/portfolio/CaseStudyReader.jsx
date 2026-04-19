// CaseStudyReader.jsx — slide-over + full-page reader for a case study

const CloseIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const ArrowIcon = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M7 17L17 7M8 7h9v9"/>
  </svg>
);
const LinkIcon = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
  </svg>
);

const CaseBody = ({ p, variant }) => {
  const isFull = variant === 'full';
  const padX = isFull ? '4rem' : '2.25rem';
  return (
    <article style={{ padding: isFull ? '3rem ' + padX + ' 5rem' : '2rem ' + padX + ' 3rem', maxWidth: isFull ? 760 : 'none', margin: isFull ? '0 auto' : 0 }}>
      {/* Hero cover */}
      <div style={{
        height: isFull ? 280 : 200, borderRadius: 14, marginBottom: '1.75rem',
        background: 'linear-gradient(135deg, var(--accent-light) 0%, var(--bg-secondary) 100%)',
        position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'var(--gradient)', opacity: .08 }}/>
        <span style={{ fontSize: isFull ? '7rem' : '5rem', position: 'relative' }}>{p.emoji}</span>
      </div>

      {/* Meta */}
      <div style={{ fontSize: '.78rem', color: 'var(--text-secondary)', marginBottom: '.6rem' }}>
        {p.category} · {p.date} · {p.readTime}
      </div>
      <h1 style={{
        fontSize: isFull ? '2.5rem' : '1.65rem', fontWeight: 800, lineHeight: 1.15,
        letterSpacing: '-.02em', color: 'var(--text)', margin: '0 0 1rem',
      }}>{p.title}</h1>
      <p style={{
        fontSize: isFull ? '1.1rem' : '.95rem', lineHeight: 1.6,
        color: 'var(--text-secondary)', margin: '0 0 1.75rem',
      }}>{p.excerpt}</p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginBottom: '2rem' }}>
        {p.tags.map(t => (
          <span key={t} style={{
            padding: '.3rem .7rem', borderRadius: 20,
            background: 'var(--accent-light)', color: 'var(--accent)',
            fontSize: '.75rem', fontWeight: 600,
          }}>{t}</span>
        ))}
      </div>

      {/* Stats */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(' + p.stats.length + ', 1fr)',
        gap: '.75rem', marginBottom: '2rem',
        padding: '1.25rem', background: 'var(--bg-secondary)',
        border: '1px solid var(--border)', borderRadius: 12,
      }}>
        {p.stats.map(s => (
          <div key={s.label}>
            <div style={{ fontSize: isFull ? '1.6rem' : '1.35rem', fontWeight: 800, color: 'var(--text)', lineHeight: 1, marginBottom: '.3rem' }}>{s.value}</div>
            <div style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: '.5px', color: 'var(--text-secondary)', fontWeight: 600 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Sections */}
      {p.sections.map((s, i) => (
        <section key={i} style={{ marginBottom: '2rem' }}>
          <h2 style={{
            fontSize: isFull ? '1.35rem' : '1.1rem', fontWeight: 700,
            color: 'var(--text)', margin: '0 0 .6rem',
          }}>{s.heading}</h2>
          <p style={{
            fontSize: isFull ? '1.05rem' : '.925rem', lineHeight: 1.7,
            color: 'var(--text-secondary)', margin: 0,
          }}>{s.body}</p>
        </section>
      ))}

      {/* Links */}
      <div style={{ display: 'flex', gap: '.6rem', flexWrap: 'wrap', marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
        {p.links.map(l => (
          <a key={l.label} href={l.href} onClick={e => e.preventDefault()} style={{
            display: 'inline-flex', alignItems: 'center', gap: '.4rem',
            padding: '.65rem 1.1rem', borderRadius: 10,
            background: 'var(--text)', color: 'var(--bg)',
            fontSize: '.875rem', fontWeight: 600, textDecoration: 'none',
          }}>{l.label} <LinkIcon/></a>
        ))}
      </div>
    </article>
  );
};

/* ── Slide-over panel ───────────────────────────────── */
const SlideOverReader = ({ project, onClose, onOpenFull }) => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { cancelAnimationFrame(t); document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

  if (!project) return null;
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 200 }}>
      <div onClick={onClose} style={{
        position: 'absolute', inset: 0,
        background: 'rgba(15,23,42,.55)',
        backdropFilter: 'blur(4px)',
        opacity: mounted ? 1 : 0,
        transition: 'opacity .25s ease',
      }}/>
      <aside style={{
        position: 'absolute', top: 0, right: 0, bottom: 0,
        width: 'min(720px, 92vw)',
        background: 'var(--bg)',
        borderLeft: '1px solid var(--border)',
        boxShadow: '-20px 0 60px rgba(0,0,0,.15)',
        transform: mounted ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform .35s cubic-bezier(.22,1,.36,1)',
        display: 'flex', flexDirection: 'column',
        overflow: 'hidden',
      }}>
        <header style={{
          padding: '1rem 1.5rem',
          borderBottom: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: 'var(--bg)', flexShrink: 0,
        }}>
          <span style={{ fontSize: '.78rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Case study</span>
          <div style={{ display: 'flex', gap: '.4rem' }}>
            <button onClick={() => onOpenFull(project.id)} title="Open full page" style={{
              display: 'inline-flex', alignItems: 'center', gap: '.35rem',
              padding: '.45rem .8rem', borderRadius: 8,
              background: 'var(--bg-secondary)', border: '1px solid var(--border)',
              color: 'var(--text)', fontFamily: 'inherit', fontSize: '.8rem', fontWeight: 500,
              cursor: 'pointer',
            }}><ArrowIcon/>Open full</button>
            <button onClick={onClose} title="Close (Esc)" style={{
              width: 36, height: 36, borderRadius: 8,
              background: 'var(--bg-secondary)', border: '1px solid var(--border)',
              color: 'var(--text)', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}><CloseIcon/></button>
          </div>
        </header>
        <div style={{ flex: 1, overflowY: 'auto' }}>
          <CaseBody p={project} variant="slide"/>
        </div>
      </aside>
    </div>
  );
};

/* ── Full page reader ───────────────────────────────── */
const FullCaseReader = ({ project, onBack }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = '';
  }, [project?.id]);

  if (!project) return null;
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }} data-screen-label={'04 Case \u00b7 ' + project.id}>
      <div style={{
        position: 'sticky', top: 0, zIndex: 50,
        padding: '1rem 2rem',
        background: 'rgba(255,255,255,.85)', backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <button onClick={onBack} style={{
          display: 'inline-flex', alignItems: 'center', gap: '.4rem',
          padding: '.5rem .9rem', borderRadius: 8,
          background: 'var(--bg-secondary)', border: '1px solid var(--border)',
          color: 'var(--text)', fontFamily: 'inherit', fontSize: '.85rem', fontWeight: 500,
          cursor: 'pointer',
        }}>← Back to Portfolio</button>
        <span style={{ fontSize: '.78rem', color: 'var(--text-secondary)' }}>
          {project.category}
        </span>
      </div>
      <CaseBody p={project} variant="full"/>
    </div>
  );
};

window.SlideOverReader = SlideOverReader;
window.FullCaseReader = FullCaseReader;
