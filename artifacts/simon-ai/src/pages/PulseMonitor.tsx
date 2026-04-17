import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

interface LogEntry { date: string; mood: number; stress: number; energy: number; note: string; }

function getLogs(): LogEntry[] {
  try { return JSON.parse(localStorage.getItem("pulse_logs") || "[]"); } catch { return []; }
}
function saveLogs(l: LogEntry[]) { localStorage.setItem("pulse_logs", JSON.stringify(l)); }

const defaultLogs: LogEntry[] = [
  { date: "May 10", mood: 2, stress: 80, energy: 3, note: "" },
  { date: "May 11", mood: 3, stress: 65, energy: 4, note: "" },
  { date: "May 12", mood: 2, stress: 72, energy: 2, note: "" },
  { date: "May 13", mood: 4, stress: 50, energy: 4, note: "" },
  { date: "May 14", mood: 3, stress: 45, energy: 3, note: "" },
  { date: "May 15", mood: 4, stress: 30, energy: 5, note: "" },
  { date: "May 16", mood: 5, stress: 25, energy: 5, note: "" },
];

export default function PulseMonitor() {
  const stored = getLogs();
  const [logs, setLogs] = useState<LogEntry[]>(stored.length ? stored : defaultLogs);
  const [form, setForm] = useState({ mood: 3, stress: 50, energy: 3, note: "" });
  const [saved, setSaved] = useState(false);

  const addLog = () => {
    const entry: LogEntry = {
      date: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short" }),
      ...form,
    };
    const updated = [...logs, entry];
    setLogs(updated); saveLogs(updated); setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const avg = (key: keyof LogEntry) => {
    const nums = logs.map(l => l[key] as number);
    return (nums.reduce((a, b) => a + b, 0) / nums.length).toFixed(1);
  };

  const sliderRow = (label: string, key: "mood"|"stress"|"energy", min: number, max: number, color: string) => (
    <div style={{ marginBottom: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
        <span style={{ fontSize: 11, color: "#5A4A8A", fontWeight: 600 }}>{label}</span>
        <span style={{ fontSize: 11, color: color, fontWeight: 700 }}>{form[key]}</span>
      </div>
      <input type="range" min={min} max={max} value={form[key]}
        onChange={e => setForm(f => ({ ...f, [key]: Number(e.target.value) }))}
        style={{ width: "100%", accentColor: color }} />
    </div>
  );

  return (
    <div style={{ display: "flex", height: "100%", background: "#F7F5FC", overflow: "hidden", padding: "12px 14px", gap: 12, boxSizing: "border-box" }}>
      {/* Left: charts */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10, minWidth: 0 }}>
        <div style={{ background: "#fff", border: "1px solid #E5E0F0", borderRadius: 10, padding: "10px 14px", flex: 1 }}>
          <div style={{ fontWeight: 700, color: "#2D1F60", fontSize: 12, marginBottom: 6 }}>💜 Mood (1–5)</div>
          <ResponsiveContainer width="100%" height="85%">
            <LineChart data={logs} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F0EBF8" vertical={false} />
              <XAxis dataKey="date" tick={{ fill: "#B0A4D0", fontSize: 8 }} axisLine={false} tickLine={false} interval={0} />
              <YAxis domain={[1,5]} ticks={[1,2,3,4,5]} tick={{ fill: "#B0A4D0", fontSize: 8 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ fontSize: 10, borderRadius: 8, border: "1px solid #E5E0F0" }} />
              <Line type="monotone" dataKey="mood" stroke="#7B5EA7" strokeWidth={2} dot={{ r: 3, fill: "#7B5EA7", strokeWidth: 0 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div style={{ background: "#fff", border: "1px solid #E5E0F0", borderRadius: 10, padding: "10px 14px", flex: 1 }}>
          <div style={{ fontWeight: 700, color: "#2D1F60", fontSize: 12, marginBottom: 6 }}>🔥 Stress (0–100)</div>
          <ResponsiveContainer width="100%" height="85%">
            <BarChart data={logs} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F0EBF8" vertical={false} />
              <XAxis dataKey="date" tick={{ fill: "#B0A4D0", fontSize: 8 }} axisLine={false} tickLine={false} interval={0} />
              <YAxis domain={[0,100]} tick={{ fill: "#B0A4D0", fontSize: 8 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ fontSize: 10, borderRadius: 8, border: "1px solid #E5E0F0" }} />
              <Bar dataKey="stress" fill="#F472B6" radius={[4,4,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Right: log form + stats */}
      <div style={{ width: 220, display: "flex", flexDirection: "column", gap: 10, flexShrink: 0 }}>
        {/* Stats */}
        <div style={{ background: "#fff", border: "1px solid #E5E0F0", borderRadius: 10, padding: "10px 12px" }}>
          <div style={{ fontWeight: 700, color: "#2D1F60", fontSize: 12, marginBottom: 8 }}>📊 Averages</div>
          {[
            { label: "Avg Mood", val: avg("mood"), color: "#7B5EA7", icon: "💜" },
            { label: "Avg Stress", val: avg("stress"), color: "#F472B6", icon: "🔥" },
            { label: "Avg Energy", val: avg("energy"), color: "#34D399", icon: "⚡" },
          ].map(s => (
            <div key={s.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 7 }}>
              <span style={{ fontSize: 11, color: "#5A4A8A" }}>{s.icon} {s.label}</span>
              <span style={{ fontWeight: 700, color: s.color, fontSize: 13 }}>{s.val}</span>
            </div>
          ))}
        </div>

        {/* Log today */}
        <div style={{ background: "#fff", border: "1px solid #E5E0F0", borderRadius: 10, padding: "10px 12px", flex: 1 }}>
          <div style={{ fontWeight: 700, color: "#2D1F60", fontSize: 12, marginBottom: 10 }}>📝 Log Today</div>
          {sliderRow("Mood", "mood", 1, 5, "#7B5EA7")}
          {sliderRow("Stress", "stress", 0, 100, "#F472B6")}
          {sliderRow("Energy", "energy", 1, 5, "#34D399")}
          <textarea value={form.note} onChange={e => setForm(f => ({ ...f, note: e.target.value }))}
            placeholder="Optional note…"
            style={{ width: "100%", background: "#F7F5FC", border: "1px solid #E5E0F0", borderRadius: 8, padding: "6px 8px", fontSize: 11, color: "#2D1F60", resize: "none", outline: "none", height: 50, boxSizing: "border-box", fontFamily: "inherit" }} />
          <button onClick={addLog}
            style={{ width: "100%", marginTop: 8, background: saved ? "#34D399" : "#4A3080", border: "none", borderRadius: 8, padding: "8px", color: "#fff", fontSize: 12, fontWeight: 600, cursor: "pointer", transition: "background .3s" }}>
            {saved ? "✓ Saved!" : "Save Today's Log"}
          </button>
        </div>
      </div>
    </div>
  );
}
