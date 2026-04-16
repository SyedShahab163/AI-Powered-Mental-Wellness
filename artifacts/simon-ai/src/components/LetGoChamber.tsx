import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function LetGoChamber() {
  const [text, setText] = useState("");
  const [burning, setBurning] = useState(false);
  const { toast } = useToast();

  const handleBurn = () => {
    if (!text.trim()) return;
    setBurning(true);
    setTimeout(() => { setText(""); setBurning(false); toast({ title: "Released 🕯", description: "Your words have vanished." }); }, 500);
  };

  const handleSaveDraft = () => {
    if (!text.trim()) return;
    toast({ title: "Saved to drafts", description: "Your thoughts are safely stored." });
  };

  return (
    <div className="rounded-xl p-5 relative overflow-hidden" style={{ background: "#1A1820", border: "1px solid #3D2A1A" }}>
      <div className="flex items-start gap-2 mb-3">
        <span style={{ fontSize: "16px" }}>🕯</span>
        <div>
          <h3 className="font-semibold text-white" style={{ fontSize: "14px" }}>The Let-Go Chamber</h3>
          <p style={{ fontSize: "11px", color: "#7B6FA0", marginTop: "1px" }}>Write everything. Then watch it vanish.</p>
        </div>
      </div>

      <div className="flex gap-3">
        {/* Text area + buttons */}
        <div className="flex-1">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Youn here..."
            className={`w-full rounded-lg p-3 resize-none outline-none transition-colors ${burning ? "burn-vanish" : ""}`}
            style={{
              background: "#12101A",
              border: "1px solid #2D2A3D",
              color: "#ddd",
              fontSize: "13px",
              height: "110px",
            }}
          />
          <div className="flex gap-3 mt-3">
            <button onClick={handleSaveDraft}
              className="rounded-lg px-4 py-2 font-medium transition-colors"
              style={{ border: "1px solid #3D3A50", color: "#aaa", fontSize: "12px", background: "transparent" }}>
              Save as Draft
            </button>
            <button onClick={handleBurn}
              className="rounded-lg px-4 py-2 font-medium text-white transition-all hover:opacity-90"
              style={{ background: "linear-gradient(to right, #C05A2A, #8B3A8B)", fontSize: "12px" }}>
              Burn & Release
            </button>
          </div>
        </div>

        {/* Candle SVG illustration */}
        <div className="flex-shrink-0 flex items-end justify-center relative" style={{ width: "100px" }}>
          {/* Glow */}
          <div className="absolute" style={{ top: "0px", left: "50%", transform: "translateX(-50%)", width: "60px", height: "60px", background: "radial-gradient(ellipse, rgba(255,160,0,0.25) 0%, transparent 70%)", borderRadius: "50%" }}/>

          {/* Flame */}
          <div className="absolute" style={{ top: "0px", left: "50%", transform: "translateX(-50%)" }}>
            <div className="flame-flicker" style={{ transformOrigin: "bottom center" }}>
              <svg width="26" height="38" viewBox="0 0 26 38">
                <ellipse cx="13" cy="30" rx="8" ry="9" fill="#FF8C00" opacity="0.95"/>
                <ellipse cx="13" cy="22" rx="5.5" ry="13" fill="#FFA500"/>
                <ellipse cx="13" cy="16" rx="4" ry="10" fill="#FFD700"/>
                <ellipse cx="13" cy="10" rx="2.5" ry="7" fill="#FFFACD" opacity="0.95"/>
                <ellipse cx="13" cy="26" rx="11" ry="13" fill="#FF8C00" opacity="0.12"/>
              </svg>
            </div>
          </div>

          {/* Candle body */}
          <svg width="40" height="90" viewBox="0 0 40 90" style={{ marginTop: "28px" }}>
            <defs>
              <linearGradient id="cg2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#b0a8a0"/>
                <stop offset="25%" stopColor="#e8e2dc"/>
                <stop offset="65%" stopColor="#ddd8d4"/>
                <stop offset="100%" stopColor="#909088"/>
              </linearGradient>
            </defs>
            <rect x="8" y="2" width="24" height="86" rx="4" fill="url(#cg2)"/>
            <rect x="8" y="2" width="24" height="10" rx="4" fill="#9A9288"/>
            <path d="M10 8 Q8 20 9 35" stroke="#ccc8c4" strokeWidth="4" fill="none" strokeLinecap="round"/>
            <path d="M28 10 Q30 22 29 36" stroke="#ccc8c4" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <line x1="20" y1="2" x2="20" y2="-4" stroke="#444" strokeWidth="2"/>
          </svg>

          {/* Floating papers */}
          <div className="absolute paper-float-1" style={{ bottom: "20px", left: "0px" }}>
            <svg width="22" height="28" viewBox="0 0 22 28">
              <rect x="1" y="1" width="20" height="26" rx="2" fill="#EEE8E0" stroke="#D4C8B8" strokeWidth="1"/>
              <line x1="4" y1="7" x2="18" y2="7" stroke="#C0B0A0" strokeWidth="1"/>
              <line x1="4" y1="11" x2="16" y2="11" stroke="#C0B0A0" strokeWidth="1"/>
              <line x1="4" y1="15" x2="17" y2="15" stroke="#C0B0A0" strokeWidth="1"/>
            </svg>
          </div>
          <div className="absolute paper-float-2" style={{ bottom: "10px", right: "0px" }}>
            <svg width="20" height="26" viewBox="0 0 20 26" style={{ transform: "rotate(15deg)" }}>
              <rect x="1" y="1" width="18" height="24" rx="2" fill="#EEE8E0" stroke="#D4C8B8" strokeWidth="1"/>
              <line x1="3" y1="6" x2="16" y2="6" stroke="#C0B0A0" strokeWidth="1"/>
              <line x1="3" y1="10" x2="14" y2="10" stroke="#C0B0A0" strokeWidth="1"/>
            </svg>
          </div>
          <div className="absolute paper-float-3" style={{ bottom: "5px", left: "15px" }}>
            <svg width="18" height="22" viewBox="0 0 18 22" style={{ transform: "rotate(-12deg)" }}>
              <rect x="1" y="1" width="16" height="20" rx="2" fill="#EEE8E0" stroke="#D4C8B8" strokeWidth="1"/>
              <line x1="3" y1="6" x2="14" y2="6" stroke="#C0B0A0" strokeWidth="1"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
