// InteractivePortfolio.jsx — masonry grid + inline case-study reader + deep link route

const portfolioStyles = {
  page: {
    display: 'grid',
    gridTemplateColumns: '220px minmax(0, 1fr) 280px',
    minHeight: '100vh',
    background: 'var(--bg-secondary)',
  },
  mainCol: {
    padding: '1.75rem 2rem 4rem',
    borderLeft: '1px solid var(--border)',
    borderRight: '1px solid var(--border)',
    background: 'var(--bg-secondary)',
    minWidth: 0,
  },
  header: { marginBottom: '1.5rem' },
  h1: { fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-.01em', color: 'var(--text)', margin: '0 0 .25rem' },
  sub: { fontSize: '.9rem', color: 'var(--text-secondary)', margin: 0 },
  meta: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '1.25rem 0 1rem' },
  count: {
    fontSize: '.78rem', color: 'var(--text-secondary)',
    background: 'var(--bg-card)', border: '1px solid var(--border)',
    padding: '.2rem .65rem', borderRadius: 20,
  },
};

const heightsByDensity = {
  comfortable: { tall: 440, medium: 360, short: 280 },
  cozy:        { tall: 380, medium: 310, short: 250 },
  compact:     { tall: 320, medium: 270, short: 220 },
};

/* ── Masonry card ───────────────────────────────────── */
const MasonryCard = ({ p, onOpen, density }) => {
  const [hover, setHover] = React.useState(false);
  const h = heightsByDensity[density][p.cardSize] || heightsByDensity[density].medium;
  const coverH = p.cardSize === 'tall' ? 200 : p.cardSize === 'short' ? 120 : 160;
  const emojiSize = p.cardSize === 'tall' ? '5.5rem' : p.cardSize === 'short' ? '3.25rem' : '4.25rem';

  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onOpen(p.id)}
      style={{
        breakInside: 'avoid',
        marginBottom: '1rem',
        background: 'var(--bg-card)',
        border: '1px solid ' + (hover ? 'var(--accent)' : 'var(--border)'),
        borderRadius: 14,
        overflow: 'hidden',
        cursor: 'pointer',
        boxShadow: hover ? '0 10px 30px rgba(59,130,246,.12)' : 'none',
        transform: hover ? 'translateY(-3px)' : 'none',
        transition: 'transform .25s ease, box-shadow .25s ease, border-color .25s ease',
        height: h,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{
        height: coverH, flexShrink: 0,
        background: 'linear-gradient(135deg, var(--accent-light) 0%, var(--bg-secondary) 100%)',
        position: 'relative', overflow: 'hidden',
        borderBottom: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'var(--gradient)', opacity: hover ? .14 : .06, transition: 'opacity .3s' }}/>
        <span style={{
          position: 'relative', fontSize: emojiSize,
          transform: hover ? 'scale(1.08) rotate(-3deg)' : 'scale(1)',
          transition: 'transform .35s cubic-bezier(.34,1.56,.64,1)',
        }}>{p.emoji}</span>
        {hover && (
          <div style={{
            position: 'absolute', right: 12, top: 12,
            padding: '.35rem .6rem', borderRadius: 20,
            background: 'var(--bg-card)', border: '1px solid var(--accent)', color: 'var(--accent)',
            fontSize: '.72rem', fontWeight: 600,
            animation: 'fadeUp .2s ease',
          }}>Read case study →</div>
        )}
      </div>

      <div style={{ padding: '1rem 1.15rem', display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
        <div style={{ fontSize: '.72rem', color: 'var(--text-secondary)', marginBottom: '.4rem' }}>
          {p.category} · {p.date} · {p.readTime}
        </div>
        <h3 style={{
          fontSize: '1rem', fontWeight: 700, lineHeight: 1.35, color: 'var(--text)',
          margin: '0 0 .5rem', letterSpacing: '-.01em',
        }}>{p.title}</h3>
        {p.cardSize !== 'short' && (
          <p style={{
            fontSize: '.82rem', lineHeight: 1.55, color: 'var(--text-secondary)', margin: 0,
            flex: 1, overflow: 'hidden',
            display: '-webkit-box', WebkitLineClamp: p.cardSize === 'tall' ? 4 : 2,
            WebkitBoxOrient: 'vertical',
          }}>{p.excerpt}</p>
        )}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '.3rem',
          marginTop: '.75rem', paddingTop: '.6rem', borderTop: '1px solid var(--border)',
        }}>
          {p.tags.slice(0, 3).map(t => (
            <span key={t} style={{
              padding: '.15rem .5rem', borderRadius: 5,
              background: 'var(--bg-secondary)', border: '1px solid var(--border)',
              fontSize: '.68rem', fontWeight: 500, color: 'var(--text-secondary)',
            }}>{t}</span>
          ))}
        </div>
      </div>
    </article>
  );
};

/* ── Masonry grid ───────────────────────────────────── */
const MasonryGrid = ({ projects, onOpen, density }) => (
  <div style={{
    columnCount: 2,
    columnGap: '1rem',
    columnFill: 'balance',
  }}>
    {projects.map(p => <MasonryCard key={p.id} p={p} onOpen={onOpen} density={density}/>)}
  </div>
);

window.MasonryGrid = MasonryGrid;
window.MasonryCard = MasonryCard;
