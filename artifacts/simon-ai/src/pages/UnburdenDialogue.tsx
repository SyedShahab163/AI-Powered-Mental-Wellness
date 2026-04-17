import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";

interface Msg { from: "user" | "simon"; text: string; time: string; }

const initial: Msg[] = [
  { from: "simon", text: "Assalam o alaikum 🕯 Main yahaan hoon. Jo bhi dil mein hay, share karo. Koi judge nahi karega.", time: now() },
];

const replies: Record<string, string> = {
  default: "Main sun raha hoon. Thoda aur batao — kya feel ho raha hay tumhein abhi?",
  sad: "Dard feel ho raha hay, aur yeh bilkul theek hay. Rona bhi strength hay. Kya hua jo itna bhaari lag raha hay?",
  angry: "Gussa ek signal hay — kuch galat hua hay tumhare saath. Us cheez ke baare mein batao jisne yeh fire lagayi.",
  anxious: "Tension aur anxiety bahut exhausting hoti hay. Ek kaam karo — 4 seconds saans lo, 4 hold karo, 4 mein chhoron. Phir batao.",
  happy: "Khushi sun ke dil khush hua 🌟 Yeh moment pakad ke rakho. Kya hua jo aaj acha laga?",
  alone: "Akela feel karna shayad sab se bhaari bojh hay. Lekin tum yahaan ho — aur main yahaan hoon. Saath hain.",
  job: "Job ka pressure alag hi tarah ka hota hay. Kya specifically zyada stress de raha hay — kaam, log, ya future ki fikr?",
  family: "Ghar ka bojh alag hi hota hay — koi ek cheez batao jo sabse zyada dil pe lagti hay.",
};

function now() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function getReply(text: string): string {
  const t = text.toLowerCase();
  if (t.includes("sad") || t.includes("dukh") || t.includes("rona") || t.includes("cry")) return replies.sad;
  if (t.includes("angry") || t.includes("gussa") || t.includes("frust")) return replies.angry;
  if (t.includes("anxi") || t.includes("tension") || t.includes("stress") || t.includes("worry")) return replies.anxious;
  if (t.includes("happy") || t.includes("khush") || t.includes("good") || t.includes("great")) return replies.happy;
  if (t.includes("alone") || t.includes("akela") || t.includes("lonely")) return replies.alone;
  if (t.includes("job") || t.includes("kaam") || t.includes("work") || t.includes("office")) return replies.job;
  if (t.includes("family") || t.includes("ghar") || t.includes("maa") || t.includes("abu")) return replies.family;
  return replies.default;
}

export default function UnburdenDialogue() {
  const [msgs, setMsgs] = useState<Msg[]>(initial);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, typing]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg: Msg = { from: "user", text: input.trim(), time: now() };
    const reply = getReply(input);
    setMsgs(p => [...p, userMsg]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs(p => [...p, { from: "simon", text: reply, time: now() }]);
    }, 1400);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#F7F5FC" }}>
      {/* Header */}
      <div style={{ padding: "12px 16px", background: "#fff", borderBottom: "1px solid #E5E0F0", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#4A3080,#9B5EC8)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🕯</div>
          <div>
            <div style={{ fontWeight: 700, color: "#2D1F60", fontSize: 14 }}>Unburden Dialogue</div>
            <div style={{ fontSize: 10, color: "#7B9B6A" }}>● SIMON is listening</div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: "auto", padding: "14px 16px", display: "flex", flexDirection: "column", gap: 10 }}>
        {msgs.map((m, i) => (
          <div key={i} style={{ display: "flex", justifyContent: m.from === "user" ? "flex-end" : "flex-start", gap: 8, alignItems: "flex-end" }}>
            {m.from === "simon" && (
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg,#4A3080,#9B5EC8)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, flexShrink: 0 }}>🕯</div>
            )}
            <div style={{ maxWidth: "70%" }}>
              <div style={{
                padding: "9px 13px", borderRadius: m.from === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
                background: m.from === "user" ? "linear-gradient(135deg,#4A3080,#7B5EC8)" : "#fff",
                color: m.from === "user" ? "#fff" : "#2D1F60",
                fontSize: 12, lineHeight: 1.6,
                boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                border: m.from === "simon" ? "1px solid #E5E0F0" : "none",
              }}>{m.text}</div>
              <div style={{ fontSize: 9, color: "#B0A4D0", marginTop: 3, textAlign: m.from === "user" ? "right" : "left" }}>{m.time}</div>
            </div>
          </div>
        ))}
        {typing && (
          <div style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg,#4A3080,#9B5EC8)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>🕯</div>
            <div style={{ background: "#fff", border: "1px solid #E5E0F0", borderRadius: "14px 14px 14px 4px", padding: "10px 14px", display: "flex", gap: 4, boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
              {[0,1,2].map(i => <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: "#9B8FC0", animation: `bounce 1.2s ${i*0.2}s ease-in-out infinite` }} />)}
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* Input */}
      <div style={{ padding: "10px 14px", background: "#fff", borderTop: "1px solid #E5E0F0", flexShrink: 0, display: "flex", gap: 8 }}>
        <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && send()}
          placeholder="Jo dil mein hay, likh do…"
          style={{ flex: 1, background: "#F7F5FC", border: "1px solid #E5E0F0", borderRadius: 20, padding: "9px 14px", fontSize: 12, color: "#2D1F60", outline: "none" }} />
        <button onClick={send} style={{ width: 36, height: 36, borderRadius: "50%", background: "#4A3080", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <Send size={14} style={{ color: "#fff" }} />
        </button>
      </div>

      <style>{`@keyframes bounce { 0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-6px)} }`}</style>
    </div>
  );
}
