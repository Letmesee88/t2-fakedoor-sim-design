// App.jsx — top-level shell with hash routing across 4 screens.
// Routes: '' (banner) | 'customize' | 'disclosure' | 'final'
// Slide transition (iOS-style): forward = enter from right, back = enter from left.

const ROUTE_ORDER = ['', 'customize', 'disclosure', 'final'];
const TRANSITION_MS = 320;

const routeFromHash = () => (window.location.hash.replace(/^#\/?/, '').split('?')[0]) || '';

function App() {
  const [route, setRoute] = React.useState(routeFromHash());
  const [prevRoute, setPrevRoute] = React.useState(null);
  const [direction, setDirection] = React.useState('forward');
  const [selectedDesignId, setSelectedDesignId] = React.useState(null);
  const prefersReducedMotion = React.useRef(
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  React.useEffect(() => {
    const onHash = () => {
      const next = routeFromHash();
      setRoute((curr) => {
        if (next === curr) return curr;
        if (prefersReducedMotion.current) return next;
        const ci = ROUTE_ORDER.indexOf(curr);
        const ni = ROUTE_ORDER.indexOf(next);
        setDirection(ni >= ci ? 'forward' : 'back');
        setPrevRoute(curr);
        return next;
      });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  React.useEffect(() => {
    if (prevRoute === null) return;
    const t = setTimeout(() => setPrevRoute(null), TRANSITION_MS);
    return () => clearTimeout(t);
  }, [prevRoute, route]);

  // log session start once
  React.useEffect(() => {
    window.logEvent('session_start');
  }, []);

  const navigate = (to) => { window.location.hash = to ? '#/' + to : '#/'; };

  const renderScreen = (r) => {
    switch (r) {
      case 'customize':
        return (
          <window.CustomizationScreen
            selected={selectedDesignId}
            onSelect={setSelectedDesignId}
            onBuy={() => navigate('disclosure')}
            onBack={() => navigate('')}
          />
        );
      case 'disclosure':
        return (
          <window.DisclosureScreen
            designId={selectedDesignId}
            onDone={() => navigate('final')}
          />
        );
      case 'final':
        return <window.FinalScreen />;
      default:
        return <window.HomeScreen onBannerTap={() => navigate('customize')} />;
    }
  };

  const enterClass = direction === 'forward' ? 't2-enter-from-right' : 't2-enter-from-left';
  const exitClass  = direction === 'forward' ? 't2-exit-to-left'     : 't2-exit-to-right';

  // Render order = forward: [prev, curr] (curr on top); back: [curr, prev] (prev on top).
  // Stable keys by route name so React preserves the mount when a screen moves
  // from "current" to "exiting" → no duplicate `*_view` log events.
  const layers = [];
  const pushLayer = (r, isPrev) => layers.push(
    <div
      key={r || 'home'}
      className={`t2-screen-layer ${prevRoute === null ? '' : (isPrev ? exitClass : enterClass)}`}
      aria-hidden={isPrev ? 'true' : undefined}
    >
      {renderScreen(r)}
    </div>
  );
  if (prevRoute !== null && direction === 'back') {
    pushLayer(route, false);
    pushLayer(prevRoute, true);
  } else {
    if (prevRoute !== null) pushLayer(prevRoute, true);
    pushLayer(route, false);
  }

  const stack = <div className="t2-screen-stack">{layers}</div>;

  // Show phone frame on wide screens (review / desktop), full-bleed on mobile.
  const isMobile = window.matchMedia && window.matchMedia('(max-width: 480px)').matches;
  if (isMobile) {
    return (
      <div style={{
        width: '100%', height: '100vh', background: '#000',
        position: 'relative', overflow: 'hidden',
      }}>
        {stack}
      </div>
    );
  }
  return <window.PhoneFrame dark>{stack}</window.PhoneFrame>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
