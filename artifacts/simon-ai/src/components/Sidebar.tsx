import { Home, MessageCircle, BookOpen, HeartPulse, Shield, Lamp } from "lucide-react";

interface SidebarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { id: "overview", label: "Overview", icon: Home },
  { id: "dialogue", label: "Unburden Dialogue", icon: MessageCircle },
  { id: "deep-well", label: "The Deep Well", icon: BookOpen },
  { id: "pulse", label: "Pulse Monitor", icon: HeartPulse },
];

const bottomItems = [
  { id: "fortress", label: "My Fortress", icon: Shield },
  { id: "step-back", label: "Step Back Light", icon: Lamp },
];

export default function Sidebar({ activePage, onNavigate }: SidebarProps) {
  return (
    <aside className="w-[220px] min-h-screen flex flex-col bg-[#141218] border-r border-[#2D2A3D] shrink-0">
      <div className="px-4 pt-5 pb-4 border-b border-[#2D2A3D]">
        <div className="flex items-center gap-2">
          <span className="text-xl">🕯</span>
          <span className="font-bold text-white tracking-wide text-lg">SIMON AI</span>
        </div>
      </div>

      <div className="px-4 py-5 border-b border-[#2D2A3D]">
        <div className="flex flex-col items-center text-center gap-2">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-purple-800 overflow-hidden flex items-center justify-center border-2 border-[#7B5EA7]">
            <img
              src="https://i.pravatar.cc/150?img=68"
              alt="Armaan Khan"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-white font-semibold text-sm">Armaan Khan</p>
            <p className="text-gray-400 text-xs mt-0.5">Age: 24</p>
            <p className="text-gray-400 text-xs">Country: India 🇮🇳</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left text-sm transition-all ${
              activePage === id
                ? "bg-[#4A3080] text-white font-medium"
                : "text-gray-400 hover:text-white hover:bg-[#2D2A3D]"
            }`}
          >
            <Icon size={16} />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <div className="px-3 py-3 border-t border-[#2D2A3D] flex flex-col gap-1">
        {bottomItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left text-sm text-gray-400 hover:text-white hover:bg-[#2D2A3D] transition-all"
          >
            <Icon size={16} />
            <span>{label}</span>
          </button>
        ))}
      </div>

      <div className="px-4 py-3 border-t border-[#2D2A3D]">
        <p className="text-[10px] text-gray-600 text-center leading-relaxed">
          © 2024 SIMON AI. All rights reserved.
        </p>
      </div>
    </aside>
  );
}
