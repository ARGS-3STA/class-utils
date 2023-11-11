import React, { useState } from "react";
import ClassDropdown from "@/components/group-generator/class-dropdown";
import { trpcServer } from "@/trpc/serverClient";
import { GroupProvider } from "@/components/group-generator/classlist";

export default async function InputFields() {
  return (
    <div className="flex justify-center">
      <ClassDropdown />
    </div>
  );
}
