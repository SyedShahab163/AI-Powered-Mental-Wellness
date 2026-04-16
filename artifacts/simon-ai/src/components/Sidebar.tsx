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
    <aside className="w-[210px] min-h-screen flex flex-col shrink-0" style={{ background: "#141218", borderRight: "1px solid #2D2A3D" }}>
      {/* Logo */}
      <div className="px-4 pt-5 pb-4" style={{ borderBottom: "1px solid #2D2A3D" }}>
        <div className="flex items-center gap-2">
          <span style={{ fontSize: "17px" }}>🪙</span>
          <span className="font-bold text-white tracking-wide" style={{ fontSize: "15px" }}>SIMON AI</span>
          <span style={{ fontSize: "17px", marginLeft: "2px" }}>🕯</span>
        </div>
      </div>

      {/* User Profile */}
      <div className="px-4 py-5" style={{ borderBottom: "1px solid #2D2A3D" }}>
        <div className="flex flex-col items-center text-center gap-2.5">
          <div className="rounded-full overflow-hidden border-2 border-[#4A3080]" style={{ width: "80px", height: "80px" }}>
            <img
              src="https://i.pravatar.cc/150?img=68"
              alt={user?.name || "Armaan Khan"}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div>
            <p className="font-bold text-white" style={{ fontSize: "13px" }}>{user?.name || "Armaan Khan"}</p>
            <p style={{ color: "#9B8FC0", fontSize: "11px", marginTop: "2px" }}>Age: {user?.age || "24"}</p>
            <p style={{ color: "#9B8FC0", fontSize: "11px" }}>
              Country: {user?.country || "India"} {(user?.country === "India" || !user?.country) ? "🇮🇳" : "🌍"}
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
            className="flex items-center gap-3 w-full text-left transition-all rounded-lg px-3 py-2.5"
            style={{
              background: activePage === id ? "#4A3080" : "transparent",
              color: activePage === id ? "#ffffff" : "#9B8FC0",
              fontSize: "13px",
              fontWeight: activePage === id ? "600" : "400",
            }}
          >
            <Icon size={15} style={{ color: activePage === id ? "#ffffff" : "#9B8FC0" }} />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      {/* Bottom */}
      <div className="px-3 py-3 flex flex-col gap-1" style={{ borderTop: "1px solid #2D2A3D" }}>
        {bottomItems.map(({ id, label, icon: Icon }) => (
          <button key={id} onClick={() => onNavigate(id)}
            className="flex items-center gap-3 w-full text-left rounded-lg px-3 py-2.5 transition-all"
            style={{ color: "#9B8FC0", fontSize: "13px" }}>
            <Icon size={15} style={{ color: "#9B8FC0" }} />
            <span>{label}</span>
          </button>
        ))}
        {onLogout && (
          <button onClick={onLogout}
            className="flex items-center gap-3 w-full text-left rounded-lg px-3 py-2.5 transition-all mt-1"
            style={{ color: "#e57373", fontSize: "13px" }}>
            <LogOut size={15} />
            <span>Logout</span>
          </button>
        )}
      </div>

      {/* Footer */}
      <div className="px-4 py-3" style={{ borderTop: "1px solid #2D2A3D" }}>
        <p style={{ fontSize: "9px", color: "#5A5070", textAlign: "center", lineHeight: "1.5" }}>
          © 2024 SIMON AI. All rights reserved.
        </p>
      </div>
    </aside>
  );
}
