import { ArrowRight, Heart, Shield, Flame } from "lucide-react";

interface HomeProps { onNavigate: (page: string) => void; }

function AnimatedCandle() {
  return (
    <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: 200, height: 260 }}>
      <style>{`
        @keyframes flicker {
          0%,100% { transform: scaleX(1) scaleY(1) rotate(-1deg); opacity: 1; }
          20%      { transform: scaleX(0.9) scaleY(1.08) rotate(1deg); opacity: .95; }
          40%      { transform: scaleX(1.05) scaleY(0.95) rotate(-2deg); opacity: 1; }
          60%      { transform: scaleX(0.95) scaleY(1.05) rotate(1.5deg); opacity: .97; }
          80%      { transform: scaleX(1.02) scaleY(0.98) rotate(-1deg); opacity: .99; }
        }
        @keyframes flicker2 {
          0%,100% { transform: scaleX(1) scaleY(1) rotate(1deg); opacity: .7; }
          30%      { transform: scaleX(0.85) scaleY(1.12) rotate(-2deg); opacity: .5; }
          60%      { transform: scaleX(1.1) scaleY(0.9) rotate(2deg); opacity: .75; }
        }
        @keyframes glowPulse {
          0%,100% { opacity: .35; transform: scale(1); }
          50%      { opacity: .65; transform: scale(1.12); }
        }
        @keyframes smokeRise {
          0%   { transform: translateY(0) translateX(0) scale(1); opacity: .4; }
          100% { transform: translateY(-60px) translateX(8px) scale(2.5); opacity: 0; }
        }
        @keyframes smokeRise2 {
          0%   { transform: translateY(0) translateX(0) scale(1); opacity: .3; }
          100% { transform: translateY(-50px) translateX(-10px) scale(2); opacity: 0; }
        }
        @keyframes waxDrip {
          0%   { height: 0; opacity: .8; }
          100% { height: 18px; opacity: .4; }
        }
        .flame-main  { animation: flicker  1.8s ease-in-out infinite; transform-origin: bottom center; }
        .flame-inner { animation: flicker2 1.4s ease-in-out infinite; transform-origin: bottom center; }
        .glow-aura   { animation: glowPulse 2.2s ease-in-out infinite; }
        .smoke1 { animation: smokeRise  3s 0s ease-out infinite; }
        .smoke2 { animation: smokeRise2 3.5s .8s ease-out infinite; }
        .smoke3 { animation: smokeRise  2.8s 1.6s ease-out infinite; }
      `}</style>

      {/* Outer soft glow */}
      <div className="glow-aura" style={{
        position: "absolute", width: 180, height: 180, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(255,160,30,0.18) 0%, rgba(200,100,20,0.07) 50%, transparent 75%)",
        top: 20, left: "50%", transform: "translateX(-50%)",
        pointerEvents: "none",
      }} />

      <svg width="140" height="240" viewBox="0 0 140 240" fill="none" style={{ position: "relative", zIndex: 2 }}>

        {/* === SMOKE === */}
        <g style={{ opacity: 0 }} className="smoke1">
          <ellipse cx="70" cy="30" rx="4" ry="5" fill="rgba(150,140,160,0.4)" />
        </g>
        <g style={{ opacity: 0 }} className="smoke2">
          <ellipse cx="66" cy="28" rx="3" ry="4" fill="rgba(150,140,160,0.3)" />
        </g>
        <g style={{ opacity: 0 }} className="smoke3">
          <ellipse cx="74" cy="32" rx="3.5" ry="4.5" fill="rgba(150,140,160,0.35)" />
        </g>

        {/* === FLAME GLOW (halo behind flame) === */}
        <ellipse cx="70" cy="82" rx="22" ry="28"
          fill="rgba(255,140,0,0.18)" className="glow-aura" />

        {/* === OUTER FLAME === */}
        <g className="flame-main">
          <path d="M70 48 C56 62 46 74 50 90 C54 106 86 106 90 90 C94 74 84 62 70 48Z"
            fill="url(#flameGrad)" />
        </g>

        {/* === INNER FLAME === */}
        <g className="flame-inner">
          <path d="M70 60 C62 70 58 80 62 90 C66 100 74 100 78 90 C82 80 78 70 70 60Z"
            fill="url(#flameInner)" />
        </g>

        {/* === FLAME CORE === */}
        <ellipse cx="70" cy="90" rx="5" ry="7" fill="#FFF5CC" opacity="0.95" />

        {/* === WICK === */}
        <rect x="69" y="100" width="2" height="12" rx="1" fill="#3A2010" />
        <circle cx="70" cy="100" r="2" fill="#5A3010" />

        {/* === CANDLE BODY === */}
        {/* Wax drip left */}
        <path d="M55 112 Q52 118 51 128" stroke="rgba(255,248,230,0.7)" strokeWidth="3" strokeLinecap="round" fill="none" />
        {/* Wax drip right */}
        <path d="M85 112 Q88 120 87 132" stroke="rgba(255,248,230,0.6)" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Main candle cylinder */}
        <rect x="46" y="110" width="48" height="110" rx="6" fill="url(#candleGrad)" />
        {/* Top cap */}
        <ellipse cx="70" cy="110" rx="24" ry="6" fill="url(#candleTop)" />
        {/* Highlight stripe */}
        <rect x="52" y="116" width="6" height="98" rx="3" fill="rgba(255,255,255,0.18)" />
        {/* Shadow stripe */}
        <rect x="84" y="116" width="4" height="98" rx="2" fill="rgba(0,0,0,0.08)" />
        {/* Horizontal wax lines */}
        <line x1="46" y1="150" x2="94" y2="150" stroke="rgba(200,180,140,0.25)" strokeWidth="1"/>
        <line x1="46" y1="180" x2="94" y2="180" stroke="rgba(200,180,140,0.2)" strokeWidth="1"/>
        <line x1="46" y1="210" x2="94" y2="210" stroke="rgba(200,180,140,0.15)" strokeWidth="1"/>

        {/* === CANDLE BASE / PLATE === */}
        <ellipse cx="70" cy="221" rx="32" ry="7" fill="url(#plateGrad)" />
        <ellipse cx="70" cy="220" rx="28" ry="5" fill="url(#plateTop)" />
        {/* Wax pool on plate */}
        <ellipse cx="70" cy="219" rx="24" ry="3.5" fill="rgba(255,248,220,0.6)" />

        {/* === GRADIENTS === */}
        <defs>
          <radialGradient id="flameGrad" cx="50%" cy="80%" r="55%">
            <stop offset="0%"  stopColor="#FFF5AA" />
            <stop offset="35%" stopColor="#FFAA00" />
            <stop offset="70%" stopColor="#FF6600" />
            <stop offset="100%" stopColor="#CC3300" stopOpacity="0.5" />
          </radialGradient>
          <radialGradient id="flameInner" cx="50%" cy="75%" r="50%">
            <stop offset="0%"  stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#FFFBE0" />
            <stop offset="100%" stopColor="#FFD700" stopOpacity="0.8" />
          </radialGradient>
          <linearGradient id="candleGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#F5F0E0" />
            <stop offset="40%"  stopColor="#FDFAF0" />
            <stop offset="70%"  stopColor="#F0E8D0" />
            <stop offset="100%" stopColor="#E0D8C0" />
          </linearGradient>
          <radialGradient id="candleTop" cx="40%" cy="40%" r="60%">
            <stop offset="0%"  stopColor="#FDFAF0" />
            <stop offset="100%" stopColor="#D8CCB0" />
          </radialGradient>
          <linearGradient id="plateGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="#C8B890" />
            <stop offset="100%" stopColor="#8A7850" />
          </linearGradient>
          <radialGradient id="plateTop" cx="40%" cy="30%" r="60%">
            <stop offset="0%"  stopColor="#E8D8A8" />
            <stop offset="100%" stopColor="#B09870" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", overflow: "hidden", background: "#fff" }}>
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        .fu1 { animation: fadeUp .6s .05s both; }
        .fu2 { animation: fadeUp .6s .18s both; }
        .fu3 { animation: fadeUp .6s .32s both; }
        .fu4 { animation: fadeUp .6s .46s both; }
        .fu5 { animation: fadeUp .6s .60s both; }
      `}</style>

      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 32px", borderBottom: "1px solid #F0EBF8", flexShrink: 0 }}>
        <div className="fu1" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <img src={`${import.meta.env.BASE_URL}candle-real.png`} alt="candle"
            style={{ width: 24, height: 24, objectFit: "cover", borderRadius: 5 }} />
          <span style={{ fontWeight: 700, color: "#3A2070", fontSize: 16, letterSpacing: "0.03em" }}>SIMON AI</span>
        </div>
        <div className="fu1" style={{ display: "flex", gap: 10 }}>
          <button onClick={() => onNavigate("login")}
            style={{ padding: "7px 18px", borderRadius: 8, border: "1px solid #E5E0F0", background: "#fff", color: "#5A4A8A", fontSize: 13, fontWeight: 500, cursor: "pointer" }}>
            Login
          </button>
          <button onClick={() => onNavigate("signup")}
            style={{ padding: "7px 18px", borderRadius: 8, border: "none", background: "#4A3080", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 48px", gap: 56, overflow: "hidden" }}>

        {/* Left: text */}
        <div style={{ flex: 1, maxWidth: 420 }}>
          <div className="fu1" style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#F0EBF8", border: "1px solid #D8C8F0", borderRadius: 20, padding: "4px 14px", fontSize: 11, color: "#7B5EA7", marginBottom: 16 }}>
            🕯 Your private space to unburden
          </div>

          <h1 className="fu2" style={{ fontSize: 42, fontWeight: 800, color: "#2D1F60", lineHeight: 1.15, marginBottom: 10 }}>
            THE<br />UNBURDEN
          </h1>
          <p className="fu3" style={{ fontSize: 14, color: "#7B5EA7", fontWeight: 500, marginBottom: 6 }}>
            Your feelings die here. Your peace begins here.
          </p>
          <p className="fu3" style={{ fontSize: 12, color: "#9B8FC0", lineHeight: 1.7, marginBottom: 24 }}>
            A private sanctuary to release what weighs on you — track your mood, burn your thoughts, and find your calm.
          </p>

          <div className="fu4" style={{ display: "flex", gap: 10 }}>
            <button onClick={() => onNavigate("signup")}
              style={{ display: "flex", alignItems: "center", gap: 6, padding: "9px 22px", borderRadius: 10, border: "none", background: "#4A3080", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer", boxShadow: "0 4px 16px rgba(74,48,128,0.28)" }}>
              Get Started <ArrowRight size={15} />
            </button>
            <button onClick={() => onNavigate("login")}
              style={{ padding: "9px 20px", borderRadius: 10, border: "1px solid #D8C8F0", background: "#fff", color: "#5A4A8A", fontSize: 13, cursor: "pointer" }}>
              I have an account
            </button>
          </div>

          {/* Feature pills */}
          <div className="fu5" style={{ display: "flex", gap: 8, marginTop: 20, flexWrap: "wrap" }}>
            {[
              { icon: <Heart size={11} style={{ color: "#F472B6" }} />, label: "Mood Tracking" },
              { icon: <Flame size={11} style={{ color: "#FB923C" }} />, label: "Let-Go Chamber" },
              { icon: <Shield size={11} style={{ color: "#9B7EC8" }} />, label: "My Fortress" },
            ].map(f => (
              <div key={f.label} style={{ display: "flex", alignItems: "center", gap: 5, background: "#F7F5FC", border: "1px solid #E5E0F0", borderRadius: 16, padding: "4px 10px", fontSize: 10, color: "#5A4A8A" }}>
                {f.icon} {f.label}
              </div>
            ))}
          </div>
        </div>

        {/* Right: animated candle */}
        <div className="fu2" style={{ flexShrink: 0 }}>
          <AnimatedCandle />
        </div>
      </div>
    </div>
  );
}
