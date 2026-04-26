// DisclosureScreen.jsx — Шаг 2. Honest reveal only.
// WTP-вопрос убран сознательно: эксперимент опирается на behavioural signal
// (revealed preference через A/B/C-сплит цены), stated WTP добавил бы шум
// и противоречил методологии. Подробнее см. test-task/PRICING_TEST_METHOD.md.

function DisclosureScreen({ designId, onDone }) {
  const design = window.DESIGNS.find((d) => d.id === designId);
  const cohort = window.getCohort();
  const seenPrice = design ? window.PRICES[cohort][design.tier] : null;

  React.useEffect(() => {
    window.logEvent('screen2_view', design ? {
      design_id: design.id, design_name: design.name, tier: design.tier, price_gb: seenPrice,
    } : {});
  }, []);

  return (
    <div style={{
      flex: 1, background: 'var(--t2-sheet)', display: 'flex', flexDirection: 'column',
      overflow: 'hidden', color: 'var(--t2-sheet-fg)',
    }}>
      <window.StatusBar />

      <div style={{
        flex: 1, overflowY: 'auto', scrollbarWidth: 'none',
        padding: '60px 20px 24px',
        display: 'flex', flexDirection: 'column',
      }}>
        {/* hero image */}
        <img src="assets/Panda.png" alt="" style={{
          width: 182, height: 182, alignSelf: 'center',
          objectFit: 'contain', marginBottom: 24,
        }} />

        <h1 className="t2-h2" style={{
          textAlign: 'center', marginBottom: 12, color: 'var(--t2-sheet-fg)',
        }}>Спасибо! Это был эксперимент</h1>

        <p className="t2-body" style={{
          textAlign: 'center', color: 'var(--t2-sheet-muted)', padding: '0 8px',
        }}>
          Мы изучаем, какие возможности добавить в приложение.
          Гигабайты на месте — баланс не тронут.
        </p>
      </div>

      <div style={{ padding: '12px 16px 8px', background: 'var(--t2-sheet)' }}>
        <button onClick={onDone} className="t2-button-label" style={{
          width: '100%', height: 52, borderRadius: 12, border: 'none',
          background: '#000', color: '#fff',
          cursor: 'pointer',
        }}>На главный экран</button>
      </div>
      <window.HomeIndicator />
    </div>
  );
}
window.DisclosureScreen = DisclosureScreen;
