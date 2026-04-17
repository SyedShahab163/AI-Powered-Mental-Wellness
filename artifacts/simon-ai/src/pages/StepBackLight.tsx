import { useState, useEffect, useRef } from "react";

type Mode = "idle" | "running" | "done";
type Exercise = "478" | "box" | "calm";

const exercises = {
  "478": { name: "4-7-8 Breathing", desc: "Inhale 4s → Hold 7s → Exhale 8s", phases: ["Inhale", "Hold", "Exhale"], durations: [4, 7, 8], rounds: 4, color: "#7B5EA7" },
  box:   { name: "Box Breathing",   desc: "Inhale 4s → Hold 4s → Exhale 4s → Hold 4s", phases: ["Inhale", "Hold", "Exhale", "Hold"], durations: [4, 4, 4, 4], rounds: 4, color: "#34D399" },
  calm:  { name: "Calm Down",       desc: "Inhale 5s → Exhale 7s (repeat)", phases: ["Inhale", "Exhale"], durations: [5, 7], rounds: 5, color: "#60A5FA" },
};

const grounding = [
  { n: 5, sense: "things you can SEE", icon: "👀" },
  { n: 4, sense: "things you can TOUCH", icon: "🤚" },
  { n: 3, sense: "things you can HEAR", icon: "👂" },
  { n: 2, sense: "things you can SMELL", icon: "👃" },
  { n: 1, sense: "thing you can TASTE", icon: "👅" },
];

export default function StepBackLight() {
  const [ex, setEx] = useState<Exercise>("478");
  const [mode, setMode] = useState<Mode>("idle");
  const [phase, setPhase] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [round, setRound] = useState(1);
  const [scale, setScale] = useState(1);
  const timerRef = useRef<number | null>(null);
  const cfg = exercises[ex];

  const stop = () => { if (timerRef.current) clearInterval(timerRef.current); setMode("idle"); setPhase(0); setRound(1); setScale(1); };

  const start = () => {
    setMode("running"); setPhase(0); setRound(1);
    setTimeLeft(cfg.durations[0]);
    setScale(cfg.phases[0] === "Inhale" ? 1.4 : 0.7);
  };

  useEffect(() => {
    if (mode !== "running") return;
    timerRef.current = window.setInterval(() => {
      setTimeLeft(t => {
        if (t > 1) return t - 1;
        setPhase(p => {
          const next = (p + 1) % cfg.phases.length;
          const isNewRound = next === 0;
          if (isNewRound) {
            setRound(r => {
              if (r >= cfg.rounds) { clearInterval(timerRef.current!); setMode("done"); return r; }
              return r + 1;
            });
          }
          setTimeLeft(cfg.durations[next]);
          setScale(cfg.phases[next] === "Inhale" ? 1.4 : cfg.phases[next] === "Hold" ? (p > 0 ? 1.4 : 1) : 0.7);
          return next;
        });
        return cfg.durations[0];
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [mode, ex]);

  return (
    <div style={{ display: "flex", height: "100%", background: "#F7F5FC", overflow: "hidden" }}>
      {/* Left: breathing */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "14px 16px", overflow: "hidden" }}>
        <div style={{ fontWeight: 700, color: "#2D1F60", fontSize: 14, marginBottom: 4 }}>🌬 Step Back Light</div>
        <div style={{ color: "#9B8FC0", fontSize: 11, marginBottom: 12 }}>Take a breath. Everything can wait for 2 minutes.</div>

        {/* Exercise selector */}
        <div style={{ display: "flex", gap: 6, marginBottom: 14, flexShrink: 0 }}>
          {(Object.keys(exercises) as Exercise[]).map(k => (
            <button key={k} onClick={() => { setEx(k); stop(); }}
              style={{ flex: 1, padding: "7px 6px", borderRadius: 9, border: ex === k ? `2px solid ${exercises[k].color}` : "1px solid #E5E0F0", background: ex === k ? `${exercises[k].color}18` : "#fff", cursor: "pointer", fontSize: 10, fontWeight: ex === k ? 700 : 400, color: ex === k ? exercises[k].color : "#5A4A8A" }}>
              {exercises[k].name}
            </button>
          ))}
        </div>

        {/* Breathing circle */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          {mode === "done" ? (
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 48, marginBottom: 10 }}>✨</div>
              <div style={{ fontWeight: 700, color: "#2D1F60", fontSize: 18, marginBottom: 6 }}>Well done!</div>
              <div style={{ color: "#9B8FC0", fontSize: 13, marginBottom: 16 }}>Tumhara dil thoda halka hua hoga.</div>
              <button onClick={stop} style={{ background: "#4A3080", border: "none", borderRadius: 9, padding: "9px 22px", color: "#fff", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Go Again</button>
            </div>
          ) : (
            <>
              <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                {/* Ripple ring */}
                <div style={{ position: "absolute", width: 160, height: 160, borderRadius: "50%", border: `2px solid ${cfg.color}30`, transform: `scale(${scale * 1.2})`, transition: `transform ${cfg.durations[phase]}s ease-in-out` }} />
                {/* Main circle */}
                <div style={{ width: 130, height: 130, borderRadius: "50%", background: `radial-gradient(circle, ${cfg.color}40, ${cfg.color}15)`, border: `3px solid ${cfg.color}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", transform: `scale(${scale})`, transition: `transform ${cfg.durations[phase]}s ease-in-out`, boxShadow: `0 0 30px ${cfg.color}30` }}>
                  {mode === "running" && <>
                    <div style={{ fontWeight: 700, color: cfg.color, fontSize: 13 }}>{cfg.phases[phase]}</div>
                    <div style={{ fontWeight: 800, color: "#2D1F60", fontSize: 28 }}>{timeLeft}</div>
                  </>}
                  {mode === "idle" && <div style={{ fontSize: 30 }}>🌬</div>}
                </div>
              </div>

              <div style={{ color: "#9B8FC0", fontSize: 11, marginBottom: 6 }}>{cfg.desc}</div>
              {mode === "running" && <div style={{ color: "#B0A4D0", fontSize: 10, marginBottom: 14 }}>Round {round} of {cfg.rounds}</div>}

              {mode === "idle"
                ? <button onClick={start} style={{ background: "#4A3080", border: "none", borderRadius: 9, padding: "9px 28px", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Begin</button>
                : <button onClick={stop}  style={{ background: "transparent", border: "1px solid #D0C0F0", borderRadius: 9, padding: "7px 20px", color: "#7B5EA7", fontSize: 12, cursor: "pointer" }}>Stop</button>
              }
            </>
          )}
        </div>
      </div>

      {/* Right: 5-4-3-2-1 grounding */}
      <div style={{ width: 220, background: "#fff", borderLeft: "1px solid #E5E0F0", padding: "14px 12px", flexShrink: 0, overflowY: "auto" }}>
        <div style={{ fontWeight: 700, color: "#2D1F60", fontSize: 12, marginBottom: 4 }}>🌿 5-4-3-2-1 Grounding</div>
        <div style={{ color: "#9B8FC0", fontSize: 10, marginBottom: 12, lineHeight: 1.5 }}>Anxiety ka signal hay ke tum present nahi. Yeh technique tumhein wapas laati hay.</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {grounding.map(g => (
            <div key={g.n} style={{ background: "#F7F5FC", border: "1px solid #E5E0F0", borderRadius: 9, padding: "9px 11px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                <span style={{ fontSize: 14 }}>{g.icon}</span>
                <span style={{ fontWeight: 700, color: "#4A3080", fontSize: 12 }}>{g.n}</span>
                <span style={{ color: "#5A4A8A", fontSize: 11 }}>{g.sense}</span>
              </div>
              <input placeholder={`Name ${g.n}…`}
                style={{ width: "100%", background: "#fff", border: "1px solid #E5E0F0", borderRadius: 6, padding: "5px 8px", fontSize: 11, color: "#2D1F60", outline: "none", boxSizing: "border-box" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
