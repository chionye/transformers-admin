/** @format */
/** @format */

import { Form, FormField } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";
import Icons from "@/constants/icons";
import { Input } from "./ui/input";
import { searchSchema } from "@/utils/form-schema";

const SearchField = ({
  onSubmit,
  placeholder = "Enter search term...",
}: {
  onSubmit: (data: z.infer<typeof searchSchema>) => void;
  placeholder?: string;
}) => {
  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      search: "",
    },
  });

  return (
    <div className='w-full'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name='search'
            render={({ field }) => (
              <div className='flex flex-row items-center bg-[#F2F4F7] border border-[#E9E9E9] w-full py-1 px-1.5 rounded-[8px]'>
                <div className='w-fit'>
                  <Icons.search width='16' height='16' color='#989898' />
                </div>
                <div className='w-full'>
                  <Input
                    placeholder={placeholder}
                    className='border-0 rounded-[8px] px-4 outline-0 bg-transparent focus-visible:ring-0 w-full shadow-none text-[16px]'
                    type='text'
                    {...field}
                  />
                </div>
              </div>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default SearchField;
