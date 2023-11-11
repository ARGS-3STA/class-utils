import AppGrid from "@/components/home/AppGrid";
import Toolbar from "@/components/layout/Toolbar";
import GroupApp from "@/components/group-generator/group-app";

export default function GroupGenerator() {
  return (
    <div className=" w-screen h-screen">
      <Toolbar />
      <GroupApp />
    </div>
  );
}
