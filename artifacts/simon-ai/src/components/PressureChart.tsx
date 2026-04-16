import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Activity } from "lucide-react";

const data = [
  { date: "May 10", value: 80 },
  { date: "May 11", value: 70 },
  { date: "May 12", value: 65 },
  { date: "May 13", value: 55 },
  { date: "May 14", value: 50 },
  { date: "May 15", value: 40 },
  { date: "May 16", value: 35 },
];

export default function PressureChart() {
  return (
    <div className="bg-white border border-[#E2DDEF] rounded-xl p-4 flex-1 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Activity size={14} className="text-[#5A4A8A]" />
          <h3 className="text-sm font-semibold text-[#2D1F60]">Pressure Exit</h3>
        </div>
        <select className="bg-[#F5F3FB] border border-[#E2DDEF] text-[#5A4A8A] text-xs rounded-md px-2 py-1 outline-none cursor-pointer">
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
        </select>
      </div>
      <div className="h-[140px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#EAE6F8" vertical={false} />
            <XAxis dataKey="date" tick={{ fill: "#9B8FC0", fontSize: 9 }} axisLine={false} tickLine={false} interval={0} />
            <YAxis domain={[0, 100]} tick={{ fill: "#9B8FC0", fontSize: 9 }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ background: "#fff", border: "1px solid #E2DDEF", borderRadius: "8px", fontSize: "11px" }}
              labelStyle={{ color: "#5A4A8A" }} itemStyle={{ color: "#5A4A8A" }} />
            <Line type="monotone" dataKey="value" stroke="#9B8FC0" strokeWidth={2}
              dot={{ fill: "#9B8FC0", r: 3 }} activeDot={{ r: 5, fill: "#5A4A8A" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
