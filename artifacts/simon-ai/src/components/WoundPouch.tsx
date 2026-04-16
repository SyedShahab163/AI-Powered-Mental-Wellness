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
    setWounds((prev) => [
      ...prev,
      { id: Date.now(), title: newWound.trim(), addedAt: "Just now" },
    ]);
    setNewWound("");
    setShowInput(false);
  };

  const removeWound = (id: number) => {
    setWounds((prev) => prev.filter((w) => w.id !== id));
    setOpenMenu(null);
  };

  return (
    <div className="bg-[#1A1820] border border-[#2D2A3D] rounded-xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-base">🩹</span>
        <h3 className="text-white font-semibold text-base">Wound Pouch</h3>
      </div>

      <div className="flex flex-col gap-2">
        {wounds.map((wound) => (
          <div key={wound.id} className="flex items-center justify-between bg-[#12101A] border border-[#2D2A3D] rounded-lg px-4 py-3 group">
            <div className="flex items-center gap-3">
              <span className="text-sm">🩹</span>
              <span className="text-white text-sm font-medium">{wound.title}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-500 text-xs border-l border-[#2D2A3D] pl-3">{wound.addedAt}</span>
              <div className="relative">
                <button
                  onClick={() => setOpenMenu(openMenu === wound.id ? null : wound.id)}
                  className="text-gray-500 hover:text-gray-300 transition-colors"
                >
                  <MoreVertical size={14} />
                </button>
                {openMenu === wound.id && (
                  <div className="absolute right-0 top-6 bg-[#2D2A3D] border border-[#3D3A50] rounded-lg py-1 z-20 w-28 shadow-lg">
                    <button
                      onClick={() => removeWound(wound.id)}
                      className="flex items-center gap-2 px-3 py-1.5 text-xs text-red-400 hover:bg-[#3D3A50] w-full text-left"
                    >
                      <X size={10} />
                      Remove
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
          <input
            autoFocus
            value={newWound}
            onChange={(e) => setNewWound(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addWound()}
            placeholder="Name this wound..."
            className="flex-1 bg-[#12101A] border border-[#7B5EA7] rounded-lg px-3 py-2 text-sm text-gray-200 placeholder-gray-600 outline-none"
          />
          <button onClick={addWound} className="px-3 py-2 rounded-lg bg-[#4A3080] text-white text-sm">Add</button>
          <button onClick={() => setShowInput(false)} className="px-3 py-2 rounded-lg border border-[#2D2A3D] text-gray-400 text-sm">Cancel</button>
        </div>
      )}

      {!showInput && (
        <button
          onClick={() => setShowInput(true)}
          className="mt-3 w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-dashed border-[#2D2A3D] text-gray-400 text-sm hover:border-[#7B5EA7] hover:text-purple-400 transition-all"
        >
          <Plus size={14} />
          Pack New Wound
        </button>
      )}
    </div>
  );
}
