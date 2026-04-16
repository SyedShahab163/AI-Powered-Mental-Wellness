import { ArrowRight, Heart, Shield, Flame } from "lucide-react";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F6FF] via-white to-[#F0EBF8] flex flex-col">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 bg-white border-b border-[#E2DDEF]">
        <div className="flex items-center gap-2">
          <span className="text-xl">🕯</span>
          <span className="font-bold text-[#4A3080] text-lg tracking-wide">SIMON AI</span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => onNavigate("login")}
            className="text-sm text-[#5A4A8A] font-medium px-4 py-2 rounded-lg hover:bg-[#F0EBF8] transition-colors">
            Login
          </button>
          <button onClick={() => onNavigate("signup")}
            className="text-sm text-white font-medium px-4 py-2 rounded-lg bg-[#4A3080] hover:bg-[#3A2060] transition-colors">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-16">
        <div className="mb-6 inline-flex items-center gap-2 bg-[#EAE6F8] text-[#5A4A8A] text-xs font-medium px-4 py-2 rounded-full border border-[#D8C8F0]">
          <span>🕯</span> Your safe space to unburden
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-[#2D1F60] leading-tight mb-4 max-w-2xl">
          THE UNBURDEN
        </h1>
        <p className="text-lg text-[#5A4A8A] mb-2 font-medium">Your feelings die here. Your peace begins here.</p>
        <p className="text-sm text-[#9B8FC0] max-w-md mb-10 leading-relaxed">
          A private sanctuary to release what weighs on you — track your mood, burn your thoughts, and find your calm.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <button onClick={() => onNavigate("signup")}
            className="flex items-center gap-2 text-white font-medium px-6 py-3 rounded-xl bg-[#4A3080] hover:bg-[#3A2060] transition-all shadow-lg shadow-purple-200">
            Get Started <ArrowRight size={16} />
          </button>
          <button onClick={() => onNavigate("login")}
            className="flex items-center gap-2 text-[#4A3080] font-medium px-6 py-3 rounded-xl border border-[#C8B8E8] hover:bg-[#F0EBF8] transition-all">
            I have an account
          </button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16 max-w-2xl w-full">
          {[
            { icon: <Heart size={20} className="text-pink-500" />, title: "Mood Tracking", desc: "Monitor your emotional journey with Invisible Path charts." },
            { icon: <Flame size={20} className="text-orange-500" />, title: "Let-Go Chamber", desc: "Write your burdens and watch them vanish in flames." },
            { icon: <Shield size={20} className="text-[#7B5EA7]" />, title: "My Fortress", desc: "A private, safe space that belongs only to you." },
          ].map((f) => (
            <div key={f.title} className="bg-white border border-[#E2DDEF] rounded-xl p-5 text-left shadow-sm">
              <div className="mb-3">{f.icon}</div>
              <h3 className="text-[#2D1F60] font-semibold text-sm mb-1">{f.title}</h3>
              <p className="text-[#9B8FC0] text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="text-center py-4 text-xs text-[#B0A4D0] border-t border-[#E2DDEF]">
        © 2024 SIMON AI. All rights reserved.
      </footer>
    </div>
  );
}
