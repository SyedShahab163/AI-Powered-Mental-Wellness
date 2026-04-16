import { Search, Bell } from "lucide-react";

export default function TopBar() {
  return (
    <header className="flex items-center justify-between px-5 py-3.5 shrink-0" style={{ background: "#0E0D0F", borderBottom: "1px solid #2D2A3D" }}>
      <div>
        <h1 className="font-bold text-white tracking-wide" style={{ fontSize: "17px" }}>THE UNBURDEN</h1>
        <p style={{ fontSize: "11px", color: "#7B6FA0", marginTop: "1px" }}>Your feelings die here. Your peace begins here.</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-lg px-3 py-2" style={{ background: "#1A1820", border: "1px solid #2D2A3D", width: "190px" }}>
          <Search size={13} style={{ color: "#6B6080" }} />
          <input type="text" placeholder="Search"
            className="bg-transparent outline-none flex-1"
            style={{ fontSize: "12px", color: "#cccccc" }}
          />
        </div>
        <div className="relative">
          <Bell size={18} style={{ color: "#9B8FC0", cursor: "pointer" }} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white font-bold rounded-full flex items-center justify-center"
            style={{ fontSize: "9px", width: "15px", height: "15px" }}>1</span>
        </div>
      </div>
    </header>
  );
}
