import { useState } from "react";
import { Lock, Plus, Trash2, Eye, EyeOff } from "lucide-react";

interface Note { id: number; title: string; body: string; date: string; locked: boolean; }

function getNotes(): Note[] {
  try { return JSON.parse(localStorage.getItem("fortress_notes") || "[]"); } catch { return []; }
}
function saveNotes(n: Note[]) { localStorage.setItem("fortress_notes", JSON.stringify(n)); }

const affirmations = [
  "Tum kafi ho — waise hi jaise ho. 🌸",
  "Teri strength unhe nazar nahi aati jo tumhare saath nahi hain.",
  "Har mushkil raat ki subah hoti hay. Thehra raho.",
  "Tum ne jo sahe hay — woh proof hay tum kitne mazboot ho.",
  "Apne aap se pyar karna bhi ibaadat hay. 🕯",
  "Teri kahani abhi khatam nahi hui.",
  "Jo kal se guzrna — sirf tum ne jhela. Proud of you.",
];

export default function MyFortress() {
  const [notes, setNotes] = useState<Note[]>(getNotes);
  const [active, setActive] = useState<Note | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [showBody, setShowBody] = useState(true);
  const aff = affirmations[new Date().getDay() % affirmations.length];

  const newNote = () => {
    const n: Note = { id: Date.now(), title: "", body: "", date: new Date().toLocaleDateString("en-PK", { day: "numeric", month: "short" }), locked: false };
    setActive(n); setIsNew(true); setShowBody(true);
  };

  const save = () => {
    if (!active) return;
    const updated = isNew ? [...notes, active] : notes.map(n => n.id === active.id ? active : n);
    setNotes(updated); saveNotes(updated); setActive(null); setIsNew(false);
  };

  const del = (id: number) => {
    const updated = notes.filter(n => n.id !== id);
    setNotes(updated); saveNotes(updated);
    if (active?.id === id) setActive(null);
  };

  return (
    <div style={{ display: "flex", height: "100%", background: "#F7F5FC", overflow: "hidden" }}>
      {/* Left panel */}
      <div style={{ width: 210, background: "#fff", borderRight: "1px solid #E5E0F0", display: "flex", flexDirection: "column", flexShrink: 0 }}>
        {/* Daily affirmation */}
        <div style={{ padding: "10px 12px", background: "linear-gradient(135deg,#2A1B4A,#5A3090)", margin: 8, borderRadius: 10 }}>
          <div style={{ fontSize: 9, color: "#C9A0DC", fontWeight: 700, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.08em" }}>Today's Shield</div>
          <div style={{ fontSize: 11, color: "#fff", lineHeight: 1.6 }}>{aff}</div>
        </div>

        <div style={{ padding: "6px 12px 6px", borderBottom: "1px solid #E5E0F0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontWeight: 700, color: "#2D1F60", fontSize: 12 }}>🛡 My Notes</span>
          <button onClick={newNote} style={{ background: "#4A3080", border: "none", borderRadius: 6, padding: "3px 8px", cursor: "pointer", color: "#fff", fontSize: 10, display: "flex", alignItems: "center", gap: 3 }}>
            <Plus size={9} />New
          </button>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "6px 8px", display: "flex", flexDirection: "column", gap: 4 }}>
          {notes.length === 0 && <p style={{ color: "#B0A4D0", fontSize: 11, padding: "8px", textAlign: "center" }}>Your fortress is empty. Add your first private note.</p>}
          {[...notes].reverse().map(n => (
            <button key={n.id} onClick={() => { setActive(n); setIsNew(false); setShowBody(true); }}
              style={{ textAlign: "left", background: active?.id === n.id ? "#F0EBF8" : "transparent", border: active?.id === n.id ? "1px solid #D0C0F0" : "1px solid transparent", borderRadius: 8, padding: "8px 10px", cursor: "pointer", width: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <Lock size={10} style={{ color: "#9B7EC8", flexShrink: 0 }} />
                <span style={{ fontWeight: 600, color: "#2D1F60", fontSize: 11, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1 }}>{n.title || "Untitled"}</span>
              </div>
              <div style={{ color: "#B0A4D0", fontSize: 9, marginTop: 2 }}>{n.date}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Editor */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "14px 16px", overflow: "hidden" }}>
        {active ? (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, flexShrink: 0 }}>
              <button onClick={() => setShowBody(b => !b)} style={{ background: "#F0EBF8", border: "1px solid #D0C0F0", borderRadius: 8, padding: "5px 10px", cursor: "pointer", display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "#5A4A8A" }}>
                {showBody ? <EyeOff size={12} /> : <Eye size={12} />}{showBody ? "Hide" : "Show"}
              </button>
              <div style={{ flex: 1 }} />
              <button onClick={() => del(active.id)} style={{ background: "none", border: "none", cursor: "pointer", color: "#e57373" }}><Trash2 size={14} /></button>
              <button onClick={save} style={{ background: "#4A3080", border: "none", borderRadius: 8, padding: "6px 16px", color: "#fff", fontSize: 11, fontWeight: 600, cursor: "pointer" }}>Save</button>
            </div>
            <input value={active.title} onChange={e => setActive(a => a ? {...a, title: e.target.value} : a)}
              placeholder="Note title…"
              style={{ background: "transparent", border: "none", outline: "none", fontSize: 18, fontWeight: 700, color: "#2D1F60", marginBottom: 10, flexShrink: 0 }} />
            {showBody
              ? <textarea value={active.body} onChange={e => setActive(a => a ? {...a, body: e.target.value} : a)}
                  placeholder="Yeh jagah sirf tumhari hay. Koi nahi padhhega. Likho jo dil chahaye…"
                  style={{ flex: 1, background: "#fff", border: "1px solid #E5E0F0", borderRadius: 10, padding: "12px 14px", fontSize: 13, color: "#2D1F60", resize: "none", outline: "none", lineHeight: 1.8, fontFamily: "inherit" }} />
              : <div style={{ flex: 1, background: "#F0EBF8", border: "1px solid #D0C0F0", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 6 }}>
                  <Lock size={28} style={{ color: "#9B7EC8" }} />
                  <p style={{ color: "#7B5EA7", fontSize: 12 }}>Hidden for privacy</p>
                </div>
            }
          </>
        ) : (
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10 }}>
            <div style={{ fontSize: 40 }}>🛡</div>
            <p style={{ color: "#9B8FC0", fontSize: 13, textAlign: "center", maxWidth: 260, lineHeight: 1.6 }}>This is your fortress. Private, safe, and only yours. No one else can see what you write here.</p>
            <button onClick={newNote} style={{ background: "#4A3080", border: "none", borderRadius: 9, padding: "9px 20px", color: "#fff", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Create Private Note</button>
          </div>
        )}
      </div>
    </div>
  );
}
