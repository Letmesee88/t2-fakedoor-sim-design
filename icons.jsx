// Icons.jsx — Lucide stand-ins for the t2 v6 icon set.
// Real icon set is proprietary and not exposed through the .fig binary.
// All icons are 24px, currentColor, 1.75 stroke — matching the Halvar/Lucide weight pairing.

const Icon = ({ size = 24, stroke = 1.75, children, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth={stroke}
       strokeLinecap="round" strokeLinejoin="round" style={style}>
    {children}
  </svg>
);

const IconSearch = (p) => <Icon {...p}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></Icon>;
const IconChevronRight = (p) => <Icon {...p}><path d="m9 6 6 6-6 6" /></Icon>;
const IconChevronLeft = (p) => <Icon {...p}><path d="m15 6-6 6 6 6" /></Icon>;
const IconChevronDown = (p) => <Icon {...p}><path d="m6 9 6 6 6-6" /></Icon>;
const IconBell = (p) => <Icon {...p}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></Icon>;
const IconClose = (p) => <Icon {...p}><path d="M18 6 6 18M6 6l12 12" /></Icon>;
const IconInfinity = (p) => <Icon {...p}><path d="M18.18 8.04a4 4 0 1 0 0 7.92c2.18-.55 5.4-3.96 5.4-3.96S21.16 8.6 18.18 8.04zM5.82 8.04a4 4 0 1 1 0 7.92C3.64 15.4.42 12 .42 12s2.42-3.4 5.4-3.96z" /></Icon>;
const IconGift = (p) => <Icon {...p}><rect x="3" y="8" width="18" height="4" rx="1" /><path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" /><path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5" /></Icon>;
const IconMic = (p) => <Icon {...p}><rect x="9" y="3" width="6" height="12" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></Icon>;
const IconPlus = (p) => <Icon {...p}><path d="M12 5v14M5 12h14" /></Icon>;
const IconCard = (p) => <Icon {...p}><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 11h18" /></Icon>;
const IconHome = (p) => <Icon {...p}><path d="M3 11 12 3l9 8v9a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2z" /></Icon>;
const IconRuble = (p) => <Icon {...p}><path d="M7 21V5h6a4 4 0 0 1 0 8H7M5 17h8M5 13h8" /></Icon>;
const IconSparkle = (p) => <Icon {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" /></Icon>;
const IconArrow = (p) => <Icon {...p}><path d="M5 12h14M13 5l7 7-7 7" /></Icon>;

// Lucide-style outline icons for the home screen sections (handoff_v2)
const IconSnowflake = (p) => <Icon {...p}><path d="M12 2v20M4.93 4.93l14.14 14.14M2 12h20M19.07 4.93 4.93 19.07M16 6l-4 4-4-4M8 18l4-4 4 4M6 8l4 4-4 4M18 16l-4-4 4-4" /></Icon>;
const IconChat = (p) => <Icon {...p}><path d="M21 12a9 9 0 1 1-3.9-7.4L21 3l-1.1 4.4A9 9 0 0 1 21 12z" /><path d="M8 12h.01M12 12h.01M16 12h.01" /></Icon>;
const IconPlane = (p) => <Icon {...p}><path d="M2 16l5 1 5-7-3-7 1-1 8 8 5-1-1 5-2 1-7 8-7-3 1-1 7-3-1-5z" /></Icon>;
const IconRocket = (p) => <Icon {...p}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></Icon>;
const IconMonitor = (p) => <Icon {...p}><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></Icon>;
const IconSettings = (p) => <Icon {...p}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></Icon>;
const IconPhone = (p) => <Icon {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></Icon>;
const IconWallet = (p) => <Icon {...p}><path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5M16 14h6M16 12h6M19 14v-2" /></Icon>;
const IconGamePad = (p) => <Icon {...p}><line x1="6" y1="11" x2="10" y2="11"/><line x1="8" y1="9" x2="8" y2="13"/><line x1="15" y1="12" x2="15.01" y2="12"/><line x1="18" y1="10" x2="18.01" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258A4 4 0 0 0 17.32 5z" /></Icon>;
const IconShield = (p) => <Icon {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></Icon>;

// Additional icons used by the home-screen white-sheet (handoff_v2)
const IconUsers = (p) => <Icon {...p}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></Icon>;
const IconTag = (p) => <Icon {...p}><path d="M20.59 13.41 13.41 20.59a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.83z" /><circle cx="7" cy="7" r="1.5" fill="currentColor" stroke="none" /></Icon>;
const IconBag = (p) => <Icon {...p}><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></Icon>;
const IconPlay = (p) => <Icon {...p}><polygon points="6 4 20 12 6 20 6 4" /></Icon>;
const IconSmartphone = (p) => <Icon {...p}><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M11 18h2" /></Icon>;
const IconRefresh = (p) => <Icon {...p}><path d="M21 12a9 9 0 1 1-3-6.7L21 8" /><path d="M21 3v5h-5" /></Icon>;
const IconLockKey = (p) => <Icon {...p}><rect x="4" y="11" width="16" height="11" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /><circle cx="12" cy="16" r="1.6" fill="currentColor" stroke="none" /></Icon>;
const IconHelpCircle = (p) => <Icon {...p}><circle cx="12" cy="12" r="10" /><path d="M9.1 9a3 3 0 1 1 5.5 1.7c-.7.5-1.6 1-1.6 2v.3" /><circle cx="12" cy="17" r="0.6" fill="currentColor" stroke="none" /></Icon>;
const IconArrowDownRight = (p) => <Icon {...p}><path d="M7 7l10 10M17 8v9h-9" /></Icon>;
// ========== t2 production icons (extracted from handoff/assets/Tabbar/*.svg) ==========

// "Связь" tab — sim-card with notch and chip (Sim-card.svg)
const IconTabSim = ({ size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
    <path fillRule="evenodd" clipRule="evenodd" d="M22 6C22 4.89543 21.1046 4 20 4H7L2 9V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6ZM16 14C15.4477 14 15 14.4477 15 15V17C15 17.5523 15.4477 18 16 18H19C19.5523 18 20 17.5523 20 17V15C20 14.4477 19.5523 14 19 14H16Z" />
  </svg>
);

// "MiXX" tab — two horizontal pills with play + circle (Vector.svg, viewBox 0 0 21 21)
const IconTabMixx = ({ size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 21 21" fill="currentColor" style={style}>
    <path d="M16 11C18.7614 11 21 13.2386 21 16C21 18.7614 18.7614 21 16 21H5C2.23858 21 0 18.7614 0 16C0 13.2386 2.23858 11 5 11H16ZM16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14ZM16 0C18.7614 0 21 2.23858 21 5C21 7.76142 18.7614 10 16 10H5C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0H16ZM5.58789 2.79102C5.12271 2.481 4.5 2.814 4.5 3.37305V6.62598C4.50025 7.18476 5.12282 7.51779 5.58789 7.20801L8.02734 5.58203C8.44296 5.30496 8.44296 4.69407 8.02734 4.41699L5.58789 2.79102Z"/>
  </svg>
);

// "Для дома" tab — house with internal wifi arcs (Home-internet.svg)
const IconTabHome = ({ size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
    <path fillRule="evenodd" clipRule="evenodd" d="M10.7266 2.4123C11.4795 1.86229 12.5211 1.86259 13.2736 2.41306L20.7531 7.88418C21.5387 8.45883 22 9.35385 22 10.3035V22H2V10.2958C2 9.34558 2.46193 8.45002 3.24845 7.87543L10.7266 2.4123ZM10.8894 16.9333C10.8894 16.3234 11.4147 15.8757 11.9999 15.8757C12.5851 15.8757 13.1104 16.3234 13.1104 16.9333C13.1104 17.5431 12.5851 17.9908 11.9999 17.9908C11.4147 17.9908 10.8894 17.5431 10.8894 16.9333ZM6.38271 10.6366C9.66084 8.17443 14.3392 8.17443 17.6174 10.6366C17.9611 10.8948 18.0222 11.3722 17.754 11.7029C17.4857 12.0337 16.9896 12.0926 16.6459 11.8344C13.9387 9.80108 10.0613 9.80108 7.35421 11.8344C7.01049 12.0926 6.51438 12.0337 6.24611 11.7029C5.97784 11.3722 6.03899 10.8948 6.38271 10.6366ZM14.5087 14.7102C13.0477 13.6144 10.953 13.6146 9.49323 14.7101C9.14941 14.9681 8.65332 14.909 8.38519 14.5782C8.11706 14.2473 8.17841 13.7699 8.52224 13.5119C10.553 11.9879 13.4478 11.9881 15.4794 13.5118C15.8233 13.7697 15.8848 14.2471 15.6167 14.578C15.3487 14.9089 14.8526 14.9681 14.5087 14.7102Z"/>
  </svg>
);

// "Финсервисы" tab — ₽ inside a circle (Costs-active-off.svg)
const IconTabRuble = ({ size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
    <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM11.3503 16.2153C11.3503 16.6487 10.9989 17 10.5655 17C10.1321 17 9.78079 16.6487 9.78079 16.2153V14.9317H9.30252C8.95139 14.9317 8.66675 14.6471 8.66675 14.2959C8.66675 13.9448 8.95139 13.6602 9.30252 13.6602H9.78079V12.9545H9.30252C8.95139 12.9545 8.66675 12.6698 8.66675 12.3187C8.66675 11.9676 8.95139 11.6829 9.30252 11.6829H9.78079V7H12.4332C13.0589 7 13.5911 7.08248 14.0301 7.24866C14.4696 7.41506 14.8276 7.63682 15.1027 7.91448C15.3776 8.19178 15.5774 8.50868 15.7014 8.86417C15.8238 9.21512 15.8851 9.57113 15.8851 9.93171C15.8851 10.3092 15.8239 10.6779 15.7017 11.0374C15.5778 11.4016 15.3759 11.7272 15.0969 12.0133C14.8175 12.2996 14.4575 12.528 14.018 12.6989C13.5788 12.8697 13.0505 12.9545 12.4332 12.9545H11.3503V13.6602H13.7814C14.1325 13.6602 14.4172 13.9448 14.4172 14.2959C14.4172 14.6471 14.1325 14.9317 13.7814 14.9317H11.3503V16.2153ZM12.3675 11.6829C12.9429 11.6829 13.3997 11.5379 13.743 11.2499C14.0802 10.967 14.2499 10.544 14.2499 9.97072C14.2499 9.45991 14.082 9.077 13.7457 8.81077C13.4021 8.53878 12.9442 8.40161 12.3675 8.40161H11.3501V11.6829H12.3675Z"/>
  </svg>
);

// "Больше" tab — gift box with bow (Gift-off.svg)
const IconTabGift = ({ size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
    <path fillRule="evenodd" clipRule="evenodd" d="M5.88281 6.75H5C3.89543 6.75 3 7.64543 3 8.75V13.75H11V6.75H11.9421H13V13.75H21V8.75C21 7.64543 20.1046 6.75 19 6.75H18.1175C18.7105 6.06919 19.0661 5.23706 18.9897 4.29175C18.8331 2.34606 17.2714 1.09998 15.182 1.26454C13.7209 1.37982 12.6281 2.1419 11.9999 3.44254C11.3717 2.1419 10.2789 1.37982 8.81781 1.26454C6.72585 1.10174 5.1676 2.34694 5.01012 4.29175C4.93438 5.23706 5.28964 6.06919 5.88281 6.75ZM8.4433 3.00962C8.52029 3.00962 8.59991 3.01314 8.68128 3.0193C9.09167 3.05194 10.3378 3.15102 10.7374 5.16475C10.7968 5.46659 10.9138 5.99743 11 6.75H9.06451C7.84308 6.34757 6.67337 5.43642 6.75468 4.43347C6.8273 3.5297 7.452 3.00962 8.4433 3.00962ZM14.9349 6.75C16.1564 6.3476 17.3262 5.43641 17.2449 4.43341C17.1723 3.53053 16.5467 3.01045 15.5572 3.01045C15.4793 3.01045 15.3997 3.01309 15.3183 3.01925C14.9079 3.05188 13.6618 3.15097 13.2622 5.16469C13.2028 5.46654 13.0862 5.9974 13 6.75H14.9349Z"/>
    <path d="M3 15.75H11V22.75H5C3.89543 22.75 3 21.8546 3 20.75V15.75Z"/>
    <path d="M13 15.75H21V20.75C21 21.8546 20.1046 22.75 19 22.75H13V15.75Z"/>
  </svg>
);

// Bell — solid filled (Notification-off.svg). Replaces outlined Lucide bell.
const IconBellSolid = ({ size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
    <path fillRule="evenodd" clipRule="evenodd" d="M11.9872 2C8.35454 2 5.29778 4.76762 4.87682 8.43782L4.48883 11.8206C4.39242 12.6611 4.0475 13.4521 3.49966 14.0889C2.33707 15.4404 3.33962 17 5.10511 17H18.9873C20.7528 17 21.6374 15.4404 20.4748 14.0889C19.927 13.4521 19.582 12.6611 19.4856 11.8206L19.0976 8.43782C18.6767 4.76762 15.6199 2 11.9872 2ZM15.3309 19.6647C14.8163 20.9177 13.5133 22 11.9872 22C10.4611 22 9.15814 20.9177 8.64361 19.6647C8.62216 19.6124 8.61223 19.5564 8.61223 19.5C8.61223 19.2403 8.82543 19.0297 9.08843 19.0297H14.886C15.149 19.0297 15.3622 19.2403 15.3622 19.5C15.3622 19.5564 15.3523 19.6124 15.3309 19.6647Z" />
  </svg>
);

Object.assign(window, {
  IconSearch, IconChevronRight, IconChevronLeft, IconChevronDown, IconBell,
  IconClose, IconInfinity, IconGift, IconMic, IconPlus, IconCard,
  IconHome, IconRuble, IconSparkle, IconArrow,
  IconTabSim, IconTabMixx, IconTabHome, IconTabRuble, IconTabGift, IconBellSolid,
  IconSnowflake, IconChat, IconPlane, IconRocket, IconMonitor, IconSettings,
  IconPhone, IconWallet, IconGamePad, IconShield,
  IconUsers, IconTag, IconBag, IconPlay, IconSmartphone, IconRefresh,
  IconLockKey, IconHelpCircle, IconArrowDownRight,
});
