// Components.jsx — leaf UI components for the t2 mobile app.
// Pulls icons from window (set by Icons.jsx). Pulls colors from colors_and_type.css vars.

const t2Comp = {};

// ============== StatusBar (iOS) ==============
t2Comp.StatusBar = function StatusBar({ dark = false }) {
  const fg = dark ? "#fff" : "#000";
  return (
    <div style={{
      position: "relative", height: 48, padding: "16px 24px 0",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      fontFamily: "var(--t2-font-display)", color: fg, fontSize: 15, lineHeight: 1,
    }}>
      <span>9:41</span>
      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
        {/* signal */}
        <svg width="18" height="11" viewBox="0 0 18 11" fill={fg}>
          <rect x="0" y="7" width="3" height="4" rx="0.5" />
          <rect x="5" y="5" width="3" height="6" rx="0.5" />
          <rect x="10" y="2" width="3" height="9" rx="0.5" />
          <rect x="15" y="0" width="3" height="11" rx="0.5" />
        </svg>
        {/* wifi */}
        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" stroke={fg} strokeWidth="1.5">
          <path d="M1 4a10 10 0 0 1 14 0" />
          <path d="M3.5 6.5a6 6 0 0 1 9 0" />
          <circle cx="8" cy="9.5" r="1" fill={fg} />
        </svg>
        {/* battery */}
        <svg width="26" height="11" viewBox="0 0 26 11" fill="none">
          <rect x="0.5" y="0.5" width="22" height="10" rx="2" stroke={fg} />
          <rect x="2" y="2" width="19" height="7" rx="1" fill={fg} />
          <rect x="23" y="3.5" width="2" height="4" rx="1" fill={fg} />
        </svg>
      </div>
    </div>
  );
};

// ============== Button ==============
t2Comp.Button = function Button({ children, variant = "primary", icon, onClick, fullWidth = true, style }) {
  const styles = {
    primary:   { background: "#000", color: "#fff", border: "none" },
    secondary: { background: "transparent", color: "#000", border: "1.5px solid #000" },
    lime:      { background: "#A7FC00", color: "#000", border: "none" },
    ghost:     { background: "transparent", color: "#000", border: "none" },
  };
  return (
    <button onClick={onClick} style={{
      width: fullWidth ? "100%" : "auto",
      height: 52, padding: "0 16px",
      borderRadius: 12,
      fontFamily: "var(--t2-font-display)",
      fontSize: 16, lineHeight: "18px",
      letterSpacing: "0.02em",
      textTransform: "uppercase",
      display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
      cursor: "pointer", transition: "transform .15s ease, opacity .15s ease",
      ...styles[variant], ...style,
    }}
      onMouseDown={(e) => e.currentTarget.style.transform = "scale(0.98)"}
      onMouseUp={(e) => e.currentTarget.style.transform = "scale(1)"}
      onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
    >
      {icon && <span style={{ display: "inline-flex" }}>{icon}</span>}
      {children}
    </button>
  );
};

// ============== Badge ==============
t2Comp.Badge = function Badge({ children, variant = "pink", icon }) {
  const variants = {
    pink:  { background: "#FF3495", color: "#fff" },
    lime:  { background: "#A7FC00", color: "#000" },
    black: { background: "#000",    color: "#fff" },
    soft:  { background: "#F4F5F7", color: "#000" },
  };
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 4,
      height: 26, padding: "0 10px", borderRadius: 12,
      fontFamily: "var(--t2-font-body)", fontSize: 13, fontWeight: 500,
      ...variants[variant],
    }}>
      {icon}{children}
    </span>
  );
};

// ============== SearchField ==============
t2Comp.SearchField = function SearchField({ value = "", onChange, placeholder = "Автоплатеж", voice = true, dark = true }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 8,
      height: 40, padding: "0 12px", borderRadius: 12,
      background: dark ? "#1E1E1E" : "#F4F5F7",
      color: dark ? "#B3B3B3" : "#808080",
    }}>
      <window.IconSearch size={20} stroke={2} style={{ color: dark ? "#525763" : "#808080", flex: "0 0 auto" }} />
      <input value={value} onChange={(e) => onChange?.(e.target.value)} placeholder={placeholder}
             style={{
               flex: 1, background: "transparent", border: "none", outline: "none",
               color: dark ? "#fff" : "#000",
               fontFamily: "var(--t2-font-body)", fontSize: 15, lineHeight: "22px",
             }} />
      {voice && (
        <div style={{
          width: 28, height: 28, borderRadius: "50%",
          background: "radial-gradient(circle at 30% 30%, #FF66AF, #FF3495)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#fff", flex: "0 0 auto",
        }}>
          <window.IconMic size={16} stroke={2.2} />
        </div>
      )}
    </div>
  );
};

// ============== StoryTile ==============
t2Comp.StoryTile = function StoryTile({ title, color = "yellow", seen = false, onClick }) {
  // Each color: gradient fallback + artwork PNG (handoff assets).
  // Title color: white on all colored tiles, black only on white "fav" tile.
  const fills = {
    yellow: { bg: "linear-gradient(135deg,#A7FC00 0%,#86CC00 100%)", art: "assets/story-yellow.png" },
    pink:   { bg: "linear-gradient(135deg,#FF66AF 0%,#FF3495 100%)", art: "assets/story-pink.png" },
    violet: { bg: "linear-gradient(135deg,#B084F5 0%,#7C5CE0 100%)", art: "assets/story-violet.png" },
    black:  { bg: "linear-gradient(135deg,#2A2A2A 0%,#000 100%)",    art: "assets/story-black.png?v=2" },
    fav:    { bg: "linear-gradient(135deg,#2A2A2A 0%,#000 100%)",    art: "assets/story-favorite.png?v=2" },
  };
  const f = fills[color];
  return (
    <button onClick={onClick} style={{
      flex: "0 0 auto", width: 98, height: 98, borderRadius: 16,
      outline: seen ? "2px solid #525763" : "2px solid #A7FC00",
      outlineOffset: 3,                       // small gap between border and tile
      border: "none", padding: 8,
      display: "flex", alignItems: "flex-end", textAlign: "left",
      fontFamily: "var(--t2-font-body)", fontSize: 10, fontWeight: 500, lineHeight: "12px",
      cursor: "pointer",
      background: `url("${f.art}") center/cover, ${f.bg}`,
      color: "#fff",
    }}>{title}</button>
  );
};

// ============== SimCard ==============
t2Comp.SimCard = function SimCard({ label, number, variant = "warm", showLeaf = false, onClick }) {
  const bgs = {
    warm: "linear-gradient(180deg,#FF6900 0%,#FFAD33 50%,#FFCE84 100%)",
    cool: "linear-gradient(180deg,#00BFFF 0%,#27BDF5 50%,#6ED8FF 100%)",
    dark: "linear-gradient(180deg,#2B2F38 0%,#14171C 100%)",
  };
  return (
    <button onClick={onClick} style={{
      flex: "0 0 auto", position: "relative", width: 327, height: 110,
      borderRadius: 20, overflow: "hidden", padding: "16px 18px",
      background: bgs[variant], color: "#fff",
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      border: "none", textAlign: "left", cursor: "pointer",
    }}>
      {showLeaf && (
        <div style={{
          position: "absolute", right: -28, top: -32, width: 150, height: 220,
          background: "url(assets/sim-card-leaf.png) center/contain no-repeat",
          pointerEvents: "none",
        }} />
      )}
      {/* sparkle blobs (warm/cool only) */}
      {variant !== "dark" && <>
        <span style={{ position: "absolute", right: 18, top: 14, width: 6, height: 6, borderRadius: "50%", background: "rgba(255,255,255,0.55)" }} />
        <span style={{ position: "absolute", right: 30, top: 28, width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.4)" }} />
      </>}
      <div style={{ fontFamily: "var(--t2-font-body)", fontSize: 13, lineHeight: "16px", position: "relative", opacity: 0.95 }}>{label}</div>
      <div style={{ fontFamily: "var(--t2-font-display)", fontWeight: 800, fontSize: 22, lineHeight: "24px", letterSpacing: "0.01em", position: "relative", whiteSpace: "nowrap" }}>{number}</div>
    </button>
  );
};

// ============== BalanceCard ==============
t2Comp.BalanceCard = function BalanceCard({ amount = "273,13 ₽", note = "Списание 2 января, 600 ₽", onTopUp }) {
  return (
    <div style={{
      background: "#fff", borderRadius: 20, padding: "18px 20px",
      boxShadow: "var(--t2-shadow-md)",
      display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12,
    }}>
      <div>
        <div style={{ fontFamily: "var(--t2-font-display)", fontSize: 24, lineHeight: "26px", color: "#000", letterSpacing: "0.005em" }}>{amount}</div>
        <div style={{ fontFamily: "var(--t2-font-body)", fontSize: 13, lineHeight: "18px", color: "#808080", marginTop: 4 }}>{note}</div>
      </div>
      <button onClick={onTopUp} style={{
        height: 32, padding: "0 14px", borderRadius: 10, border: "none",
        background: "#000", color: "#fff",
        fontFamily: "var(--t2-font-display)", fontSize: 12, letterSpacing: "0.04em",
        textTransform: "uppercase", cursor: "pointer", flex: "0 0 auto",
      }}>Пополнить</button>
    </div>
  );
};

// ============== AllowanceTiles ==============
// 3 separate white tiles with gap (matches real t2 app).
t2Comp.AllowanceTiles = function AllowanceTiles({ items = [
  { label: "Гигабайты", value: "12" },
  { label: "Минуты",    value: "10 000" },
  { label: "SMS",       value: "49" },
] }) {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      {items.map((i) => (
        <div key={i.label} style={{
          flex: 1, background: "#fff", borderRadius: 16, padding: "14px 14px 16px",
          boxShadow: "var(--t2-shadow-md)",
          display: "flex", flexDirection: "column", gap: 8, minHeight: 78,
        }}>
          <span style={{ fontFamily: "var(--t2-font-body)", fontSize: 13, lineHeight: "16px", color: "#808080" }}>{i.label}</span>
          <span style={{ fontFamily: "var(--t2-font-display)", fontWeight: 800, fontSize: 18, lineHeight: "20px", color: "#000" }}>{i.value}</span>
        </div>
      ))}
    </div>
  );
};

// ============== SwapMeBanner ==============
t2Comp.SwapMeBanner = function SwapMeBanner({ label = "Я шаблон,\nсвапни меня!", onClick }) {
  return (
    <button onClick={onClick} style={{
      display: "block", width: "100%", height: 132, border: "none", padding: 0,
      borderRadius: 20, overflow: "hidden", cursor: "pointer",
      background: "linear-gradient(120deg,#FF3495 0%,#C843E0 50%,#7B3DFF 100%)",
      position: "relative",
    }}>
      <div style={{
        position: "absolute", inset: 14, borderRadius: 12,
        border: "1.5px dashed rgba(60,80,255,0.85)",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#3C50FF", fontFamily: "var(--t2-font-display)",
        fontSize: 15, lineHeight: "20px", textAlign: "center", whiteSpace: "pre-line",
      }}>{label}</div>
    </button>
  );
};

// ============== MiaBanner (pink greeting — "Здравствуйте, Босс!") ==============
// Per handoff_v2 image: pink/magenta gradient banner, white text, small dot accent top-right.
t2Comp.MiaBanner = function MiaBanner({ userName = "Босс" }) {
  return (
    <div style={{
      position: "relative", overflow: "hidden",
      borderRadius: 16, padding: "16px 18px", minHeight: 84,
      background: "linear-gradient(to top right, #F81978 0%, #C671F8 100%)",
      color: "#fff",
      boxShadow: "var(--t2-shadow-md)",
      display: "flex", flexDirection: "column", justifyContent: "center", gap: 4,
    }}>
      {/* decorative dot in upper-right corner (matches design) */}
      <span style={{
        position: "absolute", top: 12, right: 14,
        width: 8, height: 8, borderRadius: "50%", background: "#FF3495",
        boxShadow: "0 0 0 3px rgba(255,255,255,0.35)",
      }} />
      <div style={{
        fontFamily: "var(--t2-font-display)", fontSize: 18, lineHeight: "22px",
        letterSpacing: "0.005em",
      }}>Здравствуйте, {userName}!</div>
      <div style={{
        fontFamily: "var(--t2-font-body)", fontSize: 13, lineHeight: "18px",
        opacity: 0.92, maxWidth: 260,
      }}>Узнайте, какие выгодные предложения вам доступны</div>
    </div>
  );
};

// ============== TabBar ==============
t2Comp.TabBar = function TabBar({ active = "sim", onChange, hasNew = true }) {
  const tabs = [
    { id: "sim",   label: "Связь",      icon: <window.IconTabSim   size={24} /> },
    { id: "mixx",  label: "MiXX",       icon: <window.IconTabMixx  size={24} /> },
    { id: "home",  label: "Для дома",   icon: <window.IconTabHome  size={24} /> },
    { id: "fin",   label: "Финсервисы", icon: <window.IconTabRuble size={24} /> },
    { id: "more",  label: "Больше",     icon: <window.IconTabGift  size={24} /> },
  ];
  return (
    <div style={{
      display: "flex", height: 50, borderTop: "1px solid #E5E5E5",
      background: "#fff",
    }}>
      {tabs.map((t) => {
        const isActive = t.id === active;
        return (
          <button key={t.id} onClick={() => onChange?.(t.id)} style={{
            flex: 1, position: "relative", display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: 4,
            background: "transparent", border: "none",
            color: isActive ? "#000" : "#9196A1",
            fontFamily: "var(--t2-font-body)", fontSize: 10, lineHeight: 1,
            cursor: "pointer",
          }}>
            {t.icon}
            <span>{t.label}</span>
            {t.id === "sim" && hasNew && (
              <span style={{
                position: "absolute", top: 4, right: "calc(50% - 22px)",
                minWidth: 16, height: 16, padding: "0 4px", borderRadius: 999,
                background: "#EE2F53", color: "#fff",
                fontFamily: "var(--t2-font-display)", fontSize: 10, fontWeight: 700,
                display: "inline-flex", alignItems: "center", justifyContent: "center",
              }}>3</span>
            )}
          </button>
        );
      })}
    </div>
  );
};

// ============== HomeIndicator ==============
t2Comp.HomeIndicator = function HomeIndicator({ dark = false }) {
  return (
    <div style={{ height: 34, display: "flex", justifyContent: "center", alignItems: "flex-end", paddingBottom: 8, background: dark ? "transparent" : "#fff" }}>
      <div style={{ width: 134, height: 5, borderRadius: 3, background: dark ? "#fff" : "#000" }} />
    </div>
  );
};

// ============== NavBar ==============
t2Comp.NavBar = function NavBar({ userName = "Босс", dark = false, hasNotif = true }) {
  const fg = dark ? "#fff" : "#000";
  return (
    <div style={{
      height: 44, padding: "0 16px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      color: fg,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ position: "relative", width: 32, height: 32 }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%",
                        background: "linear-gradient(135deg,#fff 0%,#E5E5E5 100%)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 18 }}>🐼</div>
          <span style={{
            position: "absolute", top: -2, right: -2, width: 10, height: 10,
            borderRadius: "50%", background: "#FF3495", border: `1.5px solid ${dark ? "#000" : "#fff"}`,
          }} />
        </div>
        <span style={{ fontFamily: "var(--t2-font-display)", fontSize: 18, lineHeight: 1 }}>{userName}</span>
        <window.IconChevronRight size={16} stroke={2.5} style={{ color: fg, opacity: 0.85 }} />
      </div>
      <div style={{ position: "relative", display: "inline-flex" }}>
        <window.IconBellSolid size={24} />
        {hasNotif && (
          <span style={{
            position: "absolute", top: -3, right: -5,
            minWidth: 16, height: 16, padding: "0 4px", borderRadius: 999,
            background: "#EE2F53", color: "#fff",
            fontFamily: "var(--t2-font-display)", fontSize: 10, fontWeight: 700,
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            border: `1.5px solid ${dark ? "#000" : "#fff"}`,
          }}>1</span>
        )}
      </div>
    </div>
  );
};

Object.assign(window, t2Comp);
