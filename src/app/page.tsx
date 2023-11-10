"use client";

import AppGrid from "@/components/home/AppGrid";
import Toolbar from "@/components/layout/Toolbar";
import { useState } from "react";

export default function Home() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className=" w-screen h-screen">
      <Toolbar menuActive={menuActive} setMenuActive={setMenuActive}></Toolbar>
      <AppGrid />
    </div>
  );
}
