import HeroBanner from "@/components/HeroBanner";
import MoodChart from "@/components/MoodChart";
import PressureChart from "@/components/PressureChart";
import LetGoChamber from "@/components/LetGoChamber";
import WoundPouch from "@/components/WoundPouch";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4 p-5 overflow-y-auto flex-1">
      <HeroBanner />
      <div className="flex gap-4">
        <MoodChart />
        <PressureChart />
      </div>
      <LetGoChamber />
      <WoundPouch />
    </div>
  );
}
