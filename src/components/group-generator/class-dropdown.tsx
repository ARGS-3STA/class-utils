"use client";
import React, { useState, useContext } from "react";
import GroupContext from "@/components/group-generator/classlist";

import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function ClassDropdown() {
  const [open, setOpen] = useState(false);
  const { allGroups, selectedClass, setSelectedClass } =
    useContext(GroupContext);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-96 h-20 justify-between font-extrabold text-2xl"
        >
          {selectedClass
            ? allGroups.find((group) => group.value === selectedClass)?.label
            : "Velg klasse..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 h-40 p-0">
        <Command>
          <CommandInput placeholder="Velg klasse..." />
          <CommandEmpty>Fant ingen klasser.</CommandEmpty>
          <CommandGroup>
            {allGroups.map((group) => (
              <CommandItem
                key={group.value}
                value={group.value}
                onSelect={(currentValue: any) => {
                  setSelectedClass(
                    currentValue === selectedClass ? "" : currentValue
                  );
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-10 w-4",
                    selectedClass === group.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {group.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
