import { Search, Bell } from "lucide-react";

export default function TopBar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-[#2D2A3D] bg-[#0E0D0F] shrink-0">
      <div>
        <h1 className="text-xl font-bold text-white tracking-wide">THE UNBURDEN</h1>
        <p className="text-xs text-gray-400 mt-0.5">Your feelings die here. Your peace begins here.</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-[#1A1820] border border-[#2D2A3D] rounded-lg px-3 py-2 w-52">
          <Search size={14} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-sm text-gray-300 placeholder-gray-500 outline-none flex-1"
          />
        </div>
        <div className="relative">
          <Bell size={20} className="text-gray-400 cursor-pointer hover:text-white transition-colors" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">1</span>
        </div>
      </div>
    </header>
  );
}
