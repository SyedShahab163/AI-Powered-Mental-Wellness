import { ArrowRight, Heart, Shield, Flame } from "lucide-react";
import { useEffect, useRef } from "react";

interface HomeProps {
  onNavigate: (page: string) => void;
}

function FloatingParticles() {
  const particles = Array.from({ length: 18 }, (_, i) => i);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {particles.map((i) => {
        const size = Math.random() * 5 + 2;
        const left = Math.random() * 100;
        const delay = Math.random() * 8;
        const duration = Math.random() * 8 + 6;
        const opacity = Math.random() * 0.4 + 0.1;
        return (
          <div key={i} style={{
            position: "absolute",
            left: `${left}%`,
            bottom: "-10px",
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: "50%",
            background: `rgba(${100 + Math.floor(Math.random() * 60)}, ${60 + Math.floor(Math.random() * 40)}, ${180 + Math.floor(Math.random() * 60)}, ${opacity})`,
            animation: `rise ${duration}s ${delay}s ease-in infinite`,
          }} />
        );
      })}
    </div>
  );
}

function CandleHero() {
  return (
    <div className="relative flex items-center justify-center mb-6" style={{ height: "90px" }}>
      {/* Glow aura behind candle */}
      <div style={{
        position: "absolute",
        width: "120px", height: "120px",
        borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(147,92,200,0.35) 0%, rgba(147,92,200,0.1) 50%, transparent 75%)",
        animation: "pulseGlow 3s ease-in-out infinite",
      }} />
      {/* Candle image */}
      <img
        src={`${import.meta.env.BASE_URL}candle-real.png`}
        alt="Candle"
        style={{
          height: "80px",
          width: "auto",
          objectFit: "contain",
          objectPosition: "center",
          position: "relative",
          zIndex: 2,
          filter: "drop-shadow(0 0 16px rgba(255,140,0,0.5))",
          animation: "floatCandle 4s ease-in-out infinite",
        }}
      />
      {/* sparkles */}
      {[0,1,2,3].map(i => (
        <div key={i} style={{
          position: "absolute",
          width: "4px", height: "4px", borderRadius: "50%",
          background: "#FFD700",
          top: `${20 + i * 10}%`,
          left: `${30 + i * 12}%`,
          animation: `sparkle 2s ${i * 0.5}s ease-in-out infinite`,
          zIndex: 3,
        }} />
      ))}
    </div>
  );
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen relative flex flex-col overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0E0B1A 0%, #1A1035 40%, #0E0D16 100%)" }}>

      <style>{`
        @keyframes rise {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-100vh) scale(0.5); opacity: 0; }
        }
        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.15); opacity: 1; }
        }
        @keyframes floatCandle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes sparkle {
          0%, 100% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1); opacity: 1; }
        }
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideUp2 {
          0% { opacity: 0; transform: translateY(16px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes borderGlow {
          0%, 100% { box-shadow: 0 0 8px rgba(147,92,200,0.3); }
          50% { box-shadow: 0 0 20px rgba(147,92,200,0.6), 0 0 40px rgba(147,92,200,0.2); }
        }
        .anim-1 { animation: fadeSlideUp 0.8s 0.1s both; }
        .anim-2 { animation: fadeSlideUp 0.8s 0.3s both; }
        .anim-3 { animation: fadeSlideUp 0.8s 0.5s both; }
        .anim-4 { animation: fadeSlideUp 0.8s 0.7s both; }
        .anim-5 { animation: fadeSlideUp 0.8s 0.9s both; }
        .card-hover { transition: transform 0.25s, box-shadow 0.25s; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(100,60,180,0.3); }
        .btn-glow { animation: borderGlow 2.5s ease-in-out infinite; }
      `}</style>

      <FloatingParticles />

      {/* Nav */}
      <nav className="relative flex items-center justify-between px-8 py-5" style={{ zIndex: 10, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="flex items-center gap-2 anim-1">
          <span style={{ fontSize: "20px" }}>🪙</span>
          <span className="font-bold text-white tracking-wide" style={{ fontSize: "17px" }}>SIMON AI</span>
          <span style={{ fontSize: "20px" }}>🕯</span>
        </div>
        <div className="flex items-center gap-3 anim-1">
          <button onClick={() => onNavigate("login")}
            className="font-medium transition-all rounded-lg px-4 py-2"
            style={{ color: "#C9A0DC", fontSize: "13px", background: "transparent" }}
            onMouseOver={e => (e.currentTarget.style.background = "rgba(147,92,200,0.15)")}
            onMouseOut={e => (e.currentTarget.style.background = "transparent")}>
            Login
          </button>
          <button onClick={() => onNavigate("signup")}
            className="font-semibold text-white rounded-lg px-4 py-2 transition-all btn-glow"
            style={{ background: "linear-gradient(135deg, #4A3080, #7B3EA7)", fontSize: "13px", border: "1px solid rgba(147,92,200,0.5)" }}>
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative flex-1 flex flex-col items-center justify-center text-center px-6 py-10" style={{ zIndex: 10 }}>

        {/* Badge */}
        <div className="anim-1 inline-flex items-center gap-2 rounded-full px-4 py-2 mb-5"
          style={{ background: "rgba(147,92,200,0.15)", border: "1px solid rgba(147,92,200,0.4)", color: "#C9A0DC", fontSize: "12px" }}>
          <span>🕯</span> Your private space to unburden
        </div>

        {/* Candle animation */}
        <div className="anim-2">
          <CandleHero />
        </div>

        {/* Title */}
        <h1 className="anim-2 font-bold" style={{
          fontSize: "48px", lineHeight: "1.15", marginBottom: "12px",
          background: "linear-gradient(135deg, #ffffff 20%, #C9A0DC 60%, #9B5EC8 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          THE UNBURDEN
        </h1>

        <p className="anim-3 font-medium" style={{ color: "#B09AD0", fontSize: "16px", marginBottom: "8px" }}>
          Your feelings die here. Your peace begins here.
        </p>
        <p className="anim-3" style={{ color: "#7B6FA0", fontSize: "13px", maxWidth: "400px", lineHeight: "1.7", marginBottom: "36px" }}>
          A private sanctuary to release what weighs on you — track your mood, burn your thoughts, and find your calm.
        </p>

        {/* CTA buttons */}
        <div className="anim-4 flex gap-4 flex-wrap justify-center" style={{ marginBottom: "56px" }}>
          <button onClick={() => onNavigate("signup")}
            className="flex items-center gap-2 font-semibold text-white rounded-xl px-6 py-3 transition-all btn-glow"
            style={{ background: "linear-gradient(135deg, #4A3080, #7B3EA7)", fontSize: "14px", border: "1px solid rgba(147,92,200,0.5)" }}
            onMouseOver={e => (e.currentTarget.style.transform = "scale(1.04)")}
            onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}>
            Get Started <ArrowRight size={16} />
          </button>
          <button onClick={() => onNavigate("login")}
            className="flex items-center gap-2 font-medium rounded-xl px-6 py-3 transition-all"
            style={{ color: "#C9A0DC", fontSize: "14px", border: "1px solid rgba(147,92,200,0.3)", background: "rgba(147,92,200,0.08)" }}
            onMouseOver={e => { e.currentTarget.style.background = "rgba(147,92,200,0.2)"; e.currentTarget.style.borderColor = "rgba(147,92,200,0.6)"; }}
            onMouseOut={e => { e.currentTarget.style.background = "rgba(147,92,200,0.08)"; e.currentTarget.style.borderColor = "rgba(147,92,200,0.3)"; }}>
            I already have an account
          </button>
        </div>

        {/* Feature cards */}
        <div className="anim-5 grid gap-4" style={{ gridTemplateColumns: "repeat(3, 1fr)", maxWidth: "680px", width: "100%" }}>
          {[
            { icon: <Heart size={18} style={{ color: "#F472B6" }} />, title: "Mood Tracking", desc: "Monitor your emotional journey with the Invisible Path chart.", border: "rgba(244,114,182,0.25)" },
            { icon: <Flame size={18} style={{ color: "#FB923C" }} />, title: "Let-Go Chamber", desc: "Write your burdens and watch them vanish in flames.", border: "rgba(251,146,60,0.25)" },
            { icon: <Shield size={18} style={{ color: "#A78BFA" }} />, title: "My Fortress", desc: "A private, sacred space that belongs only to you.", border: "rgba(167,139,250,0.25)" },
          ].map((f) => (
            <div key={f.title} className="card-hover rounded-xl p-5 text-left"
              style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${f.border}`, backdropFilter: "blur(8px)" }}>
              <div style={{ marginBottom: "10px" }}>{f.icon}</div>
              <h3 className="font-semibold text-white" style={{ fontSize: "13px", marginBottom: "5px" }}>{f.title}</h3>
              <p style={{ color: "#7B6FA0", fontSize: "11px", lineHeight: "1.6" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative text-center py-4" style={{ zIndex: 10, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <p style={{ fontSize: "11px", color: "#4A4060" }}>© 2024 SIMON AI. All rights reserved.</p>
        <p style={{ fontSize: "10px", color: "#3A304A", fontStyle: "italic", marginTop: "2px" }}>
          *Tumhare alfaaz yahin khatam ho jaate hain. Koi nahi padhta. Hum bhi nahi.* 🕯
        </p>
      </footer>
    </div>
  );
}
