import { ClipboardList } from "lucide-react";

const metrics = [
  { label: "Mood", value: "Good", emoji: "😌", valueStyle: { background: "#1A3A2A", color: "#4ADE80", border: "1px solid #2A4A3A", fontSize: "10px", padding: "2px 8px", borderRadius: "6px" } },
  { label: "Stress", value: "Moderate", emoji: "🔥", valueStyle: { background: "#3A2A1A", color: "#FB923C", border: "1px solid #4A3A2A", fontSize: "10px", padding: "2px 8px", borderRadius: "6px" } },
  { label: "Progress", value: "72% ↑", emoji: "📈", valueStyle: { background: "#1A3A2A", color: "#4ADE80", border: "1px solid #2A4A3A", fontSize: "10px", padding: "2px 8px", borderRadius: "6px" } },
];

export default function MirrorOfNow() {
  return (
    <div className="rounded-xl p-4" style={{ background: "#1A1820", border: "1px solid #2D2A3D" }}>
      <div className="flex items-center gap-2 mb-2">
        <ClipboardList size={13} style={{ color: "#9B7EC8" }} />
        <h3 className="font-semibold text-white" style={{ fontSize: "13px" }}>Mirror of Now</h3>
      </div>
      <p style={{ color: "#7B6FA0", fontSize: "11px", lineHeight: "1.5", marginBottom: "12px" }}>
        You've faced conflict, but your focus is shifting. See your reflection.
      </p>
      <div className="flex flex-col gap-3">
        {metrics.map((m) => (
          <div key={m.label} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span style={{ fontSize: "14px" }}>{m.emoji}</span>
              <span style={{ color: "#aaa", fontSize: "12px" }}>{m.label}</span>
            </div>
            <span style={m.valueStyle}>{m.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
