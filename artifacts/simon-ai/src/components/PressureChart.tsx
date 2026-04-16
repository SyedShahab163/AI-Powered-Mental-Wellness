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
    <div className="bg-[#1A1820] border border-[#2D2A3D] rounded-xl p-4 flex-1">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Activity size={14} className="text-gray-400" />
          <h3 className="text-sm font-semibold text-white">Pressure Exit</h3>
        </div>
        <select className="bg-[#2D2A3D] border border-[#3D3A50] text-gray-300 text-xs rounded-md px-2 py-1 outline-none cursor-pointer">
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
        </select>
      </div>
      <div className="h-[140px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2D2A3D" vertical={false} />
            <XAxis
              dataKey="date"
              tick={{ fill: "#6B6880", fontSize: 9 }}
              axisLine={false}
              tickLine={false}
              interval={0}
            />
            <YAxis
              domain={[0, 100]}
              tick={{ fill: "#6B6880", fontSize: 9 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{ background: "#1A1820", border: "1px solid #2D2A3D", borderRadius: "8px", fontSize: "11px" }}
              labelStyle={{ color: "#aaaaaa" }}
              itemStyle={{ color: "#cccccc" }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8A8899"
              strokeWidth={2}
              dot={{ fill: "#8A8899", r: 3 }}
              activeDot={{ r: 5, fill: "#cccccc" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
