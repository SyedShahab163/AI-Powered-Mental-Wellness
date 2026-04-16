import { Home, MessageCircle, BookOpen, HeartPulse, Shield, Lamp, LogOut } from "lucide-react";

interface SidebarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  user?: { name: string; age: string; country: string } | null;
  onLogout?: () => void;
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

export default function Sidebar({ activePage, onNavigate, user, onLogout }: SidebarProps) {
  return (
    <aside className="w-[220px] min-h-screen flex flex-col bg-[#F5F3FB] border-r border-[#E2DDEF] shrink-0">
      {/* Logo */}
      <div className="px-4 pt-5 pb-4 border-b border-[#E2DDEF]">
        <div className="flex items-center gap-2">
          <span className="text-xl">🕯</span>
          <span className="font-bold text-[#4A3080] tracking-wide text-lg">SIMON AI</span>
        </div>
      </div>

      {/* User Profile */}
      <div className="px-4 py-5 border-b border-[#E2DDEF]">
        <div className="flex flex-col items-center text-center gap-2">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#9B7EC8] shadow-md">
            <img
              src="https://i.pravatar.cc/150?img=68"
              alt={user?.name || "User"}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-[#2D1F60] font-bold text-sm">{user?.name || "Armaan Khan"}</p>
            <p className="text-[#6B5A9B] text-xs mt-0.5">Age: {user?.age || "24"}</p>
            <p className="text-[#6B5A9B] text-xs">
              Country: {user?.country || "India"}{" "}
              {(user?.country || "India") === "India" ? "🇮🇳" : "🌍"}
            </p>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left text-sm transition-all ${
              activePage === id
                ? "bg-[#4A3080] text-white font-semibold shadow-sm"
                : "text-[#5A4A8A] hover:text-[#2D1F60] hover:bg-[#EAE6F8]"
            }`}
          >
            <Icon size={16} className={activePage === id ? "text-white" : "text-[#9B7EC8]"} />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      {/* Bottom Items */}
      <div className="px-3 py-3 border-t border-[#E2DDEF] flex flex-col gap-1">
        {bottomItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left text-sm text-[#5A4A8A] hover:text-[#2D1F60] hover:bg-[#EAE6F8] transition-all"
          >
            <Icon size={16} className="text-[#9B7EC8]" />
            <span>{label}</span>
          </button>
        ))}
        {onLogout && (
          <button
            onClick={onLogout}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left text-sm text-red-500 hover:bg-red-50 transition-all mt-1"
          >
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        )}
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-[#E2DDEF]">
        <p className="text-[10px] text-[#9B8FC0] text-center leading-relaxed">
          © 2024 SIMON AI. All rights reserved.
        </p>
      </div>
    </aside>
  );
}
