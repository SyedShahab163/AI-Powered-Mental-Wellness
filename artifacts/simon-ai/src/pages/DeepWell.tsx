import { useState } from "react";
import { Plus, Save, Trash2 } from "lucide-react";

interface Entry { id: number; title: string; body: string; date: string; mood: string; }

const MOODS = ["😌","😔","😤","😰","🥰","😐"];
const PROMPTS = [
  "Aaj ki sabse mushkil cheez kya thi?",
  "Kya kuch aisa hua jis ne tumhein khush kiya?",
  "Abhi dil mein kya chal raha hay?",
  "Kal ke liye ek choti umeed likh do.",
  "Koi cheez jo tum chhodhna chahte ho?",
];

function getEntries(): Entry[] {
  try { return JSON.parse(localStorage.getItem("deep_well_entries") || "[]"); } catch { return []; }
}
function saveEntries(e: Entry[]) { localStorage.setItem("deep_well_entries", JSON.stringify(e)); }

export default function DeepWell() {
  const [entries, setEntries] = useState<Entry[]>(getEntries);
  const [active, setActive] = useState<Entry | null>(null);
  const [isNew, setIsNew] = useState(false);
  const prompt = PROMPTS[Math.floor(Math.random() * PROMPTS.length)];

  const newEntry = () => {
    const e: Entry = { id: Date.now(), title: "", body: "", date: new Date().toLocaleDateString("en-PK", { day:"numeric", month:"short", year:"numeric" }), mood: "😌" };
    setActive(e); setIsNew(true);
  };

  const saveEntry = () => {
    if (!active) return;
    const updated = isNew ? [...entries, active] : entries.map(e => e.id === active.id ? active : e);
    setEntries(updated); saveEntries(updated); setActive(null); setIsNew(false);
  };

  const deleteEntry = (id: number) => {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated); saveEntries(updated);
    if (active?.id === id) setActive(null);
  };

  return (
    <div style={{ display: "flex", height: "100%", background: "#F7F5FC", overflow: "hidden" }}>
      {/* Sidebar */}
      <div style={{ width: 200, background: "#fff", borderRight: "1px solid #E5E0F0", display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "12px 12px 8px", borderBottom: "1px solid #E5E0F0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontWeight: 700, color: "#2D1F60", fontSize: 13 }}>📖 The Deep Well</span>
          <button onClick={newEntry} style={{ background: "#4A3080", border: "none", borderRadius: 6, padding: "4px 8px", cursor: "pointer", color: "#fff", fontSize: 10, display: "flex", alignItems: "center", gap: 3 }}>
            <Plus size={10} />New
          </button>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "6px 8px", display: "flex", flexDirection: "column", gap: 4 }}>
          {entries.length === 0 && <p style={{ color: "#B0A4D0", fontSize: 11, padding: "8px 4px", textAlign: "center" }}>No entries yet. Write your first thought.</p>}
          {[...entries].reverse().map(e => (
            <button key={e.id} onClick={() => { setActive(e); setIsNew(false); }}
              style={{ textAlign: "left", background: active?.id === e.id ? "#F0EBF8" : "transparent", border: active?.id === e.id ? "1px solid #D0C0F0" : "1px solid transparent", borderRadius: 8, padding: "8px 10px", cursor: "pointer", width: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ fontSize: 14 }}>{e.mood}</span>
                <span style={{ fontWeight: 600, color: "#2D1F60", fontSize: 11, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1 }}>{e.title || "Untitled"}</span>
              </div>
              <div style={{ color: "#B0A4D0", fontSize: 9, marginTop: 2 }}>{e.date}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Editor */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "14px 16px", overflow: "hidden" }}>
        {active ? (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, flexShrink: 0 }}>
              <div style={{ display: "flex", gap: 6 }}>
                {MOODS.map(m => (
                  <button key={m} onClick={() => setActive(a => a ? {...a, mood: m} : a)}
                    style={{ fontSize: 18, background: active.mood === m ? "#F0EBF8" : "transparent", border: active.mood === m ? "1px solid #D0C0F0" : "1px solid transparent", borderRadius: 6, padding: "2px 4px", cursor: "pointer" }}>{m}</button>
                ))}
              </div>
              <div style={{ flex: 1 }} />
              <button onClick={() => deleteEntry(active.id)} style={{ background: "none", border: "none", cursor: "pointer", color: "#e57373" }}><Trash2 size={14} /></button>
              <button onClick={saveEntry} style={{ background: "#4A3080", border: "none", borderRadius: 8, padding: "6px 14px", color: "#fff", fontSize: 11, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }}>
                <Save size={12} /> Save
              </button>
            </div>
            <input value={active.title} onChange={e => setActive(a => a ? {...a, title: e.target.value} : a)}
              placeholder="Title…"
              style={{ background: "transparent", border: "none", outline: "none", fontSize: 20, fontWeight: 700, color: "#2D1F60", marginBottom: 10, flexShrink: 0 }} />
            <textarea value={active.body} onChange={e => setActive(a => a ? {...a, body: e.target.value} : a)}
              placeholder={`Prompt: ${prompt}`}
              style={{ flex: 1, background: "#fff", border: "1px solid #E5E0F0", borderRadius: 10, padding: "12px 14px", fontSize: 13, color: "#2D1F60", resize: "none", outline: "none", lineHeight: 1.8, fontFamily: "inherit" }} />
          </>
        ) : (
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10 }}>
            <div style={{ fontSize: 40 }}>📖</div>
            <p style={{ color: "#9B8FC0", fontSize: 13, textAlign: "center", maxWidth: 240, lineHeight: 1.6 }}>Your deep well is waiting. Write what you can't say out loud.</p>
            <button onClick={newEntry} style={{ background: "#4A3080", border: "none", borderRadius: 9, padding: "9px 20px", color: "#fff", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Start Writing</button>
          </div>
        )}
      </div>
    </div>
  );
}
