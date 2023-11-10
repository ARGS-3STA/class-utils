"use client";

import { AppFilter } from "@/components/home/app-filter";
import { AppList } from "@/components/home/app-list";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export default function AppGrid() {
  const [filterQuery, setFilterQuery] = useState("");

  return (
    <div className="container">
      <AppFilter setFilterQuery={setFilterQuery} />
      <Separator className="my-4" />
      <AppList filterQuery={filterQuery} />
    </div>
  );
}
