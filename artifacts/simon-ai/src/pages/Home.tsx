interface HomeProps { onNavigate: (page: string) => void; }

function AnimatedSphere() {
  return (
    <div style={{ position: "relative", width: 280, height: 280, flexShrink: 0 }}>
      <style>{`
        @keyframes orbitX { from { transform: rotateX(0deg) rotateY(0deg); } to { transform: rotateX(360deg) rotateY(0deg); } }
        @keyframes orbitY { from { transform: rotateX(0deg) rotateY(0deg); } to { transform: rotateX(0deg) rotateY(360deg); } }
        @keyframes orbitD { from { transform: rotateX(20deg) rotateY(0deg); } to { transform: rotateX(20deg) rotateY(360deg); } }
        @keyframes float  { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes pulse3d { 0%,100% { opacity:.5; transform:scale(1); } 50% { opacity:.9; transform:scale(1.06); } }
        @keyframes dotOrbit {
          from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
        }
        @keyframes dotOrbit2 {
          from { transform: rotate(90deg) translateX(95px) rotate(-90deg); }
          to   { transform: rotate(450deg) translateX(95px) rotate(-450deg); }
        }
        .sphere-float { animation: float 4s ease-in-out infinite; }
        .sphere-pulse { animation: pulse3d 3s ease-in-out infinite; }
        .dot-orbit1   { animation: dotOrbit  6s linear infinite; }
        .dot-orbit2   { animation: dotOrbit2 4s linear infinite; }
      `}</style>

      <div className="sphere-float" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* Shadow */}
        <div style={{ position: "absolute", bottom: -16, left: "50%", transform: "translateX(-50%)", width: 160, height: 24, background: "radial-gradient(ellipse, rgba(100,60,200,0.2) 0%, transparent 70%)", borderRadius: "50%" }} />

        {/* Main sphere */}
        <div className="sphere-pulse" style={{ width: 190, height: 190, borderRadius: "50%", background: "radial-gradient(circle at 35% 35%, #A78BFA, #7C3AED 55%, #4C1D95)", boxShadow: "0 0 60px rgba(124,58,237,0.4), inset -20px -20px 40px rgba(0,0,0,0.25), inset 10px 10px 30px rgba(255,255,255,0.15)", position: "relative" }}>
          {/* Highlight */}
          <div style={{ position: "absolute", top: 28, left: 32, width: 52, height: 34, background: "radial-gradient(ellipse, rgba(255,255,255,0.4) 0%, transparent 70%)", borderRadius: "50%", transform: "rotate(-20deg)" }} />
        </div>

        {/* Orbit ring 1 — horizontal */}
        <div style={{ position: "absolute", width: 260, height: 260, borderRadius: "50%", border: "1.5px solid rgba(139,92,246,0.35)", pointerEvents: "none" }} />

        {/* Orbit ring 2 — tilted */}
        <div style={{ position: "absolute", width: 220, height: 220, borderRadius: "50%", border: "1px solid rgba(167,139,250,0.25)", transform: "rotateX(70deg)", pointerEvents: "none" }} />

        {/* Orbit ring 3 */}
        <div style={{ position: "absolute", width: 190, height: 50, borderRadius: "50%", border: "1px solid rgba(139,92,246,0.2)", transform: "rotateX(80deg) translateY(0px)", pointerEvents: "none" }} />

        {/* Orbiting dots */}
        <div style={{ position: "absolute", width: 260, height: 260, pointerEvents: "none" }}>
          <div className="dot-orbit1" style={{ position: "absolute", top: "50%", left: "50%", marginTop: -5, marginLeft: -5, width: 10, height: 10, borderRadius: "50%", background: "#A78BFA", boxShadow: "0 0 8px rgba(167,139,250,0.8)" }} />
        </div>
        <div style={{ position: "absolute", width: 200, height: 200, pointerEvents: "none" }}>
          <div className="dot-orbit2" style={{ position: "absolute", top: "50%", left: "50%", marginTop: -4, marginLeft: -4, width: 8, height: 8, borderRadius: "50%", background: "#C4B5FD", boxShadow: "0 0 6px rgba(196,181,253,0.7)" }} />
        </div>
      </div>

      {/* Floating accent dots */}
      <div style={{ position: "absolute", top: 20, right: 10, width: 10, height: 10, borderRadius: "50%", background: "#8B5CF6", opacity: .6 }} />
      <div style={{ position: "absolute", bottom: 30, left: 10, width: 7, height: 7, borderRadius: "50%", background: "#A78BFA", opacity: .5 }} />
      <div style={{ position: "absolute", top: "55%", right: 0, width: 5, height: 5, borderRadius: "50%", background: "#7C3AED", opacity: .7 }} />
    </div>
  );
}

const features = [
  { icon: "📊", title: "Vitality Monitor",      desc: "Log daily moods and energy levels. Watch your patterns emerge over time with beautiful charts." },
  { icon: "📖", title: "My Journal",            desc: "Write freely in your encrypted personal journal. Your thoughts are always safe and private." },
  { icon: "💬", title: "Insight Coach",         desc: "Talk to an AI-powered coach for emotional wellness. Available any time, judgment-free." },
  { icon: "🌬", title: "Wellness Path",         desc: "Use personalized exercises and trend analysis to understand your mental health patterns." },
  { icon: "🛡", title: "Private & Secure",      desc: "Your data is encrypted, never shared, and belongs only to you. Complete privacy guaranteed." },
  { icon: "✍️", title: "Creative Expressions", desc: "Name and own your challenges. Small acknowledgments that lead to big breakthroughs." },
];

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div style={{ height: "100vh", overflowY: "auto", overflowX: "hidden", background: "#fff" }}>
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
        .fu1 { animation: fadeUp .55s .05s both; }
        .fu2 { animation: fadeUp .55s .18s both; }
        .fu3 { animation: fadeUp .55s .30s both; }
        .fu4 { animation: fadeUp .55s .42s both; }
        .fu5 { animation: fadeUp .55s .55s both; }
        .fu6 { animation: fadeUp .55s .68s both; }
        .sphere-in { animation: fadeIn .8s .1s both; }
        .feat-card { transition: box-shadow .2s, transform .2s; }
        .feat-card:hover { box-shadow: 0 8px 32px rgba(124,58,237,0.13) !important; transform: translateY(-3px); }
        @media (max-width: 700px) {
          .home-hero { flex-direction: column !important; padding: 24px 20px !important; text-align: center; align-items: center !important; }
          .home-sphere { order: -1; }
          .home-title { font-size: 32px !important; }
          .home-grid { grid-template-columns: 1fr 1fr !important; }
          .home-btns { justify-content: center !important; }
          .home-cta-inner { flex-direction: column !important; text-align: center; gap: 16px !important; }
        }
        @media (max-width: 480px) {
          .home-grid { grid-template-columns: 1fr !important; }
          .home-title { font-size: 26px !important; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 40px", borderBottom: "1px solid #F0EBF8", position: "sticky", top: 0, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(8px)", zIndex: 10 }}>
        <div className="fu1" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ background: "linear-gradient(135deg,#7C3AED,#A78BFA)", borderRadius: 8, width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>🕯</div>
          <span style={{ fontWeight: 800, color: "#2D1F60", fontSize: 17, letterSpacing: "0.02em" }}>SIMON AI</span>
        </div>
        <div className="fu1" style={{ display: "flex", gap: 8 }}>
          <button onClick={() => onNavigate("login")}
            style={{ padding: "7px 18px", borderRadius: 8, border: "1px solid #E5E0F0", background: "#fff", color: "#5A4A8A", fontSize: 13, fontWeight: 500, cursor: "pointer" }}>
            Sign In
          </button>
          <button onClick={() => onNavigate("signup")}
            style={{ padding: "7px 18px", borderRadius: 8, border: "none", background: "#7C3AED", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer", boxShadow: "0 2px 12px rgba(124,58,237,0.3)" }}>
            Get Started
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="home-hero" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 48, padding: "52px 40px 24px", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ flex: 1, maxWidth: 480 }}>
          <div className="fu1" style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#F3F0FF", border: "1px solid #DDD6FE", borderRadius: 20, padding: "5px 14px", fontSize: 11, color: "#7C3AED", marginBottom: 18, fontWeight: 600 }}>
            🤖 AI Powered Mental Wellness
          </div>

          <h1 className="fu2 home-title" style={{ fontSize: 44, fontWeight: 800, color: "#1F1240", lineHeight: 1.15, marginBottom: 14 }}>
            Your mind deserves<br />
            <span style={{ background: "linear-gradient(90deg, #7C3AED, #A855F7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>daily care</span>
          </h1>

          <p className="fu3" style={{ fontSize: 14, color: "#6B5B9A", lineHeight: 1.75, marginBottom: 24, maxWidth: 400 }}>
            Track moods, write freely in your journal, and get AI support — all in one calm, private space built for your mental wellbeing.
          </p>

          <div className="fu4 home-btns" style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 22, flexWrap: "wrap" }}>
            <button onClick={() => onNavigate("signup")}
              style={{ padding: "10px 24px", borderRadius: 10, border: "none", background: "#7C3AED", color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer", boxShadow: "0 4px 18px rgba(124,58,237,0.32)" }}>
              Start for free →
            </button>
            <button onClick={() => onNavigate("login")}
              style={{ padding: "10px 20px", borderRadius: 10, border: "1px solid #E0D9F5", background: "#fff", color: "#5A4A8A", fontSize: 14, cursor: "pointer" }}>
              Sign in
            </button>
          </div>

          <div className="fu5" style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ display: "flex" }}>
              {["😊","🌸","💜","🌿","✨"].map((e,i) => (
                <div key={i} style={{ width: 28, height: 28, borderRadius: "50%", background: `hsl(${260+i*15},60%,${75-i*5}%)`, border: "2px solid #fff", marginLeft: i ? -8 : 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>{e}</div>
              ))}
            </div>
            <span style={{ fontSize: 11, color: "#9B8FC0" }}>Trusted by thousands worldwide</span>
          </div>
        </div>

        <div className="fu2 home-sphere sphere-in" style={{ flexShrink: 0 }}>
          <AnimatedSphere />
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section style={{ padding: "32px 40px", maxWidth: 1000, margin: "0 auto" }}>
        <div className="fu5" style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ fontWeight: 800, color: "#1F1240", fontSize: 24, marginBottom: 6 }}>Everything you need to thrive</div>
          <div style={{ color: "#9B8FC0", fontSize: 13 }}>A complete toolkit for your mental health journey</div>
        </div>

        <div className="home-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
          {features.map((f, i) => (
            <div key={f.title} className="feat-card fu6" style={{ background: "#fff", border: "1px solid #EDE9F8", borderRadius: 14, padding: "20px 18px", boxShadow: "0 2px 12px rgba(0,0,0,0.04)", animationDelay: `${0.55 + i * 0.08}s` }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "#F3F0FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, marginBottom: 12 }}>{f.icon}</div>
              <div style={{ fontWeight: 700, color: "#1F1240", fontSize: 14, marginBottom: 6 }}>{f.title}</div>
              <div style={{ color: "#9B8FC0", fontSize: 12, lineHeight: 1.65 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ padding: "20px 40px 48px", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ background: "linear-gradient(135deg, #4C1D95, #7C3AED)", borderRadius: 20, padding: "32px 40px" }}>
          <div className="home-cta-inner" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
            <div>
              <div style={{ fontWeight: 800, color: "#fff", fontSize: 20, marginBottom: 6 }}>Ready to start your wellness journey?</div>
              <div style={{ color: "rgba(221,214,254,0.85)", fontSize: 13 }}>Join thousands of people taking care of their mental health every day.</div>
            </div>
            <button onClick={() => onNavigate("signup")}
              style={{ flexShrink: 0, padding: "12px 28px", borderRadius: 10, border: "none", background: "#fff", color: "#7C3AED", fontSize: 14, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap", boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}>
              Get started — it's free
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
