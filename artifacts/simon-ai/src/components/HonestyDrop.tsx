import { useState } from "react";

const moods = [
  { id: "happy", label: "Happy", subtitle: "Elated", emoji: "😊", selBg: "rgba(34,197,94,0.2)", selBorder: "rgba(34,197,94,0.7)" },
  { id: "sad", label: "Sad", subtitle: "Heavy", emoji: "😢", selBg: "rgba(59,130,246,0.2)", selBorder: "rgba(59,130,246,0.7)" },
  { id: "angry", label: "Angry", subtitle: "Fuming", emoji: "😡", selBg: "rgba(239,68,68,0.2)", selBorder: "rgba(239,68,68,0.7)" },
  { id: "neutral", label: "Neutral", subtitle: "Steadfast", emoji: "😐", selBg: "rgba(234,179,8,0.2)", selBorder: "rgba(234,179,8,0.7)" },
];

export default function HonestyDrop() {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <div className="rounded-xl p-4" style={{ background: "#1A1820", border: "1px solid #2D2A3D" }}>
      <h3 className="font-semibold text-white" style={{ fontSize: "13px", lineHeight: "1.4", marginBottom: "2px" }}>Honesty Dro feel today?</h3>
      <p style={{ color: "#6B6080", fontSize: "11px", marginBottom: "10px" }}>Honesty Drop</p>
      <div className="grid grid-cols-2 gap-2">
        {moods.map((mood) => (
          <button key={mood.id} onClick={() => setSelected(selected === mood.id ? null : mood.id)}
            className="flex flex-col items-center justify-center gap-1 py-3 rounded-xl transition-all"
            style={{
              background: selected === mood.id ? mood.selBg : "rgba(255,255,255,0.03)",
              border: `1px solid ${selected === mood.id ? mood.selBorder : "#2D2A3D"}`,
            }}>
            <span style={{ fontSize: "20px" }}>{mood.emoji}</span>
            <span className="text-white font-medium" style={{ fontSize: "11px" }}>{mood.label}</span>
            <span style={{ color: "#6B6080", fontSize: "10px" }}>({mood.subtitle})</span>
          </button>
        ))}
      </div>
    </div>
  );
}
