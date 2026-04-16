import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function LetGoChamber() {
  const [text, setText] = useState("");
  const [burning, setBurning] = useState(false);
  const { toast } = useToast();

  const handleBurn = () => {
    if (!text.trim()) return;
    setBurning(true);
    setTimeout(() => { setText(""); setBurning(false); toast({ title: "Released 🕯", description: "Your words have vanished." }); }, 600);
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

      <div className="flex gap-4">
        {/* Text area + buttons */}
        <div className="flex-1">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Youn here..."
            className={`w-full rounded-lg p-3 resize-none outline-none transition-all ${burning ? "burn-vanish" : ""}`}
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
              className="rounded-lg px-4 py-2 font-medium text-white transition-all hover:opacity-90 active:scale-95"
              style={{ background: "linear-gradient(to right, #C05A2A, #8B3A8B)", fontSize: "12px" }}>
              Burn & Release
            </button>
          </div>
        </div>

        {/* Real candle image + floating papers */}
        <div className="flex-shrink-0 relative flex items-end justify-center" style={{ width: "110px", height: "160px" }}>
          {/* Real candle photo */}
          <img
            src={`${import.meta.env.BASE_URL}candle-real.png`}
            alt="Candle"
            style={{
              width: "110px",
              height: "150px",
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "8px",
              opacity: 0.92,
            }}
          />

          {/* Floating real-looking paper documents */}
          <div className="absolute paper-float-1" style={{ bottom: "30px", left: "-10px", zIndex: 10 }}>
            <div style={{
              width: "34px", height: "44px",
              background: "linear-gradient(135deg, #F5F0E8, #EDE8DC)",
              borderRadius: "3px",
              boxShadow: "1px 1px 4px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(0,0,0,0.1)",
              padding: "4px 5px",
              transform: "rotate(-8deg)",
            }}>
              {[0,1,2,3,4].map(i => (
                <div key={i} style={{ height: "2px", background: "#C0B0A0", borderRadius: "1px", marginBottom: "3px", width: i === 4 ? "60%" : "100%" }} />
              ))}
            </div>
          </div>

          <div className="absolute paper-float-2" style={{ bottom: "20px", right: "-8px", zIndex: 10 }}>
            <div style={{
              width: "30px", height: "38px",
              background: "linear-gradient(135deg, #EDE8DC, #E8E0D0)",
              borderRadius: "3px",
              boxShadow: "1px 1px 4px rgba(0,0,0,0.5)",
              padding: "3px 4px",
              transform: "rotate(12deg)",
            }}>
              {[0,1,2,3].map(i => (
                <div key={i} style={{ height: "2px", background: "#B8A890", borderRadius: "1px", marginBottom: "3px", width: i === 3 ? "55%" : "100%" }} />
              ))}
            </div>
          </div>

          <div className="absolute paper-float-3" style={{ bottom: "10px", left: "20px", zIndex: 10 }}>
            <div style={{
              width: "26px", height: "32px",
              background: "linear-gradient(135deg, #F0EBE0, #E8E2D5)",
              borderRadius: "2px",
              boxShadow: "1px 1px 3px rgba(0,0,0,0.4)",
              padding: "3px 4px",
              transform: "rotate(-4deg)",
            }}>
              {[0,1,2].map(i => (
                <div key={i} style={{ height: "2px", background: "#C0B0A0", borderRadius: "1px", marginBottom: "3px" }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
