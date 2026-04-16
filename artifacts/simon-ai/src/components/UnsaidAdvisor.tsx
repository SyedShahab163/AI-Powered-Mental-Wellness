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
  const [history, setHistory] = useState<{ q: string; a: string }[]>([]);

  const handleSend = () => {
    if (!input.trim()) return;
    const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
    setHistory((prev) => [...prev, { q: input, a: randomResponse }]);
    setResponse(randomResponse);
    setInput("");
  };

  return (
    <div className="bg-[#1A1820] border border-[#2D2A3D] rounded-xl p-4 relative">
      <h3 className="text-white font-semibold text-sm mb-3">The Unsaid Advisor</h3>

      <div className="max-h-[100px] overflow-y-auto mb-2 flex flex-col gap-2">
        {history.slice(-2).map((h, i) => (
          <div key={i} className="text-xs text-gray-500 italic">"{h.q}"</div>
        ))}
      </div>

      <div className="bg-[#141020] border border-[#2D2A3D] rounded-lg p-2.5 mb-3">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), handleSend())}
          placeholder="*Job ki tension kaise kam karun?*"
          className="w-full bg-transparent text-xs text-gray-400 placeholder-gray-600 italic outline-none resize-none h-10"
        />
      </div>

      <div className="bg-[#1E1630] border border-[#3D2A5D] rounded-lg p-3 text-xs text-gray-300 leading-relaxed">
        {response}
      </div>

      <div className="absolute bottom-3 right-3">
        <button
          onClick={handleSend}
          className="p-1.5 rounded-full bg-[#4A3080] hover:bg-[#5A3890] transition-colors"
        >
          <Sparkles size={12} className="text-purple-200" />
        </button>
      </div>
    </div>
  );
}
