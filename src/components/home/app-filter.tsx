import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

type AppFilterProps = {
  setFilterQuery: Dispatch<SetStateAction<string>>;
};

export function AppFilter({ setFilterQuery }: AppFilterProps) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-bold text-xl mr-10">Apper</span>
      <Search className="h-8 w-8 mr-2" />
      <Input
        placeholder="Søk..."
        onChange={(e) => setFilterQuery(e.target.value)}
      />
    </div>
  );
}
