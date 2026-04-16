import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import RightPanel from "@/components/RightPanel";
import FooterBar from "@/components/FooterBar";
import Dashboard from "@/pages/Dashboard";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";

const queryClient = new QueryClient();

type Page = "home"|"login"|"signup"|"overview"|"dialogue"|"deep-well"|"pulse"|"fortress"|"step-back";
interface User { name: string; age: string; country: string; }

function App() {
  const [page, setPage] = useState<Page>("home");
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("simon_user");
    if (stored) {
      const u = JSON.parse(stored);
      if (u.name) { setUser({ name: u.name, age: u.age, country: u.country }); setPage("overview"); }
    }
  }, []);

  const handleLogin = (u: User) => { setUser(u); setPage("overview"); };
  const handleLogout = () => { setUser(null); setPage("home"); };

  if (page === "home") return <Home onNavigate={p => setPage(p as Page)} />;
  if (page === "login") return <Login onLogin={handleLogin} onNavigate={p => setPage(p as Page)} />;
  if (page === "signup") return <Signup onLogin={handleLogin} onNavigate={p => setPage(p as Page)} />;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div style={{ display: "flex", height: "100vh", overflow: "hidden", background: "#F7F5FC" }}>
          <Sidebar activePage={page} onNavigate={p => setPage(p as Page)} user={user} onLogout={handleLogout} />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
            <TopBar />
            <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
              <main style={{ flex: 1, overflow: "hidden", display: "flex" }}>
                {page === "overview"
                  ? <Dashboard userName={user?.name?.split(" ")[0]} />
                  : (
                    <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 8 }}>
                      <img src={`${import.meta.env.BASE_URL}candle-real.png`} alt="candle" style={{ width: 50, height: 60, objectFit: "cover", borderRadius: 8, opacity: 0.7 }} />
                      <p style={{ color: "#9B8FC0", fontSize: 13 }}>Coming soon…</p>
                    </div>
                  )
                }
              </main>
            </div>
            <FooterBar />
          </div>
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
