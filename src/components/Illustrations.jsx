/* Simple, generic product illustrations used in banners and image fallbacks. */
const grad = (id, a, b) => (
  <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stopColor={a} />
    <stop offset="1" stopColor={b} />
  </linearGradient>
);

export function ConsoleTower({ className }) {
  return (
    <svg className={className} viewBox="0 0 120 240" aria-hidden="true">
      <defs>{grad('ct-w', '#ffffff', '#dfe3ee')}</defs>
      <ellipse cx="60" cy="226" rx="38" ry="7" fill="#000" opacity=".18" />
      <rect x="22" y="10" width="76" height="208" rx="38" fill="url(#ct-w)" />
      <rect x="45" y="14" width="30" height="200" rx="15" fill="#10131f" />
      <rect x="50" y="24" width="3" height="180" rx="1.5" fill="#2a3040" />
      <rect x="22" y="186" width="76" height="32" rx="16" fill="#e6e9f2" />
      <circle cx="60" cy="202" r="4" fill="#9aa3bb" />
    </svg>
  );
}

export function ConsoleCube({ className }) {
  const dots = [];
  for (let r = 0; r < 5; r++) for (let c = 0; c < 5; c++) dots.push([50 + c * 8, 52 + r * 8]);
  return (
    <svg className={className} viewBox="0 0 140 140" aria-hidden="true">
      <defs>{grad('cc-w', '#ffffff', '#e1e5ef')}</defs>
      <ellipse cx="70" cy="132" rx="52" ry="6" fill="#000" opacity=".18" />
      <rect x="12" y="10" width="116" height="116" rx="12" fill="url(#cc-w)" />
      <circle cx="70" cy="68" r="38" fill="#12151f" />
      {dots.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="1.8" fill="#3a4156" />
      ))}
      <circle cx="26" cy="112" r="3" fill="#c9cfdf" />
    </svg>
  );
}

export function Controller({ className, tint = '#ffffff' }) {
  return (
    <svg className={className} viewBox="0 0 160 110" aria-hidden="true">
      <defs>{grad('ctl', tint, '#d8dcea')}</defs>
      <ellipse cx="80" cy="102" rx="56" ry="5" fill="#000" opacity=".16" />
      <path d="M30 22c14-8 26-6 36-3h28c10-3 22-5 36 3 12 8 24 44 22 64-1 10-10 14-18 8-8-6-12-18-18-24H44c-6 6-10 18-18 24-8 6-17 2-18-8-2-20 10-56 22-64z" fill="url(#ctl)" />
      <path d="M62 26h36v22H62z" rx="6" fill="#aab1c8" opacity=".55" />
      <circle cx="56" cy="62" r="11" fill="#171a27" />
      <circle cx="104" cy="62" r="11" fill="#171a27" />
      <circle cx="56" cy="62" r="6" fill="#2b3145" />
      <circle cx="104" cy="62" r="6" fill="#2b3145" />
      <circle cx="40" cy="36" r="3.4" fill="#2b3145" />
      <circle cx="120" cy="36" r="3.4" fill="#2b3145" />
    </svg>
  );
}

export function VRHeadset({ className }) {
  return (
    <svg className={className} viewBox="0 0 200 130" aria-hidden="true">
      <defs>{grad('vr', '#ffffff', '#d9deec')}</defs>
      <ellipse cx="100" cy="122" rx="62" ry="5" fill="#000" opacity=".16" />
      <path d="M26 46c0-16 12-26 30-26h88c18 0 30 10 30 26v16c0 10-8 18-18 18H44c-10 0-18-8-18-18z" fill="url(#vr)" />
      <rect x="46" y="38" width="108" height="36" rx="16" fill="#12151f" />
      <path d="M60 100c14 8 66 8 80 0" stroke="#c2c8da" strokeWidth="6" fill="none" strokeLinecap="round" />
      <circle cx="26" cy="104" r="12" fill="none" stroke="#e4e8f3" strokeWidth="6" />
      <circle cx="174" cy="104" r="12" fill="none" stroke="#e4e8f3" strokeWidth="6" />
    </svg>
  );
}

export function Drone({ className }) {
  return (
    <svg className={className} viewBox="0 0 200 120" aria-hidden="true">
      <defs>{grad('dr', '#f4f6fb', '#c9cfdf')}</defs>
      <path d="M70 52 24 34M130 52l46-18" stroke="#d6dbe8" strokeWidth="9" strokeLinecap="round" />
      <ellipse cx="22" cy="30" rx="22" ry="5" fill="#cfd5e6" opacity=".9" />
      <ellipse cx="178" cy="30" rx="22" ry="5" fill="#cfd5e6" opacity=".9" />
      <rect x="64" y="44" width="72" height="34" rx="17" fill="url(#dr)" />
      <circle cx="100" cy="84" r="11" fill="#171a27" />
      <circle cx="100" cy="84" r="5" fill="#3b4360" />
    </svg>
  );
}

export function CameraDSLR({ className }) {
  return (
    <svg className={className} viewBox="0 0 170 120" aria-hidden="true">
      <rect x="8" y="30" width="154" height="78" rx="12" fill="#1a1d29" />
      <rect x="22" y="16" width="44" height="20" rx="6" fill="#262a3a" />
      <circle cx="88" cy="70" r="34" fill="#0d0f17" />
      <circle cx="88" cy="70" r="25" fill="#222a45" />
      <circle cx="88" cy="70" r="12" fill="#3c4a7a" />
      <circle cx="140" cy="48" r="5" fill="#d33" />
    </svg>
  );
}

export function ActionCam({ className }) {
  return (
    <svg className={className} viewBox="0 0 120 110" aria-hidden="true">
      <rect x="10" y="12" width="100" height="86" rx="14" fill="#1b1e2b" />
      <circle cx="60" cy="52" r="26" fill="#0b0d14" />
      <circle cx="60" cy="52" r="16" fill="#26335c" />
      <rect x="20" y="22" width="26" height="12" rx="3" fill="#2e3347" />
    </svg>
  );
}

export function Speaker({ className }) {
  return (
    <svg className={className} viewBox="0 0 90 200" aria-hidden="true">
      <defs>{grad('sp', '#3a58d6', '#1b2b86')}</defs>
      <rect x="8" y="6" width="74" height="188" rx="24" fill="url(#sp)" />
      <rect x="20" y="150" width="50" height="6" rx="3" fill="#33e0b0" opacity=".9" />
      <circle cx="45" cy="64" r="22" fill="#10173f" />
      <circle cx="45" cy="64" r="9" fill="#2a3a8e" />
    </svg>
  );
}

export function Wheel({ className }) {
  return (
    <svg className={className} viewBox="0 0 160 160" aria-hidden="true">
      <circle cx="80" cy="80" r="62" fill="none" stroke="#1d2030" strokeWidth="16" />
      <circle cx="80" cy="80" r="62" fill="none" stroke="#2f7fd8" strokeWidth="3" strokeDasharray="4 396" strokeDashoffset="-10" />
      <rect x="22" y="72" width="116" height="14" rx="7" fill="#2a2e44" />
      <rect x="73" y="80" width="14" height="60" rx="7" fill="#2a2e44" />
      <circle cx="80" cy="80" r="18" fill="#171a27" />
      <circle cx="80" cy="80" r="7" fill="#3a8be0" />
    </svg>
  );
}
