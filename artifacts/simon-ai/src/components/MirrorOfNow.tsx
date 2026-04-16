import { ClipboardList } from "lucide-react";

const metrics = [
  { label: "Mood", value: "Good", color: "bg-green-900/60 text-green-400 border-green-800" },
  { label: "Stress", value: "Moderate", color: "bg-orange-900/60 text-orange-400 border-orange-800" },
  { label: "Progress", value: "72% ↑", color: "bg-green-900/60 text-green-400 border-green-800" },
];

export default function MirrorOfNow() {
  return (
    <div className="bg-[#1A1820] border border-[#2D2A3D] rounded-xl p-4">
      <div className="flex items-center gap-2 mb-2">
        <ClipboardList size={14} className="text-purple-400" />
        <h3 className="text-white font-semibold text-sm">Mirror of Now</h3>
      </div>
      <p className="text-gray-400 text-xs leading-relaxed mb-4">
        You've faced conflict, but your focus is shifting. See your reflection.
      </p>
      <div className="flex flex-col gap-2.5">
        {metrics.map((m) => (
          <div key={m.label} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-base">
                {m.label === "Mood" ? "😌" : m.label === "Stress" ? "🔥" : "📈"}
              </span>
              <span className="text-gray-300 text-xs">{m.label}</span>
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
