/** @format */

import * as React from "react";
import { cn } from "@/lib/utils";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  options: SelectOption[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  className?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
}

export function SelectField({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  label,
  className,
  error,
  disabled = false,
  required = false,
}: SelectFieldProps) {
  const selectId = React.useId();

  return (
    <div className={cn("w-full space-y-2", className)}>
      {label && (
        <label
          htmlFor={selectId}
          className='block font-lato text-[14px] font-medium text-[#2F2F30]'>
          {label}
          {required && <span className='text-red-500 ml-1'>*</span>}
        </label>
      )}
      <Select value={value} onValueChange={onChange} disabled={disabled}>
        <SelectTrigger
          id={selectId}
          className={cn(
            "w-full border-[#E5E7EB] border bg-[#F5F5F7] rounded-[8px] px-4 h-[48px] shadow-none focus:ring-[#198841] focus:border-[#198841]",
            error && "border-red-500 focus:ring-red-500 focus:border-red-500"
          )}>
          <SelectValue placeholder={value ?? placeholder} />
        </SelectTrigger>
        <SelectContent position='popper' sideOffset={4}>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && (
        <p className='mt-1 text-sm text-red-600' id={`${selectId}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}
