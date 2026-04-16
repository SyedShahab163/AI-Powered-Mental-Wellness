import HonestyDrop from "./HonestyDrop";
import MirrorOfNow from "./MirrorOfNow";
import UnsaidAdvisor from "./UnsaidAdvisor";

export default function RightPanel() {
  return (
    <aside className="w-[280px] min-h-screen flex flex-col bg-[#0E0D0F] border-l border-[#2D2A3D] shrink-0 overflow-y-auto">
      <div className="p-4 flex flex-col gap-4">
        <HonestyDrop />
        <MirrorOfNow />
        <UnsaidAdvisor />
      </div>
    </aside>
  );
}
