/** @format */

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePicker({
  value,
  onChange,
}: {
  value: Date | undefined;
  onChange: (value: Date | undefined) => void;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type='button'
          data-empty={!value}
          className='data-[empty=true]:text-gray-400 justify-start text-left w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#198841] focus:border-transparent outline-none transition-all flex items-center gap-2'>
          <CalendarIcon className='w-5 h-5 text-gray-500' />
          {value ? format(value, "PPP") : <span>Pick a date</span>}
        </button>
      </PopoverTrigger>
      <PopoverContent className='p-4 w-auto' align='start'>
        <Calendar
          mode='single'
          selected={value}
          onSelect={(date) => {
            onChange(date);
          }}
          classNames={{
            day: "h-10 w-10 p-0 font-normal aria-selected:opacity-100 hover:bg-gray-100 rounded-full transition-colors",
            day_today: "bg-gray-100 font-semibold",
            day_selected:
              "bg-[#198841] text-white hover:bg-[#198841] hover:text-white focus:bg-[#198841] focus:text-white",
            day_disabled: "text-gray-400 opacity-50",
            day_hidden: "invisible",
            day_range_middle: "bg-gray-100",
            month: "space-y-4",
            months: "space-y-4",
            caption: "flex justify-center pt-1 relative items-center mb-4",
            caption_label: "text-sm font-medium",
            nav: "space-x-1 flex items-center",
            nav_button:
              "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 rounded-md flex items-center justify-center",
            table: "w-full border-collapse space-y-1",
            head_row: "flex justify-between mb-2",
            head_cell: "text-gray-500 rounded-md w-10 text-xs font-normal",
            row: "flex w-full mt-2 justify-between",
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
