// CustomizationScreen.jsx — Шаг 1 (★ главный экран фейкдора)
// SIM-плашка сверху с live-превью + 3×3 сетка дизайнов с ценами + sticky CTA.

function CustomizationScreen({ selected, onSelect, onBuy, onBack }) {
  React.useEffect(() => {
    window.logEvent('screen1_view');
  }, []);

  const cohort = window.getCohort();
  const designs = window.DESIGNS;
  const selectedDesign = designs.find((d) => d.id === selected) || null;
  const previewWide = selectedDesign ? selectedDesign.wide : 'assets/skins/bliss-wide.png';
  const ctaPrice = selectedDesign ? window.priceFor(selectedDesign.id) : null;

  const handleSelect = (design) => {
    onSelect?.(design.id);
    window.logEvent('design_select', {
      design_id: design.id,
      design_name: design.name,
      tier: design.tier,
      price_gb: window.PRICES[cohort][design.tier],
    });
  };

  const handleBuy = () => {
    if (!selectedDesign) return;
    window.logEvent('cta_click', {
      design_id: selectedDesign.id,
      design_name: selectedDesign.name,
      tier: selectedDesign.tier,
      price_gb: ctaPrice,
    });
    onBuy?.();
  };

  return (
    <div style={{
      flex: 1, background: '#000', display: 'flex', flexDirection: 'column',
      overflow: 'hidden', color: '#fff',
    }}>
      <window.StatusBar dark />

      {/* Header: back + title */}
      <div style={{
        height: 44, padding: '0 16px', display: 'flex',
        alignItems: 'center', justifyContent: 'center', position: 'relative',
      }}>
        <button onClick={onBack} aria-label="Назад" style={{
          position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)',
          background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer',
          padding: 8, display: 'inline-flex',
        }}>
          <window.IconChevronLeft size={22} stroke={2.2} />
        </button>
        <span style={{ fontFamily: 'var(--t2-font-display)', fontSize: 17 }}>Дизайн и имя SIM</span>
      </div>

      {/* Scrollable content */}
      <div style={{
        flex: 1, overflowY: 'auto', scrollbarWidth: 'none',
        padding: '8px 16px 100px',
        display: 'flex', flexDirection: 'column', gap: 18,
      }}>
        {/* SIM plaque preview (live updates with selection) */}
        <div style={{
          height: 110, flexShrink: 0,
          borderRadius: 20, overflow: 'hidden', position: 'relative',
          backgroundImage: `url("${previewWide}")`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          backgroundColor: '#1E1E1E',
          color: '#fff',
          transition: 'background-image .25s ease',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.45) 100%)',
          }} />
          <div style={{ position: 'relative', padding: '16px 18px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ fontFamily: 'var(--t2-font-body)', fontSize: 13, opacity: 0.95 }}>Мой номер</div>
            <div style={{ fontFamily: 'var(--t2-font-display)', fontSize: 26, lineHeight: '30px', textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>
              +7 977 872 09 09
            </div>
          </div>
        </div>

        {/* "Имя SIM" mock input */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span style={{ fontFamily: 'var(--t2-font-body)', fontSize: 12, color: '#9196A1' }}>Имя SIM</span>
          <div style={{
            background: '#1E1E1E', borderRadius: 12, height: 44,
            display: 'flex', alignItems: 'center', padding: '0 14px',
            color: '#fff', fontFamily: 'var(--t2-font-body)', fontSize: 15,
          }}>Мой номер</div>
        </div>

        {/* Gradients (decorative, disabled) */}
        <section>
          <h3 className="t2-h3" style={{ marginBottom: 12 }}>Градиенты</h3>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[
              '#000', '#A7FC00', '#5DEDB0', '#27BDF5', '#7C5CE0', '#FF3495', '#F2F2F2',
            ].map((c, i) => (
              <button key={i} disabled aria-label="Градиент"
                onClick={(e) => {
                  e.currentTarget.animate(
                    [{ transform: 'translateX(0)' }, { transform: 'translateX(-4px)' }, { transform: 'translateX(4px)' }, { transform: 'translateX(0)' }],
                    { duration: 220 }
                  );
                }}
                style={{
                  width: 38, height: 38, borderRadius: 12, border: i === 0 ? '2px solid #2D4BFF' : 'none',
                  background: c, cursor: 'not-allowed', padding: 0,
                  outline: 'none',
                }}
              />
            ))}
          </div>
        </section>

        {/* Exclusive designs — 3×3 grid */}
        <section>
          <h3 className="t2-h3" style={{ marginBottom: 12 }}>Эксклюзивный дизайн</h3>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10,
          }}>
            {designs.map((d) => {
              const isSelected = d.id === selected;
              const price = window.PRICES[cohort][d.tier];
              return (
                <button
                  key={d.id}
                  onClick={() => handleSelect(d)}
                  style={{
                    background: '#141414', border: 'none', cursor: 'pointer',
                    borderRadius: 16, padding: 8,
                    display: 'flex', flexDirection: 'column', gap: 6,
                    outline: isSelected ? '2px solid #A7FC00' : '1px solid #1E1E1E',
                    outlineOffset: 0,
                    transition: 'outline-color .15s ease, transform .12s ease',
                    transform: isSelected ? 'scale(1.0)' : 'scale(1.0)',
                  }}
                >
                  <div style={{
                    width: '100%', aspectRatio: '1 / 1', borderRadius: 12,
                    backgroundImage: `url("${d.square}")`,
                    backgroundSize: 'cover', backgroundPosition: 'center',
                    backgroundColor: '#222',
                  }} />
                  <div style={{
                    fontFamily: 'var(--t2-font-body)', fontSize: 11,
                    lineHeight: '13px', color: '#fff', textAlign: 'left',
                    minHeight: 26,
                  }}>{d.name}</div>
                  <div style={{
                    fontFamily: 'var(--t2-font-display)', fontSize: 13,
                    color: '#A7FC00', textAlign: 'left',
                  }}>{price} ГБ</div>
                </button>
              );
            })}
          </div>
        </section>

        <div style={{
          fontFamily: 'var(--t2-font-body)', fontSize: 12, color: '#9196A1',
          textAlign: 'center', marginTop: 4,
        }}>Доступно: 75 ГБ</div>
      </div>

      {/* Sticky CTA */}
      <div style={{
        padding: '12px 16px 8px', background: '#000',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}>
        <button
          onClick={handleBuy}
          disabled={!selectedDesign}
          style={{
            width: '100%', height: 52, borderRadius: 12, border: 'none',
            background: selectedDesign ? '#A7FC00' : '#1E1E1E',
            color: selectedDesign ? '#000' : '#525763',
            fontFamily: 'var(--t2-font-display)', fontSize: 16,
            letterSpacing: '0.02em', textTransform: 'uppercase',
            cursor: selectedDesign ? 'pointer' : 'not-allowed',
            transition: 'background .15s ease, transform .12s ease',
          }}
          onMouseDown={(e) => selectedDesign && (e.currentTarget.style.transform = 'scale(0.98)')}
          onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          {selectedDesign ? `КУПИТЬ ЗА ${ctaPrice} ГБ` : 'ВЫБЕРИТЕ ДИЗАЙН'}
        </button>
      </div>
      <window.HomeIndicator dark />
    </div>
  );
}
window.CustomizationScreen = CustomizationScreen;
