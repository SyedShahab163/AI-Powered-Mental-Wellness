import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface LoginProps {
  onLogin: (user: { name: string; age: string; country: string }) => void;
  onNavigate: (page: string) => void;
}

export default function Login({ onLogin, onNavigate }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) { setError("Please fill in all fields."); return; }
    const stored = localStorage.getItem("simon_user");
    if (stored) {
      const u = JSON.parse(stored);
      if (u.email === email && u.password === password) { onLogin({ name: u.name, age: u.age, country: u.country }); }
      else setError("Invalid email or password.");
    } else setError("No account found. Please sign up first.");
  };

  const inp: React.CSSProperties = { width: "100%", background: "#F7F5FC", border: "1px solid #E5E0F0", borderRadius: 8, padding: "8px 10px", fontSize: 13, color: "#2D1F60", outline: "none", boxSizing: "border-box" };
  const lbl: React.CSSProperties = { fontSize: 11, fontWeight: 600, color: "#5A4A8A", display: "block", marginBottom: 5 };

  return (
    <div style={{ height: "100vh", display: "flex", overflow: "hidden", background: "#F7F5FC" }}>
      {/* Left panel */}
      <div style={{ width: 320, background: "linear-gradient(160deg,#2A1B4A,#4A2878)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 32, flexShrink: 0 }}>
        <img src={`${import.meta.env.BASE_URL}candle-real.png`} alt="candle"
          style={{ width: 110, height: 140, objectFit: "cover", borderRadius: 12, boxShadow: "0 0 32px rgba(255,140,0,0.35)", marginBottom: 20 }} />
        <div style={{ color: "#fff", fontWeight: 700, fontSize: 22, marginBottom: 8 }}>SIMON AI</div>
        <div style={{ color: "#C9A0DC", fontSize: 13, textAlign: "center", lineHeight: 1.6 }}>Your feelings die here.<br />Your peace begins here.</div>
      </div>

      {/* Right form */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: "100%", maxWidth: 360, padding: 32 }}>
          <h2 style={{ color: "#2D1F60", fontSize: 22, fontWeight: 700, marginBottom: 4 }}>Welcome back</h2>
          <p style={{ color: "#9B8FC0", fontSize: 12, marginBottom: 24 }}>Your safe space is waiting for you.</p>

          {error && <div style={{ background: "#FEE2E2", border: "1px solid #FCA5A5", color: "#991B1B", fontSize: 11, borderRadius: 7, padding: "7px 10px", marginBottom: 14 }}>{error}</div>}

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div><label style={lbl}>Email Address</label><input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" style={inp} /></div>
            <div>
              <label style={lbl}>Password</label>
              <div style={{ position: "relative" }}>
                <input type={showPass ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter your password" style={{ ...inp, paddingRight: 34 }} />
                <button type="button" onClick={() => setShowPass(!showPass)} style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#9B8FC0" }}>
                  {showPass ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
            </div>
            <button type="submit" style={{ background: "#4A3080", color: "#fff", border: "none", borderRadius: 9, padding: "10px", fontSize: 13, fontWeight: 600, cursor: "pointer", marginTop: 4, boxShadow: "0 4px 14px rgba(74,48,128,0.25)" }}>
              Sign In
            </button>
          </form>

          <p style={{ textAlign: "center", fontSize: 11, color: "#9B8FC0", marginTop: 18 }}>
            Don't have an account?{" "}
            <button onClick={() => onNavigate("signup")} style={{ background: "none", border: "none", color: "#4A3080", fontWeight: 700, cursor: "pointer", fontSize: 11 }}>Sign up</button>
          </p>
        </div>
      </div>
    </div>
  );
}
