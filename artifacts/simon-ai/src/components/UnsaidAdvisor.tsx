import { useState } from "react";
import { Sparkles } from "lucide-react";

const aiResponses = [
  "Break into 5-minute steps. Then breathe. Do one now.",
  "One breath. Then one word. You've got this.",
  "Let the feeling pass through you. It won't last.",
  "The problem shrinks when you name it out loud.",
  "You've survived harder days. Today is manageable.",
  "Put the phone down for 10 minutes. Step outside.",
];

export default function UnsaidAdvisor() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("Break into 5-minute steps. Then breathe. Do one now.");
  const [history, setHistory] = useState<{ q: string }[]>([]);

  const handleSend = () => {
    if (!input.trim()) return;
    const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
    setHistory((prev) => [...prev, { q: input }]);
    setResponse(randomResponse);
    setInput("");
  };

  return (
    <div className="bg-white border border-[#E2DDEF] rounded-xl p-4 relative shadow-sm">
      <h3 className="text-[#2D1F60] font-semibold text-sm mb-3">The Unsaid Advisor</h3>

      <div className="max-h-[60px] overflow-y-auto mb-2 flex flex-col gap-1">
        {history.slice(-2).map((h, i) => (
          <div key={i} className="text-xs text-[#9B8FC0] italic">"{h.q}"</div>
        ))}
      </div>

      <div className="bg-[#F8F6FF] border border-[#E2DDEF] rounded-lg p-2.5 mb-3">
        <textarea value={input} onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), handleSend())}
          placeholder="*Job ki tension kaise kam karun?*"
          className="w-full bg-transparent text-xs text-[#5A4A8A] placeholder-[#B0A4D0] italic outline-none resize-none h-10" />
      </div>

      <div className="bg-[#F0EBF8] border border-[#D8C8F0] rounded-lg p-3 text-xs text-[#4A3080] leading-relaxed">
        {response}
      </div>

      <div className="absolute bottom-3 right-3">
        <button onClick={handleSend}
          className="p-1.5 rounded-full bg-[#4A3080] hover:bg-[#5A3890] transition-colors">
          <Sparkles size={12} className="text-white" />
        </button>
      </div>
    </div>
  );
}
