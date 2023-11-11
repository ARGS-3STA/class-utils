import React, { Fragment } from "react";
import InputFields from "@/components/group-generator/input-fields";

import { trpcServer } from "@/trpc/serverClient";
import { GroupProvider } from "@/components/group-generator/classlist";

export default async function GroupApp() {
  const groups = await trpcServer.group.getAll({
    includeStudents: true,
  });

  const formattedGroups = groups.map((group) => ({
    value: group.name,
    label: group.name,
    numberOfStudents: group.students.length,
  }));

  return (
    <div className="mt-10">
      <GroupProvider allGroups={formattedGroups}>
        <InputFields />
      </GroupProvider>
    </div>
  );
}
