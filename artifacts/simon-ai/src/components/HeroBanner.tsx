interface HeroBannerProps {
  userName?: string;
}

export default function HeroBanner({ userName }: HeroBannerProps) {
  return (
    <div className="relative rounded-xl overflow-hidden flex items-center px-6"
      style={{
        height: "130px",
        background: "linear-gradient(135deg, #1C1035 0%, #2E1F55 40%, #1A1035 100%)",
        border: "1px solid #3D2A5D",
      }}>

      {/* Left: candle SVG */}
      <div className="flex items-center gap-4 z-10">
        <div className="relative flex-shrink-0" style={{ width: "50px", height: "110px" }}>
          {/* Flame */}
          <div className="absolute" style={{ left: "50%", transform: "translateX(-50%)", top: "0px", zIndex: 2 }}>
            <div className="flame-flicker" style={{ transformOrigin: "bottom center" }}>
              <svg width="20" height="30" viewBox="0 0 20 30">
                <ellipse cx="10" cy="24" rx="6" ry="7" fill="#FF8C00" opacity="0.9"/>
                <ellipse cx="10" cy="18" rx="4" ry="10" fill="#FFA500"/>
                <ellipse cx="10" cy="14" rx="3" ry="8" fill="#FFD700"/>
                <ellipse cx="10" cy="10" rx="2" ry="6" fill="#FFFACD" opacity="0.9"/>
                {/* glow */}
                <ellipse cx="10" cy="20" rx="9" ry="11" fill="#FF8C00" opacity="0.15"/>
              </svg>
            </div>
          </div>
          {/* Candle body */}
          <div className="absolute" style={{ bottom: "0px", left: "50%", transform: "translateX(-50%)" }}>
            <svg width="30" height="82" viewBox="0 0 30 82">
              <defs>
                <linearGradient id="candleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#c8c0b8"/>
                  <stop offset="30%" stopColor="#f0ece8"/>
                  <stop offset="70%" stopColor="#e8e4e0"/>
                  <stop offset="100%" stopColor="#a8a098"/>
                </linearGradient>
              </defs>
              <rect x="5" y="0" width="20" height="80" rx="3" fill="url(#candleGrad)"/>
              <rect x="5" y="0" width="20" height="8" rx="3" fill="#a8a098"/>
              {/* wax drips */}
              <path d="M8 5 Q6 15 7 25" stroke="#d8d4d0" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <path d="M20 8 Q22 18 21 28" stroke="#d8d4d0" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              {/* wick */}
              <line x1="15" y1="0" x2="15" y2="-5" stroke="#333" strokeWidth="1.5"/>
            </svg>
          </div>
          {/* Glow at flame base */}
          <div className="absolute" style={{ top: "18px", left: "50%", transform: "translateX(-50%)", width: "40px", height: "20px", background: "radial-gradient(ellipse, rgba(255,160,0,0.35) 0%, transparent 70%)", borderRadius: "50%" }}/>
        </div>

        <div>
          <h2 className="font-bold text-white" style={{ fontSize: "20px", lineHeight: "1.3" }}>Find Your Deep Calm,</h2>
          <h2 className="font-bold" style={{ fontSize: "20px", color: "#C9A0DC" }}>{userName || "Armaan"}!</h2>
        </div>
      </div>

      {/* Right: meditating woman */}
      <div className="absolute right-4 bottom-0 flex items-end" style={{ zIndex: 1 }}>
        <svg width="120" height="125" viewBox="0 0 120 125" fill="none">
          {/* clouds/orbs */}
          <ellipse cx="80" cy="30" rx="22" ry="12" fill="#4A2A70" opacity="0.5"/>
          <ellipse cx="95" cy="38" rx="14" ry="8" fill="#3A1F5A" opacity="0.4"/>
          {/* sitting figure */}
          <circle cx="60" cy="52" r="13" fill="#C9A0DC"/>
          <ellipse cx="60" cy="68" rx="18" ry="12" fill="#9B5EC8"/>
          {/* legs crossed */}
          <ellipse cx="43" cy="82" rx="12" ry="5" fill="#9B5EC8" style={{transform:"rotate(-10deg)",transformOrigin:"43px 82px"}}/>
          <ellipse cx="77" cy="82" rx="12" ry="5" fill="#9B5EC8" style={{transform:"rotate(10deg)",transformOrigin:"77px 82px"}}/>
          {/* arms */}
          <ellipse cx="38" cy="72" rx="5" ry="14" fill="#9B5EC8" style={{transform:"rotate(-20deg)",transformOrigin:"38px 72px"}}/>
          <ellipse cx="82" cy="72" rx="5" ry="14" fill="#9B5EC8" style={{transform:"rotate(20deg)",transformOrigin:"82px 72px"}}/>
          {/* hands */}
          <circle cx="35" cy="85" r="4" fill="#C9A0DC"/>
          <circle cx="85" cy="85" r="4" fill="#C9A0DC"/>
          {/* ground shadow */}
          <ellipse cx="60" cy="96" rx="24" ry="5" fill="#2D1F55" opacity="0.6"/>
          {/* stars/dots */}
          <circle cx="30" cy="20" r="1.5" fill="#C9A0DC" opacity="0.7"/>
          <circle cx="100" cy="15" r="1" fill="#C9A0DC" opacity="0.5"/>
          <circle cx="110" cy="35" r="1.2" fill="#C9A0DC" opacity="0.6"/>
        </svg>
      </div>

      {/* ambient dots */}
      <div className="absolute" style={{ top: "10px", right: "160px", width: "6px", height: "6px", borderRadius: "50%", background: "#9B5EC8", opacity: 0.5 }}/>
      <div className="absolute" style={{ top: "40px", right: "180px", width: "4px", height: "4px", borderRadius: "50%", background: "#C9A0DC", opacity: 0.4 }}/>
    </div>
  );
}
