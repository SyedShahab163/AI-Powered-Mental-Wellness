import HeroBanner from "@/components/HeroBanner";
import MoodChart from "@/components/MoodChart";
import PressureChart from "@/components/PressureChart";
import LetGoChamber from "@/components/LetGoChamber";
import WoundPouch from "@/components/WoundPouch";

interface DashboardProps {
  userName?: string;
}

export default function Dashboard({ userName }: DashboardProps) {
  return (
    <div className="flex flex-col gap-4 p-4 overflow-y-auto flex-1" style={{ background: "#0E0D0F" }}>
      <HeroBanner userName={userName} />
      <div className="flex gap-4">
        <MoodChart />
        <PressureChart />
      </div>
      <LetGoChamber />
      <WoundPouch />
    </div>
  );
}
