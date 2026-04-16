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
      const user = JSON.parse(stored);
      if (user.email === email && user.password === password) {
        onLogin({ name: user.name, age: user.age, country: user.country });
      } else {
        setError("Invalid email or password.");
      }
    } else {
      setError("No account found. Please sign up first.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F6FF] via-white to-[#F0EBF8] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-2xl">🕯</span>
            <span className="font-bold text-[#4A3080] text-xl tracking-wide">SIMON AI</span>
          </div>
          <h2 className="text-2xl font-bold text-[#2D1F60]">Welcome back</h2>
          <p className="text-[#8A7AB0] text-sm mt-1">Your safe space is waiting for you.</p>
        </div>

        <div className="bg-white border border-[#E2DDEF] rounded-2xl p-8 shadow-lg shadow-purple-100">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-xs rounded-lg px-3 py-2 mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="text-xs font-medium text-[#5A4A8A] block mb-1.5">Email Address</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full bg-[#F8F6FF] border border-[#E2DDEF] rounded-lg px-3 py-2.5 text-sm text-[#2D1F60] placeholder-[#B0A4D0] outline-none focus:border-[#7B5EA7] transition-colors" />
            </div>

            <div>
              <label className="text-xs font-medium text-[#5A4A8A] block mb-1.5">Password</label>
              <div className="relative">
                <input type={showPass ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full bg-[#F8F6FF] border border-[#E2DDEF] rounded-lg px-3 py-2.5 pr-10 text-sm text-[#2D1F60] placeholder-[#B0A4D0] outline-none focus:border-[#7B5EA7] transition-colors" />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9B8FC0] hover:text-[#5A4A8A]">
                  {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            <button type="submit"
              className="w-full bg-[#4A3080] hover:bg-[#3A2060] text-white font-semibold py-2.5 rounded-lg text-sm transition-colors mt-2 shadow-md shadow-purple-200">
              Sign In
            </button>
          </form>

          <p className="text-center text-xs text-[#9B8FC0] mt-5">
            Don't have an account?{" "}
            <button onClick={() => onNavigate("signup")} className="text-[#4A3080] font-semibold hover:underline">
              Sign up
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
