import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface SignupProps {
  onLogin: (user: { name: string; age: string; country: string }) => void;
  onNavigate: (page: string) => void;
}

const countries = ["India","Pakistan","Bangladesh","United States","United Kingdom","Canada","Australia","UAE","Saudi Arabia","Germany","France","Japan","China","Brazil","South Africa","Other"];

export default function Signup({ onLogin, onNavigate }: SignupProps) {
  const [form, setForm] = useState({ name:"", email:"", age:"", country:"", password:"", confirm:"" });
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name||!form.email||!form.age||!form.country||!form.password) { setError("Please fill in all fields."); return; }
    if (form.password !== form.confirm) { setError("Passwords do not match."); return; }
    const u = { ...form };
    localStorage.setItem("simon_user", JSON.stringify(u));
    onLogin({ name: form.name, age: form.age, country: form.country });
  };

  const inp: React.CSSProperties = { width: "100%", background: "#F7F5FC", border: "1px solid #E5E0F0", borderRadius: 8, padding: "7px 10px", fontSize: 12, color: "#2D1F60", outline: "none", boxSizing: "border-box" };
  const lbl: React.CSSProperties = { fontSize: 10, fontWeight: 600, color: "#5A4A8A", display: "block", marginBottom: 4 };

  return (
    <div style={{ height: "100vh", display: "flex", overflow: "hidden", background: "#F7F5FC" }}>
      {/* Left panel */}
      <div style={{ width: 260, background: "linear-gradient(160deg,#2A1B4A,#4A2878)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 24, flexShrink: 0 }}>
        <img src={`${import.meta.env.BASE_URL}candle-real.png`} alt="candle"
          style={{ width: 90, height: 116, objectFit: "cover", borderRadius: 10, boxShadow: "0 0 28px rgba(255,140,0,0.32)", marginBottom: 16 }} />
        <div style={{ color: "#fff", fontWeight: 700, fontSize: 19, marginBottom: 6 }}>SIMON AI</div>
        <div style={{ color: "#C9A0DC", fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>Create your<br />private sanctuary.</div>
      </div>

      {/* Right form */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", overflowY: "auto" }}>
        <div style={{ width: "100%", maxWidth: 380, padding: "24px 32px" }}>
          <h2 style={{ color: "#2D1F60", fontSize: 20, fontWeight: 700, marginBottom: 3 }}>Create your account</h2>
          <p style={{ color: "#9B8FC0", fontSize: 11, marginBottom: 18 }}>A private space, just for you.</p>

          {error && <div style={{ background: "#FEE2E2", border: "1px solid #FCA5A5", color: "#991B1B", fontSize: 11, borderRadius: 7, padding: "6px 10px", marginBottom: 12 }}>{error}</div>}

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <div><label style={lbl}>Full Name</label><input value={form.name} onChange={set("name")} placeholder="Armaan Khan" style={inp} /></div>
              <div><label style={lbl}>Age</label><input type="number" value={form.age} onChange={set("age")} placeholder="24" min="13" max="120" style={inp} /></div>
            </div>
            <div><label style={lbl}>Email Address</label><input type="email" value={form.email} onChange={set("email")} placeholder="your@email.com" style={inp} /></div>
            <div>
              <label style={lbl}>Country</label>
              <select value={form.country} onChange={set("country")} style={{ ...inp, cursor: "pointer" }}>
                <option value="">Select your country</option>
                {countries.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label style={lbl}>Password</label>
              <div style={{ position: "relative" }}>
                <input type={showPass ? "text" : "password"} value={form.password} onChange={set("password")} placeholder="Create a password" style={{ ...inp, paddingRight: 32 }} />
                <button type="button" onClick={() => setShowPass(!showPass)} style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#9B8FC0" }}>
                  {showPass ? <EyeOff size={13} /> : <Eye size={13} />}
                </button>
              </div>
            </div>
            <div><label style={lbl}>Confirm Password</label><input type="password" value={form.confirm} onChange={set("confirm")} placeholder="Repeat your password" style={inp} /></div>

            <button type="submit" style={{ background: "#4A3080", color: "#fff", border: "none", borderRadius: 9, padding: "9px", fontSize: 13, fontWeight: 600, cursor: "pointer", marginTop: 4, boxShadow: "0 4px 14px rgba(74,48,128,0.25)" }}>
              Create Account
            </button>
          </form>

          <p style={{ textAlign: "center", fontSize: 11, color: "#9B8FC0", marginTop: 14 }}>
            Already have an account?{" "}
            <button onClick={() => onNavigate("login")} style={{ background: "none", border: "none", color: "#4A3080", fontWeight: 700, cursor: "pointer", fontSize: 11 }}>Sign in</button>
          </p>
        </div>
      </div>
    </div>
  );
}
