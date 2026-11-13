export default function Mascot({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 200 220" fill="none" stroke="#16130c" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M60 80c0-34 80-34 80 0v70c0 22-80 22-80 0z" fill="#ffe43a" />
      <circle cx="82" cy="92" r="7" fill="#16130c" />
      <circle cx="118" cy="92" r="7" fill="#16130c" />
      <path d="M88 116c8 8 16 8 24 0" />
      <path d="M62 140l-24-30M138 140l28-48" />
      <rect x="144" y="86" width="44" height="56" rx="6" fill="#fff" />
      <path d="M155 86c0-16 22-16 22 0" />
      <path d="M80 168v28M120 168v28M70 198h22M110 198h22" />
    </svg>
  );
}
