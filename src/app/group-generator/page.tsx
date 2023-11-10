"use client";

import AppGrid from "@/components/home/AppGrid";
import Toolbar from "@/components/layout/Toolbar";
import { useState } from "react";

export default function GroupGenerator() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className=" w-screen h-screen">
      <Toolbar menuActive={menuActive} setMenuActive={setMenuActive}></Toolbar>
    </div>
  );
}
