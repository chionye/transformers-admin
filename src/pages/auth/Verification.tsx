/** @format */

import { useForm } from "react-hook-form";
import { VerificationSchema } from "@/utils/form-schema";
import type z from "zod";
import { Form, FormField } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useRef, useCallback } from "react";
import { Divider } from "@/components/divider";
import { Input } from "@/components/ui/input";
import React from "react";
import type { OtpFieldName } from "@/types";

const Verification = () => {
  const navigate = useNavigate();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const form = useForm<z.infer<typeof VerificationSchema>>({
    resolver: zodResolver(VerificationSchema),
    defaultValues: {
      otp1: "",
      otp2: "",
      otp3: "",
      otp4: "",
      otp5: "",
      otp6: "",
    },
  });

  const setInputRef = useCallback(
    (index: number) => (el: HTMLInputElement | null) => {
      inputRefs.current[index] = el;
    },
    []
  );

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    currentIndex: number,
    fieldOnChange: (value: string) => void
  ) => {
    const value = event.target.value;

    // Only allow single digits and update the form
    if (value === "" || /^[0-9]$/.test(value)) {
      fieldOnChange(value);

      // Move to next input if a digit was entered
      if (value && currentIndex < 5) {
        setTimeout(() => {
          inputRefs.current[currentIndex + 1]?.focus();
        }, 10);
      }
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    currentIndex: number,
    fieldOnChange: (value: string) => void
  ) => {
    // Handle backspace
    if (event.key === "Backspace") {
      const target = event.target as HTMLInputElement;

      console.log(fieldOnChange);

      // If current field is empty and we're not at the first field
      if (!target.value && currentIndex > 0) {
        event.preventDefault();
        // Move to previous input and clear it
        inputRefs.current[currentIndex - 1]?.focus();
        const prevFieldName = `otp${currentIndex}` as OtpFieldName;
        form.setValue(prevFieldName, "");
      }
    }

    // Handle arrow keys for navigation
    if (event.key === "ArrowLeft" && currentIndex > 0) {
      event.preventDefault();
      inputRefs.current[currentIndex - 1]?.focus();
    }

    if (event.key === "ArrowRight" && currentIndex < 5) {
      event.preventDefault();
      inputRefs.current[currentIndex + 1]?.focus();
    }

    // Prevent non-numeric input (except control keys)
    if (
      !/^[0-9]$/.test(event.key) &&
      ![
        "Backspace",
        "Delete",
        "Tab",
        "ArrowLeft",
        "ArrowRight",
        "Home",
        "End",
      ].includes(event.key)
    ) {
      event.preventDefault();
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const pasteData = event.clipboardData.getData("text");
    const digits = pasteData.replace(/\D/g, "").slice(0, 6);

    digits.split("").forEach((digit, index) => {
      if (index < 6) {
        const fieldName = `otp${index + 1}` as OtpFieldName;
        form.setValue(fieldName, digit);
      }
    });

    // Focus on the next empty field or the last field
    const nextIndex = Math.min(digits.length, 5);
    setTimeout(() => {
      inputRefs.current[nextIndex]?.focus();
    }, 10);
  };

  const onSubmit = (data: z.infer<typeof VerificationSchema>) => {
    console.log(data);
    navigate("/dashboard/admin/home");
  };

  const otpFields = Array.from({ length: 6 }, (_, index) => {
    const fieldName = `otp${index + 1}` as OtpFieldName;

    return (
      <FormField
        key={fieldName}
        control={form.control}
        name={fieldName}
        render={({ field }) => (
          <Input
            ref={setInputRef(index)}
            placeholder='0'
            className='text-center'
            value={field.value}
            maxLength={1}
            onChange={(e) => handleInputChange(e, index, field.onChange)}
            onKeyDown={(e) => handleKeyDown(e, index, field.onChange)}
            onPaste={handlePaste}
            autoComplete='off'
          />
        )}
      />
    );
  });

  return (
    <div className='w-full px-5 py-10 shadow'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='w-full flex gap-2 flex-col p-5'>
            <p className='text-center font-dm-sans text-2xl font-semibold text-black'>
              Forgot Password
            </p>
            <p className='font-dm-sans text-xl font-semibold text-black mt-3'>
              Enter your verification code
            </p>
            <p className='font-dm-sans text-[14px] font-normal text-[#686868]'>
              To continue, kindly enter the verification code sent to your email
              address
            </p>
            <div className='grid grid-cols-7 gap-2'>
              {otpFields[0]}
              {otpFields[1]}
              {otpFields[2]}
              <div className='flex items-center w-10'>
                <Divider direction='horizontal' length='full' />
              </div>
              {otpFields[3]}
              {otpFields[4]}
              {otpFields[5]}
            </div>
            <div className='w-full flex justify-center mt-4'>
              <Button
                type='submit'
                className='font-dm-sans text-center bg-[#198841] text-[14px] text-white px-4 py-6 w-full cursor-pointer'>
                Continue
              </Button>
            </div>
            <Link to='/' className='mt-5'>
              <p className='text-center font-dm-sans text-[16px] font-normal text-black'>
                Didn't get the code?{" "}
                <span className='text-black font-semibold'>Resend Code</span>
              </p>
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Verification;
