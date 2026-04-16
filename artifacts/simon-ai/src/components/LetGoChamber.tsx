import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";

export default function LetGoChamber() {
  const [text, setText] = useState("");
  const [burning, setBurning] = useState(false);
  const [drafts, setDrafts] = useState<string[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { toast } = useToast();

  const handleBurn = () => {
    if (!text.trim()) return;
    setBurning(true);
    setTimeout(() => {
      setText("");
      setBurning(false);
      toast({
        title: "Released",
        description: "Your words have vanished. Peace found.",
      });
    }, 500);
  };

  const handleSaveDraft = () => {
    if (!text.trim()) return;
    setDrafts((prev) => [...prev, text]);
    toast({
      title: "Saved to drafts",
      description: "Your thoughts are safely stored.",
    });
  };

  return (
    <div className="bg-[#1A1820] border border-[#3D2A1A] rounded-xl p-5 relative overflow-hidden">
      <div className="flex items-start gap-3 mb-3">
        <span className="text-lg mt-0.5">🕯</span>
        <div>
          <h3 className="text-white font-semibold text-base">The Let-Go Chamber</h3>
          <p className="text-gray-400 text-xs mt-0.5">Write everything. Then watch it vanish.</p>
        </div>
      </div>

      <div className="relative flex gap-4">
        <div className="flex-1">
          <textarea
            ref={textareaRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Youn here..."
            className={`w-full bg-[#12101A] border border-[#2D2A3D] rounded-lg p-3 text-sm text-gray-200 placeholder-gray-600 resize-none outline-none focus:border-[#7B5EA7] transition-colors h-28 ${burning ? "burn-vanish" : ""}`}
          />
          <div className="flex gap-3 mt-3">
            <button
              onClick={handleSaveDraft}
              className="px-4 py-2 rounded-lg border border-[#2D2A3D] text-gray-300 text-sm font-medium hover:bg-[#2D2A3D] transition-colors"
            >
              Save as Draft
            </button>
            <button
              onClick={handleBurn}
              className="px-4 py-2 rounded-lg text-white text-sm font-medium transition-all hover:opacity-90 active:scale-95"
              style={{ background: "linear-gradient(to right, #C05A2A, #8B3A8B)" }}
            >
              Burn & Release
            </button>
          </div>
        </div>

        <div className="w-20 flex flex-col items-center justify-center relative opacity-70">
          <svg width="60" height="80" viewBox="0 0 60 80" className="feather-anim absolute top-0" style={{left:"10px"}}>
            <ellipse cx="30" cy="40" rx="12" ry="30" fill="none" stroke="#C0A060" strokeWidth="1"/>
            <line x1="30" y1="10" x2="30" y2="70" stroke="#C0A060" strokeWidth="1"/>
            {[15,20,25,30,35,40,45,50,55,60].map((y, i) => (
              <line key={i} x1={30 - (i < 5 ? (i+1)*2 : (9-i)*2)} y1={y} x2={30 + (i < 5 ? (i+1)*2 : (9-i)*2)} y2={y} stroke="#D4B870" strokeWidth="0.5" opacity="0.6"/>
            ))}
          </svg>
          <svg width="50" height="70" viewBox="0 0 60 80" className="feather-anim-2 absolute" style={{top:"20px", right:"0px"}}>
            <ellipse cx="30" cy="40" rx="10" ry="26" fill="none" stroke="#A09050" strokeWidth="1"/>
            <line x1="30" y1="14" x2="30" y2="66" stroke="#A09050" strokeWidth="1"/>
          </svg>
          <svg width="45" height="65" viewBox="0 0 60 80" className="feather-anim-3 absolute" style={{top:"10px", left:"5px"}}>
            <ellipse cx="30" cy="40" rx="9" ry="24" fill="none" stroke="#B8A060" strokeWidth="1"/>
            <line x1="30" y1="16" x2="30" y2="64" stroke="#B8A060" strokeWidth="1"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
