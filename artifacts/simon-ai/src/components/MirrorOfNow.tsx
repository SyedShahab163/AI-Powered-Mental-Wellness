import { ClipboardList } from "lucide-react";

const metrics = [
  { label: "Mood", value: "Good", emoji: "😌", color: "bg-green-100 text-green-700 border-green-200" },
  { label: "Stress", value: "Moderate", emoji: "🔥", color: "bg-orange-100 text-orange-700 border-orange-200" },
  { label: "Progress", value: "72% ↑", emoji: "📈", color: "bg-green-100 text-green-700 border-green-200" },
];

export default function MirrorOfNow() {
  return (
    <div className="bg-white border border-[#E2DDEF] rounded-xl p-4 shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <ClipboardList size={14} className="text-[#7B5EA7]" />
        <h3 className="text-[#2D1F60] font-semibold text-sm">Mirror of Now</h3>
      </div>
      <p className="text-[#8A7AB0] text-xs leading-relaxed mb-4">
        You've faced conflict, but your focus is shifting. See your reflection.
      </p>
      <div className="flex flex-col gap-2.5">
        {metrics.map((m) => (
          <div key={m.label} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-base">{m.emoji}</span>
              <span className="text-[#5A4A8A] text-xs">{m.label}</span>
            </div>
            <span className={`text-xs px-2.5 py-1 rounded-md border font-medium ${m.color}`}>
              {m.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
