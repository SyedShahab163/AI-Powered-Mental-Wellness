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
  const [history, setHistory] = useState<string[]>([]);

  const handleSend = () => {
    if (!input.trim()) return;
    const r = aiResponses[Math.floor(Math.random() * aiResponses.length)];
    setHistory((prev) => [...prev, input]);
    setResponse(r);
    setInput("");
  };

  return (
    <div className="rounded-xl p-4 relative" style={{ background: "#1A1820", border: "1px solid #2D2A3D" }}>
      <h3 className="font-semibold text-white" style={{ fontSize: "13px", marginBottom: "10px" }}>The Unsaid Advisor</h3>

      {history.slice(-1).map((h, i) => (
        <div key={i} style={{ color: "#7B6FA0", fontSize: "10px", fontStyle: "italic", marginBottom: "6px" }}>"{h}"</div>
      ))}

      <div className="rounded-lg p-2.5 mb-3" style={{ background: "#12101A", border: "1px solid #2D2A3D" }}>
        <textarea value={input} onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), handleSend())}
          placeholder="*Job ki tension kaise kam karun?*"
          className="w-full bg-transparent outline-none resize-none"
          style={{ fontSize: "11px", color: "#9B8FC0", fontStyle: "italic", height: "36px" }} />
      </div>

      <div className="rounded-lg p-3" style={{ background: "#12101A", border: "1px solid #2D2A3D" }}>
        <p style={{ fontSize: "11px", color: "#ccc", lineHeight: "1.6" }}>{response}</p>
      </div>

      <button onClick={handleSend}
        className="absolute bottom-3 right-3 rounded-full flex items-center justify-center transition-colors"
        style={{ background: "#4A3080", width: "24px", height: "24px" }}>
        <Sparkles size={12} style={{ color: "#fff" }} />
      </button>
    </div>
  );
}
