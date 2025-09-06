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

const UserDetails = () => {
  const form = useForm<z.infer<typeof userDetails>>({
    resolver: zodResolver(userDetails),
    defaultValues: {
      country: "Nigeria",
      gender: "Male",
      date_of_birth: "",
      referred_by: "@chimamanda",
    },
  });

  const bioTexts = [
    {
      title: "My Purpose",
      text: "To continuously grow my skills and mindset, turning daily habits into lasting personal and professional achievements.",
    },
    {
      title: "My Vision",
      text: "To become a leader who inspires others through consistent action, impactful goals, and meaningful connections.",
    },
    {
      title: "My Mission",
      text: "To set clear, actionable goals each day, track progress with discipline, and collaborate with a community that holds me accountable.",
    },
  ];

  return (
    <div>
      <Form {...form}>
        <form className='space-y-4'>
          <div className='flex flex-col gap-2 border border-[#EBEEF2] rounded-[12px] p-4'>
            <p className='font-dm-sans text-[16px] font-semibold text-[#4B4B4B]'>
              Basic Information
            </p>
            <div className='flex flex-col gap-2'>
              <div className='grid grid-cols-2 gap-2 w-full'>
                <FormField
                  control={form.control}
                  name='country'
                  render={({ field }) => (
                    <SelectField
                      label='Country'
                      options={countryOptions}
                      value={field.value}
                      onChange={(value) => field.onChange(value)}
                      error={form.formState.errors.country?.message}
                      required
                    />
                  )}
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
              <div className='grid grid-cols-2 gap-2 w-full'>
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
