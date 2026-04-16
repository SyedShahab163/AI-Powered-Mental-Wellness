import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface SignupProps {
  onLogin: (user: { name: string; age: string; country: string }) => void;
  onNavigate: (page: string) => void;
}

const countries = [
  "India", "Pakistan", "Bangladesh", "United States", "United Kingdom", "Canada",
  "Australia", "UAE", "Saudi Arabia", "Germany", "France", "Japan", "China",
  "Brazil", "South Africa", "Other"
];

export default function Signup({ onLogin, onNavigate }: SignupProps) {
  const [form, setForm] = useState({
    name: "", email: "", age: "", country: "", password: "", confirmPassword: ""
  });
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.age || !form.country || !form.password) {
      setError("Please fill in all fields."); return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match."); return;
    }
    if (Number(form.age) < 13 || Number(form.age) > 120) {
      setError("Please enter a valid age."); return;
    }
    const user = { name: form.name, email: form.email, age: form.age, country: form.country, password: form.password };
    localStorage.setItem("simon_user", JSON.stringify(user));
    onLogin({ name: form.name, age: form.age, country: form.country });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F6FF] via-white to-[#F0EBF8] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-2xl">🕯</span>
            <span className="font-bold text-[#4A3080] text-xl tracking-wide">SIMON AI</span>
          </div>
          <h2 className="text-2xl font-bold text-[#2D1F60]">Create your sanctuary</h2>
          <p className="text-[#8A7AB0] text-sm mt-1">A private space, just for you.</p>
        </div>

        <div className="bg-white border border-[#E2DDEF] rounded-2xl p-8 shadow-lg shadow-purple-100">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-xs rounded-lg px-3 py-2 mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-[#5A4A8A] block mb-1.5">Full Name</label>
                <input value={form.name} onChange={set("name")} placeholder="Armaan Khan"
                  className="w-full bg-[#F8F6FF] border border-[#E2DDEF] rounded-lg px-3 py-2.5 text-sm text-[#2D1F60] placeholder-[#B0A4D0] outline-none focus:border-[#7B5EA7] transition-colors" />
              </div>
              <div>
                <label className="text-xs font-medium text-[#5A4A8A] block mb-1.5">Age</label>
                <input type="number" value={form.age} onChange={set("age")} placeholder="24" min="13" max="120"
                  className="w-full bg-[#F8F6FF] border border-[#E2DDEF] rounded-lg px-3 py-2.5 text-sm text-[#2D1F60] placeholder-[#B0A4D0] outline-none focus:border-[#7B5EA7] transition-colors" />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-[#5A4A8A] block mb-1.5">Email Address</label>
              <input type="email" value={form.email} onChange={set("email")} placeholder="your@email.com"
                className="w-full bg-[#F8F6FF] border border-[#E2DDEF] rounded-lg px-3 py-2.5 text-sm text-[#2D1F60] placeholder-[#B0A4D0] outline-none focus:border-[#7B5EA7] transition-colors" />
            </div>

            <div>
              <label className="text-xs font-medium text-[#5A4A8A] block mb-1.5">Country</label>
              <select value={form.country} onChange={set("country")}
                className="w-full bg-[#F8F6FF] border border-[#E2DDEF] rounded-lg px-3 py-2.5 text-sm text-[#2D1F60] outline-none focus:border-[#7B5EA7] transition-colors cursor-pointer">
                <option value="">Select your country</option>
                {countries.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div>
              <label className="text-xs font-medium text-[#5A4A8A] block mb-1.5">Password</label>
              <div className="relative">
                <input type={showPass ? "text" : "password"} value={form.password} onChange={set("password")}
                  placeholder="Create a password"
                  className="w-full bg-[#F8F6FF] border border-[#E2DDEF] rounded-lg px-3 py-2.5 pr-10 text-sm text-[#2D1F60] placeholder-[#B0A4D0] outline-none focus:border-[#7B5EA7] transition-colors" />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9B8FC0] hover:text-[#5A4A8A]">
                  {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-[#5A4A8A] block mb-1.5">Confirm Password</label>
              <input type="password" value={form.confirmPassword} onChange={set("confirmPassword")}
                placeholder="Repeat your password"
                className="w-full bg-[#F8F6FF] border border-[#E2DDEF] rounded-lg px-3 py-2.5 text-sm text-[#2D1F60] placeholder-[#B0A4D0] outline-none focus:border-[#7B5EA7] transition-colors" />
            </div>

            <button type="submit"
              className="w-full bg-[#4A3080] hover:bg-[#3A2060] text-white font-semibold py-2.5 rounded-lg text-sm transition-colors mt-2 shadow-md shadow-purple-200">
              Create Account
            </button>
          </form>

          <p className="text-center text-xs text-[#9B8FC0] mt-5">
            Already have an account?{" "}
            <button onClick={() => onNavigate("login")} className="text-[#4A3080] font-semibold hover:underline">
              Sign in
            </button>
          </p>
        </div>

        <p className="text-center text-xs text-[#B0A4D0] mt-6 italic">
          *Your words die here. No one else reads.* 🕯
        </p>
      </div>
    </div>
  );
}
