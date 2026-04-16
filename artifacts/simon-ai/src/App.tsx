import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import RightPanel from "@/components/RightPanel";
import FooterBar from "@/components/FooterBar";
import Dashboard from "@/pages/Dashboard";

const queryClient = new QueryClient();

function App() {
  const [activePage, setActivePage] = useState("overview");

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex h-screen overflow-hidden bg-[#0E0D0F]">
          <Sidebar activePage={activePage} onNavigate={setActivePage} />

          <div className="flex flex-col flex-1 overflow-hidden">
            <TopBar />
            <div className="flex flex-1 overflow-hidden">
              <main className="flex-1 overflow-y-auto">
                {activePage === "overview" && <Dashboard />}
                {activePage !== "overview" && (
                  <div className="flex items-center justify-center h-full text-gray-500 text-sm">
                    <div className="text-center">
                      <span className="text-4xl block mb-3">🕯</span>
                      <p>This section is coming soon...</p>
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
