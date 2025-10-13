/** @format */

import InputField from "@/components/form/input-field";
import { MButton } from "@/components/buttons/m-button";
import { useAuth } from "@/hooks/useAuth";
import { Form, FormField } from "@/components/ui/form";

const Login = () => {
  const { form, mutation, onSubmit } = useAuth();

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
              <MButton
                variant='primary'
                size='lg'
                fullWidth
                className='font-dm-sans text-center bg-[#198841] text-[14px] text-white px-4 py-6 w-full cursor-pointer'
                disabled={mutation.isPending}
                isLoading={mutation.isPending}
                loadingText='Logging in...'
                onClick={() => form.handleSubmit(onSubmit)()}>
                Login
              </MButton>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Login;
