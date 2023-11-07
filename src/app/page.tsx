"use client";

import { trpc } from "@/trpc/client";
import { Fragment } from "react";

export default function Home() {
  const { data } = trpc.group.getAll.useQuery({
    includeStudents: true,
  });

  if (!data) return "Loading....";

  return (
    <div>
      {data.map((group) => (
        <Fragment key={group.id}>
          <p>Id: {group.id}</p>
          <p>Name: {group.name}</p>
          <p>Students:</p>
          {group.students.map((student) => (
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
