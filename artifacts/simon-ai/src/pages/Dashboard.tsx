import HeroBanner from "@/components/HeroBanner";
import MoodChart from "@/components/MoodChart";
import PressureChart from "@/components/PressureChart";
import LetGoChamber from "@/components/LetGoChamber";
import WoundPouch from "@/components/WoundPouch";

interface DashboardProps { userName?: string; }

export default function Dashboard({ userName }: DashboardProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "10px 12px", gap: 10, background: "#F7F5FC", overflow: "hidden" }}>
      {/* Row 1: Hero */}
      <HeroBanner userName={userName} />

      {/* Row 2: Charts */}
      <div style={{ display: "flex", gap: 10, height: 155, flexShrink: 0 }}>
        <MoodChart />
        <PressureChart />
      </div>

      {/* Row 3: Let-Go + Wound Pouch side by side */}
      <div style={{ display: "flex", gap: 10, flex: 1, minHeight: 0 }}>
        <LetGoChamber />
        <WoundPouch />
      </div>
    </div>
  );
}
