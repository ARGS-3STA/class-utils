import { trpcServer } from "@/trpc/serverClient";
import { Student } from "@prisma/client";
import { Fragment } from "react";
import Toolbar from "@/components/layout/Toolbar";
import AppGrid from "@/components/home/AppGrid";

export default async function Home() {
  return (
    <div className=" w-screen h-screen">
      <Toolbar></Toolbar>
      <AppGrid></AppGrid>
    </div>
  );
  /*
  const groups = await trpcServer.group.getAll({
    includeStudents: true,
  });

  return (
    <div>
      {groups.map((group: (typeof groups)[number]) => (
        <Fragment key={group.id}>
          <p>Id: {group.id}</p>
          <p>Name: {group.name}</p>
          <p>Students:</p>
          {group.students.map((student: Student) => (
            <Fragment key={student.id}>
              <p>Student id: {student.id}</p>
              <p>
                Student name: {student.firstName} {student.lastName}
              </p>
            </Fragment>
          ))}
        </Fragment>
      ))}
    </div>
  );
  */
}
