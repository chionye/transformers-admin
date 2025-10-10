/** @format */

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { userDetails } from "@/utils/form-schema";
import { Form, FormField } from "@/components/ui/form";
import InputField from "@/components/form/input-field";
import { SelectField } from "@/components/form/select-field";
import { countryOptions, genderOptions } from "../constants/data";
import { DatePickerField } from "@/components/form/datepicker-field";
import type { UserProfileProp } from "@/types";
import { useEffect, useMemo } from "react";

const UserDetails = ({ userProfile }: { userProfile: UserProfileProp }) => {
  const form = useForm<z.infer<typeof userDetails>>({
    resolver: zodResolver(userDetails),
    defaultValues: {
      country: "",
      gender: "",
      date_of_birth: "",
      referred_by: "",
    },
  });

  useEffect(() => {
    if (userProfile?.profile) {
      form.reset({
        country: userProfile.profile.country || "",
        gender: userProfile.profile.gender || "",
        date_of_birth: userProfile.profile.dob || "",
        referred_by: userProfile.profile.referralCode || "",
      });
    }
  }, [userProfile, form]);

  const bioTexts = useMemo(() => [
    {
      title: "My Purpose",
      text: userProfile.profile?.purpose || "User purpose unavailable",
    },
    {
      title: "My Vision",
      text: userProfile.profile?.vision || "User vision unavailable",
    },
    {
      title: "My Mission",
      text: userProfile.profile?.mission || "User mission unavailable",
    },
  ], [userProfile.profile]);

  return (
    <div>
      <Form {...form}>
        <form className='space-y-4'>
          <div className='flex flex-col gap-2 border border-[#EBEEF2] rounded-[12px] p-4'>
            <p className='font-dm-sans text-[16px] font-semibold text-[#4B4B4B]'>
              Basic Information
            </p>
            <div className='flex flex-col gap-4'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
                <FormField
                  control={form.control}
                  name='country'
                  render={({ field }) => {
                    return (
                      <SelectField
                        label='Country'
                        options={countryOptions}
                        value={field.value}
                        onChange={(value) => field.onChange(value)}
                        error={form.formState.errors.country?.message}
                        required
                      />
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name='date_of_birth'
                  render={({ field }) => (
                    <DatePickerField
                      label='Date of Birth'
                      placeholder='Select date of birth'
                      field={field}
                      error={form.formState.errors.date_of_birth?.message}
                      required
                    />
                  )}
                />
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
                <FormField
                  control={form.control}
                  name='gender'
                  render={({ field }) => (
                    <SelectField
                      label='Gender'
                      options={genderOptions}
                      value={field.value}
                      onChange={(value) => field.onChange(value)}
                      error={form.formState.errors.gender?.message}
                      required
                    />
                  )}
                />
                <FormField
                  control={form.control}
                  name='referred_by'
                  render={({ field }) => (
                    <InputField
                      placeholder='Referred By'
                      label='Referred By'
                      type='text'
                      {...field}
                    />
                  )}
                />
              </div>
            </div>
          </div>
        </form>
      </Form>
      <div className='flex flex-col border border-[#EBEEF2] rounded-[12px] p-4 mt-5'>
        <p className='font-dm-sans text-[16px] font-semibold text-[#4B4B4B]'>
          Bio
        </p>
        {bioTexts.map((bioText, index) => (
          <div
            key={index}
            className='flex flex-col gap-2 bg-[#F6F8F9] border border-[#EBEEF2] rounded-[12px] p-4 mt-5'>
            <p className='font-dm-sans text-[16px] font-semibold text-[#4B4B4B]'>
              {bioText.title}
            </p>
            <p className='font-dm-sans text-[16px] font-normal text-[#1E1E1E]'>
              {bioText.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDetails;
