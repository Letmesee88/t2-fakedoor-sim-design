// LandingScreen.jsx — Шаг 1.5 (онбординг между баннером и галереей дизайнов).
// Объясняет механику оплаты гигабайтами + создаёт ценностное восприятие
// до того, как юзер увидит конкретные цены. Stylewise — белая тема (как disclosure).

function LandingScreen({ onContinue, onBack }) {
  React.useEffect(() => {
    window.logEvent('landing_view');
  }, []);

  const bullets = [
    '12 авторских дизайнов в коллекции',
    'Платишь гигабайтами, а не рублями',
    'Меняй когда захочешь',
  ];

  return (
    <div style={{
      flex: 1, background: 'var(--t2-sheet)', display: 'flex', flexDirection: 'column',
      overflow: 'hidden', color: 'var(--t2-sheet-fg)', paddingTop: 20,
    }}>

      {/* Header — back arrow only, no title (hero owns the page) */}
      <div style={{
        height: 44, padding: '0 16px', display: 'flex', alignItems: 'center',
        position: 'relative',
      }}>
        <button onClick={onBack} aria-label="Назад" style={{
          background: 'transparent', border: 'none', color: 'var(--t2-sheet-fg)',
          cursor: 'pointer', padding: 8, display: 'inline-flex',
        }}>
          <window.IconChevronLeft size={22} stroke={2.2} />
        </button>
      </div>

      {/* Scrollable content */}
      <div style={{
        flex: 1, overflowY: 'auto', scrollbarWidth: 'none',
        padding: '8px 24px 24px',
        display: 'flex', flexDirection: 'column',
      }}>
        {/* Hero image — Panda2 */}
        <img src="assets/Panda2.png" alt="" style={{
          width: 210, height: 210, alignSelf: 'center',
          objectFit: 'contain', marginTop: 8, marginBottom: 24,
        }} />

        <h1 className="t2-h2" style={{
          textAlign: 'center', marginBottom: 12, color: 'var(--t2-sheet-fg)',
        }}>Твой стиль — твоя SIM</h1>

        <p className="t2-body" style={{
          textAlign: 'center', color: 'var(--t2-sheet-muted)',
          padding: '0 4px', marginBottom: 32,
        }}>
          Эксклюзивный дизайн на главном экране.
          Оплата гигабайтами из твоего пакета.
        </p>

        {/* Bullets — pink check badges + text */}
        <ul style={{
          listStyle: 'none', padding: 0, margin: 0,
          display: 'flex', flexDirection: 'column', gap: 'var(--t2-sp-2)',
        }}>
          {bullets.map((text, i) => (
            <li key={i} style={{
              display: 'flex', alignItems: 'center', gap: 'var(--t2-sp-3)',
            }}>
              <span style={{
                width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
                background: 'var(--t2-pink)', color: '#fff',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--t2-font-display)', fontSize: 13, lineHeight: 1,
              }}>✓</span>
              <span className="t2-body" style={{
                color: 'var(--t2-sheet-fg)', whiteSpace: 'nowrap',
              }}>{text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Sticky CTA — black on white (mirrors disclosure) */}
      <div style={{ padding: '12px 16px 8px', background: 'var(--t2-sheet)' }}>
        <button onClick={onContinue} className="t2-button-label" style={{
          width: '100%', height: 52, borderRadius: 12, border: 'none',
          background: '#000', color: '#fff',
          cursor: 'pointer',
        }}>Посмотреть дизайн</button>
      </div>
      <window.HomeIndicator />
    </div>
  );
}
window.LandingScreen = LandingScreen;
