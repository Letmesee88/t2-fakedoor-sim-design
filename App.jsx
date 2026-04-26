// App.jsx — top-level shell with hash routing across 4 screens.
// Routes: '' (banner) | 'customize' | 'disclosure' | 'final'

const routeFromHash = () => (window.location.hash.replace(/^#\/?/, '').split('?')[0]) || '';

function App() {
  const [route, setRoute] = React.useState(routeFromHash());
  const [selectedDesignId, setSelectedDesignId] = React.useState(null);

  React.useEffect(() => {
    const onHash = () => setRoute(routeFromHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // log session start once
  React.useEffect(() => {
    window.logEvent('session_start');
  }, []);

  const navigate = (to) => { window.location.hash = to ? '#/' + to : '#/'; };

  let screen;
  switch (route) {
    case 'customize':
      screen = (
        <window.CustomizationScreen
          selected={selectedDesignId}
          onSelect={setSelectedDesignId}
          onBuy={() => navigate('disclosure')}
          onBack={() => navigate('')}
        />
      );
      break;
    case 'disclosure':
      screen = (
        <window.DisclosureScreen
          designId={selectedDesignId}
          onDone={() => navigate('final')}
        />
      );
      break;
    case 'final':
      screen = <window.FinalScreen />;
      break;
    default:
      screen = <window.HomeScreen onBannerTap={() => navigate('customize')} />;
  }

  // Show phone frame on wide screens (review / desktop), full-bleed on mobile.
  const isMobile = window.matchMedia && window.matchMedia('(max-width: 480px)').matches;
  if (isMobile) {
    return (
      <div style={{ width: '100%', minHeight: '100vh', background: '#000', display: 'flex', flexDirection: 'column' }}>
        {screen}
      </div>
    );
  }
  return <window.PhoneFrame dark>{screen}</window.PhoneFrame>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
