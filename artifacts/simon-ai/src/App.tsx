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

interface User {
  name: string;
  age: string;
  country: string;
}

function App() {
  const [page, setPage] = useState<Page>("home");
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("simon_user");
    if (stored) {
      const u = JSON.parse(stored);
      if (u.name && u.email) {
        setUser({ name: u.name, age: u.age, country: u.country });
        setPage("overview");
      }
    }
  }, []);

  const handleLogin = (u: User) => {
    setUser(u);
    setPage("overview");
  };

  const handleLogout = () => {
    setUser(null);
    setPage("home");
  };

  if (page === "home") return <Home onNavigate={(p) => setPage(p as Page)} />;
  if (page === "login") return <Login onLogin={handleLogin} onNavigate={(p) => setPage(p as Page)} />;
  if (page === "signup") return <Signup onLogin={handleLogin} onNavigate={(p) => setPage(p as Page)} />;

  const dashboardPages = ["overview", "dialogue", "deep-well", "pulse", "fortress", "step-back"];

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex h-screen overflow-hidden bg-[#F8F6FF]">
          <Sidebar activePage={page} onNavigate={(p) => setPage(p as Page)} user={user} onLogout={handleLogout} />

          <div className="flex flex-col flex-1 overflow-hidden">
            <TopBar />
            <div className="flex flex-1 overflow-hidden">
              <main className="flex-1 overflow-y-auto">
                {page === "overview" && <Dashboard userName={user?.name?.split(" ")[0]} />}
                {dashboardPages.includes(page) && page !== "overview" && (
                  <div className="flex items-center justify-center h-full text-[#8A7AB0] text-sm">
                    <div className="text-center">
                      <span className="text-4xl block mb-3">🕯</span>
                      <p className="text-[#5A4A8A] font-medium">Coming soon...</p>
                      <p className="text-xs text-[#9B8FC0] mt-1">This section is being prepared for you.</p>
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
