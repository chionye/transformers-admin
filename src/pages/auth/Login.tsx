/** @format */

import { useForm } from "react-hook-form";
import InputField from "@/components/form/input-field";
import { LoginSchema } from "@/utils/form-schema";
import type z from "zod";
import { Form, FormField } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Login = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    console.log(data);
    navigate("/dashboard/admin/home");
  };

  return (
    <div className='w-full px-5 py-10 shadow'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='w-full flex gap-2 flex-col p-5'>
            <p className='text-center font-dm-sans text-2xl font-semibold text-black'>
              Login
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
            <FormField
              name='password'
              control={form.control}
              render={({ field }) => (
                <InputField
                  placeholder='Password'
                  label='Password'
                  type='password'
                  forgotLink='/auth/forgot-password'
                  isHiddenInput
                  {...field}
                />
              )}
            />
            <div className='w-full flex justify-center mt-4'>
              <Button className='font-dm-sans text-center bg-[#198841] text-[14px] text-white px-4 py-6 w-full cursor-pointer'>
                Login
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Login;
