import HonestyDrop from "./HonestyDrop";
import MirrorOfNow from "./MirrorOfNow";
import UnsaidAdvisor from "./UnsaidAdvisor";

export default function RightPanel() {
  return (
    <aside style={{ width: 252, background: "#F7F5FC", borderLeft: "1px solid #E5E0F0", flexShrink: 0, overflowY: "auto", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "10px 10px", display: "flex", flexDirection: "column", gap: 8 }}>
        <HonestyDrop />
        <MirrorOfNow />
        <UnsaidAdvisor />
      </div>
    </aside>
  );
}
