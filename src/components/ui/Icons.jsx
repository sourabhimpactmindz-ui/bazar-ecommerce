const base = { viewBox: "0 0 34 34", fill: "none", stroke: "#16130c", strokeWidth: 2, "aria-hidden": true };

const ICONS = {
  tabs: (
    <svg {...base}>
      <rect x="5" y="8" width="24" height="18" rx="3" />
      <path d="M5 13h24" />
    </svg>
  ),
  truck: (
    <svg {...base}>
      <path d="M4 22V10h16v12M20 15h6l4 5v2H20" />
      <circle cx="10" cy="24" r="3" />
      <circle cx="25" cy="24" r="3" />
    </svg>
  ),
  return: (
    <svg {...base}>
      <path d="M8 14a10 10 0 0 1 18-2M26 20a10 10 0 0 1-18 2M26 6v6h-6M8 28v-6h6" />
    </svg>
  ),
};

ICONS.shield = (
  <svg {...base}>
    <path d="M17 4l10 4v8c0 7-5 11-10 14C12 27 7 23 7 16V8z" />
    <path d="M12 16l4 4 6-8" />
  </svg>
);
ICONS.asterisk = (
  <svg {...base}>
    <path d="M17 5v24M6.6 11l20.8 12M27.4 11L6.6 23" />
  </svg>
);
ICONS.person = (
  <svg {...base}>
    <circle cx="17" cy="11" r="5" />
    <path d="M7 29c0-6 4-10 10-10s10 4 10 10" />
  </svg>
);

export default function Icon({ name }) {
  return ICONS[name] ?? null;
}
