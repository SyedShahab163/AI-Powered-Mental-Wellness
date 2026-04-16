import { ArrowRight, Heart, Shield, Flame } from "lucide-react";

interface HomeProps { onNavigate: (page: string) => void; }

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", overflow: "hidden", background: "#fff" }}>
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        @keyframes floatImg { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-7px); } }
        @keyframes glow { 0%,100% { opacity:.5; transform:scale(1); } 50% { opacity:1; transform:scale(1.12); } }
        .fu1 { animation: fadeUp .6s .05s both; }
        .fu2 { animation: fadeUp .6s .18s both; }
        .fu3 { animation: fadeUp .6s .32s both; }
        .fu4 { animation: fadeUp .6s .46s both; }
        .fu5 { animation: fadeUp .6s .60s both; }
        .float-img { animation: floatImg 3.5s ease-in-out infinite; }
        .glow-ring { animation: glow 2.8s ease-in-out infinite; }
      `}</style>

      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 32px", borderBottom: "1px solid #F0EBF8", flexShrink: 0 }}>
        <div className="fu1" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <img src={`${import.meta.env.BASE_URL}candle-real.png`} alt="candle"
            style={{ width: 24, height: 24, objectFit: "cover", borderRadius: 5, boxShadow: "0 0 8px rgba(255,140,0,0.3)" }} />
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

      {/* Hero — fills remaining space */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 32px", gap: 48, overflow: "hidden" }}>
        {/* Left: text */}
        <div style={{ flex: 1, maxWidth: 420 }}>
          <div className="fu1" style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#F0EBF8", border: "1px solid #D8C8F0", borderRadius: 20, padding: "4px 14px", fontSize: 11, color: "#7B5EA7", marginBottom: 16 }}>
            <img src={`${import.meta.env.BASE_URL}candle-real.png`} alt="" style={{ width: 14, height: 14, objectFit: "cover", borderRadius: 3 }} />
            Your private space to unburden
          </div>

          <h1 className="fu2" style={{ fontSize: 40, fontWeight: 800, color: "#2D1F60", lineHeight: 1.15, marginBottom: 10 }}>
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
              style={{ display: "flex", alignItems: "center", gap: 6, padding: "9px 20px", borderRadius: 10, border: "none", background: "#4A3080", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer", boxShadow: "0 4px 16px rgba(74,48,128,0.28)" }}>
              Get Started <ArrowRight size={15} />
            </button>
            <button onClick={() => onNavigate("login")}
              style={{ padding: "9px 20px", borderRadius: 10, border: "1px solid #D8C8F0", background: "#fff", color: "#5A4A8A", fontSize: 13, cursor: "pointer" }}>
              I have an account
            </button>
          </div>

          {/* Mini feature pills */}
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

        {/* Right: real candle image */}
        <div style={{ flexShrink: 0, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {/* glow ring */}
          <div className="glow-ring" style={{ position: "absolute", width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(147,92,200,0.18) 0%, rgba(147,92,200,0.06) 55%, transparent 80%)" }} />
          <img src={`${import.meta.env.BASE_URL}candle-real.png`} alt="candle" className="float-img"
            style={{ width: 200, height: 240, objectFit: "cover", objectPosition: "center", borderRadius: 16, boxShadow: "0 8px 40px rgba(147,92,200,0.18), 0 0 0 1px rgba(147,92,200,0.1)", position: "relative", zIndex: 1 }} />
        </div>
      </div>
    </div>
  );
}
