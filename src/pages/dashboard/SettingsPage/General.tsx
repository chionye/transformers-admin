/** @format */

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { generalSettings } from "@/utils/form-schema";
import { Card } from "@/components/ui/card";
import Mutation from "@/services/query/mutation";
import { responseHandler } from "@/services/response";
import { toast } from "sonner";
import ApiRoutes from "@/services/api/api-routes";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import PageTitle from "@/components/page-title";
import { useQuery } from "@tanstack/react-query";
import type { UserApiResponse } from "@/types";
import { Requests } from "@/services/api";

type GeneralSettingsFormData = z.infer<typeof generalSettings>;

// Main Component
const General = () => {
  const { mutation } = Mutation();
  const [settings, setSettings] = useState<GeneralSettingsFormData>({
    fullName: "",
    email: "",
    role: "",
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<GeneralSettingsFormData>({
    resolver: zodResolver(generalSettings),
    defaultValues: {
      fullName: "",
      email: "",
      role: "",
    },
  });

  const userData = useQuery<UserApiResponse>({
    queryKey: [`admin-data`],
    queryFn: async (): Promise<UserApiResponse> => {
      const response = await Requests.get(ApiRoutes.CreateUser);
      return response.data as unknown as UserApiResponse;
    },
  });

  useEffect(() => {
    if (userData.data?.user) {
      const data = userData.data.user;
      setSettings((prev) => ({
        ...prev,
        fullName: data.profile?.fullName ?? "",
        email: data.profile?.email ?? "",
        role: data.profile?.role ?? "",
      }));
    }
  }, [userData.data]);

  const onSubmit = async (data: GeneralSettingsFormData) => {
    mutation.mutate(
      {
        url: ApiRoutes.CreateUser,
        data: data,
        requestType: "patch",
      },
      responseHandler({
        //eslint-disable-next-line
        onSuccess: (response: any) => {
          console.log(response, "update general settings");
          toast.success("Settings updated successfully");
        },
        //eslint-disable-next-line
        onError: (error: any) => {
          console.log(error, "update general settings");
          toast.error(error || "Something went wrong");
        },
      })
    );
  };

  useEffect(() => {
    if (settings) {
      setValue("fullName", settings.fullName);
      setValue("email", settings.email);
      setValue("role", settings.role);
    }
  }, [settings]);

  return (
    <div className='w-full flex flex-col gap-4'>
      <PageTitle
        title='General Settings'
        subtitle='Customize platform settings and user preferences.'
      />
      <Card className='px-4 py-8'>
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          <div className='space-y-6'>
            {/* Full Name */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Full Name
              </label>
              <input
                {...register("fullName")}
                type='text'
                placeholder='Enter full name'
                className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#198841] focus:border-transparent outline-none transition-all'
              />
              {errors.fullName && (
                <p className='text-sm text-red-600 mt-1'>
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Email Address
              </label>
              <input
                {...register("email")}
                type='email'
                placeholder='Enter email address'
                className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#198841] focus:border-transparent outline-none transition-all'
              />
              {errors.email && (
                <p className='text-sm text-red-600 mt-1'>
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Role */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Role
              </label>
              <input
                {...register("role")}
                type='text'
                placeholder='Enter role'
                className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#198841] focus:border-transparent outline-none transition-all'
              />
              {errors.role && (
                <p className='text-sm text-red-600 mt-1'>
                  {errors.role.message}
                </p>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className='flex gap-4 w-fit'>
            <Button
              type='submit'
              disabled={mutation.isPending}
              className='flex-1 bg-[#198841] w-fit text-white hover:bg-[#198841]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center'>
              {mutation.isPending ? (
                <>
                  <Loader2 className='w-5 h-5 mr-2 animate-spin' />
                  Updating...
                </>
              ) : (
                "Update Settings"
              )}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default General;
