import HeroBanner from "@/components/HeroBanner";
import MoodChart from "@/components/MoodChart";
import PressureChart from "@/components/PressureChart";
import LetGoChamber from "@/components/LetGoChamber";
import WoundPouch from "@/components/WoundPouch";
import HonestyDrop from "@/components/HonestyDrop";
import MirrorOfNow from "@/components/MirrorOfNow";
import UnsaidAdvisor from "@/components/UnsaidAdvisor";

interface DashboardProps { userName?: string; }

export default function Dashboard({ userName }: DashboardProps) {
  return (
    <div style={{ display: "flex", height: "100%", padding: "10px 14px", gap: 10, background: "#F7F5FC", overflow: "hidden" }}>

      {/* CENTER column: Hero + Charts + Let-Go + Wound */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8, minWidth: 0, overflow: "hidden" }}>

        {/* Row 1: Hero */}
        <div style={{ flexShrink: 0 }}>
          <HeroBanner userName={userName} />
        </div>

        {/* Row 2: Charts side by side */}
        <div style={{ display: "flex", gap: 8, height: 145, flexShrink: 0 }}>
          <MoodChart />
          <PressureChart />
        </div>

        {/* Row 3: Let-Go Chamber (top) */}
        <div style={{ flex: 1, minHeight: 0 }}>
          <LetGoChamber />
        </div>

        {/* Row 4: Wound Pouch (bottom) */}
        <div style={{ flex: 1, minHeight: 0 }}>
          <WoundPouch />
        </div>
      </div>

      {/* RIGHT column: Honesty Drop + Mirror of Now + Unsaid Advisor */}
      <div style={{ width: 236, display: "flex", flexDirection: "column", gap: 8, flexShrink: 0, overflow: "hidden" }}>
        <HonestyDrop />
        <MirrorOfNow />
        <UnsaidAdvisor />
      </div>

    </div>
  );
}
