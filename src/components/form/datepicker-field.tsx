/** @format */

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import type { ControllerRenderProps, FieldValues, Path } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerFieldProps<T extends FieldValues> {
  label?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  className?: string;
  disabled?: boolean;
  field: ControllerRenderProps<T, Path<T>>;
  fromYear?: number;
  toYear?: number;
}

export function DatePickerField<T extends FieldValues>({
  label,
  placeholder = "Select date",
  required = false,
  error,
  className,
  disabled = false,
  field,
  fromYear = 1900,
  toYear = new Date().getFullYear(),
}: DatePickerFieldProps<T>) {
  const [open, setOpen] = React.useState(false);
  const dateValue = field.value ? new Date(field.value) : undefined;

  return (
    <div className={cn("w-full space-y-2", className)}>
      {label && (
        <Label
          className={cn("text-sm font-medium", error && "text-destructive")}>
          {label}
          {required && <span className='text-destructive ml-1'>*</span>}
        </Label>
      )}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant='outline'
            className={cn(
              "w-full justify-between text-left font-normal border-[#E5E7EB] border bg-[#F5F5F7] rounded-[8px] px-4 h-[47px]",
              !dateValue && "text-muted-foreground",
              error && "border-destructive"
            )}
            disabled={disabled}>
            {dateValue ? format(dateValue, "PPP") : <span>{placeholder}</span>}
            <CalendarIcon className='size-3.5' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0' align='start'>
          <Calendar
            mode='single'
            selected={dateValue}
            onSelect={(date) => {
              field.onChange(date);
              setOpen(false);
            }}
            disabled={(date) =>
              date > new Date() || date < new Date("1900-01-01")
            }
            captionLayout='dropdown'
            startMonth={new Date(fromYear, 0, 1)}
            endMonth={new Date(toYear, 11, 31)}
            autoFocus
          />
        </PopoverContent>
      </Popover>
      {error && <p className='text-sm font-medium text-destructive'>{error}</p>}
    </div>
  );
}
