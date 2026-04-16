import HeroBanner from "@/components/HeroBanner";
import MoodChart from "@/components/MoodChart";
import PressureChart from "@/components/PressureChart";
import LetGoChamber from "@/components/LetGoChamber";
import WoundPouch from "@/components/WoundPouch";

interface DashboardProps { userName?: string; }

export default function Dashboard({ userName }: DashboardProps) {
  return (
    <div style={{ display: "flex", height: "100%", padding: "10px 12px", gap: 10, background: "#F7F5FC", overflow: "hidden" }}>

      {/* Left column: Hero + Charts stacked */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10, minWidth: 0 }}>
        {/* Row 1: Hero */}
        <HeroBanner userName={userName} />

        {/* Row 2: Charts side by side */}
        <div style={{ display: "flex", gap: 10, height: 148, flexShrink: 0 }}>
          <MoodChart />
          <PressureChart />
        </div>
      </div>

      {/* Right column: Let-Go on top, Wound Pouch on bottom */}
      <div style={{ width: 280, display: "flex", flexDirection: "column", gap: 10, flexShrink: 0 }}>
        <div style={{ flex: 1, minHeight: 0 }}>
          <LetGoChamber />
        </div>
        <div style={{ flex: 1, minHeight: 0 }}>
          <WoundPouch />
        </div>
      </div>
    </div>
  );
}
