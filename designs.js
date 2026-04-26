// designs.js — fakedoor data + cohort logic + event logging.
// Vanilla JS, no JSX. Loaded BEFORE Babel-compiled screens.

// ============================================================
// 1. Designs catalog — 9 SIM skins, 3 tiers
// ============================================================
const DESIGNS = [
  // basic tier
  { id: 'pixel',     name: 'Пиксель',              tier: 'basic',   square: 'assets/skins/pixel-square.png',     wide: 'assets/skins/pixel-wide.png' },
  { id: 'bliss',     name: 'Идиллия',              tier: 'basic',   square: 'assets/skins/bliss-square.png',     wide: 'assets/skins/bliss-wide.png' },
  { id: 'greenfur',  name: 'Зелёный мех',          tier: 'basic',   square: 'assets/skins/greenfur-square.png',  wide: 'assets/skins/greenfur-wide.png' },

  // middle tier
  { id: 'pinkleo',   name: 'Розовый леопард',      tier: 'middle',  square: 'assets/skins/pinkleo-square.png',   wide: 'assets/skins/pinkleo-wide.png' },
  { id: 'greenleo',  name: 'Кислотный леопард',    tier: 'middle',  square: 'assets/skins/greenleo-square.png',  wide: 'assets/skins/greenleo-wide.png' },
  { id: 'pinkquilt', name: 'Малиновое настроение', tier: 'middle',  square: 'assets/skins/pinkquilt-square.png', wide: 'assets/skins/pinkquilt-wide.png' },

  // premium tier
  { id: 'anime',     name: 'Аниме',                tier: 'premium', square: 'assets/skins/anime-square.png',     wide: 'assets/skins/anime-wide.png' },
  { id: 'duck',      name: 'Утка нуар',            tier: 'premium', square: 'assets/skins/duck-square.png',      wide: 'assets/skins/duck-wide.png' },
  { id: 'silver',    name: 'Жидкое серебро',       tier: 'premium', square: 'assets/skins/silver-square.png',    wide: 'assets/skins/silver-wide.png' },

  // hero tier — fixed 100 ГБ in all cohorts
  { id: 'bat',       name: 'Летучая мышь (Герой)', tier: 'hero',    square: 'assets/skins/bat-square.png',       wide: 'assets/skins/bat-wide.png' },
  { id: 'catmoon',   name: 'Лунный кот (Астронавт)', tier: 'hero',  square: 'assets/skins/catmoon-square.png',   wide: 'assets/skins/catmoon-wide.png' },
  { id: 'hawk',      name: 'Ястреб (Авангард)',    tier: 'hero',    square: 'assets/skins/hawk-square.png',      wide: 'assets/skins/hawk-wide.png' },
];

// ============================================================
// 2. Cohort price table
//    A — low / B — middle (control) / C — high
// ============================================================
const PRICES = {
  A: { basic: 10, middle: 25, premium: 50,  hero: 100 },
  B: { basic: 25, middle: 50, premium: 75,  hero: 100 },
  C: { basic: 50, middle: 75, premium: 100, hero: 100 },
};

// ============================================================
// 3. Cohort + session — persisted in localStorage
// ============================================================
function getCohort() {
  let c = localStorage.getItem('t2_fakedoor_cohort');
  if (!c) {
    c = ['A', 'B', 'C'][Math.floor(Math.random() * 3)];
    localStorage.setItem('t2_fakedoor_cohort', c);
  }
  return c;
}

function getSessionId() {
  let id = localStorage.getItem('t2_fakedoor_session');
  if (!id) {
    id = (crypto.randomUUID && crypto.randomUUID()) || `s_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
    localStorage.setItem('t2_fakedoor_session', id);
  }
  return id;
}

function priceFor(designId) {
  const d = DESIGNS.find((x) => x.id === designId);
  if (!d) return null;
  return PRICES[getCohort()][d.tier];
}

// ============================================================
// 4. Event logging — console only (demo build, no backend)
//    For prod: replace logEvent body with POST to Supabase / PostHog.
// ============================================================
function logEvent(event_type, payload = {}) {
  const event = {
    timestamp: new Date().toISOString(),
    session_id: getSessionId(),
    cohort: getCohort(),
    event_type,
    ...payload,
  };
  console.log('[fakedoor:event]', event);
}

// expose to window so Babel-compiled JSX can use them
window.DESIGNS = DESIGNS;
window.PRICES = PRICES;
window.getCohort = getCohort;
window.getSessionId = getSessionId;
window.priceFor = priceFor;
window.logEvent = logEvent;
