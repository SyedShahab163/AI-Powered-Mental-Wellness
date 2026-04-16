import { useState } from "react";

const moods = [
  { id: "happy", label: "Happy", subtitle: "Elated", emoji: "😊", bg: "rgba(34,197,94,0.12)", border: "rgba(34,197,94,0.5)", glow: "rgba(34,197,94,0.2)" },
  { id: "sad", label: "Sad", subtitle: "Heavy", emoji: "😢", bg: "rgba(59,130,246,0.12)", border: "rgba(59,130,246,0.5)", glow: "rgba(59,130,246,0.2)" },
  { id: "angry", label: "Angry", subtitle: "Fuming", emoji: "😡", bg: "rgba(239,68,68,0.12)", border: "rgba(239,68,68,0.5)", glow: "rgba(239,68,68,0.2)" },
  { id: "neutral", label: "Neutral", subtitle: "Steadfast", emoji: "😐", bg: "rgba(234,179,8,0.12)", border: "rgba(234,179,8,0.5)", glow: "rgba(234,179,8,0.2)" },
];

export default function HonestyDrop() {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <div className="bg-white border border-[#E2DDEF] rounded-xl p-4 shadow-sm">
      <h3 className="text-[#2D1F60] font-semibold text-sm leading-tight mb-0.5">Honesty Dro feel today?</h3>
      <p className="text-[#9B8FC0] text-xs mb-3">Honesty Drop</p>
      <div className="grid grid-cols-2 gap-2">
        {moods.map((mood) => (
          <button key={mood.id} onClick={() => setSelected(selected === mood.id ? null : mood.id)}
            className="flex flex-col items-center justify-center gap-1 py-3 rounded-xl border transition-all"
            style={{
              backgroundColor: selected === mood.id ? mood.bg : "#F8F6FF",
              borderColor: selected === mood.id ? mood.border : "#E2DDEF",
              boxShadow: selected === mood.id ? `0 0 10px ${mood.glow}` : "none",
            }}>
            <span className="text-xl">{mood.emoji}</span>
            <span className="text-[#2D1F60] text-xs font-medium">{mood.label}</span>
            <span className="text-[#9B8FC0] text-[10px]">({mood.subtitle})</span>
          </button>
        ))}
      </div>
    </div>
  );
}
