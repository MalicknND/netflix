import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Languages } from "lucide-react";

const SelectComp = () => {
  return (
    <div className="hidden sm:block">
      <Select>
        <SelectTrigger className="w-[130px] flex items-center">
          <Languages width={15} />
          <SelectValue placeholder="Français" className="ml-2" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="français">Français</SelectItem>
          <SelectItem value="english">English</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectComp;
