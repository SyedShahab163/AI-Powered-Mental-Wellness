interface HeroBannerProps {
  userName?: string;
}

export default function HeroBanner({ userName }: HeroBannerProps) {
  return (
    <div className="relative rounded-xl overflow-hidden h-[130px] border border-[#D8D0F0] flex items-center px-6"
      style={{ background: "linear-gradient(135deg, #4A3080 0%, #6B4BA0 50%, #3A2560 100%)" }}>
      <div className="flex items-center gap-3 z-10">
        <span className="text-3xl">🕯</span>
        <div>
          <h2 className="text-xl font-bold text-white leading-tight">Find Your Deep Calm,</h2>
          <h2 className="text-xl font-bold text-purple-200">{userName || "Armaan"}!</h2>
        </div>
      </div>

      <div className="absolute right-6 bottom-0 flex items-end">
        <svg width="110" height="120" viewBox="0 0 110 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="55" cy="48" r="30" fill="white" opacity="0.1"/>
          <circle cx="55" cy="48" r="22" fill="white" opacity="0.1"/>
          <ellipse cx="55" cy="90" rx="28" ry="6" fill="white" opacity="0.1"/>
          <g opacity="0.90">
            <circle cx="55" cy="38" r="12" fill="#E8D5F5"/>
            <rect x="47" y="49" width="16" height="26" rx="8" fill="#D0B8E8"/>
            <rect x="44" y="53" width="7" height="18" rx="3.5" fill="#D0B8E8" transform="rotate(-15 44 53)"/>
            <rect x="59" y="53" width="7" height="18" rx="3.5" fill="#D0B8E8" transform="rotate(15 59 53)"/>
            <rect x="48" y="74" width="7" height="18" rx="3.5" fill="#D0B8E8" transform="rotate(-5 48 74)"/>
            <rect x="57" y="74" width="7" height="18" rx="3.5" fill="#D0B8E8" transform="rotate(5 57 74)"/>
          </g>
          <ellipse cx="30" cy="68" rx="14" ry="8" fill="white" opacity="0.1" transform="rotate(-20 30 68)"/>
          <ellipse cx="80" cy="68" rx="14" ry="8" fill="white" opacity="0.1" transform="rotate(20 80 68)"/>
        </svg>
      </div>

      <div className="absolute top-3 right-24 w-2 h-2 rounded-full bg-purple-200 opacity-60 animate-pulse"/>
      <div className="absolute top-6 right-40 w-1.5 h-1.5 rounded-full bg-purple-100 opacity-40 animate-pulse" style={{animationDelay:"0.5s"}}/>
    </div>
  );
}
