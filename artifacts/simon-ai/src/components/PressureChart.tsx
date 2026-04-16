import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Activity } from "lucide-react";

const data = [
  { date: "May 10", value: 80 },
  { date: "May 11", value: 72 },
  { date: "May 12", value: 65 },
  { date: "May 13", value: 55 },
  { date: "May 14", value: 50 },
  { date: "May 15", value: 28 },
  { date: "May 16", value: 38 },
];

export default function PressureChart() {
  return (
    <div className="flex-1 rounded-xl p-4" style={{ background: "#1A1820", border: "1px solid #2D2A3D" }}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Activity size={13} style={{ color: "#8A8899" }} />
          <h3 className="font-semibold text-white" style={{ fontSize: "13px" }}>Pressure Exit</h3>
        </div>
        <select className="outline-none cursor-pointer rounded-md px-2 py-1"
          style={{ background: "#2D2A3D", border: "1px solid #3D3A50", color: "#ccc", fontSize: "11px" }}>
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
        </select>
      </div>
      <div style={{ height: "150px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, left: -22, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2D2A3D" vertical={false} />
            <XAxis dataKey="date" tick={{ fill: "#6B6080", fontSize: 9 }} axisLine={false} tickLine={false} interval={0} />
            <YAxis domain={[0, 100]} ticks={[0,25,50,75,100]} tick={{ fill: "#6B6080", fontSize: 9 }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ background: "#1A1820", border: "1px solid #2D2A3D", borderRadius: "8px", fontSize: "11px" }}
              labelStyle={{ color: "#8A8899" }} itemStyle={{ color: "#aaa" }} />
            <Line type="monotone" dataKey="value" stroke="#7A7888" strokeWidth={2}
              dot={{ fill: "#8A8899", r: 3, strokeWidth: 0 }} activeDot={{ r: 5, fill: "#bbb" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
