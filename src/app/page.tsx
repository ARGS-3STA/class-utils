import { trpcServer } from "@/trpc/serverClient";
import { Student } from "@prisma/client";
import { Fragment } from "react";

export default async function Home() {
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
}
