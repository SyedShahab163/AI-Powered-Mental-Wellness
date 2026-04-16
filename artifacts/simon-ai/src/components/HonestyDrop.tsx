import { useState } from "react";

const moods = [
  { id: "happy", label: "Happy", subtitle: "Elated", emoji: "😊", bg: "rgba(34,197,94,0.15)", border: "rgba(34,197,94,0.6)", glow: "rgba(34,197,94,0.3)" },
  { id: "sad", label: "Sad", subtitle: "Heavy", emoji: "😢", bg: "rgba(59,130,246,0.15)", border: "rgba(59,130,246,0.6)", glow: "rgba(59,130,246,0.3)" },
  { id: "angry", label: "Angry", subtitle: "Fuming", emoji: "😡", bg: "rgba(239,68,68,0.15)", border: "rgba(239,68,68,0.6)", glow: "rgba(239,68,68,0.3)" },
  { id: "neutral", label: "Neutral", subtitle: "Steadfast", emoji: "😐", bg: "rgba(234,179,8,0.15)", border: "rgba(234,179,8,0.6)", glow: "rgba(234,179,8,0.3)" },
];

export default function HonestyDrop() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="bg-[#1A1820] border border-[#2D2A3D] rounded-xl p-4">
      <h3 className="text-white font-semibold text-sm leading-tight mb-0.5">Honesty Dro feel today?</h3>
      <p className="text-gray-500 text-xs mb-3">Honesty Drop</p>
      <div className="grid grid-cols-2 gap-2">
        {moods.map((mood) => (
          <button
            key={mood.id}
            onClick={() => setSelected(selected === mood.id ? null : mood.id)}
            className="flex flex-col items-center justify-center gap-1 py-3 rounded-xl border transition-all"
            style={{
              backgroundColor: selected === mood.id ? mood.bg : "rgba(255,255,255,0.03)",
              borderColor: selected === mood.id ? mood.border : "#2D2A3D",
              boxShadow: selected === mood.id ? `0 0 12px ${mood.glow}` : "none",
            }}
          >
            <span className="text-xl">{mood.emoji}</span>
            <span className="text-white text-xs font-medium">{mood.label}</span>
            <span className="text-gray-500 text-[10px]">({mood.subtitle})</span>
          </button>
        ))}
      </div>
    </div>
  );
}
