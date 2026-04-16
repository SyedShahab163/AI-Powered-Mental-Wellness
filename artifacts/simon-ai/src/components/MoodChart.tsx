import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp } from "lucide-react";

const data = [
  { date: "May 10", value: 2 },
  { date: "May 11", value: 2.8 },
  { date: "May 12", value: 2.5 },
  { date: "May 13", value: 3 },
  { date: "May 14", value: 3.2 },
  { date: "May 15", value: 3.8 },
  { date: "May 16", value: 4.5 },
];

export default function MoodChart() {
  return (
    <div className="flex-1 rounded-xl p-4" style={{ background: "#1A1820", border: "1px solid #2D2A3D" }}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <TrendingUp size={13} style={{ color: "#9B7EC8" }} />
          <h3 className="font-semibold text-white" style={{ fontSize: "13px" }}>Invisible Path</h3>
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
            <YAxis domain={[1, 5]} ticks={[1,2,3,4,5]} tick={{ fill: "#6B6080", fontSize: 9 }} axisLine={false} tickLine={false}
              label={{ value: "Mood Level", angle: -90, position: "insideLeft", fill: "#6B6080", fontSize: 8, dx: 14 }} />
            <Tooltip contentStyle={{ background: "#1A1820", border: "1px solid #2D2A3D", borderRadius: "8px", fontSize: "11px" }}
              labelStyle={{ color: "#9B7EC8" }} itemStyle={{ color: "#9B7EC8" }} />
            <Line type="monotone" dataKey="value" stroke="#9B7EC8" strokeWidth={2}
              dot={{ fill: "#9B7EC8", r: 3, strokeWidth: 0 }} activeDot={{ r: 5, fill: "#C49EE8" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
