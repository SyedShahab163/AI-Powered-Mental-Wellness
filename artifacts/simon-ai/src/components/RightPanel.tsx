import HonestyDrop from "./HonestyDrop";
import MirrorOfNow from "./MirrorOfNow";
import UnsaidAdvisor from "./UnsaidAdvisor";

export default function RightPanel() {
  return (
    <aside className="w-[280px] min-h-screen flex flex-col bg-[#F8F6FF] border-l border-[#E2DDEF] shrink-0 overflow-y-auto">
      <div className="p-4 flex flex-col gap-4">
        <HonestyDrop />
        <MirrorOfNow />
        <UnsaidAdvisor />
      </div>
    </aside>
  );
}
