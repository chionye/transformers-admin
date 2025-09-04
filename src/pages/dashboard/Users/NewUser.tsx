/** @format */

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newUserSchema } from "@/utils/form-schema";
import type z from "zod";
import { useNavigate } from "react-router-dom";
import { Form, FormField } from "@/components/ui/form";
import InputField from "@/components/form/input-field";
import { Button } from "@/components/ui/button";
import { SelectField } from "@/components/form/select-field";
import { countryOptions, genderOptions } from "./constants/data";
import { DatePickerField } from "@/components/form/datepicker-field";
import type { NewUserFormData } from "@/types";
import { Card } from "@/components/ui/card";
import Icons from "@/constants/icons";
import { InnerPageContainer } from "@/components/innerpage-container";

const NewUser = () => {
  const navigate = useNavigate();
  const form = useForm<NewUserFormData>({
    resolver: zodResolver(newUserSchema),
    defaultValues: {
      name: "",
      email: "",
      username: "",
      country: "",
      gender: "",
      date_of_birth: "",
    },
  });

  const onSubmit = (data: z.infer<typeof newUserSchema>) => {
    console.log(data);
    navigate("/dashboard/admin/home");
  };
  return (
    <InnerPageContainer title='Back to Users'>
      <Card className='w-full px-5 shadow'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='w-full flex gap-2 flex-col p-5'>
              <p className='font-dm-sans text-xl font-bold text-[#1E1E1E]'>
                Add a New User
              </p>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <InputField
                    placeholder='John Doe'
                    label='Full Name'
                    type='text'
                    {...field}
                  />
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <InputField
                    placeholder='john.doe@gmail.com'
                    label='Email'
                    type='email'
                    {...field}
                  />
                )}
              />
              <FormField
                control={form.control}
                name='username'
                render={({ field }) => (
                  <InputField
                    placeholder='john.doe'
                    label='Username'
                    type='text'
                    isLeftIcon={<Icons.atSign />}
                    {...field}
                  />
                )}
              />
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
              <div className='w-full flex justify-start mt-4'>
                <Button className='font-dm-sans text-center bg-[#198841] text-[14px] text-white px-4 py-6 w-fit cursor-pointer'>
                  Add User
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </Card>
    </InnerPageContainer>
  );
};

export default NewUser;
