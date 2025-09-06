/** @format */

import { useState } from "react";
import Icons from "@/constants/icons";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormMessage, FormLabel, FormItem } from "../ui/form";
import { Link } from "react-router-dom";

const InputField = ({
  placeholder,
  label,
  error,
  onChange,
  forgotLink,
  type = "text",
  value,
  isHiddenInput,
  inputClassName,
  isLeftIcon,
}: {
  placeholder: string;
  label?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  forgotLink?: string;
  type?: "text" | "password" | "email" | "date";
  value?: string;
  isHiddenInput?: boolean;
  inputClassName?: string;
  isLeftIcon?: React.ReactNode;
}) => {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  return (
    <FormItem>
      <div className='w-full flex flex-row justify-between mt-2'>
        <FormLabel className='text-center font-lato text-[14px] font-medium text-[#2F2F30]'>
          {label}
        </FormLabel>
        {forgotLink && (
          <div className='w-full flex flex-row justify-end mt-2'>
            <Link
              to={forgotLink}
              className='text-center font-dm-sans cursor-pointer font-medium text-[#686868] text-xs'>
              Forgot?
            </Link>
          </div>
        )}
      </div>

      <div className='w-full flex items-center'>
        <div className='border-[#E5E7EB] border bg-[#F5F5F7] rounded-[8px] px-4 py-1 flex gap-2 items-center justify-center w-full'>
          {isLeftIcon && <>{isLeftIcon}</>}
          <Input
            placeholder={placeholder}
            onChange={onChange}
            className={`text-black ${
              inputClassName
                ? inputClassName
                : "border-0 shadow-none outline-none focus:outline-none focus-visible:ring-0"
            }`}
            type={isHiddenInput ? (isHidden ? "text" : "password") : type}
            value={value}
          />
          {isHiddenInput && (
            <Button
              type='button'
              variant='ghost'
              onClick={() => setIsHidden(!isHidden)}>
              {isHidden ? <Icons.eye /> : <Icons.eyeSlash />}
            </Button>
          )}
        </div>
      </div>
      <FormMessage className='text-red-500'>{error}</FormMessage>
    </FormItem>
  );
};

export default InputField;
