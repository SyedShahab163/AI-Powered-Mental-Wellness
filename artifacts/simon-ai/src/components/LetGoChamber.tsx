import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function LetGoChamber() {
  const [text, setText] = useState("");
  const [burning, setBurning] = useState(false);
  const { toast } = useToast();

  const handleBurn = () => {
    if (!text.trim()) return;
    setBurning(true);
    setTimeout(() => {
      setText("");
      setBurning(false);
      toast({ title: "Released 🕯", description: "Your words have vanished. Peace found." });
    }, 500);
  };

  const handleSaveDraft = () => {
    if (!text.trim()) return;
    toast({ title: "Saved to drafts", description: "Your thoughts are safely stored." });
  };

  return (
    <div className="bg-white border border-[#E2DDEF] rounded-xl p-5 relative overflow-hidden shadow-sm">
      <div className="flex items-start gap-3 mb-3">
        <span className="text-lg mt-0.5">🕯</span>
        <div>
          <h3 className="text-[#2D1F60] font-semibold text-base">The Let-Go Chamber</h3>
          <p className="text-[#8A7AB0] text-xs mt-0.5">Write everything. Then watch it vanish.</p>
        </div>
      </div>

      <div className="relative flex gap-4">
        <div className="flex-1">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Youn here..."
            className={`w-full bg-[#F8F6FF] border border-[#E2DDEF] rounded-lg p-3 text-sm text-[#2D1F60] placeholder-[#B0A4D0] resize-none outline-none focus:border-[#7B5EA7] transition-colors h-28 ${burning ? "burn-vanish" : ""}`}
          />
          <div className="flex gap-3 mt-3">
            <button onClick={handleSaveDraft}
              className="px-4 py-2 rounded-lg border border-[#C8B8E8] text-[#5A4A8A] text-sm font-medium hover:bg-[#F0EBF8] transition-colors">
              Save as Draft
            </button>
            <button onClick={handleBurn}
              className="px-4 py-2 rounded-lg text-white text-sm font-medium transition-all hover:opacity-90 active:scale-95"
              style={{ background: "linear-gradient(to right, #C05A2A, #8B3A8B)" }}>
              Burn & Release
            </button>
          </div>
        </div>

        <div className="w-20 flex flex-col items-center justify-center relative opacity-60">
          <svg width="60" height="80" viewBox="0 0 60 80" className="feather-anim absolute top-0" style={{left:"10px"}}>
            <ellipse cx="30" cy="40" rx="12" ry="30" fill="none" stroke="#9B7EC8" strokeWidth="1"/>
            <line x1="30" y1="10" x2="30" y2="70" stroke="#9B7EC8" strokeWidth="1"/>
            {[15,20,25,30,35,40,45,50,55,60].map((y, i) => (
              <line key={i} x1={30 - (i < 5 ? (i+1)*2 : (9-i)*2)} y1={y} x2={30 + (i < 5 ? (i+1)*2 : (9-i)*2)} y2={y} stroke="#B09AE0" strokeWidth="0.5" opacity="0.6"/>
            ))}
          </svg>
          <svg width="50" height="70" viewBox="0 0 60 80" className="feather-anim-2 absolute" style={{top:"20px", right:"0px"}}>
            <ellipse cx="30" cy="40" rx="10" ry="26" fill="none" stroke="#7B5EA7" strokeWidth="1"/>
            <line x1="30" y1="14" x2="30" y2="66" stroke="#7B5EA7" strokeWidth="1"/>
          </svg>
          <svg width="45" height="65" viewBox="0 0 60 80" className="feather-anim-3 absolute" style={{top:"10px", left:"5px"}}>
            <ellipse cx="30" cy="40" rx="9" ry="24" fill="none" stroke="#A090C8" strokeWidth="1"/>
            <line x1="30" y1="16" x2="30" y2="64" stroke="#A090C8" strokeWidth="1"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
