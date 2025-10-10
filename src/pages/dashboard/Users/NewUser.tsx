/** @format */

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newUserSchema } from "@/utils/form-schema";
import { useNavigate } from "react-router-dom";
import { Form, FormField } from "@/components/ui/form";
import InputField from "@/components/form/input-field";
import { Button } from "@/components/ui/button";
import { SelectField } from "@/components/form/select-field";
import { countryOptions, genderOptions } from "./constants/data";
import type { NewUserFormData } from "@/types";
import { Card } from "@/components/ui/card";
import Icons from "@/constants/icons";
import { InnerPageContainer } from "@/components/innerpage-container";
import ApiRoutes from "@/services/api/api-routes";
import { responseHandler } from "@/services/response";
import { toast } from "sonner";
import Mutation from "@/services/query/mutation";
import { DatePicker } from "@/components/date-picker";

const NewUser = () => {
  const navigate = useNavigate();
  const { mutation } = Mutation();
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

  const onSubmit = async (data: NewUserFormData) => {
    mutation.mutate(
      {
        url: ApiRoutes.CreateUser,
        data: data,
        requestType: "post",
      },
      responseHandler({
        //eslint-disable-next-line
        onSuccess: (response: any) => {
          console.log(response, "create blog");
          navigate(-1);
        },
        //eslint-disable-next-line
        onError: (error: any) => {
          console.log(error, "create blog");
          toast.error(error || "Something went wrong");
        },
      })
    );
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
                  <>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Date of Birth
                    </label>
                    <DatePicker
                      value={field.value ? new Date(field.value) : new Date()}
                      onChange={(date) => {
                        if (date) {
                          const year = date.getFullYear();
                          const month = String(date.getMonth() + 1).padStart(
                            2,
                            "0"
                          );
                          const day = String(date.getDate()).padStart(2, "0");
                          field.onChange(`${year}-${month}-${day}`);
                        } else {
                          const today = new Date();
                          const year = today.getFullYear();
                          const month = String(today.getMonth() + 1).padStart(
                            2,
                            "0"
                          );
                          const day = String(today.getDate()).padStart(2, "0");
                          field.onChange(`${year}-${month}-${day}`);
                        }
                      }}
                    />
                  </>
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
