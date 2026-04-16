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

type Page = "home" | "login" | "signup" | "overview" | "dialogue" | "deep-well" | "pulse" | "fortress" | "step-back";

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

  if (page === "home") return <Home onNavigate={(p) => setPage(p as Page)} />;
  if (page === "login") return <Login onLogin={handleLogin} onNavigate={(p) => setPage(p as Page)} />;
  if (page === "signup") return <Signup onLogin={handleLogin} onNavigate={(p) => setPage(p as Page)} />;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex overflow-hidden" style={{ height: "100vh", background: "#0E0D0F" }}>
          <Sidebar activePage={page} onNavigate={(p) => setPage(p as Page)} user={user} onLogout={handleLogout} />
          <div className="flex flex-col flex-1 overflow-hidden">
            <TopBar />
            <div className="flex flex-1 overflow-hidden">
              <main className="flex-1 overflow-y-auto" style={{ background: "#0E0D0F" }}>
                {page === "overview" && <Dashboard userName={user?.name?.split(" ")[0]} />}
                {page !== "overview" && (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <span style={{ fontSize: "36px", display: "block", marginBottom: "10px" }}>🕯</span>
                      <p style={{ color: "#7B6FA0", fontSize: "13px" }}>Coming soon...</p>
                    </div>
                  </div>
                )}
              </main>
              <RightPanel />
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
