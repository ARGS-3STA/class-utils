import GroupApp from "@/components/group-generator/group-app";
import Toolbar from "@/components/layout/Toolbar";

export default function GroupGenerator() {
  return (
    <div className="w-screen h-screen">
      <Toolbar />
      <GroupApp />
    </div>
  );
}
