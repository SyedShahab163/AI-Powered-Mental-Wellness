import { Search, Bell } from "lucide-react";

export default function TopBar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-[#E2DDEF] bg-white shrink-0">
      <div>
        <h1 className="text-xl font-bold text-[#2D1F60] tracking-wide">THE UNBURDEN</h1>
        <p className="text-xs text-[#8A7AB0] mt-0.5">Your feelings die here. Your peace begins here.</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-[#F5F3FB] border border-[#E2DDEF] rounded-lg px-3 py-2 w-52">
          <Search size={14} className="text-[#9B8FC0]" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-sm text-[#2D1F60] placeholder-[#9B8FC0] outline-none flex-1"
          />
        </div>
        <div className="relative">
          <Bell size={20} className="text-[#7B5EA7] cursor-pointer hover:text-[#4A3080] transition-colors" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">1</span>
        </div>
      </div>
    </header>
  );
}
