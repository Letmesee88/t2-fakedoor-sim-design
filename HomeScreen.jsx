// HomeScreen.jsx — Главный экран t2 (subscriber home).
// Точка входа в фейкдор: тап на зелёный баннер «Эксклюзивный дизайн sim» → /customize.
// status bar > navbar > search > stories > SIM cards > white sheet:
//   balance > allowances > manage-GB pill > ★ green banner
//   > Mia (pink "Здравствуйте, Босс!") > ТАРИФ/УСЛУГИ
//   > Расходы > SAFEWALL > services list (9)
//   > Игровой центр > SIM list (4) > Помощь и чат
// > tab bar.

// =========================================================
// Local sub-components used only on the home screen
// =========================================================

// 6.5 — Two side-by-side cards: ТАРИФ / УСЛУГИ (white surface, uppercase header)
function PromoCards() {
  const Card = ({ header, value, hint }) => (
    <div style={{
      flex: 1, background: '#fff', borderRadius: 16, padding: 14,
      boxShadow: 'var(--t2-shadow-md)',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      minHeight: 110,
    }}>
      <div style={{
        fontFamily: 'var(--t2-font-display)', fontSize: 13, lineHeight: '16px',
        letterSpacing: '0.06em', textTransform: 'uppercase', color: '#000',
      }}>{header}</div>
      <div style={{ marginTop: 24 }}>
        {value && (
          <div style={{
            fontFamily: 'var(--t2-font-body)', fontSize: 12, lineHeight: '16px',
            color: '#000',
          }}>{value}</div>
        )}
        {hint && (
          <div style={{
            fontFamily: 'var(--t2-font-body)', fontSize: 12, lineHeight: '16px',
            color: '#000',
          }}>{hint}</div>
        )}
      </div>
    </div>
  );
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <Card header="Тариф"  value="Мой онлайн+" />
      <Card header="Услуги" value="11"           hint="подключено" />
    </div>
  );
}

// 6.6 — Расходы card with segmented multi-color strip
function ExpensesCard() {
  // Segmented strip per design: equal pill segments + wider grey "rest"
  const segments = [
    { color: '#27BDF5', flex: 1 },   // blue
    { color: '#A7FC00', flex: 1 },   // lime
    { color: '#FFE600', flex: 1 },   // yellow
    { color: '#33CFA0', flex: 1 },   // teal
    { color: '#7C5CE0', flex: 1 },   // violet
    { color: '#FF66AF', flex: 1 },   // pink
    { color: '#E5E5E5', flex: 4 },   // grey (rest)
  ];
  return (
    <div style={{
      background: '#fff', borderRadius: 16, padding: '14px 16px',
      boxShadow: 'var(--t2-shadow-md)',
      display: 'flex', flexDirection: 'column', gap: 12,
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <div style={{
            fontFamily: 'var(--t2-font-display)', fontSize: 18, lineHeight: '22px',
            letterSpacing: '0.04em', textTransform: 'uppercase', color: '#000',
          }}>РАСХОДЫ</div>
          <div style={{
            fontFamily: 'var(--t2-font-body)', fontSize: 13, lineHeight: '18px',
            color: '#808080', marginTop: 2,
          }}>В октябре</div>
        </div>
        <div style={{ fontFamily: 'var(--t2-font-display)', fontSize: 22, lineHeight: '24px', color: '#000' }}>
          596 ₽
        </div>
      </div>
      <div style={{ display: 'flex', gap: 4, height: 8 }}>
        {segments.map((s, i) => (
          <span key={i} style={{ flex: s.flex, background: s.color, borderRadius: 999 }} />
        ))}
      </div>
    </div>
  );
}

// 6.7 — SAFEWALL card — wordmark SVG + 3D-lock PNG anchored to the bottom edge
// (bottom of the lock illustration aligns with the bottom of the card, top extends up)
function SafewallCard() {
  return (
    <div style={{
      position: 'relative', overflow: 'hidden',
      background: '#fff', borderRadius: 16, padding: '16px 18px',
      minHeight: 92,
      boxShadow: 'var(--t2-shadow-md)',
    }}>
      <img src="assets/safewall-wordmark.svg" alt="SAFEWALL"
           style={{ display: 'block', height: 18, width: 'auto' }} />
      <div style={{
        fontFamily: 'var(--t2-font-body)', fontSize: 13, lineHeight: '18px',
        color: '#808080', marginTop: 6, maxWidth: 200,
      }}>
        Сервисы для безопасности
      </div>
      <img src="assets/safewall-light.png" alt=""
           style={{
             position: 'absolute', right: 14, bottom: 0,
             width: 80, height: 80, objectFit: 'contain',
             pointerEvents: 'none',
           }} />
    </div>
  );
}

// Shared row used by ServicesList and SimList — uses SVG icons from handoff_v2
// Title: T2 Rooftop Regular 15/22, no row dividers.
function IconListRow({ icon, title, sub }) {
  return (
    <button style={{
      width: '100%', background: 'transparent', border: 'none',
      padding: '12px 12px', cursor: 'pointer',
      display: 'flex', alignItems: 'center', gap: 12,
      textAlign: 'left',
    }}>
      <div style={{
        width: 40, height: 40, borderRadius: 10, flex: '0 0 auto',
        background: '#F4F5F7',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <img src={`assets/icons/${icon}.svg`} alt="" width={22} height={22} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: 'var(--t2-font-body)', fontSize: 15, lineHeight: '22px', color: '#000' }}>{title}</div>
        {sub && (
          <div style={{ fontFamily: 'var(--t2-font-body)', fontSize: 12, lineHeight: '16px', color: '#808080', marginTop: 2 }}>{sub}</div>
        )}
      </div>
      <window.IconChevronRight size={18} stroke={2} style={{ color: '#9196A1' }} />
    </button>
  );
}

// 6.8 — Services list — handoff_v2 SVG icons (9 rows)
function ServicesList() {
  const items = [
    { icon: 'team',         title: 'Бонус за друга',              sub: 'Вам — деньги, другу — скидка' },
    { icon: 'rouming',      title: 'Путешествия и роуминг',       sub: 'Интернет и звонки в поездке' },
    { icon: 'percent',      title: 'Выгодно вместе' },
    { icon: 'sell',         title: 'Маркет t2' },
    { icon: 'wink',         title: 'Wink',                        sub: 'Онлайн-кинотеатр' },
    { icon: 'monitor',      title: 'Смартфоны и гаджеты',         sub: 'Покупка устройств по выгодной цене' },
    { icon: 'monitor',      title: 'Техновитрина от T2' },
    { icon: 'trade-in',     title: 'Трейд-ин и выкуп',            sub: 'Скидка или деньги за ваш смартфон' },
    { icon: 'rocket',       title: 'Проверьте скорость интернета' },
  ];
  return (
    <div style={{
      background: '#fff', borderRadius: 16, padding: 4,
      boxShadow: 'var(--t2-shadow-md)',
    }}>
      {items.map((it, i) => (
        <IconListRow key={i} {...it} />
      ))}
    </div>
  );
}

// 6.9 — Single white card "Игровой центр" (handoff_v2 game-center.svg)
function GameCenterCard() {
  return (
    <div style={{
      background: '#fff', borderRadius: 16, padding: 4,
      boxShadow: 'var(--t2-shadow-md)',
    }}>
      <IconListRow icon="game-center" title="Игровой центр" />
    </div>
  );
}

// 6.9b — SIM-related list (eSIM / Активировать / Заказать / Перенести)
function SimList() {
  const items = [
    { icon: 'esim',          title: 'eSIM' },
    { icon: 'sim-activate',  title: 'Активировать SIM' },
    { icon: 'sell',          title: 'Заказать SIM' },
    { icon: 'redirect',      title: 'Перенести номер в t2' },
  ];
  return (
    <div style={{
      background: '#fff', borderRadius: 16, padding: 4,
      boxShadow: 'var(--t2-shadow-md)',
    }}>
      {items.map((it, i) => (
        <IconListRow key={i} {...it} />
      ))}
    </div>
  );
}

// 6.9c — Help & chat — separate single card
function HelpCard() {
  return (
    <div style={{
      background: '#fff', borderRadius: 16, padding: 4,
      boxShadow: 'var(--t2-shadow-md)',
    }}>
      <IconListRow icon="question" title="Помощь и чат" />
    </div>
  );
}

// =========================================================
// Main HomeScreen
// =========================================================

function HomeScreen({ onBannerTap }) {
  React.useEffect(() => {
    window.logEvent('home_view');
  }, []);

  const handleBannerTap = () => {
    window.logEvent('banner_click');
    onBannerTap?.();
  };

  const handleStory = (id) => {
    window.logEvent('story_tap', { story_id: id });
  };

  return (
    <div style={{
      flex: 1, background: '#000', color: '#fff',
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
    }}>
      <window.StatusBar dark />
      <window.NavBar dark hasNotif userName="Босс" />

      {/* Single scrollable area: Search → Stories → SIM cards → ★ White sheet.
          When the user scrolls up, the whole white sheet slides up and covers
          the upper sections (Search, Stories, SIM plaque). */}
      <div style={{
        flex: 1, overflowY: 'auto', overflowX: 'hidden',
        scrollbarWidth: 'none',
      }}>
        {/* Search */}
        <div style={{ padding: '8px 16px 14px' }}>
          <window.SearchField placeholder="Автоплатеж" voice />
        </div>

        {/* Stories carousel */}
        <div style={{
          display: 'flex', gap: 18, overflowX: 'auto',
          padding: '8px 16px 14px', scrollbarWidth: 'none',
        }}>
          <window.StoryTile title="Замораживаем цены"   color="yellow" onClick={() => handleStory('freeze')} />
          <window.StoryTile title="Давайте покачаемся?" color="pink"   onClick={() => handleStory('pump')} />
          <window.StoryTile title="Что еще может тариф?" color="violet" onClick={() => handleStory('tariff')} />
          <window.StoryTile title="Попробуйте MiXX Play" color="black"  onClick={() => handleStory('mixx')} />
          <window.StoryTile title="Избранное"            color="fav"    onClick={() => handleStory('fav')} />
        </div>

        {/* SIM cards carousel */}
        <div style={{
          display: 'flex', gap: 10, overflowX: 'auto',
          padding: '0 16px 14px', scrollbarWidth: 'none',
        }}>
          <window.SimCard variant="dark" label="Мой номер"      number="+7 977 872 09 09" />
          <window.SimCard variant="cool" label="Конс. Конс."    number="+7 999 421 11 02" />
          <window.SimCard variant="warm" showLeaf label="+ Добавить SIM" number="eSIM или пластик" />
        </div>

        {/* ★ WHITE SHEET */}
        <div style={{
          background: '#fff', color: '#000',
          borderRadius: '16px 16px 0 0',
          padding: '12px 12px 24px',
          marginTop: 4,
          minHeight: 'calc(100% + 1px)',
          display: 'flex', flexDirection: 'column', gap: 10,
        }}>
          <window.BalanceCard amount="273,13 ₽" note="Списание 2 мая, 600 ₽" onTopUp={() => {}} />

          <window.AllowanceTiles items={[
            { label: 'Гигабайты', value: '75' },
            { label: 'Минуты',    value: '7 849' },
            { label: 'SMS',       value: '1 577' },
          ]} />

          {/* 6.3 — Manage GB pill (handoff_v2 background) */}
          <button style={{
            width: '100%', height: 56, borderRadius: 16,
            border: 'none', cursor: 'pointer',
            background: 'url(assets/manage-gb-pill-bg.png) center/cover, linear-gradient(135deg, #2D4BFF 0%, #1E1E1E 100%)',
            color: '#fff',
            fontFamily: 'var(--t2-font-display)', fontSize: 16,
            letterSpacing: '0.01em',
            flexShrink: 0,
            boxShadow: '0 2px 16px rgba(0,0,0,0.06), 0 -10px 22px rgba(0,0,0,0.03)',
          }}>
            Управление ГБ и минутами
          </button>

          {/* ★ ENTRY POINT — Green banner «Эксклюзивный дизайн sim» */}
          <button
            onClick={handleBannerTap}
            style={{
              width: '100%', minHeight: 132, border: 'none', cursor: 'pointer',
              padding: '20px 22px', borderRadius: 16, flexShrink: 0,
              background: 'linear-gradient(135deg, #B0EE3B 0%, #A7FC00 55%, #6FBF1B 100%)',
              color: '#0A2A00', textAlign: 'left', position: 'relative',
              transition: 'transform .15s ease',
            }}
            onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{
              fontFamily: 'var(--t2-font-display)', fontSize: 22, lineHeight: '24px',
              marginBottom: 8,
            }}>
              Эксклюзивный<br/>дизайн sim
            </div>
            <div style={{
              fontFamily: 'var(--t2-font-body)', fontSize: 13, lineHeight: '18px',
              opacity: 0.78, maxWidth: 280,
            }}>
              Обменяйте гигабайты<br/>на эксклюзивный дизайн sim
            </div>
          </button>

          {/* 6.4 — Mia banner (compact) */}
          <window.MiaBanner />

          {/* 6.5 — Two promo cards */}
          <PromoCards />

          {/* 6.6 — Расходы */}
          <ExpensesCard />

          {/* 6.7 — SAFEWALL */}
          <SafewallCard />

          {/* 6.8 — Services list */}
          <ServicesList />

          {/* 6.9 — Game center single card */}
          <GameCenterCard />

          {/* 6.9b — SIM-related list */}
          <SimList />

          {/* 6.9c — Help & chat single card */}
          <HelpCard />
        </div>
      </div>

      <window.TabBar active="sim" onChange={() => {}} />
      <window.HomeIndicator />
    </div>
  );
}
window.HomeScreen = HomeScreen;
