// FinalScreen.jsx — Конец флоу. Тёплое спасибо.

function FinalScreen() {
  return (
    <div style={{
      flex: 1, background: '#000', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', padding: '0 32px',
      color: '#fff', textAlign: 'center',
    }}>
      <div style={{
        width: 100, height: 100, borderRadius: '50%', marginBottom: 28,
        background: 'radial-gradient(circle at 30% 30%, #B0EE3B, #6FBF1B)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 44,
      }}>🤝</div>

      <h1 className="t2-h1" style={{
        textTransform: 'uppercase', marginBottom: 12, letterSpacing: '0.01em',
      }}>Спасибо за участие!</h1>

      <p className="t2-body" style={{ color: '#B3B3B3' }}>
        Эксперимент завершён. Можете закрыть страницу.
      </p>
    </div>
  );
}
window.FinalScreen = FinalScreen;
