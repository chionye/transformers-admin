/** @format */

import { useForm } from "react-hook-form";
import InputField from "@/components/form/input-field";
import { ForgotSchema } from "@/utils/form-schema";
import type z from "zod";
import { Form, FormField } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Forgot = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof ForgotSchema>>({
    resolver: zodResolver(ForgotSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: z.infer<typeof ForgotSchema>) => {
    console.log(data);
    navigate("/dashboard/admin/home");
  };

  return (
    <div className='w-full px-5 py-10 shadow'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='w-full flex gap-2 flex-col p-5'>
            <p className='text-center font-dm-sans text-2xl font-semibold text-black'>
              Reset Password
            </p>
            <p className='font-dm-sans text-[14px] font-normal text-[#686868]'>
              Enter your email address to get a link to reset your Password.
            </p>
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
            <div className='w-full flex justify-center mt-4'>
              <Button className='font-dm-sans text-center bg-[#198841] text-[14px] text-white px-4 py-6 w-full cursor-pointer'>
                Send link
              </Button>
            </div>
            <Link to='/' className='mt-5'>
              <p className='text-center font-dm-sans text-[16px] font-medium text-black'>
                Back to Login
              </p>
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Forgot;
