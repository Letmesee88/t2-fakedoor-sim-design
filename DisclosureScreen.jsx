// DisclosureScreen.jsx — Шаг 2. Honest reveal + 1 WTP question.

function DisclosureScreen({ designId, onDone }) {
  const [wtp, setWtp] = React.useState(null);
  const design = window.DESIGNS.find((d) => d.id === designId);
  const cohort = window.getCohort();
  const seenPrice = design ? window.PRICES[cohort][design.tier] : null;

  React.useEffect(() => {
    window.logEvent('screen2_view', design ? {
      design_id: design.id, design_name: design.name, tier: design.tier, price_gb: seenPrice,
    } : {});
  }, []);

  const submit = () => {
    window.logEvent('wtp_answer', {
      wtp_value: wtp,                        // null если пропущено, -1 если "не стал бы"
      design_id: design?.id || null,
      design_name: design?.name || null,
      tier: design?.tier || null,
      seen_price_gb: seenPrice,
    });
    onDone?.();
  };

  const options = [
    { v: 10,  label: '10 ГБ' },
    { v: 25,  label: '25 ГБ' },
    { v: 50,  label: '50 ГБ' },
    { v: 75,  label: '75 ГБ' },
    { v: 100, label: '100 ГБ' },
    { v: -1,  label: 'Не стал бы покупать' },
  ];

  return (
    <div style={{
      flex: 1, background: '#000', display: 'flex', flexDirection: 'column',
      overflow: 'hidden', color: '#fff',
    }}>
      <window.StatusBar dark />

      <div style={{
        flex: 1, overflowY: 'auto', scrollbarWidth: 'none',
        padding: '40px 20px 24px',
        display: 'flex', flexDirection: 'column',
      }}>
        {/* glyph */}
        <div style={{
          width: 84, height: 84, alignSelf: 'center', borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, #FF66AF, #FF3495)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 36, marginBottom: 24,
        }}>🧪</div>

        <h1 className="t2-h1" style={{
          textAlign: 'center', textTransform: 'uppercase', marginBottom: 12,
          letterSpacing: '0.01em',
        }}>Это был тест-эксперимент</h1>

        <p className="t2-body" style={{
          textAlign: 'center', color: '#B3B3B3', marginBottom: 32, padding: '0 8px',
        }}>
          Мы изучаем, какие функции добавить в приложение.
          Никакие ГБ не списаны, ваш баланс не изменился.
        </p>

        <div style={{
          height: 1, background: 'rgba(255,255,255,0.08)', margin: '0 -4px 28px',
        }} />

        {/* WTP question */}
        <h3 className="t2-h3" style={{
          textAlign: 'center', marginBottom: 16, padding: '0 4px',
        }}>
          {design
            ? <>А сколько ГБ вы максимум отдали бы за дизайн «{design.name}»?</>
            : 'А сколько ГБ вы максимум отдали бы за такой дизайн?'}
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {options.map((o) => {
            const active = wtp === o.v;
            return (
              <button key={o.v} onClick={() => setWtp(o.v)} style={{
                height: 48, borderRadius: 12, padding: '0 16px',
                border: '1.5px solid ' + (active ? '#A7FC00' : 'rgba(255,255,255,0.1)'),
                background: active ? '#A7FC00' : '#141414',
                color: active ? '#000' : '#fff',
                fontFamily: 'var(--t2-font-body)', fontSize: 15, fontWeight: active ? 600 : 500,
                cursor: 'pointer', textAlign: 'left',
                transition: 'background .15s ease, border-color .15s ease',
              }}>{o.label}</button>
            );
          })}
        </div>
      </div>

      <div style={{ padding: '12px 16px 8px', background: '#000' }}>
        <button onClick={submit} style={{
          width: '100%', height: 52, borderRadius: 12, border: 'none',
          background: '#fff', color: '#000',
          fontFamily: 'var(--t2-font-display)', fontSize: 16,
          letterSpacing: '0.02em', textTransform: 'uppercase',
          cursor: 'pointer',
        }}>Готово</button>
      </div>
      <window.HomeIndicator dark />
    </div>
  );
}
window.DisclosureScreen = DisclosureScreen;
