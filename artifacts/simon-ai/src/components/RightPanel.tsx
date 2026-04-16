import HonestyDrop from "./HonestyDrop";
import MirrorOfNow from "./MirrorOfNow";
import UnsaidAdvisor from "./UnsaidAdvisor";

export default function RightPanel() {
  return (
    <aside className="shrink-0 overflow-y-auto" style={{ width: "275px", background: "#0E0D0F", borderLeft: "1px solid #2D2A3D" }}>
      <div className="p-4 flex flex-col gap-4">
        <HonestyDrop />
        <MirrorOfNow />
        <UnsaidAdvisor />
      </div>
    </aside>
  );
}
