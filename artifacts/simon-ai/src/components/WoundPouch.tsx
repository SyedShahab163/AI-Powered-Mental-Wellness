import { useState } from "react";
import { MoreVertical, Plus, X } from "lucide-react";

const initialWounds = [
  { id: 1, title: "Career Conflict", addedAt: "Added 2 days ago" },
  { id: 2, title: "Close Calls", addedAt: "Added 2 days ago" },
  { id: 3, title: "Interpersonal Strife", addedAt: "Added 2 days ago" },
];

export default function WoundPouch() {
  const [wounds, setWounds] = useState(initialWounds);
  const [showInput, setShowInput] = useState(false);
  const [newWound, setNewWound] = useState("");
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const addWound = () => {
    if (!newWound.trim()) return;
    setWounds((prev) => [...prev, { id: Date.now(), title: newWound.trim(), addedAt: "Just now" }]);
    setNewWound(""); setShowInput(false);
  };

  return (
    <div className="rounded-xl p-5" style={{ background: "#1A1820", border: "1px solid #2D2A3D" }}>
      <div className="flex items-center gap-2 mb-4">
        <span style={{ fontSize: "14px" }}>🩹</span>
        <h3 className="font-semibold text-white" style={{ fontSize: "14px" }}>Wound Pouch</h3>
      </div>

      <div className="flex flex-col gap-2">
        {wounds.map((wound) => (
          <div key={wound.id} className="flex items-center justify-between rounded-lg px-4 py-3"
            style={{ background: "#12101A", border: "1px solid #2D2A3D" }}>
            <div className="flex items-center gap-3">
              <span style={{ fontSize: "13px" }}>🩹</span>
              <span className="text-white font-medium" style={{ fontSize: "12px" }}>{wound.title}</span>
            </div>
            <div className="flex items-center gap-3">
              <span style={{ color: "#6B6080", fontSize: "11px", borderLeft: "1px solid #2D2A3D", paddingLeft: "10px" }}>{wound.addedAt}</span>
              <div className="relative">
                <button onClick={() => setOpenMenu(openMenu === wound.id ? null : wound.id)}
                  style={{ color: "#6B6080" }}><MoreVertical size={13} /></button>
                {openMenu === wound.id && (
                  <div className="absolute right-0 top-5 rounded-lg py-1 z-20 shadow-lg" style={{ background: "#2D2A3D", border: "1px solid #3D3A50", width: "100px" }}>
                    <button onClick={() => { setWounds(p => p.filter(w => w.id !== wound.id)); setOpenMenu(null); }}
                      className="flex items-center gap-2 px-3 py-1.5 w-full text-left" style={{ color: "#e57373", fontSize: "11px" }}>
                      <X size={10} /> Remove
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {showInput && (
        <div className="mt-3 flex gap-2">
          <input autoFocus value={newWound} onChange={(e) => setNewWound(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addWound()}
            placeholder="Name this wound..."
            className="flex-1 rounded-lg px-3 py-2 outline-none"
            style={{ background: "#12101A", border: "1px solid #7B5EA7", color: "#ddd", fontSize: "12px" }} />
          <button onClick={addWound} className="px-3 py-2 rounded-lg text-white" style={{ background: "#4A3080", fontSize: "12px" }}>Add</button>
          <button onClick={() => setShowInput(false)} className="px-3 py-2 rounded-lg" style={{ border: "1px solid #2D2A3D", color: "#aaa", fontSize: "12px" }}>Cancel</button>
        </div>
      )}

      {!showInput && (
        <button onClick={() => setShowInput(true)}
          className="mt-3 w-full flex items-center justify-center gap-2 py-2.5 rounded-lg transition-all"
          style={{ border: "1px dashed #2D2A3D", color: "#7B6FA0", fontSize: "12px" }}>
          <Plus size={13} /> Pack New Wound
        </button>
      )}
    </div>
  );
}
