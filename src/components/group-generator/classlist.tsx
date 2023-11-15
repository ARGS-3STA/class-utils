"use client";

import React, { createContext, useState } from "react";

type Group = {
  value: string;
  label: string;
  numberOfStudents: number;
};

type GroupContextType = {
  allGroups: Group[];
  selectedClass: string;
  setSelectedClass: (newClass: string) => void;
};

const GroupContext = createContext<GroupContextType>({
  allGroups: [],
  selectedClass: "",
  setSelectedClass: () => {},
});

type GroupProviderProps = {
  allGroups: Group[];
  children: React.ReactNode;
};

export function GroupProvider({ allGroups, children }: GroupProviderProps) {
  const [selectedClass, setSelectedClass] = useState("");
  const value = { allGroups, selectedClass, setSelectedClass };

  return (
    <GroupContext.Provider value={value}>{children}</GroupContext.Provider>
  );
}

export default GroupContext;
