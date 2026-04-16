export default function HeroBanner() {
  return (
    <div className="relative rounded-xl overflow-hidden h-[130px] bg-gradient-to-r from-[#2A1F4A] via-[#341F5A] to-[#1E1535] border border-[#2D2A3D] flex items-center px-6">
      <div className="flex items-center gap-3 z-10">
        <span className="text-3xl">🕯</span>
        <div>
          <h2 className="text-xl font-bold text-white leading-tight">Find Your Deep Calm,</h2>
          <h2 className="text-xl font-bold text-white">Armaan!</h2>
        </div>
      </div>

      <div className="absolute right-6 bottom-0 flex items-end">
        <svg width="110" height="120" viewBox="0 0 110 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="55" cy="48" r="30" fill="#4A3080" opacity="0.4"/>
          <circle cx="55" cy="48" r="22" fill="#5A3A90" opacity="0.5"/>
          <ellipse cx="55" cy="90" rx="28" ry="6" fill="#3A2060" opacity="0.6"/>
          <g opacity="0.85">
            <circle cx="55" cy="38" r="12" fill="#C9A0DC"/>
            <rect x="47" y="49" width="16" height="26" rx="8" fill="#9B7EC8"/>
            <rect x="44" y="53" width="7" height="18" rx="3.5" fill="#9B7EC8" transform="rotate(-15 44 53)"/>
            <rect x="59" y="53" width="7" height="18" rx="3.5" fill="#9B7EC8" transform="rotate(15 59 53)"/>
            <rect x="48" y="74" width="7" height="18" rx="3.5" fill="#9B7EC8" transform="rotate(-5 48 74)"/>
            <rect x="57" y="74" width="7" height="18" rx="3.5" fill="#9B7EC8" transform="rotate(5 57 74)"/>
          </g>
          <ellipse cx="30" cy="68" rx="14" ry="8" fill="#6B4BA0" opacity="0.3" transform="rotate(-20 30 68)"/>
          <ellipse cx="80" cy="68" rx="14" ry="8" fill="#6B4BA0" opacity="0.3" transform="rotate(20 80 68)"/>
          <path d="M20 100 Q55 80 90 100" stroke="#7B5EA7" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5"/>
        </svg>
      </div>

      <div className="absolute top-3 right-24 w-2 h-2 rounded-full bg-purple-400 opacity-60 animate-pulse"/>
      <div className="absolute top-6 right-40 w-1.5 h-1.5 rounded-full bg-purple-300 opacity-40 animate-pulse" style={{animationDelay:"0.5s"}}/>
      <div className="absolute bottom-4 left-1/2 w-1 h-1 rounded-full bg-purple-400 opacity-50 animate-pulse" style={{animationDelay:"1s"}}/>
    </div>
  );
}
