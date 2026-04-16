import { Home, MessageCircle, BookOpen, HeartPulse, Shield, Lamp, LogOut } from "lucide-react";

interface SidebarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  user?: { name: string; age: string; country: string } | null;
  onLogout?: () => void;
}

const navItems = [
  { id: "overview",  label: "Overview",           icon: Home },
  { id: "dialogue",  label: "Unburden Dialogue",  icon: MessageCircle },
  { id: "deep-well", label: "The Deep Well",       icon: BookOpen },
  { id: "pulse",     label: "Pulse Monitor",       icon: HeartPulse },
];

const bottomItems = [
  { id: "fortress",  label: "My Fortress",     icon: Shield },
  { id: "step-back", label: "Step Back Light", icon: Lamp },
];

export default function Sidebar({ activePage, onNavigate, user, onLogout }: SidebarProps) {
  return (
    <aside style={{ width: 200, background: "#F7F5FC", borderRight: "1px solid #E5E0F0", display: "flex", flexDirection: "column", height: "100vh", flexShrink: 0 }}>
      {/* Logo */}
      <div style={{ padding: "14px 14px 10px", borderBottom: "1px solid #E5E0F0", display: "flex", alignItems: "center", gap: 8 }}>
        <img src={`${import.meta.env.BASE_URL}candle-real.png`} alt="candle"
          style={{ width: 22, height: 22, objectFit: "cover", borderRadius: 4 }} />
        <span style={{ fontWeight: 700, color: "#3A2070", fontSize: 15, letterSpacing: "0.03em" }}>SIMON AI</span>
      </div>

      {/* Profile */}
      <div style={{ padding: "12px 14px", borderBottom: "1px solid #E5E0F0", textAlign: "center" }}>
        <img src="https://i.pravatar.cc/150?img=68" alt={user?.name || "User"}
          style={{ width: 62, height: 62, borderRadius: "50%", objectFit: "cover", border: "2px solid #9B7EC8", margin: "0 auto 8px" }} />
        <div style={{ fontWeight: 700, color: "#2D1F60", fontSize: 13 }}>{user?.name || "Armaan Khan"}</div>
        <div style={{ color: "#8A7AB0", fontSize: 11, marginTop: 2 }}>Age: {user?.age || "24"}</div>
        <div style={{ color: "#8A7AB0", fontSize: 11 }}>Country: {user?.country || "India"} {(!user?.country || user.country === "India") ? "🇮🇳" : "🌍"}</div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: "10px 10px 0", display: "flex", flexDirection: "column", gap: 2 }}>
        {navItems.map(({ id, label, icon: Icon }) => (
          <button key={id} onClick={() => onNavigate(id)}
            style={{
              display: "flex", alignItems: "center", gap: 9, padding: "8px 10px",
              borderRadius: 8, border: "none", cursor: "pointer", width: "100%", textAlign: "left",
              background: activePage === id ? "#4A3080" : "transparent",
              color: activePage === id ? "#fff" : "#6B5A9B",
              fontSize: 12, fontWeight: activePage === id ? 600 : 400,
              transition: "all .15s",
            }}>
            <Icon size={14} style={{ color: activePage === id ? "#fff" : "#9B7EC8" }} />
            {label}
          </button>
        ))}
      </nav>

      {/* Bottom */}
      <div style={{ padding: "8px 10px", borderTop: "1px solid #E5E0F0", display: "flex", flexDirection: "column", gap: 2 }}>
        {bottomItems.map(({ id, label, icon: Icon }) => (
          <button key={id} onClick={() => onNavigate(id)}
            style={{ display: "flex", alignItems: "center", gap: 9, padding: "7px 10px", borderRadius: 8, border: "none", cursor: "pointer", background: "transparent", color: "#6B5A9B", fontSize: 12 }}>
            <Icon size={14} style={{ color: "#9B7EC8" }} />{label}
          </button>
        ))}
        {onLogout && (
          <button onClick={onLogout}
            style={{ display: "flex", alignItems: "center", gap: 9, padding: "7px 10px", borderRadius: 8, border: "none", cursor: "pointer", background: "transparent", color: "#e57373", fontSize: 12, marginTop: 2 }}>
            <LogOut size={14} />Logout
          </button>
        )}
      </div>

      <div style={{ padding: "6px 10px", borderTop: "1px solid #E5E0F0", textAlign: "center" }}>
        <p style={{ fontSize: 9, color: "#B0A4D0", lineHeight: 1.5 }}>© 2024 SIMON AI. All rights reserved.</p>
      </div>
    </aside>
  );
}
