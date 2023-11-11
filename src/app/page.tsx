import AppGrid from "@/components/home/AppGrid";
import Toolbar from "@/components/layout/Toolbar";
import { useState } from "react";

export default function Home() {
  return (
    <div className=" w-screen h-screen">
      <Toolbar />
      <AppGrid />
    </div>
  );
}
